import { Navbar, Button } from 'react-bootstrap'
import { logout, selectCurrentToken } from '../../slices/authSlice.js'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const isAuth = useSelector(selectCurrentToken)
  const dispatch = useDispatch()
  const { t } = useTranslation()

  return (
    <Navbar className="g-0 vw-100 px-5 border-bottom border-secondary-subtle p-2 bg-white justify-content-between">
      <Navbar.Brand href="/" className="h5 m-0">
        {t('header.brand')}
      </Navbar.Brand>
      {isAuth
        ? (
            <Button onClick={() => dispatch(logout())}>
              {t('header.exit')}
            </Button>
          )
        : null}
    </Navbar>
  )
}

export default Header
