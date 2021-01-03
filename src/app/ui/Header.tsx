import { Button } from 'antd';
import { useState } from 'react';
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
            disabled={props.endedTurn || pendingPromise}
            onClick={async () => {
              setPendingPromise(true);
              await props.onEndTurn();
              setPendingPromise(false);
            }}
          >
            End Turn
          </Button>
        </li>
        <li>
          <Button
            danger
            disabled={true}
            onClick={async () => {
              setPendingPromise(true);
              await props.onResign();
              setPendingPromise(false);
            }}
            title="Resign: Not yet supported."
          >
            Resign
          </Button>
        </li>
      </ul>
    </header>
  );
}
