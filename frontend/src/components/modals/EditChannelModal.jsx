import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useEffect, useRef } from 'react';
import { Formik } from 'formik';
import { getChannels, editChannel } from '../../api/chatApi.js';
import { createChannelSchema } from '../../schemas/index.js';

const EditChannelModal = ({ handleClose, channelName, channelId }) => {
  const { data: channels = [] } = getChannels();
  const inputRef = useRef(null);
  const [edit] = editChannel();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onSubmit = (newName) => {
    edit({ id: channelId, newName });
    handleClose();
  };

  return (
    <Modal show onHide={handleClose} centered>
      <Formik
        initialValues={{
          name: channelName,
        }}
        validationSchema={() => createChannelSchema(channels, channelName)}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, handleChange, handleBlur, values, errors, submitCount }) => (
          <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Переименовать канал</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group className="pb-1">
                <Form.Label>Имя канала</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  ref={inputRef}
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={submitCount > 0 && errors.name}
                  placeholder="Имя канала"
                  autoFocus
                />
              </Form.Group>
              {submitCount > 0 && errors.name ? <div className="text-danger small">{errors.name}</div> : null}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Отменить
              </Button>
              <Button type="submit" variant="primary">
                Изменить
              </Button>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default EditChannelModal;
