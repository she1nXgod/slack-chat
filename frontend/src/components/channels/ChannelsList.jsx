import Nav from 'react-bootstrap/Nav'
import { getChannels } from '../../api/chatApi.js'
import { ChannelItem, ErrorAlert, Loader } from '../index.js'
import { useTranslation } from 'react-i18next'

const ChannelsList = ({ showModal }) => {
  const { data: channels, isLoading, error } = getChannels()
  const { t } = useTranslation()

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return (
      <ErrorAlert>
        {t('channels.errors.errorLoadingChannels')}
      </ErrorAlert>
    )
  }

  return (
    <Nav className="flex-column h-100 w-100 m-0 overflow-auto">
      {channels.map(({ id, name, removable }) => (
        <ChannelItem key={id} id={id} name={name} removable={removable} showModal={showModal} />
      ))}
    </Nav>
  )
}

export default ChannelsList
