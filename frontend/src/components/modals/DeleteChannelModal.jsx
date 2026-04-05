import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteChannel } from '../../api/chatApi';
import { useDispatch } from 'react-redux';
import { setCurrentChannel } from '../../slices/uiSlice';

const DeleteChannelModal = ({ handleClose, channelName, channelId }) => {
  const [remove] = deleteChannel();
  const dispatch = useDispatch();
  const handleRemove = () => {
    remove(channelId);
    handleClose();
    dispatch(setCurrentChannel('1'));
  };

  return (
    <Modal show onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Удалить канал</Modal.Title>
      </Modal.Header>
      <Modal.Body>{`Уверены, что хотите удалить канал ${channelName}?`}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Отменить
        </Button>
        <Button variant="danger" onClick={handleRemove}>
          Удалить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteChannelModal;
