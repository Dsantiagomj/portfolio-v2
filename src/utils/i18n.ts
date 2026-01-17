import en from '@/i18n/en.json';
import es from '@/i18n/es.json';

export type Locale = 'en' | 'es';

const translations = {
  en,
  es
};

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.en;
}

export function getLocaleFromUrl(url: URL): Locale {
  const pathname = url.pathname;
  if (pathname.startsWith('/es')) {
    return 'es';
  }
  return 'en';
}
