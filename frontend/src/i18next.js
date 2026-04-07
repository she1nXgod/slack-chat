import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './locales/index.js';

const initI18n = () => {
  return i18n.use(initReactI18next).init({
    resources,
    lng: 'ru',
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
  });
};

export default initI18n;
