import { Row } from 'react-bootstrap';
import { getChannels } from '../api/chatApi.js';
import { Channel, LoadingSpinner } from './';

const Channels = () => {
  const { data: channels, isLoading, error } = getChannels();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <h1>Error</h1>;
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
