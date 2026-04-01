import { Navbar, Button } from 'react-bootstrap';
import { logout, selectCurrentToken } from '../slices/authSlice.js';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const isAuth = useSelector(selectCurrentToken);
  const dispatch = useDispatch();

  return (
    <Navbar className="g-0 vw-100 px-5 border-bottom border-secondary-subtle p-2 bg-white justify-content-between">
      <Navbar.Brand href="/" className="h5 m-0">
        Hexlet Chat
      </Navbar.Brand>
      {isAuth ? <Button onClick={() => dispatch(logout())}>Выход</Button> : null}
    </Navbar>
  );
};

export default Header;
