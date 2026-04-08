import { Formik } from 'formik'
import { Form, Button, Alert, Container } from 'react-bootstrap'
import axios from 'axios'
import routes from '../routes.js'
import { setToken, setUsername } from '../slices/authSlice.js'
import { signupSchema } from '../schemas/index.js'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

const SignupForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const onSubmit = async ({ username, password }, { setErrors, setSubmitting }) => {
    try {
      const newUser = { username, password }
      const responce = await axios.post(routes.signupPath(), newUser)
      const { token, username: name } = responce.data

      dispatch(setToken(token))
      dispatch(setUsername(name))
      navigate('/')
    }
    catch (err) {
      if (err.status === 409) {
        setErrors({ general: t('signupPage.errors.userExists') })
      }
      console.error('Signup error: ', err)
    }
    finally {
      setSubmitting(false)
    }
  }

  return (
    <Container className="p-4 border border-secondary-subtle rounded-3 shadow">
      <h2 className="h2 mb-3">
        {t('signupPage.title')}
      </h2>
      <Formik
        initialValues={{
          username: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={() => signupSchema(t)}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, handleChange, handleBlur, values, errors, touched, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>
                {t('signupPage.username')}
              </Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.username && errors.username}
                autoComplete="false"
              />
              {touched.username && errors.username
                ? (
                  <div className="text-danger small">
                    {errors.username}
                  </div>
                )
                : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>
                {t('signupPage.password')}
              </Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.password && errors.password}
                autoComplete="new-password"
              />
              {touched.password && errors.password
                ? (
                  <div className="text-danger small">
                    {errors.password}
                  </div>
                )
                : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>
                {t('signupPage.passwordConfirmation')}
              </Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.confirmPassword && errors.confirmPassword}
                autoComplete="new-password"
              />
              {touched.confirmPassword && errors.confirmPassword
                ? (
                  <div className="text-danger small">
                    {errors.confirmPassword}
                  </div>
                )
                : null}
            </Form.Group>

            {errors.general
              ? (
                <Alert variant="danger" className="p-2">
                  {errors.general}
                </Alert>
              )
              : null}

            <Button disabled={isSubmitting} type="submit" className="w-100 mb-3">
              {isSubmitting
                ? t('signupPage.signupProcess')
                : t('signupPage.signup')}
            </Button>
            <div className="small">
              {t('signupPage.hasAccount')}
              {' '}
              <a href="/login">
                {t('signupPage.login')}
              </a>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default SignupForm
