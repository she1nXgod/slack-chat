import { Form, Button, Row, Col } from 'react-bootstrap'
import { useRef, useState } from 'react'
import { sendMessage } from '../api/chatApi.js'
import { useSelector } from 'react-redux'
import { selectCurrentUsername } from '../slices/authSlice.js'
import { selectCurrentChannel } from '../slices/uiSlice.js'
import { useTranslation } from 'react-i18next'
import { filterProfanity } from '../utils/profanityFilter.js'

const MessageForm = () => {
  const [text, setText] = useState('')
  const inputElement = useRef(null)
  const [send] = sendMessage()
  const currentUsername = useSelector(selectCurrentUsername)
  const currentChannelId = useSelector(selectCurrentChannel)
  const { t } = useTranslation()

  const handleSubmit = (e) => {
    e.preventDefault()

    const filteredText = filterProfanity(text)
    const newMessage = { body: filteredText, channelId: currentChannelId, username: currentUsername }
    send(newMessage)

    setText('')
    inputElement.current.focus()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Group>
            <Form.Control
              type="text"
              ref={inputElement}
              value={text}
              aria-label={t('messages.newMessage')}
              placeholder={t('messages.placeholder')}
              autoComplete="off"
              onChange={(e) => setText(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs="auto">
          <Button disabled={!text.trim()} type="submit">
            {t('messages.send')}
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default MessageForm
