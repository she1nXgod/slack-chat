import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import routes from '../routes.js';
import { setToken } from '../slices/authSlice.js';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Login = () => {
  const navigate = useNavigate();
  const dispath = useDispatch();

  const onSubmit = async (values, { setErrors, setSubmitting }) => {
    try {
      const responce = await axios.post(routes.loginPath(), values);
      const { token, username } = responce.data;

      dispath(setToken(token));
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
    <div>
      <h1>Sign in</h1>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={onSubmit}
      >
        {({ errors, isSubmitting }) => (
          <Form>
            <Field type="text" name="username" autoComplete="username" />
            <Field type="password" name="password" autoComplete="current-password" />
            {errors ? <div>{errors.general}</div> : null}
            <button disabled={isSubmitting} type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
