import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '~/stores/auth/slice'

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
