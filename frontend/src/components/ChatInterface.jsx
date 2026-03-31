import { getMessages } from '../api/chatApi';
import Spinner from 'react-bootstrap/Spinner';

const ChatInterface = () => {
  const { data: messages, error, isLoading, refetch, status } = getMessages();

  if (isLoading) {
    return <Spinner />;
  }

  return <h1>Chat</h1>;
};

export default ChatInterface;
