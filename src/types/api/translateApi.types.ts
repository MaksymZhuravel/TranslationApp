export interface ILanguage {
  id: string;
  code: string;
  iconId: string;
  createdAt: string;
  updatedAt: string;
  translatedCount: number;
}

export interface Translations {
  id: string;
  key: string;
  createdAt: string;
  updatedAt: string;
  translations: Translation[];
}

export interface Translation {
  id: string;
  keyId: string;
  text: string;
  languageId: string;
  createdAt: string;
  updatedAt: string;
  language: {
    code: string;
  };
}

export interface QueryDetailsParams {}

export interface TranslationBody {
  key: string;
  code: string;
  text: string;
}

export interface TranslationPathParams {
  translationId: string;
  text: string;
}
