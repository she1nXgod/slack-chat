import { Row, Col, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const ChannelHeader = ({ showModal }) => {
  const { t } = useTranslation()

  return (
    <Row className="border-bottom border-secondary-subtle w-100 m-0">
      <Col className="d-flex align-items-center">
        <span className="fw-bold">
          {t('channels.title')}
        </span>
      </Col>
      <Col className="p-2 d-flex justify-content-end">
        <Button variant="outline-primary" onClick={() => showModal('createChannel')}>
          +
        </Button>
      </Col>
    </Row>
  )
}

export default ChannelHeader
