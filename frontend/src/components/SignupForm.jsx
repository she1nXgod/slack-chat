import { Formik } from 'formik';
import { Form, Button, Alert, Container } from 'react-bootstrap';
import axios from 'axios';
import routes from '../routes.js';
import { setToken, setUsername } from '../slices/authSlice.js';
import { SignupSchema } from '../schemas/index.js';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async ({ username, password }, { setErrors, setSubmitting }) => {
    try {
      const newUser = { username, password };
      const responce = await axios.post(routes.signupPath(), newUser);
      const { token, username: name } = responce.data;

      dispatch(setToken(token));
      dispatch(setUsername(name));
      localStorage.setItem('token', token);
      localStorage.setItem('username', name);

      navigate('/');
    } catch (err) {
      if (err.status === 409) {
        setErrors({ general: 'Такой пользователь уже существует' });
      }
      console.error('Signup error: ' + err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container className="p-4 border border-secondary-subtle rounded-3 shadow">
      <h2 className="h2 mb-3">Sign up</h2>
      <Formik
        initialValues={{
          username: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, handleChange, values, errors, submitCount, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
                isInvalid={submitCount > 0 && errors.username}
                autoComplete="false"
              />
              {submitCount > 0 && errors.username ? (
                <div className="text-danger small">{errors.username}</div>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isInvalid={submitCount > 0 && errors.password}
                autoComplete="new-password"
              />
              {submitCount > 0 && errors.password ? (
                <div className="text-danger small">{errors.password}</div>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                isInvalid={submitCount > 0 && errors.confirmPassword}
                autoComplete="new-password"
              />
              {errors.confirmPassword ? (
                <div className="text-danger small">{submitCount > 0 && errors.confirmPassword}</div>
              ) : null}
            </Form.Group>

            {errors.general ? (
              <Alert variant="danger" className="p-2">
                {errors.general}
              </Alert>
            ) : null}

            <Button disabled={isSubmitting} type="submit" className="w-100 mb-3">
              Зарегистрироваться
            </Button>
            <div className="small">
              Уже есть аккаунт? <a href="/login">Войти</a>
            </div>
            {/* <Field name="name" />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <Field name="password" type="password" />
            {errors.password && touched.password ? <div>{errors.password}</div> : null}
            <Field name="confirmPassword" type="password" />
            {errors.confirmPassword && touched.confirmPassword ? <div>{errors.confirmPassword}</div> : null}
            <button type="submit">Submit</button> */}
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default SignupForm;
