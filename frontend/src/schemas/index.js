import * as Yup from 'yup';

export const createChannelModalSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'От 3 до 20 символов')
    .max(20, 'От 3 до 20 символов')
    .required('Обязательное поле'),
});
