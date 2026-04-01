import { Nav, Button } from 'react-bootstrap';

const Channel = ({ name }) => {
  return (
    <Nav.Item className="w-100">
      <Button
        variant="light"
        className="w-100 rounded-0 text-start bg-light-gray border-0"
      >{`# ${name}`}</Button>
    </Nav.Item>
  );
};

export default Channel;
