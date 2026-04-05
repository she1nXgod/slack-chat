import { Nav } from 'react-bootstrap';
import { getChannels } from '../api/chatApi.js';
import { Channel, ErrorMessage, LoadingSpinner } from './';

const Channels = ({ showModal }) => {
  const { data: channels, isLoading, error } = getChannels();
  const errorMessage = 'Не удалось загрузить каналы';

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage>{errorMessage}</ErrorMessage>;
  }

  return (
    <Nav className="flex-column h-100 w-100 m-0 overflow-auto">
      {channels.map(({ id, name, removable }) => (
        <Channel key={id} id={id} name={name} removable={removable} showModal={showModal} />
      ))}
    </Nav>
  );
};

export default Channels;
