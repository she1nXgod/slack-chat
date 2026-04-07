export default {
  translation: {
    header: {
      brand: 'Hexlet Chat',
      exit: 'Выйти',
    },
    loginPage: {
      title: 'Войти',
      username: 'Ваш ник',
      password: 'Пароль',
      loginProcess: 'Вход...',
      login: 'Войти',
      noAccount: 'Нет аккаунта?',
      signup: 'Регистрация',
      validation: {
        required: 'Обязательное поле',
      },
      error: 'Неверный логин или пароль',
    },
    signupPage: {
      title: 'Регистрация',
      username: 'Имя пользователя',
      password: 'Пароль',
      passwordConfirmation: 'Подтвердите пароль',
      signupProcess: 'Регистрация...',
      signup: 'Зарегистрироваться',
      hasAccount: 'Уже есть аккаунт?',
      login: 'Войти',
      validation: {
        usernameLength: 'От 3 до 20 символов',
        passwordMin: 'Не менее 6 символов',
        passwordsMatch: 'Пароли должны совпадать',
        required: 'Обязательное поле',
      },
      errors: {
        userExists: 'Такой пользователь уже существует',
      },
    },
    notFoundPage: {
      errorStatus: '404',
      notFound: 'Страница не найдена',
    },
    channels: {
      title: 'Каналы',
      rename: 'Переименовать',
      remove: 'Удалить',
      validation: {
        minLength: 'Минимум 3 символа',
        maxLength: 'Максимум 20 символов',
        required: 'Обязательное поле',
        duplicate: 'Канал с таким именем уже существует',
      },
      toasts: {
        create: 'Канал создан',
        remove: 'Канал удален',
        rename: 'Канал переименован',
        errors: {
          create: 'Ошибка создания канала',
          rename: 'Ошибка переименования канала',
          remove: 'Ошибка удаления канала',
        },
      },
      errors: {
        errorLoadingChannels: 'Не удалось загрузить каналы',
      },
    },
    modals: {
      add: 'Добавить канал',
      rename: 'Переименовать канал',
      remove: 'Удалить канал',
      removeSubmit: 'Удалить',
      cancel: 'Отменить',
      send: 'Отправить',
      removeConfirm: 'Уверены, что хотите удалить канал',
      label: 'Имя канала',
      loading: 'Загрузка...',
    },
    messages: {
      placeholder: 'Введите сообщение...',
      send: 'Отправить',
      messagesCount: 'сообщений:',
      loading: 'Загрузка...',
      errors: {
        errorLoadingMessages: 'Не удалось загрузить чат',
      },
    },
  },
};
