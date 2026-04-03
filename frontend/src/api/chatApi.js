import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../config.js';
import { socket } from '../socket.js';

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
      async onCacheEntryAdded(arg, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
        try {
          await cacheDataLoaded;

          const handleNewMessage = (newMessage) => {
            updateCachedData((draft) => {
              draft.push(newMessage);
            });
          };

          socket.on('newMessage', handleNewMessage);
        } catch (err) {
          console.error('Cache was not loaded:' + err);
        }

        await cacheEntryRemoved;
        socket.off('newMessage');
      },
    }),

    getChannels: builder.query({
      query: () => 'channels',
      providesTags: ['Channels'],
    }),

    sendMessage: builder.mutation({
      query: (newMessage) => ({
        url: 'messages',
        body: newMessage,
        method: 'POST',
      }),
    }),
  }),
});

const { useGetMessagesQuery, useGetChannelsQuery, useSendMessageMutation } = chatApi;

export {
  useGetMessagesQuery as getMessages,
  useGetChannelsQuery as getChannels,
  useSendMessageMutation as sendMessage,
};
