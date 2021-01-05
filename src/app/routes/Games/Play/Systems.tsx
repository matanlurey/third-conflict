import { Button, Card, Descriptions, List, Space, Table } from 'antd';
import React, { useContext } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { FogOfWarSystemData } from '../../../../common/game-state';
import { GameContext, SystemContext } from '../../../contexts/game';
import './Systems.scss';

interface RenderSystemRow {
  readonly name: string;
  readonly key: string;
  readonly status: string;
}

function renderSystem(input: FogOfWarSystemData): RenderSystemRow {
  return {
    name: input.name,
    key: input.name,
    status: input.status || 'Unknown',
  };
}

function ViewSystem(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const game = useContext(GameContext)!;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const system = useContext(SystemContext)!;
  const canReinforce =
    game.systems.filter((x) => {
      return x.status === 'Self';
    }).length > 1;
  // TODO: Consider adding a smaller preview of the system on the map?
  return (
    <>
      <Space style={{ float: 'right', paddingTop: '5px' }}>
        {system.status === 'Self' && (
          <>
            <Button type="dashed">Launch Fleet</Button>
            <Button type="dashed" disabled={!canReinforce}>
              Reinforce System
            </Button>
          </>
        )}
        {system.status !== 'Self' && (
          <Button type="dashed">Attack System</Button>
        )}
      </Space>
      <h2>{system.name}</h2>
      <Descriptions
        title="Orbiting"
        bordered
        size="small"
        column={2}
        layout="vertical"
        style={{ marginBottom: '5px' }}
      >
        <Descriptions.Item label="Factories">
          {system.factories || '?'}
        </Descriptions.Item>
        <Descriptions.Item label="Warships">
          {system.fleet.warships || '?'}
        </Descriptions.Item>
        <Descriptions.Item label="Transports">
          {system.fleet.transports || '?'}
        </Descriptions.Item>
        <Descriptions.Item label="Troops">
          {system.fleet.troops || '?'}
        </Descriptions.Item>
      </Descriptions>
      <h3>Planets</h3>
      {!system.planets && <p>No information available.</p>}
      {system.planets && (
        <List
          grid={{ gutter: 8, column: 4 }}
          className="planet-grid"
          dataSource={system.planets}
          renderItem={(item) => (
            <List.Item>
              <Card>
                <img src={`/images/planets/${item.recruit}.png`} />
                <br />
                {item.troops} Troops
              </Card>
            </List.Item>
          )}
        />
      )}
    </>
  );
}

export function SystemsTab(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const game = useContext(GameContext)!;
  return (
    <>
      <Switch>
        <Route
          exact
          path="/games/:name/systems/:system"
          render={(routeProps) => {
            const name = routeProps.match.params['system'] as string;
            let system!: FogOfWarSystemData;
            for (const s of game.systems) {
              if (s.name.toLowerCase() === name) {
                system = s;
                break;
              }
            }
            return (
              <SystemContext.Provider value={system}>
                <ViewSystem />
              </SystemContext.Provider>
            );
          }}
        />
        <Route path="/games/:name/systems">
          <Table
            columns={[
              {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                sorter: (a, b) => (a.name > b.name ? 1 : -1),
                defaultSortOrder: 'ascend',
                render: (name) => (
                  <Link
                    to={`/games/${game.name}/systems/${name.toLowerCase()}`}
                  >
                    {name}
                  </Link>
                ),
              },
              {
                title: 'HUD',
                dataIndex: 'status',
                key: 'status',
                filters: [
                  {
                    text: 'Friendly',
                    value: 'Self',
                  },
                ],
                defaultFilteredValue: ['Self'],
                filterMultiple: true,
                onFilter: (value, record) => record.status === value,
              },
            ]}
            dataSource={game.systems.map(renderSystem)}
            pagination={false}
          />
        </Route>
      </Switch>
    </>
  );
}
