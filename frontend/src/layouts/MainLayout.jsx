import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header.jsx';

const MainLayout = ({ children }) => {
  return (
    <Container fluid className="vh-100 d-flex flex-column p-0">
      <Row className="g-0 vw-100 border-bottom border-secondary-subtle p-3">
        <Col>
          <Header />
        </Col>
      </Row>
      {children}
    </Container>
  );
};

export default MainLayout;
