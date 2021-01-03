import { PlusOutlined } from '@ant-design/icons';
import { Button, Table } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GameListData } from '../../../common/game-state';
import { GameClientContext } from '../../contexts/client';

export function ListGames(): JSX.Element {
  const client = useContext(GameClientContext);
  const { push } = useHistory();
  const [games, setGames] = useState<GameListData[]>([]);

  async function fetchGames() {
    setGames(await client.gamesList());
  }

  useEffect(() => {
    fetchGames();
  }, [client]);

  const dataSource = games
    .sort((a, b) => a.lastUpdated - b.lastUpdated)
    .map((v) => {
      return {
        name: <Link to={`/games/${v.name}`}>{v.name}</Link>,
        key: v.name,
        players: v.players,
        status: v.kind === 'Lobby' ? 'Not Started' : 'In Progress',
      };
    });

  return (
    <>
      <h1>Games</h1>
      <p className="games-buttons">
        <Button
          icon={<PlusOutlined />}
          type="dashed"
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
