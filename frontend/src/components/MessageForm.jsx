import { Form, Button, Row, Col } from 'react-bootstrap';
import { useRef, useState } from 'react';
import { sendMessage } from '../api/chatApi.js';
import { useSelector } from 'react-redux';
import { selectCurrentUsername } from '../slices/authSlice.js';

const MessageForm = () => {
  const [text, setText] = useState('');
  const inputElement = useRef(null);
  const [send] = sendMessage();
  const currentUsername = useSelector(selectCurrentUsername);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMessage = { body: text, channelId: '1', username: currentUsername };
    send(newMessage);

    setText('');
    inputElement.current.focus();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Group>
            <Form.Control
              type="text"
              ref={inputElement}
              value={text}
              placeholder="Введите сообщение..."
              autoComplete="off"
              onChange={(e) => setText(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs="auto">
          <Button disabled={!text.trim()} type="submit">
            Отправить
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default MessageForm;
