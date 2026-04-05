import { Row, Col, Button } from 'react-bootstrap';

const ChannelListHeader = ({ showModal }) => {
  return (
    <Row className="border-bottom border-secondary-subtle w-100 m-0">
      <Col className="d-flex align-items-center">
        <span className="fw-bold">Channels</span>
      </Col>
      <Col className="p-2 d-flex justify-content-end">
        <Button variant="outline-primary" onClick={() => showModal('createChannel')}>
          +
        </Button>
      </Col>
    </Row>
  );
};

export default ChannelListHeader;
