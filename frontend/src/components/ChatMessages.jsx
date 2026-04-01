import { getMessages } from '../api/chatApi';
import { Message, LoadingSpinner, ErrorMessage } from './';

const ChatMessages = () => {
  const { data: messages, error, isLoading } = getMessages();
  const errorMessage = 'Не удалось загрузить чат';

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage>{errorMessage}</ErrorMessage>;
  }

  return (
    <>
      {messages.map(({ id, body, channelId, username }) => (
        <Message key={id} body={body} username={username} channelId={channelId} />
      ))}
    </>
  );
};

export default ChatMessages;
