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
