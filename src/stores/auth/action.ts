import { createAsyncThunk } from '@reduxjs/toolkit'
import { Session } from '@supabase/supabase-js'
import { ApiError } from '@supabase/gotrue-js/dist/module/GoTrueApi'
import { supabase } from '~/libs/supabase'

export const signInAction = createAsyncThunk<Session | null, string, { rejectValue: ApiError }>(
  'auth/signIn',
  async (email: string, { rejectWithValue }) => {
    const { session, error } = await supabase.auth.signIn({ email })
    if (error) {
      return rejectWithValue(error)
    }
    return session
  }
)

export const signOutAction = createAsyncThunk<void, void, { rejectValue: ApiError }>(
  'auth/signOut',
  async (_, { rejectWithValue }) => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      return rejectWithValue(error)
    }
  }
)
