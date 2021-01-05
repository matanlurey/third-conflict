import { PlusOutlined } from '@ant-design/icons';
import { Badge, Button, Card, Descriptions, List, Space, Table } from 'antd';
import React, { useContext } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { FogOfWarSystemData } from '../../../../common/game-state';
import { GameContext, SystemContext } from '../../../contexts/game';
import { AsyncButton } from '../../../ui/AsyncButton';
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
  const system = useContext(SystemContext)!;
  // TODO: Consider adding a smaller preview of the system on the map?
  return (
    <>
      <Space style={{ float: 'right', paddingTop: '5px' }}>
        {system.status === 'Self' && (
          <>
            <Button type="dashed">Launch Fleet</Button>
          </>
        )}
        {system.status !== 'Self' && (
          <>
            <Button type="dashed" disabled>
              Attack
            </Button>
            <AsyncButton
              type="dashed"
              onClick={async () => {
                // Intentionally left blank.
              }}
            >
              Scout
            </AsyncButton>
          </>
        )}
      </Space>
      <h2>{system.name}</h2>
      <Descriptions
        title="Orbiting"
        bordered
        size="small"
        column={2}
        layout="vertical"
        style={{ marginBottom: '10px' }}
      >
        <Descriptions.Item label="Factories">
          {system.factories || '?'}
        </Descriptions.Item>
        <Descriptions.Item label="Warships">
          {system.orbit.warships || '?'}
        </Descriptions.Item>
        <Descriptions.Item label="Transports">
          {system.orbit.transports || '?'}
        </Descriptions.Item>
        <Descriptions.Item label="Troops">
          {system.orbit.troops || '?'}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="Planets" extra={<>Morale, Troops, Recruitment.</>} />
      {!system.planets && <p>No information available.</p>}
      {system.planets && (
        <List
          grid={{ gutter: 8, column: 4 }}
          className="planet-grid"
          dataSource={system.planets}
          renderItem={(item) => (
            <List.Item>
              <Card>
                <Badge count={1} style={{ backgroundColor: 'grey' }}>
                  <img src={`/images/planets/${item.recruit}.png`} />
                </Badge>
                <br />
                <div className="troops">
                  <div>{item.troops}</div>
                  <div className="recruit">
                    <PlusOutlined /> {item.recruit}
                  </div>
                </div>
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
