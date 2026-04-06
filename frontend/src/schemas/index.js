import * as Yup from 'yup';

export const createChannelSchema = (channels, currentChannelName) =>
  Yup.object().shape({
    name: Yup.string()
      .min(3, 'От 3 до 20 символов')
      .max(20, 'От 3 до 20 символов')
      .required('Обязательное поле')
      .test('no-repeat-channel', 'Канал с таким именем уже существует', (channelName) => {
        const channelsName = channels.map((c) => c.name);

        if (channelName === currentChannelName) return true;
        return !channelsName.includes(channelName);
      }),
  });

export const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'От 3 до 20 символов')
    .max(20, 'От 3 до 20 символов')
    .required('Обязательное поле'),
  password: Yup.string().min(6, 'Не менее 6 символов').required('Обязательное поле'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать')
    .required('Обязательное поле'),
});
