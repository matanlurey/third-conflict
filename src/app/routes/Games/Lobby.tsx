import { LaptopOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber, List } from 'antd';
import Prando from 'prando';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GameLobbyData, PointData } from '../../../common/game-state';
import { PoissonMapGenerator } from '../../../common/map-generator';
import { PoissonDiskSampler } from '../../../common/poisson-disk';
import { GameClientContext } from '../../contexts/client';
import { MapPreview } from '../../ui/Map';

export function GameLobby(props: {
  data: GameLobbyData;
  onStart: (seed: string, systems: number) => void;
}): JSX.Element {
  const client = useContext(GameClientContext);
  const { replace } = useHistory();
  const listAiPlayers = new Array(props.data.players - 1).fill('');
  const [seed, setSeed] = useState(props.data.seed);
  const [pending, setPending] = useState(false);
  const [systems, setSystems] = useState(Math.ceil(props.data.players * 3));
  const [preview, setPreview] = useState<
    { position: PointData; name: string; home: boolean }[]
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
    setPreview(generator.generateMap(systems, props.data.players));
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
        {listAiPlayers.map((_, i) => {
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
      <Form
        labelCol={{ span: 1 }}
        wrapperCol={{ span: 4 }}
        onFinish={() => {
          setPending(true);
          props.onStart(seed, systems);
        }}
      >
        <Form.Item
          label="Name"
          extra={<>Used for identifying the game only.</>}
        >
          <Input
            readOnly
            minLength={10}
            maxLength={20}
            value={props.data.name}
          />
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
          <MapPreview systems={preview} />
        </Form.Item>
        <Form.Item
          label="Maximum Systems"
          extra={<>A recommended number is 3 systems per player.</>}
        >
          <InputNumber
            min={props.data.players}
            max={26}
            value={systems}
            onChange={(v) => setSystems(parseInt(`${v}`))}
          />
        </Form.Item>
        <p className="games-buttons">
          <Button type="primary" htmlType="submit" disabled={pending}>
            Start
          </Button>
          <Button
            danger
            disabled={pending}
            onClick={async () => {
              setPending(true);
              await client.gamesDelete(props.data.name);
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
