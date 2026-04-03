import { useRef, useEffect } from 'react';
import { getMessages } from '../api/chatApi';
import { Message, LoadingSpinner, ErrorMessage } from './';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../slices/authSlice';
import { socket } from '../socket';

const ChatMessages = () => {
  const { data: messages, error, isLoading, refetch } = getMessages();
  const messagesEndRef = useRef(null);
  const isAuth = useSelector(selectCurrentToken);
  const errorMessage = 'Не удалось загрузить чат';

  useEffect(() => {
    if (isAuth) {
      socket.connect();

      return () => {
        socket.disconnect();
      };
    }
  }, [isAuth]);

  useEffect(() => {
    const handleNewMessage = () => {
      refetch();
    };

    socket.on('newMessage', handleNewMessage);

    return () => {
      socket.off('newMessage', handleNewMessage);
    };
  }, [refetch]);

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
