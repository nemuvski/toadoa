import { createAsyncThunk } from '@reduxjs/toolkit'
import { Session } from '@supabase/supabase-js'
import { signIn, signOut } from '~/features/auth/infrastructure/auth'
import SupabaseApiError from '~/exceptions/SupabaseApiError'

export const signInAction = createAsyncThunk<Session | null, string, { rejectValue: SupabaseApiError }>(
  'auth/signIn',
  async (email: string, { rejectWithValue }) => {
    try {
      return await signIn(email)
    } catch (error) {
      return rejectWithValue(error as SupabaseApiError)
    }
  }
)

export const signOutAction = createAsyncThunk<void, void, { rejectValue: SupabaseApiError }>(
  'auth/signOut',
  async (_, { rejectWithValue }) => {
    try {
      await signOut()
    } catch (error) {
      return rejectWithValue(error as SupabaseApiError)
    }
  }
)
