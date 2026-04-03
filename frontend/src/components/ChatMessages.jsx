import { useRef, useEffect } from 'react';
import { getMessages } from '../api/chatApi';
import { Message, LoadingSpinner, ErrorMessage } from './';

const ChatMessages = () => {
  const { data: messages, error, isLoading } = getMessages();
  const messagesEndRef = useRef(null);
  const errorMessage = 'Не удалось загрузить чат';

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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
      <div ref={messagesEndRef} aria-hidden="true" />
    </>
  );
};

export default ChatMessages;
