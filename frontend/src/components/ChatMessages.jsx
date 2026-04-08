import { useRef, useEffect } from 'react'
import { getMessages } from '../api/chatApi'
import { Message, LoadingSpinner, ErrorMessage } from './'
import { useSelector } from 'react-redux'
import { selectCurrentChannel } from '../slices/uiSlice'
import { useTranslation } from 'react-i18next'

const ChatMessages = () => {
  const { data: messages, error, isLoading } = getMessages()
  const messagesEndRef = useRef(null)
  const currentChannelId = useSelector(selectCurrentChannel)
  const { t } = useTranslation()

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, currentChannelId])

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (error) {
    return (
      <ErrorMessage>
        {t('messages.errors.errorLoadingMessages')}
      </ErrorMessage>
    )
  }

  const currentChannelMessages = messages.filter(({ channelId }) => channelId === currentChannelId)

  return (
    <>
      {currentChannelMessages.map(({ id, body, channelId, username }) => (
        <Message key={id} body={body} username={username} channelId={channelId} />
      ))}
      <div ref={messagesEndRef} aria-hidden="true" />
    </>
  )
}

export default ChatMessages
