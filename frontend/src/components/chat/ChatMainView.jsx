import { Container, Row, Col } from 'react-bootstrap'
import { ChatContent, ChannelSidebar } from '../'

const ChatMainView = () => {
  return (
    <Container
      style={{ height: '820px' }}
      className="border border-secondary-subtle rounded-3 shadow overflow-hidden"
    >
      <Row className="h-100">
        <Col xs={3} className="h-100 border-end border-secondary-subtle p-0 ">
          <ChannelSidebar />
        </Col>

        <Col xs={9} className="p-0 h-100">
          <ChatContent />
        </Col>
      </Row>
    </Container>
  )
}

export default ChatMainView
