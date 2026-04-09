import { Row, Col } from 'react-bootstrap'
import { ChatMainView, MainLayout } from '../components'

const Chat = () => {
  return (
    <MainLayout>
      <Row className="d-flex align-items-center g-0 h-100 px-4">
        <Col xs={12}>
          <ChatMainView />
        </Col>
      </Row>
    </MainLayout>
  )
}

export default Chat
