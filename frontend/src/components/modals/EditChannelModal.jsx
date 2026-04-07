import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useEffect, useRef } from 'react';
import { Formik } from 'formik';
import { getChannels, editChannel } from '../../api/chatApi.js';
import { channelSchema } from '../../schemas/index.js';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

const EditChannelModal = ({ handleClose, channelName, channelId }) => {
  const { data: channels = [] } = getChannels();
  const inputRef = useRef(null);
  const [edit] = editChannel();
  const { t } = useTranslation();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onSubmit = async (newName) => {
    try {
      await edit({ id: channelId, newName }).unwrap();
      toast.success(t('channels.toasts.rename'));
    } catch (err) {
      console.error(err.status);
      toast.error(t('channels.toasts.errors.rename'));
    } finally {
      handleClose();
    }
  };

  return (
    <Modal show onHide={handleClose} centered>
      <Formik
        initialValues={{
          name: channelName,
        }}
        validationSchema={() => channelSchema(channels, t, channelName)}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, handleChange, handleBlur, values, errors, submitCount, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>{t('modals.rename')}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group className="pb-1">
                <Form.Label>{t('modals.label')}</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  ref={inputRef}
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={submitCount > 0 && errors.name}
                  autoFocus
                />
              </Form.Group>
              {submitCount > 0 && errors.name ? <div className="text-danger small">{errors.name}</div> : null}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                {t('modals.cancel')}
              </Button>
              <Button disabled={isSubmitting} type="submit" variant="primary">
                {isSubmitting ? t('modals.loading') : t('modals.send')}
              </Button>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default EditChannelModal;
