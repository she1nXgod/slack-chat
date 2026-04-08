import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URL } from '../config.js'
import { socket } from '../socket.js'
import { setCurrentChannel } from '../slices/uiSlice.js'
import { logout } from '../slices/authSlice.js'
import { toast } from 'react-toastify'

const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  },
})

const customBaseQuery = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions)
  if (result.error) {
    const { status } = result.error

    if (status === 401) {
      api.dispatch(logout())
    }
    else if (status === 'FETCH_ERROR') {
      console.error('Network error: ', result.error)
      toast.error('Ошибка соединения')
    }
  }

  return result
}

export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: customBaseQuery,
  tagTypes: ['Messages', 'Channels'],
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: () => 'messages',
      providesTags: ['Messages'],
      async onCacheEntryAdded(arg, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
        const handleNewMessage = (newMessage) => {
          updateCachedData((draft) => {
            draft.push(newMessage)
          })
        }

        try {
          await cacheDataLoaded
          socket.on('newMessage', handleNewMessage)
        }
        catch (err) {
          console.error('Cache was not loaded: ', err)
        }

        await cacheEntryRemoved
        socket.off('newMessage', handleNewMessage)
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
        const handleNewChannel = (newChannel) => {
          updateCachedData((draft) => {
            draft.push(newChannel)
          })
        }

        const handleRemoveChannel = ({ id: channelId }) => {
          updateCachedData((draft) => {
            return draft.filter((channel) => channel.id !== channelId)
          })

          const currentChannelId = getState().ui.currentChannel
          if (currentChannelId === channelId) {
            dispatch(setCurrentChannel('1'))
          }
        }

        const handleEditChannel = ({ id, name }) => {
          updateCachedData((draft) => {
            return draft.map((channel) => (channel.id === id
              ? { ...channel, name: name }
              : channel))
          })
        }

        try {
          await cacheDataLoaded
          socket.on('newChannel', handleNewChannel)
          socket.on('removeChannel', handleRemoveChannel)
          socket.on('renameChannel', handleEditChannel)
        }
        catch (err) {
          console.error('Cache was not loaded: ', err)
        }

        await cacheEntryRemoved
        socket.off('newChannel', handleNewChannel)
        socket.off('removeChannel', handleRemoveChannel)
        socket.off('renameChannel', handleEditChannel)
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
})

const {
  useGetMessagesQuery,
  useGetChannelsQuery,
  useSendMessageMutation,
  useCreateChannelMutation,
  useDeleteChannelMutation,
  useEditChannelMutation,
} = chatApi

export {
  useGetMessagesQuery as getMessages,
  useGetChannelsQuery as getChannels,
  useSendMessageMutation as sendMessage,
  useCreateChannelMutation as createChannel,
  useDeleteChannelMutation as deleteChannel,
  useEditChannelMutation as editChannel,
}
