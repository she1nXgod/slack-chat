import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteChannel } from '../../api/chatApi';
import { useTranslation } from 'react-i18next';

const DeleteChannelModal = ({ handleClose, channelName, channelId }) => {
  const [remove] = deleteChannel();
  const { t } = useTranslation();

  const handleRemove = () => {
    remove(channelId);
    handleClose();
  };

  return (
    <Modal show onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{t('modals.remove')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{`${t('modals.removeConfirm')} ${channelName}?`}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {t('modals.cancel')}
        </Button>
        <Button variant="danger" onClick={handleRemove}>
          {t('modals.removeSubmit')}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteChannelModal;
