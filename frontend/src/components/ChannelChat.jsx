import { Row, Col, Container } from 'react-bootstrap';
import { ChatHeader, ChatMessages, MessageForm } from './';

const ChannelChat = () => {
  return (
    <Container className="h-100 d-flex flex-column justify-content-between p-0">
      <Row className="g-0 shadow-b">
        <Col xs={12} className="p-3">
          <ChatHeader />
        </Col>
      </Row>

      <Row className="h-100 p-3 m-0 overflow-auto">
        <Col xs={12}>
          <ChatMessages />
        </Col>
      </Row>

      <Row className="p-4 m-0">
        <Col xs={12}>
          <MessageForm />
        </Col>
      </Row>
    </Container>
  );
};

export default ChannelChat;
