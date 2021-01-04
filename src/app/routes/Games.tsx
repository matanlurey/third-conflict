import { Button } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { Route, Switch, useHistory, useParams } from 'react-router-dom';
import {
  FogOfWarGameData,
  GameListData,
  GameLobbyData,
} from '../../common/game-state';
import { GameClientContext } from '../contexts/client';
import './Games.scss';
import { CreateGames } from './Games/Create';
import { ListGames } from './Games/List';
import { ViewGameLobby } from './Games/Lobby';
import { PlayGame } from './Games/Play';

function ViewGameOrLobby(): JSX.Element {
  const params = useParams<{ readonly name: string }>();
  const client = useContext(GameClientContext);
  const [game, setGame] = useState<
    GameListData | FogOfWarGameData | undefined
  >();

  async function pullGameState() {
    setGame(await client.gamesFetch(params.name));
  }

  const [gamePollTimer] = useState(() => {
    return setInterval(pullGameState, 1000);
  });

  useEffect(() => {
    pullGameState();
    return () => {
      clearInterval(gamePollTimer);
    };
  }, [client]);

  const { goBack } = useHistory();
  if (!game) {
    return (
      <>
        <h1>
          Game <code>{params.name}</code> not found.
        </h1>
        <p>Either this game has been deleted, or the link is expired.</p>
        <Button onClick={goBack}>Go Back</Button>
      </>
    );
  } else if (game.kind === 'Lobby') {
    return (
      <ViewGameLobby
        data={game as GameLobbyData}
        onStart={async (seed, systems) => {
          setGame(await client.gamesStart(params.name, seed, systems));
        }}
      />
    );
  } else {
    return (
      <PlayGame
        state={game as FogOfWarGameData}
        onEndTurn={async () => {
          // TODO: Make a context object tied to this game.
          await client.gameEndTurn(game.name);
        }}
      />
    );
  }
}

export function GamesRoute(): JSX.Element {
  return (
    <>
      <Switch>
        <Route exact path="/games/create" component={CreateGames} />
        <Route path="/games/:name" component={ViewGameOrLobby} />
        <Route exact path="/games" component={ListGames} />
      </Switch>
    </>
  );
}
