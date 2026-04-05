import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useEffect, useRef } from 'react';
import { Formik } from 'formik';
import { createChannelSchema } from '../../schemas/index.js';
import { createChannel } from '../../api/chatApi.js';
import { useDispatch } from 'react-redux';
import { setCurrentChannel } from '../../slices/uiSlice.js';

const CreateChannelModal = ({ handleClose }) => {
  const inputRef = useRef(null);
  const [create] = createChannel();
  const dispatch = useDispatch();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onSubmit = async (newChannel) => {
    try {
      const { id } = await create(newChannel).unwrap();
      dispatch(setCurrentChannel(id));
      handleClose();
    } catch (err) {
      console.error('Error during creation:' + err);
    }
  };

  return (
    <Modal show onHide={handleClose} centered>
      <Formik
        initialValues={{
          name: '',
        }}
        validationSchema={createChannelSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, handleChange, handleBlur, values, errors, submitCount }) => (
          <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Добавить канал</Modal.Title>
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
                Добавить
              </Button>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default CreateChannelModal;
