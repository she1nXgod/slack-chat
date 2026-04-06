import CreateChannelModal from './CreateChannelModal.jsx';
import DeleteChannelModal from './DeleteChannelModal.jsx';
import EditChannelModal from './EditChannelModal.jsx';

const modals = {
  createChannel: CreateChannelModal,
  deleteChannel: DeleteChannelModal,
  editChannel: EditChannelModal,
};

export default (modalName) => modals[modalName];
