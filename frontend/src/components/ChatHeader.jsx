import Stack from 'react-bootstrap/Stack';

const ChatHeader = () => {
  return (
    <Stack gap={0}>
      <b># ???</b>
      <span className="small text-muted">сообщений: ???</span>
    </Stack>
  );
};

export default ChatHeader;
