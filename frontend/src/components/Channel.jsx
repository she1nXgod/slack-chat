import { Nav, Button, Dropdown, ButtonGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentChannel, setCurrentChannel } from '../slices/uiSlice';

const Channel = ({ id, name, removable, showModal }) => {
  const currentChannelId = useSelector(selectCurrentChannel);
  const dispatch = useDispatch();

  return (
    <Nav.Item className="w-100">
      <Dropdown as={ButtonGroup} className="w-100">
        <Button
          variant={id === currentChannelId ? 'secondary' : 'light'}
          className={`${id === currentChannelId ? 'active' : ''} w-100 rounded-0 text-start bg-light-gray border-0`}
          onClick={() => dispatch(setCurrentChannel(id))}
        >
          {`# ${name}`}
        </Button>

        {removable ? (
          <>
            <Dropdown.Toggle
              split
              variant={id === currentChannelId ? 'secondary' : 'light'}
              className={`${id === currentChannelId ? 'active' : ''} rounded-0 bg-light-gray border-0`}
            />
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => showModal('editChannel', name, id)}>Переименовать</Dropdown.Item>
              <Dropdown.Item onClick={() => showModal('deleteChannel', name, id)}>Удалить</Dropdown.Item>
            </Dropdown.Menu>{' '}
          </>
        ) : null}
      </Dropdown>
    </Nav.Item>
  );
};

export default Channel;
