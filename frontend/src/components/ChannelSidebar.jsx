import { Channels, ChannelListHeader } from './';
import { useState } from 'react';
import getModal from './modals/index.js';
import { Container, Row, Col } from 'react-bootstrap';

const renderModal = ({ currentModal, handleCloseModal }) => {
  if (!currentModal) return;

  const Modal = getModal(currentModal);
  return <Modal handleClose={handleCloseModal} />;
};

const ChannelSidebar = () => {
  const [currentModal, setModal] = useState(null);

  const handleCloseModal = () => {
    setModal(null);
  };

  const handleShowModal = (name) => {
    setModal(name);
  };

  return (
    <Container className="h-100 d-flex flex-column p-0">
      <Row>
        <Col xs={12}>
          <ChannelListHeader handleShowModal={handleShowModal} />
        </Col>
      </Row>
      <Row className="m-0 h-100 overflow-auto">
        <Col xs={12} className="p-0">
          <Channels />
        </Col>
      </Row>
      {renderModal({ currentModal, handleCloseModal })}
    </Container>
  );
};

export default ChannelSidebar;
