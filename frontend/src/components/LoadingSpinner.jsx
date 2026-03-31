import { Row, Spinner } from 'react-bootstrap';

const LoadingSpinner = () => {
  return (
    <Row className="h-50 justify-content-center align-items-end">
      <Spinner animation="border" role="status" />
    </Row>
  );
};

export default LoadingSpinner;
