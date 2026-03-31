import { Container, Row, Col } from 'react-bootstrap';
import { Header } from '../components';

const MainLayout = ({ children }) => {
  return (
    <Container fluid className="vh-100 d-flex flex-column p-0 bg-light">
      <Row className="g-0 vw-100 border-bottom border-secondary-subtle p-3 bg-white">
        <Col>
          <Header />
        </Col>
      </Row>
      {children}
    </Container>
  );
};

export default MainLayout;
