import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LocalStorageContext } from '../contexts/storage';
import './Default.scss';

export function Default(): JSX.Element {
  const storage = useContext(LocalStorageContext);
  return (
    <>
      <h1>
        Welcome back to <strong>Third Conflict</strong>
      </h1>
      <p>
        You have{' '}
        <Link to="/games">{storage.lobbies.length} pending game(s)</Link>.
      </p>
    </>
  );
}
