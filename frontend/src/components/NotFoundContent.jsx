import { Stack } from 'react-bootstrap';

const NotFoundContent = () => {
  return (
    <Stack gap={1} className="justify-content-center text-center">
      <h1 className="h1 display-1">404</h1>
      <p className="fs-4 lead">К сожалению, страница, которую вы ищете, не существует.</p>
    </Stack>
  );
};

export default NotFoundContent;
