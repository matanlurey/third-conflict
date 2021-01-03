import { Button } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { Route, Switch, useHistory, useParams } from 'react-router-dom';
import { GameListData, GameLobbyData } from '../../common/game-state';
import { GameClientContext } from '../contexts/client';
import './Games.scss';
import { CreateGames } from './Games/Create';
import { ListGames } from './Games/List';
import { GameLobby } from './Games/Lobby';

function ViewGameOrLobby(): JSX.Element {
  const params = useParams<{ readonly name: string }>();
  const client = useContext(GameClientContext);
  const [game, setGame] = useState<GameListData | GameLobbyData | undefined>();
  useEffect(() => {
    (async () => {
      setGame(await client.gamesFetch(params.name));
    })();
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
      <GameLobby
        data={game as GameLobbyData}
        onStart={async () => {
          setGame(await client.gamesCreate(params.name, game.players));
        }}
      />
    );
  } else {
    return (
      <>
        Game for <code>{params.name}</code>
      </>
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
