import { Form, Button, Row, Col } from 'react-bootstrap';
import { useRef, useState } from 'react';

const MessageForm = () => {
  const [text, setText] = useState('');
  const inputElement = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setText('');
    inputElement.current.focus();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="">
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
          <Button disabled={!text} type="submit">
            Отправить
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default MessageForm;
