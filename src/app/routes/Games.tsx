import { LaptopOutlined, PlusOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber, List, Radio, Table } from 'antd';
import React, { useContext, useEffect } from 'react';
import { Link, Route, Switch, useHistory, useParams } from 'react-router-dom';
import { GameLobbyData } from '../../common/game-lobby';
import { NameGenerator } from '../../common/name-generator';
import { GlobalAuthContext } from '../contexts/auth';
import { LocalStorageContext } from '../contexts/storage';
import './Games.scss';

function CreateGame(): JSX.Element {
  const [form] = Form.useForm<GameLobbyData>();
  const { replace } = useHistory();
  const storage = useContext(LocalStorageContext);
  useEffect(() => {
    form.setFieldsValue({
      name: new NameGenerator().next(),
      players: 2,
      online: false,
    });
  }, []);
  return (
    <>
      <h1>Create a Game</h1>
      <p>
        Currently, you can create <strong>local</strong> (offline) games with AI
        opponents. In future builds, once logged in with{' '}
        <strong>Discord</strong>, you will be able to create and play online
        games.
      </p>
      <Form
        labelCol={{ span: 1 }}
        wrapperCol={{ span: 4 }}
        form={form}
        onFinish={(values) => {
          storage.add(values);
          replace(`/games/${values.name}`);
        }}
      >
        <Form.Item
          name="name"
          label="Name"
          extra={<>This name is just used for reference only.</>}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="players"
          label="Players"
          extra={<>2-4 players currently supported.</>}
        >
          <InputNumber min={2} max={4} />
        </Form.Item>
        <Form.Item
          name="online"
          label="Connectivity"
          extra={<>Local games are versus AI and played offline.</>}
        >
          <Radio.Group>
            <Radio.Button value={false}>Local</Radio.Button>
            <Radio.Button value={true} disabled>
              Online
            </Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 5 }}>
          <Button type="primary" style={{ width: '100%' }} htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

function ViewGameOrLobby(): JSX.Element {
  const params = useParams<{ readonly name: string }>();
  const storage = useContext(LocalStorageContext);
  const localLobby = storage.get(params.name);
  const { goBack, replace } = useHistory();
  if (!localLobby) {
    return (
      <>
        <h1>
          Game <code>{params.name}</code> not found.
        </h1>
        <p>Either this game has been deleted, or the link is expired.</p>
        <Button onClick={goBack}>Go Back</Button>
      </>
    );
  } else {
    const aiPlayers = new Array(localLobby.players - 1).fill('');
    return (
      <>
        <h1>
          Lobby for <code>{params.name}</code>
        </h1>
        <List>
          <List.Item>
            <List.Item.Meta
              avatar={<UserOutlined />}
              title={'Human'}
              description={'Ready'}
            />
          </List.Item>
          {aiPlayers.map((_, i) => {
            return (
              <List.Item key={i}>
                <List.Item.Meta
                  avatar={<LaptopOutlined />}
                  title={`AI: ${i + 1}`}
                  description={'Ready'}
                />
              </List.Item>
            );
          })}
        </List>
        <p className="games-buttons">
          <Button type="primary" disabled>
            Start
          </Button>
          <Button
            danger
            onClick={() => {
              storage.remove(localLobby.name);
              replace('/games');
            }}
          >
            Delete
          </Button>
        </p>
      </>
    );
  }
}

function ListGames(): JSX.Element {
  const context = useContext(GlobalAuthContext);
  const storage = useContext(LocalStorageContext);
  const { push } = useHistory();
  return (
    <>
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
          { title: 'Name', dataIndex: 'name' },
          { title: 'Players', dataIndex: 'players' },
          { title: 'Status', dataIndex: 'status' },
        ]}
        dataSource={storage.lobbies.map((v) => {
          return {
            name: <Link to={`/games/${v.name}`}>{v.name}</Link>,
            key: v.name,
            players: v.players,
            status: 'Lobby (Host)',
          };
        })}
        locale={{ emptyText: 'You are not in any games.' }}
        pagination={false}
      />
    </>
  );
}

export function GamesRoute(): JSX.Element {
  return (
    <>
      <Switch>
        <Route path="/games/create">
          <CreateGame />
        </Route>
        <Route path="/games/join">Join</Route>
        <Route path="/games/:name">
          <ViewGameOrLobby />
        </Route>
        <Route exact path="/games" component={ListGames} />
      </Switch>
    </>
  );
}
