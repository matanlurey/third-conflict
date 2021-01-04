import { Empty, Modal } from 'antd';
import { FogOfWarGameData } from '../../../common/game-state';
import { GameHeader } from '../../ui/Header';
import { MapPreview } from '../../ui/Map';

export function PlayGame(props: {
  state: FogOfWarGameData;
  showReports: boolean;
  onEndTurn: () => Promise<void>;
  onReports: (show: boolean) => void;
}): JSX.Element {
  const { state } = props;
  return (
    <>
      <Modal
        title={`Reports for Turn ${state.currentTurn}`}
        visible={props.showReports}
        cancelButtonProps={{ style: { display: 'none' } }}
        okText="Hide"
        onOk={() => props.onReports(false)}
        onCancel={() => props.onReports(false)}
        closable={true}
        centered={true}
        maskClosable={true}
      >
        <Empty description="Nothing significant to report." />
      </Modal>
      <GameHeader
        name={state.name}
        players={state.players}
        systems={state.systems.length}
        endedTurn={state.endedTurn}
        onEndTurn={props.onEndTurn}
        onReports={() => {
          props.onReports(true);
        }}
        onResign={async () => {
          // TODO: Implement.
        }}
      />
      <MapPreview systems={state.systems} />
    </>
  );
}
