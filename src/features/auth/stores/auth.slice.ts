import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Session } from '@supabase/supabase-js'
import { signInAction, signOutAction } from '~/features/auth/stores/auth.action'
import SupabaseApiError from '~/exceptions/SupabaseApiError'

export interface AuthState {
  session: Session | null
  error?: SupabaseApiError | null
  isLoading: boolean
}

const initialState: AuthState = {
  session: null,
  error: null,
  isLoading: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<Session | null>) => ({
      ...state,
      session: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(signInAction.pending, (state) => ({
      ...state,
      isLoading: true,
    }))
    builder.addCase(signInAction.rejected, (state, action) => ({
      ...state,
      error: action.payload,
      isLoading: false,
    }))
    builder.addCase(signInAction.fulfilled, (state, action) => ({
      ...state,
      session: action.payload,
      isLoading: false,
    }))

    builder.addCase(signOutAction.pending, (state) => ({
      ...state,
      isLoading: true,
    }))
    builder.addCase(signOutAction.rejected, (state, action) => ({
      ...state,
      error: action.payload,
      isLoading: false,
    }))
    builder.addCase(signOutAction.fulfilled, (state) => ({
      ...state,
      session: null,
      isLoading: false,
    }))
  },
})

export const { setAuthState } = authSlice.actions
