import { Formik } from 'formik';
import axios from 'axios';
import routes from '../routes.js';
import { setToken, setUsername } from '../slices/authSlice.js';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Button, Alert, Container } from 'react-bootstrap';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispath = useDispatch();

  const onSubmit = async (values, { setErrors, setSubmitting }) => {
    try {
      const responce = await axios.post(routes.loginPath(), values);
      const { token, username } = responce.data;

      dispath(setToken(token));
      dispath(setUsername(username));
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);

      navigate('/');
    } catch (e) {
      console.error(e);
      setErrors({ general: 'Неверные имя пользователя или пароль' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container className="p-4 border border-secondary-subtle rounded-3 shadow">
      <h2 className="h2 mb-3">Sign in</h2>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, handleChange, values, errors, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
                placeholder="Username"
                autoComplete="username"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Password"
                autoComplete="password"
              />
            </Form.Group>
            {errors.general ? (
              <Alert variant="danger" className="p-2">
                {errors.general}
              </Alert>
            ) : null}
            <Button disabled={isSubmitting} type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default LoginForm;
