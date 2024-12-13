import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translation_fr from './fr';
import translation_en from './en';
import translation_es from './es';
import translation_id from './id';
import translation_ja from './ja';
import { createTranslationTable, flattenObject } from './until';
import translation_vi from './vi';
import translation_zh from './zh';
import translation_zh_traditional from './zh-traditional';

const resources = {
  fr: translation_fr,
  en: translation_en,
  zh: translation_zh,
  'zh-TRADITIONAL': translation_zh_traditional,
  id: translation_id,
  ja: translation_ja,
  es: translation_es,
  vi: translation_vi,
};
const frFlattened = flattenObject(translation_fr);
const enFlattened = flattenObject(translation_en);
const viFlattened = flattenObject(translation_vi);
const esFlattened = flattenObject(translation_es);
const zhFlattened = flattenObject(translation_zh);
const zh_traditionalFlattened = flattenObject(translation_zh_traditional);
export const translationTable = createTranslationTable(
  [frFlattened,enFlattened, viFlattened, esFlattened, zhFlattened, zh_traditionalFlattened],
  ['Francais','English', 'Vietnamese', 'Spanish', 'zh', 'zh-TRADITIONAL'],
);
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection: {
      lookupLocalStorage: 'lng',
    },
    supportedLngs: ['fr','en', 'zh', 'zh-TRADITIONAL', 'id', 'es', 'vi', 'ja'],
    resources,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
