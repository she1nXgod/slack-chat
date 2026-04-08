import { Formik } from 'formik'
import axios from 'axios'
import routes from '../routes.js'
import { setToken, setUsername } from '../slices/authSlice.js'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Form, Button, Alert, Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { loginSchema } from '../schemas/index.js'

const LoginForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const onSubmit = async (user, { setErrors, setSubmitting }) => {
    try {
      const responce = await axios.post(routes.loginPath(), user)
      const { token, username } = responce.data

      dispatch(setToken(token))
      dispatch(setUsername(username))
      navigate('/')
    }
    catch (err) {
      if (err.status === 401) {
        setErrors({ general: t('loginPage.error') })
      }

      console.error('Login error: ', err)
    }
    finally {
      setSubmitting(false)
    }
  }

  return (
    <Container className="p-4 border border-secondary-subtle rounded-3 shadow">
      <h2 className="h2 mb-3">
        {t('loginPage.title')}
      </h2>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={() => loginSchema(t)}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, handleChange, values, errors, submitCount, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>
                {t('loginPage.username')}
              </Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
                isInvalid={submitCount > 0 && errors.username}
                autoComplete="username"
              />
              {submitCount > 0 && errors.username
                ? (
                    <div className="text-danger small">
                      {errors.username}
                    </div>
                  )
                : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>
                {t('loginPage.password')}
              </Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isInvalid={submitCount > 0 && errors.password}
                autoComplete="password"
              />
              {submitCount > 0 && errors.password
                ? (
                    <div className="text-danger small">
                      {errors.password}
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
                ? t('loginPage.loginProcess')
                : t('loginPage.login')}
            </Button>
            <div className="small">
              {t('loginPage.noAccount')}
              {' '}
              <a href="/signup">
                {t('loginPage.signup')}
              </a>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default LoginForm
