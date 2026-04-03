import { Nav, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentChannel, setCurrentChannel } from '../slices/uiSlice';

const Channel = ({ id, name }) => {
  const currentChannelId = useSelector(selectCurrentChannel);
  const dispatch = useDispatch();

  return (
    <Nav.Item className="w-100">
      <Button
        variant={id === currentChannelId ? 'secondary' : 'light'}
        className={`${id === currentChannelId ? 'active' : ''} w-100 rounded-0 text-start bg-light-gray border-0`}
        onClick={() => dispatch(setCurrentChannel(id))}
      >{`# ${name}`}</Button>
    </Nav.Item>
  );
};

export default Channel;
