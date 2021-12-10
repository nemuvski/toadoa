import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '~/features/auth/stores/Auth.slice'
import { accountSlice } from '~/features/auth/stores/Account.slice'

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [accountSlice.name]: accountSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  devTools: !import.meta.env.PROD,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
