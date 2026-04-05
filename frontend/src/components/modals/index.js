import CreateChannelModal from './CreateChannelModal.jsx';

const modals = {
  createChannel: CreateChannelModal,
};

export default (modalName) => modals[modalName];
