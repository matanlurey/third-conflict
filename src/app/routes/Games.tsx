import { LaptopOutlined, PlusOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber, List, Radio, Table } from 'antd';
import Prando from 'prando';
import React, { useContext, useEffect, useState } from 'react';
import { Link, Route, Switch, useHistory, useParams } from 'react-router-dom';
import { GameLobbyData } from '../../common/game-lobby';
import { PointData } from '../../common/game-state';
import { PoissonMapGenerator } from '../../common/map-generator';
import { NameGenerator } from '../../common/name-generator';
import { PoissonDiskSampler } from '../../common/poisson-disk';
import { GlobalAuthContext } from '../contexts/auth';
import { LocalStorageContext } from '../contexts/storage';
import { Map } from '../ui/Map';
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
          storage.set({ ...values, kind: 'Lobby' });
          replace(`/games/${values.name}`);
        }}
      >
        <Form.Item
          name="name"
          label="Name"
          extra={<>This name is just used for reference only.</>}
        >
          <Input maxLength={30} />
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

function ViewLobby(props: GameLobbyData): JSX.Element {
  const storage = useContext(LocalStorageContext);
  const { replace } = useHistory();
  const aiPlayers = new Array(props.players - 1).fill('');
  const [seed, setSeed] = useState(() => new Prando().nextString(10));
  const [systems, setSystems] = useState(Math.ceil(props.players * 3));
  const [preview, setPreview] = useState<
    { position: PointData; name: string }[]
  >([]);
  useEffect(() => {
    const prando = new Prando(seed);
    const ratio = systems / 26;
    const sampler = new PoissonDiskSampler(
      [Math.ceil(50 * ratio), Math.ceil(30 * ratio)],
      4,
      undefined,
      prando,
    );
    const generator = new PoissonMapGenerator(sampler, prando);
    setPreview(generator.generateMap(systems));
  }, [seed, systems]);
  return (
    <>
      <h3>Players</h3>
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
      <h3>Settings</h3>
      <Form labelCol={{ span: 1 }} wrapperCol={{ span: 4 }}>
        <Form.Item
          label="Name"
          extra={<>Used for identifying the game only.</>}
        >
          <Input readOnly minLength={10} maxLength={20} value={props.name} />
        </Form.Item>
        <Form.Item
          label="Seed"
          extra={<>Used for procedural generation of systems.</>}
        >
          <Input
            readOnly
            minLength={10}
            maxLength={20}
            value={seed}
            onChange={(v) => setSeed(v.target.value)}
          />
        </Form.Item>
        <Form.Item label="Preview">
          <Map systems={preview} />
        </Form.Item>
        <Form.Item
          label="Maximum Systems"
          extra={<>A recommended number is 3 systems per player.</>}
        >
          <InputNumber
            min={props.players}
            max={26}
            value={systems}
            onChange={(v) => setSystems(parseInt(`${v}`))}
          />
        </Form.Item>
        <p className="games-buttons">
          <Button type="primary" disabled htmlType="submit">
            Start
          </Button>
          <Button
            danger
            onClick={() => {
              storage.remove(props.name);
              replace('/games');
            }}
          >
            Delete
          </Button>
        </p>
      </Form>
    </>
  );
}

function ViewGameOrLobby(): JSX.Element {
  const params = useParams<{ readonly name: string }>();
  const storage = useContext(LocalStorageContext);
  const localGame = storage.get(params.name);
  const { goBack } = useHistory();
  if (!localGame) {
    return (
      <>
        <h1>
          Game <code>{params.name}</code> not found.
        </h1>
        <p>Either this game has been deleted, or the link is expired.</p>
        <Button onClick={goBack}>Go Back</Button>
      </>
    );
  } else if (localGame.kind === 'Lobby') {
    return <ViewLobby {...localGame} />;
  } else {
    return (
      <>
        Game for <code>{params.name}</code>
      </>
    );
  }
}

function ListGames(): JSX.Element {
  const context = useContext(GlobalAuthContext);
  const storage = useContext(LocalStorageContext);
  const { push } = useHistory();
  const dataSource = storage.games
    .sort((a, b) => a.lastUpdate - b.lastUpdate)
    .map((v) => {
      return {
        name: <Link to={`/games/${v.name}`}>{v.name}</Link>,
        key: v.name,
        players: v.players,
        status: v.kind === 'Lobby' && !v.online ? 'Lobby (Host)' : 'Unknown',
      };
    });
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
        dataSource={dataSource}
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
