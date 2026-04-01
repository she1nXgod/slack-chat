import { Container, Row, Col } from 'react-bootstrap';
import { Channels, ChannelListHeader, ChannelChat } from './';

const ChatInterface = () => {
  return (
    <Container className="h-100 border border-secondary-subtle rounded-3 shadow">
      <Row className="h-100">
        <Col xs={3} className="border-end border-secondary-subtle p-0">
          <ChannelListHeader />
          <Channels />
        </Col>

        <Col xs={9} className="p-0">
          <ChannelChat />
        </Col>
      </Row>
    </Container>
  );
};

export default ChatInterface;
