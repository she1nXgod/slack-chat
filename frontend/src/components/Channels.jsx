import { Row, Spinner } from 'react-bootstrap';
import { getChannels } from '../api/chatApi.js';
import { Channel } from './';

const Channels = () => {
  const { data: channels, isLoading } = getChannels();

  if (isLoading) {
    return <Spinner />;
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
