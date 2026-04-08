import { Stack } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const NotFoundContent = () => {
  const { t } = useTranslation()

  return (
    <Stack gap={1} className="justify-content-center text-center">
      <h1 className="h1 display-1">
{t('notFoundPage.errorStatus')}
</h1>
      <p className="fs-4 lead">
{t('notFoundPage.notFound')}
</p>
    </Stack>
  )
}

export default NotFoundContent
