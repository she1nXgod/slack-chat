import { Row, Col } from 'react-bootstrap';

const Message = ({ body, username }) => {
  return (
    <Row className="text-break">
      <Col>
        <b>{username}</b>:{' '}
        {body +
          'jsfkl;j;slkdfjslkdf jlksdjflkjsdlfkjsdlkfjsl;kdfjlskjflskjflksdfj;ksdjf;sakdjfslk;jfjl;kslkdfjslkdfjsklfjfjfklsjdflk;sjdf;lksjflksjlfsjdflksjadflksjdf;lksdjf;lksjdkfjskdjflksdjflksапва'}
      </Col>
    </Row>
  );
};

export default Message;
