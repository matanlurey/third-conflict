import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber, Radio, Table } from 'antd';
import React, { useContext } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { GlobalAuthContext } from '../contexts/auth';
import './Games.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GamesRouteProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function GamesRoute(props: GamesRouteProps): JSX.Element {
  const context = useContext(GlobalAuthContext);
  const { push } = useHistory();
  return (
    <>
      <Switch>
        <Route path="/games/create">
          <h1>Create a Game</h1>
          <p>
            Currently, you can create <strong>local</strong> (offline) games
            with AI opponents. In future builds, once logged in with{' '}
            <strong>Discord</strong>, you will be able to create and play online
            games.
          </p>
          <Form labelCol={{ span: 1 }} wrapperCol={{ span: 4 }}>
            <Form.Item label="Name">
              <Input defaultValue="mysterious-snail-24" />
            </Form.Item>
            <Form.Item label="Players">
              <InputNumber defaultValue={2} min={2} max={4} />
            </Form.Item>
            <Form.Item label="Connectivity">
              <Radio.Group defaultValue={false}>
                <Radio.Button value={false}>Local</Radio.Button>
                <Radio.Button value={true} disabled>
                  Online
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item wrapperCol={{ span: 5 }}>
              <Button type="primary" style={{ width: '100%' }}>
                Create
              </Button>
            </Form.Item>
          </Form>
        </Route>
        <Route path="/games/join">Join</Route>
        <Route path="/games">
          <h1>Games</h1>
          <p className="games-buttons">
            <Button
              icon={<PlusOutlined />}
              type="dashed"
              disabled={!context}
              onClick={() => {
                push('/games/create');
              }}
            >
              Create Game
            </Button>

            <Button
              icon={<PlusOutlined />}
              type="dashed"
              disabled
              onClick={() => {
                push('/games/join');
              }}
            >
              Join Game
            </Button>
          </p>
          <Table
            columns={[
              { title: 'Name' },
              { title: 'Players' },
              { title: 'Status' },
            ]}
            locale={{ emptyText: 'You are not in any games.' }}
          />
        </Route>
      </Switch>
    </>
  );
}
