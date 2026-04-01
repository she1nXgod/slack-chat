import { Row, Col, Container } from 'react-bootstrap';
import { ChatHeader, ChatMessages } from './';

const ChannelChat = () => {
  return (
    <Container className="p-0">
      <Row className="g-0 shadow-b">
        <Col xs={12} className="p-3">
          <ChatHeader />
        </Col>
      </Row>

      <Row className="p-2">
        <Col xs={12}>
          <ChatMessages />
        </Col>
      </Row>
    </Container>
  );
};

export default ChannelChat;
