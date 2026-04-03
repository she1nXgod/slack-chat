import Stack from 'react-bootstrap/Stack';
import { getChannels, getMessages } from '../api/chatApi';
import { useSelector } from 'react-redux';
import { selectCurrentChannel } from '../slices/uiSlice';
import LoadingSpinner from './LoadingSpinner';

const ChatHeader = () => {
  const { data: channels, isLoading: isLoadingChannels } = getChannels();
  const { data: messages, isLoading: isLoadingMessages } = getMessages();
  const currentChannelId = useSelector(selectCurrentChannel);

  const channelName = channels?.find(({ id }) => id === currentChannelId);
  const channelCountMessages = messages?.filter(({ channelId }) => channelId === currentChannelId).length;

  if (isLoadingChannels || isLoadingMessages) {
    return <LoadingSpinner />;
  }

  return (
    <Stack gap={0}>
      <b>{`# ${channelName.name}`}</b>
      <span className="small text-muted">{`сообщений: ${channelCountMessages}`}</span>
    </Stack>
  );
};

export default ChatHeader;
