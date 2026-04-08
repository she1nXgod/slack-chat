import { Channels, ChannelListHeader } from './'
import getModal from './modals/index.js'
import { Container, Row, Col } from 'react-bootstrap'
import { useImmer } from 'use-immer'

const renderModal = ({ isOpen, type, channelName, handleCloseModal, channelId }) => {
  if (!isOpen) return

  const Modal = getModal(type)
  return <Modal handleClose={handleCloseModal} channelName={channelName} channelId={channelId} />
}

const ChannelSidebar = () => {
  const [modal, setModal] = useImmer({
    isOpen: false,
    type: '',
    channelId: null,
    channelName: '',
  })

  const handleCloseModal = () => {
    setModal(draft => {
      draft.isOpen = false
    })
  }

  const handleShowModal = (type, channelName = '', channelId = null) => {
    setModal(draft => {
      draft.isOpen = true
      draft.type = type
      draft.channelId = channelId
      draft.channelName = channelName
    })
  }

  return (
    <Container className="h-100 d-flex flex-column p-0">
      <Row>
        <Col xs={12}>
          <ChannelListHeader showModal={handleShowModal} />
        </Col>
      </Row>
      <Row className="m-0 h-100 overflow-auto">
        <Col xs={12} className="p-0">
          <Channels showModal={handleShowModal} />
        </Col>
      </Row>
      {renderModal({
        isOpen: modal.isOpen,
        type: modal.type,
        channelId: modal.channelId,
        channelName: modal.channelName,
        handleCloseModal,
      })}
    </Container>
  )
}

export default ChannelSidebar
