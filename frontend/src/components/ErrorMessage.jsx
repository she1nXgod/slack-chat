import { Row } from 'react-bootstrap'

const ErrorMessage = ({ children: message }) => {
  return (
    <Row className="h-50 m-0 justify-content-center align-items-end text-center">
      <span className="fs-4 lead">
{message}
</span>
    </Row>
  )
}

export default ErrorMessage
