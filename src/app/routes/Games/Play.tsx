import { Tabs } from 'antd';
import React from 'react';
import { FogOfWarGameData } from '../../../common/game-state';
import { GameHeader } from '../../ui/Header';
import { MapPreview } from '../../ui/Map';

export function PlayGame(props: {
  state: FogOfWarGameData;
  onEndTurn: () => Promise<void>;
  onResign: () => Promise<void>;
}): JSX.Element {
  const { state } = props;
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
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Overview" key="1">
          <MapPreview systems={state.systems} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Reports" key="2"></Tabs.TabPane>
        <Tabs.TabPane tab="Systems" key="3"></Tabs.TabPane>
        <Tabs.TabPane tab="Fleets" key="4"></Tabs.TabPane>
      </Tabs>
    </>
  );
}
