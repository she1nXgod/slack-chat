import MainLayout from '../layouts/MainLayout.jsx';
import { Row, Col } from 'react-bootstrap';
import { ChatInterface } from '../components';

const Chat = () => {
  return (
    <MainLayout>
      <Row className="d-flex align-items-center g-0 h-100">
        <Col xs={12} className="h-95 px-4">
          <ChatInterface />
        </Col>
      </Row>
    </MainLayout>
  );
};

export default Chat;
