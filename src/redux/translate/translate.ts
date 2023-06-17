import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {
  ILanguage,
  QueryDetailsParams,
  TranslationBody,
  TranslationPathParams,
  Translations,
} from '~types/api/translateApi.types';

const buildQueryString = (path: string) => {
  const queryParams = new URLSearchParams();
  const queryString = queryParams.toString() ? `?${queryParams}` : '';

  return `https://translation-api-d85cd220a123.herokuapp.com/${path}${queryString}`;
};

export const translateApi = createApi({
  reducerPath: 'translateApi',
  baseQuery: fetchBaseQuery({
    prepareHeaders: async headers => {
      headers.set('Accept', 'application/json');
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: builder => ({
    getLanguages: builder.query<ILanguage[], QueryDetailsParams>({
      query: _params => ({
        url: buildQueryString('languages'), // add params here if needed
      }),
    }),
    getTranslations: builder.query<Translations[], QueryDetailsParams>({
      query: _params => ({
        url: buildQueryString('translation'), // add params here if needed
      }),
    }),
    postTranslation: builder.mutation<void, TranslationBody>({
      query: data => ({
        url: buildQueryString('translation'), // add params here if needed
        method: 'POST',
        body: data,
      }),
    }),
    pathTranslation: builder.mutation<void, TranslationPathParams>({
      query: data => ({
        url: buildQueryString(`translation/${data.translationId}`), // add params here if needed
        method: 'PATCH',
        body: {
          text: data.text,
        },
      }),
    }),
  }),
});

export const {
  useGetLanguagesQuery,
  useGetTranslationsQuery,
  usePostTranslationMutation,
  usePathTranslationMutation,
} = translateApi;
