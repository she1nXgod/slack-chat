import { Row } from 'react-bootstrap';
import { getChannels } from '../api/chatApi.js';
import { Channel, ErrorMessage, LoadingSpinner } from './';

const Channels = () => {
  const { data: channels, isLoading, error } = getChannels();
  const errorMessage = 'Не удалось загрузить каналы';

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage>{errorMessage}</ErrorMessage>;
  }

  return (
    <>
      {channels.map(({ id, name, removable }) => (
        <Row key={id}>
          <Channel name={name} removable={removable} />
        </Row>
      ))}
    </>
  );
};

export default Channels;
