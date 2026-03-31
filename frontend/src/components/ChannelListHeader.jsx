import { Row, Col, Button } from 'react-bootstrap';

const ChannelListHeader = () => {
  return (
    <Row className="border-bottom border-secondary-subtle">
      <Col className="d-flex align-items-center">
        <span className="fw-bold">Channels</span>
      </Col>
      <Col className="p-2 d-flex justify-content-end">
        <Button variant="outline-primary">+</Button>
      </Col>
    </Row>
  );
};

export default ChannelListHeader;
