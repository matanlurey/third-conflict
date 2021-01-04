import { Button } from 'antd';
import { useEffect, useState } from 'react';
import './Header.scss';

export interface GameHeaderProps {
  name: string;
  players: number;
  systems: number;
  endedTurn: boolean;

  onEndTurn: () => Promise<void>;
  onResign: () => Promise<void>;
}

export function GameHeader(props: GameHeaderProps): JSX.Element {
  const [pendingPromise, setPendingPromise] = useState(false);
  const [disableEndTurn, setDisableEndTurn] = useState<number>();
  const waitingForPlayers = props.endedTurn || pendingPromise;
  useEffect(() => {
    return () => {
      clearTimeout(disableEndTurn);
    };
  }, []);
  return (
    <header className="game-header">
      <div>
        <strong>{props.name}</strong>
        <br />
        <span>{props.players}</span> players, <span>{props.systems}</span>{' '}
        systems.
      </div>
      <ul>
        <li>
          <Button
            type="primary"
            disabled={waitingForPlayers}
            onClick={async () => {
              setPendingPromise(true);
              await props.onEndTurn();
              const handle = setTimeout(() => {
                setPendingPromise(false);
              }, 2000);
              setDisableEndTurn((handle as unknown) as number);
            }}
          >
            {waitingForPlayers ? 'Waiting...' : 'End Turn'}
          </Button>
        </li>
        <li>
          <Button
            danger
            onClick={async () => {
              if (
                !window.confirm(
                  'Are you sure? This will remove you from the game',
                )
              ) {
                return;
              }
              setPendingPromise(true);
              await props.onResign();
              setPendingPromise(false);
            }}
          >
            Resign
          </Button>
        </li>
      </ul>
    </header>
  );
}
