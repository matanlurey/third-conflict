import { AsyncButton } from './AsyncButton';
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
  const waitingForPlayers = props.endedTurn;
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
          <AsyncButton
            type="primary"
            disabled={waitingForPlayers}
            onClick={props.onEndTurn}
          >
            {waitingForPlayers ? 'Waiting...' : 'End Turn'}
          </AsyncButton>
        </li>
        <li>
          <AsyncButton
            danger
            onClick={async () => {
              if (
                !window.confirm(
                  'Are you sure? This will remove you from the game',
                )
              ) {
                return;
              }
              return props.onResign();
            }}
          >
            Resign
          </AsyncButton>
        </li>
      </ul>
    </header>
  );
}
