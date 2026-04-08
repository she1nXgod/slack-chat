import Stack from 'react-bootstrap/Stack'
import { getChannels, getMessages } from '../api/chatApi'
import { useSelector } from 'react-redux'
import { selectCurrentChannel } from '../slices/uiSlice'
import { useTranslation } from 'react-i18next'

const ChatHeader = () => {
  const { data: channels } = getChannels()
  const { data: messages } = getMessages()
  const currentChannelId = useSelector(selectCurrentChannel)
  const { t } = useTranslation()

  const currentChannel = channels?.find(({ id }) => id === currentChannelId)
  const channelName = currentChannel?.name || t('messages.loading')
  const сountMessages = messages?.filter(({ channelId }) => channelId === currentChannelId).length ?? 0

  return (
    <Stack gap={0}>
      <b>
{`# ${channelName}`}
</b>
      <span className="small text-muted">
{`${t('messages.messagesCount')} ${сountMessages}`}
</span>
    </Stack>
  )
}

export default ChatHeader
