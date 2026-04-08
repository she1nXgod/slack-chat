import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { useEffect, useRef } from 'react'
import { Formik } from 'formik'
import { channelSchema } from '../../schemas/index.js'
import { createChannel, getChannels } from '../../api/chatApi.js'
import { useDispatch } from 'react-redux'
import { setCurrentChannel } from '../../slices/uiSlice.js'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'
import { filterProfanity } from '../../utils/profanityFilter.js'

const CreateChannelModal = ({ handleClose }) => {
  const { data: channels = [] } = getChannels()
  const inputRef = useRef(null)
  const [create] = createChannel()
  const dispatch = useDispatch()
  const { t } = useTranslation()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const onSubmit = async ({ name }) => {
    try {
      const filteredName = filterProfanity(name)
      const newChannel = { name: filteredName }

      const { id } = await create(newChannel).unwrap()

      dispatch(setCurrentChannel(id))
      toast.success(t('channels.toasts.create'))
    }
    catch (err) {
      console.error(err.status)
      toast.error(t('channels.toasts.errors.create'))
    }
    finally {
      handleClose()
    }
  }

  return (
    <Modal show onHide={handleClose} centered>
      <Formik
        initialValues={{
          name: '',
        }}
        validationSchema={() => channelSchema(channels, t)}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, handleChange, handleBlur, values, errors, submitCount, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>
                {t('modals.add')}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group className="pb-1" controlId="channelName">
                <Form.Label>
                  {t('modals.label')}
                </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  ref={inputRef}
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={submitCount > 0 && errors.name}
                  autoComplete="off"
                  autoFocus
                />
              </Form.Group>
              {submitCount > 0 && errors.name
                ? (
                    <div className="text-danger small">
                      {errors.name}
                    </div>
                  )
                : null}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                {t('modals.cancel')}
              </Button>
              <Button disabled={isSubmitting} type="submit" variant="primary">
                {isSubmitting
                  ? t('modals.loading')
                  : t('modals.send')}
              </Button>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  )
}

export default CreateChannelModal
