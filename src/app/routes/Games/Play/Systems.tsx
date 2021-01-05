import { Button, Descriptions, Space, Table } from 'antd';
import React, { useContext } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { FogOfWarSystemData } from '../../../../common/game-state';
import { GameContext } from '../../../contexts/game';

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

function ViewSystem(props: { system: FogOfWarSystemData }): JSX.Element {
  const { system } = props;
  // TODO: Consider adding a smaller preview of the system on the map?
  return (
    <>
      <Space style={{ float: 'right', paddingTop: '5px' }}>
        <Button disabled>Launch Fleet</Button>
      </Space>
      <h2>{system.name}</h2>
      <Descriptions title="Survey" bordered>
        <Descriptions.Item label="Position">
          ({system.position.join(', ')})
        </Descriptions.Item>
        <Descriptions.Item label="Status">
          {system.status || 'Unknown'}
        </Descriptions.Item>
        <Descriptions.Item label="Planets">10</Descriptions.Item>
      </Descriptions>
      <br />
      <Descriptions title="Production" bordered></Descriptions>
      <br />
      <Descriptions title="Orbiting" bordered></Descriptions>
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
            return <ViewSystem system={system} />;
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
