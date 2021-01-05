import { Table } from 'antd';
import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitFleet } from '../../../../common/game-state';
import { GameContext } from '../../../contexts/game';

interface RenderFleetRow {
  readonly key: string;
  readonly destination: string;
  readonly source: string;
  readonly eta: string;
}

export function FleetsTab(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const game = useContext(GameContext)!;
  const data: RenderFleetRow[] = game.fleets.map((f) => {
    const fleet = new TransitFleet(f);
    return {
      key: f.guid,
      destination: f.destination,
      source: f.source,
      eta: `${fleet.computeEtaInTurns(game).toFixed(1)}`,
    };
  });
  return (
    <>
      <Switch>
        <Route exact path="/games/:name/fleets">
          <Table
            columns={[
              {
                title: 'Destination',
                dataIndex: 'destination',
                key: 'destination',
              },
              {
                title: 'Source',
                dataIndex: 'source',
                key: 'source',
              },
              {
                title: 'Strength',
                dataIndex: 'strength',
                key: 'strength',
              },
              {
                title: 'ETA',
                dataIndex: 'eta',
                key: 'eta',
              },
            ]}
            dataSource={data}
            pagination={false}
            locale={{ emptyText: 'You have no active fleets or scouts.' }}
          />
        </Route>
      </Switch>
    </>
  );
}
