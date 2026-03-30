import { Row, Col } from 'react-bootstrap';
import { LoginForm, MainLayout } from '../components';

const Login = () => {
  return (
    <MainLayout>
      <Row className="d-flex align-items-center g-0 h-100">
        <Col xs={12} md={{ span: 4, offset: 4 }}>
          <LoginForm />
        </Col>
      </Row>
    </MainLayout>
  );
};

export default Login;
