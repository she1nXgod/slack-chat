import Stack from 'react-bootstrap/Stack'
import { MainLayout } from '../components'
import { useTranslation } from 'react-i18next'

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <MainLayout>
      <Stack gap={1} className="justify-content-center text-center">
        <h1 className="h1 display-1">{t('notFoundPage.errorStatus')}</h1>
        <p className="fs-4 lead">{t('notFoundPage.notFound')}</p>
      </Stack>
    </MainLayout>
  )
}

export default NotFound
