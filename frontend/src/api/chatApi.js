import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../config.js';
import { socket } from '../socket.js';
import { setCurrentChannel } from '../slices/uiSlice.js';

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

    sendMessage: builder.mutation({
      query: (newMessage) => ({
        url: 'messages',
        body: newMessage,
        method: 'POST',
      }),
    }),

    getChannels: builder.query({
      query: () => 'channels',
      providesTags: ['Channels'],
      async onCacheEntryAdded(
        arg,
        { dispatch, getState, updateCachedData, cacheDataLoaded, cacheEntryRemoved },
      ) {
        try {
          await cacheDataLoaded;

          const handleNewChannel = (newChannel) => {
            updateCachedData((draft) => {
              draft.push(newChannel);
            });
          };

          const handleRemoveChannel = ({ id: channelId }) => {
            updateCachedData((draft) => {
              return draft.filter((channel) => channel.id !== channelId);
            });

            const currentChannelId = getState().ui.currentChannel;
            if (currentChannelId === channelId) {
              dispatch(setCurrentChannel('1'));
            }
          };

          const handleEditChannel = ({ id, name }) => {
            updateCachedData((draft) => {
              return draft.map((channel) => (channel.id === id ? { ...channel, name: name } : channel));
            });
          };

          socket.on('newChannel', handleNewChannel);
          socket.on('removeChannel', handleRemoveChannel);
          socket.on('renameChannel', handleEditChannel);
        } catch (err) {
          console.error('Cache was not loaded:' + err);
        }

        await cacheEntryRemoved;
        socket.off('newChannel');
        socket.off('removeChannel');
        socket.off('renameChannel');
      },
    }),

    createChannel: builder.mutation({
      query: (newChannel) => ({
        url: 'channels',
        body: newChannel,
        method: 'POST',
      }),
    }),

    deleteChannel: builder.mutation({
      query: (id) => ({
        url: `channels/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Messages'],
    }),

    editChannel: builder.mutation({
      query: ({ id, newName }) => ({
        url: `channels/${id}`,
        body: newName,
        method: 'PATCH',
      }),
    }),
  }),
});

const {
  useGetMessagesQuery,
  useGetChannelsQuery,
  useSendMessageMutation,
  useCreateChannelMutation,
  useDeleteChannelMutation,
  useEditChannelMutation,
} = chatApi;

export {
  useGetMessagesQuery as getMessages,
  useGetChannelsQuery as getChannels,
  useSendMessageMutation as sendMessage,
  useCreateChannelMutation as createChannel,
  useDeleteChannelMutation as deleteChannel,
  useEditChannelMutation as editChannel,
};
