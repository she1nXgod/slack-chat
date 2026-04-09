import { useRef, useEffect } from 'react'
import { getMessages } from '../../api/chatApi'
import { MessageItem, Loader, ErrorAlert } from '../'
import { useSelector } from 'react-redux'
import { selectCurrentChannel } from '../../slices/channelsSlice'
import { useTranslation } from 'react-i18next'

const MessagesList = () => {
  const { data: messages, error, isLoading } = getMessages()
  const messagesEndRef = useRef(null)
  const currentChannelId = useSelector(selectCurrentChannel)
  const { t } = useTranslation()

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, currentChannelId])

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return (
      <ErrorAlert>
        {t('messages.errors.errorLoadingMessages')}
      </ErrorAlert>
    )
  }

  const currentChannelMessages = messages.filter(({ channelId }) => channelId === currentChannelId)

  return (
    <>
      {currentChannelMessages.map(({ id, body, channelId, username }) => (
        <MessageItem key={id} body={body} username={username} channelId={channelId} />
      ))}
      <div ref={messagesEndRef} aria-hidden="true" />
    </>
  )
}

export default MessagesList
