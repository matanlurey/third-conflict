import { Tabs } from 'antd';
import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { FogOfWarGameData } from '../../../common/game-state';
import { GameHeader } from '../../ui/Header';
import { MapPreview } from '../../ui/Map';
import { SystemsTab } from './Play/Systems';

export function PlayGame(props: {
  state: FogOfWarGameData;
  onEndTurn: () => Promise<void>;
  onResign: () => Promise<void>;
}): JSX.Element {
  const { state } = props;
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
          if (route && route?.tab !== newTab) {
            history.replace(`/games/${route.name}/${newTab}`);
          }
        }}
      >
        <Tabs.TabPane tab="Overview" key="">
          <MapPreview
            systems={state.systems}
            onSelect={(system) => {
              history.push(`/games/${route?.name}/systems/${system.name}`);
            }}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Reports" key="reports" disabled={true} />
        <Tabs.TabPane tab="Systems" key="systems">
          <SystemsTab gameName={state.name} systems={state.systems} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Fleets" key="fleets" disabled={true} />
      </Tabs>
    </>
  );
}
