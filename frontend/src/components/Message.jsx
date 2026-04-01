import { Row, Col } from 'react-bootstrap';

const Message = ({ body, username }) => {
  return (
    <Row className="text-break">
      <Col>
        <b>{username}</b>: {body}
      </Col>
    </Row>
  );
};

export default Message;
