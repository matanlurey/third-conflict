import { FogOfWarGameData } from '../../../common/game-state';
import { GameHeader } from '../../ui/Header';
import { MapPreview } from '../../ui/Map';

export function PlayGame(props: { state: FogOfWarGameData }): JSX.Element {
  const { state } = props;
  return (
    <>
      <GameHeader
        name={state.name}
        players={state.players}
        systems={state.systems.length}
        endedTurn={state.endedTurn}
        onEndTurn={async () => {
          // TODO: Implement.
        }}
        onResign={async () => {
          // TODO: Implement.
        }}
      />
      <MapPreview systems={state.systems} />
    </>
  );
}
