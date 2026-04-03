import { Nav } from 'react-bootstrap';
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
    <Nav className="w-100 m-0">
      {channels.map(({ id, name, removable }) => (
        <Channel key={id} id={id} name={name} removable={removable} />
      ))}
    </Nav>
  );
};

export default Channels;
