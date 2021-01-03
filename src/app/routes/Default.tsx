import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GameClientContext } from '../contexts/client';
import './Default.scss';

export function Default(): JSX.Element {
  const client = useContext(GameClientContext);
  const [pendingGames, setPendingGames] = useState<number | undefined>();
  useEffect(() => {
    (async () => {
      const gameList = await client.gamesList();
      setPendingGames(gameList.length);
    })();
  }, [client]);
  return (
    <>
      <h1>
        Welcome back to <strong>Third Conflict</strong>
      </h1>
      <p>
        {/* TODO: Show loading indicator. */}
        You have <Link to="/games">{pendingGames} pending game(s)</Link>.
      </p>
    </>
  );
}
