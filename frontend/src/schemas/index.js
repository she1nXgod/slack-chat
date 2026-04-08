import * as Yup from 'yup'

export const channelSchema = (channels, t, currentChannelName) =>
  Yup.object().shape({
    name: Yup.string()
      .min(3, t('channels.validation.minLength'))
      .max(20, t('channels.validation.maxLength'))
      .required(t('channels.validation.required'))
      .test('no-repeat-channel', t('channels.validation.duplicate'), (channelName) => {
        const channelsName = channels.map(c => c.name)

        if (channelName === currentChannelName) return true
        return !channelsName.includes(channelName)
      }),
  })

export const signupSchema = t =>
  Yup.object().shape({
    username: Yup.string()
      .min(3, t('signupPage.validation.usernameLength'))
      .max(20, t('signupPage.validation.usernameLength'))
      .required(t('signupPage.validation.required')),
    password: Yup.string()
      .min(6, t('signupPage.validation.passwordMin'))
      .required(t('signupPage.validation.required')),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], t('signupPage.validation.passwordsMatch'))
      .required(t('signupPage.validation.required')),
  })

export const loginSchema = t =>
  Yup.object().shape({
    username: Yup.string().required(t('loginPage.validation.required')),
    password: Yup.string().required(t('loginPage.validation.required')),
  })
