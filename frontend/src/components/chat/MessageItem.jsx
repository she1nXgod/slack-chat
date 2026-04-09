import { Row, Col } from 'react-bootstrap'

const MessageItem = ({ body, username }) => {
  return (
    <Row className="text-break pb-1">
      <Col>
        <b>
          {username}
        </b>
        :
        {` ${body}`}
      </Col>
    </Row>
  )
}

export default MessageItem
