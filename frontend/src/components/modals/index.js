import CreateChannelModal from './CreateChannelModal.jsx';
import DeleteChannelModal from './DeleteChannelModal.jsx';

const modals = {
  createChannel: CreateChannelModal,
  deleteChannel: DeleteChannelModal,
};

export default (modalName) => modals[modalName];
