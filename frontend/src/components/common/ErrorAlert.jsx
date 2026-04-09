import Row from 'react-bootstrap/Row'

const ErrorAlert = ({ children: error }) => {
  return (
    <Row className="h-50 m-0 justify-content-center align-items-end text-center">
      <span className="fs-4 lead">
        {error}
      </span>
    </Row>
  )
}

export default ErrorAlert
