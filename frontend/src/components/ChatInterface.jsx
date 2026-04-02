import { Container, Row, Col } from 'react-bootstrap';
import { Channels, ChannelListHeader, ChannelChat } from './';

const ChatInterface = () => {
  return (
    <Container style={{ height: '820px' }} className="border border-secondary-subtle rounded-3 shadow ">
      <Row className="h-100">
        <Col xs={3} className="border-end border-secondary-subtle p-0">
          <ChannelListHeader />
          <Channels />
        </Col>

        <Col xs={9} className="p-0 mh-100">
          <ChannelChat />
        </Col>
      </Row>
    </Container>
  );
};

export default ChatInterface;
