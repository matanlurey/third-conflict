import { Tabs } from 'antd';
import React, { useContext } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { GameContext } from '../../contexts/game';
import { GameHeader } from '../../ui/Header';
import { MapPreview } from '../../ui/Map';
import { FleetsTab } from './Play/Fleets';
import { SystemsTab } from './Play/Systems';

export function PlayGame(props: {
  onEndTurn: () => Promise<void>;
  onResign: () => Promise<void>;
}): JSX.Element {
  const state = useContext(GameContext);
  if (!state) {
    throw new Error(`No GameContext provided.`);
  }
  const route = useRouteMatch<{ name: string; tab: string }>(
    '/games/:name/:tab?',
  )?.params;
  const history = useHistory();
  return (
    <>
      <GameHeader
        name={state.name}
        players={state.players}
        systems={state.systems.length}
        endedTurn={state.endedTurn}
        onEndTurn={props.onEndTurn}
        onResign={props.onResign}
      />
      <Tabs
        activeKey={route?.tab || ''}
        onTabClick={(newTab) => {
          if (route) {
            history.replace(`/games/${route.name}/${newTab}`);
          }
        }}
      >
        <Tabs.TabPane tab="Overview" key="">
          <MapPreview
            systems={state.systems}
            onSelect={(system) => {
              history.push(
                `/games/${route?.name}/systems/${system.name.toLowerCase()}`,
              );
            }}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Reports" key="reports" disabled={true} />
        <Tabs.TabPane tab="Systems" key="systems">
          <SystemsTab />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Fleets" key="fleets">
          <FleetsTab />
        </Tabs.TabPane>
      </Tabs>
    </>
  );
}
