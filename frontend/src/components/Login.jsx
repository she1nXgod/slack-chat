import { Formik, Form, Field } from 'formik';

const Login = () => {
  return (
    <div>
      <h1>Sign in</h1>
      <Formik
        initialValues={{
          name: '',
          password: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <Field name="name" />
            <Field name="password" type="password" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
