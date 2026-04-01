import { Container } from 'react-bootstrap';
import { Header } from '../components';

const MainLayout = ({ children }) => {
  return (
    <Container fluid className="vh-100 d-flex flex-column p-0 g-0 bg-light">
      <Header />
      {children}
    </Container>
  );
};

export default MainLayout;
