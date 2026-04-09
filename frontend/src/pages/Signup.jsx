import { SignupForm, MainLayout } from '../components'
import { Row, Col } from 'react-bootstrap'

const Signup = () => {
  return (
    <MainLayout>
      <Row className="d-flex align-items-center g-0 h-100">
        <Col xs={12} md={{ span: 4, offset: 4 }}>
          <SignupForm />
        </Col>
      </Row>
    </MainLayout>
  )
}

export default Signup
