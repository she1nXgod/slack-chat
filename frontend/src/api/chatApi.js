import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../config.js';

export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Messages', 'Channels'],
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: () => 'messages',
      providesTags: ['Messages'],
    }),
    getChannels: builder.query({
      query: () => 'channels',
      providesTags: ['Channels'],
    }),
  }),
});

const { useGetMessagesQuery, useGetChannelsQuery } = chatApi;

export { useGetMessagesQuery as getMessages, useGetChannelsQuery as getChannels };
