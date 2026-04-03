import Stack from 'react-bootstrap/Stack';
import { getChannels } from '../api/chatApi';
import { useSelector } from 'react-redux';
import { selectCurrentChannel } from '../slices/uiSlice';
import LoadingSpinner from './LoadingSpinner';

const ChatHeader = () => {
  const { data: channels, isLoading } = getChannels();
  const currentChannelId = useSelector(selectCurrentChannel);
  const currentChannelName = channels?.find(({ id }) => id === currentChannelId);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Stack gap={0}>
      <b>{`# ${currentChannelName.name}`}</b>
      <span className="small text-muted">сообщений: ???</span>
    </Stack>
  );
};

export default ChatHeader;
