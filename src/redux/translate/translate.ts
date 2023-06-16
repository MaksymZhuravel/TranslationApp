import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ILanguage, QueryDetailsParams} from '~types/api/translateApi.types';

const buildQueryString = (
  path: string,
  // {date, orderType, orderBy, rangeStart, rangeEnd, selectedWorkspaceSubdomain}: QueryDetailsParams & ExtraOptions,
) => {
  const queryParams = new URLSearchParams();
  // if (orderType && orderBy && date) {
  //   queryParams.append('orderBy', orderBy);
  //   queryParams.append('orderType', orderType);
  //   queryParams.append('date', date);
  // } else if (date) {
  //   queryParams.append('date', date);
  // } else if (rangeStart && rangeEnd) {
  //   queryParams.append('rangeStart', rangeStart);
  //   queryParams.append('rangeEnd', rangeEnd);
  // }
  const queryString = queryParams.toString() ? `?${queryParams}` : '';

  return `http://localhost:3000${path}${queryString}`;
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
        url: buildQueryString('/languages'), // add params here if needed
      }),
    }),
  }),
});

export const {useGetLanguagesQuery} = translateApi;
