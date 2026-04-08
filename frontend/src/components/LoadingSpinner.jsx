import { Row, Spinner } from 'react-bootstrap'

const LoadingSpinner = () => {
  return (
    <Row className="h-50 w-100 justify-content-center align-items-end overflow-hidden">
      <Spinner animation="border" role="status" />
    </Row>
  )
}

export default LoadingSpinner
