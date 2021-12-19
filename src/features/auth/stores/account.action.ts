import { createAsyncThunk } from '@reduxjs/toolkit'
import { Account } from '~/features/auth/models/account'
import RestError from '~/exceptions/RestError'
import { createAccount, getAccount } from '~/features/auth/infrastructure/account'

export const getAccountAction = createAsyncThunk<Account | null, string, { rejectValue: RestError }>(
  'account/getAccount',
  async (userUID: Alias.UserUID, { rejectWithValue }) => {
    try {
      return await getAccount(userUID)
    } catch (error) {
      return rejectWithValue(error as RestError)
    }
  }
)

export const createAccountAction = createAsyncThunk<Account | null, string, { rejectValue: RestError }>(
  'account/createAccount',
  async (userUID: Alias.UserUID, { rejectWithValue }) => {
    try {
      return await createAccount(userUID)
    } catch (error) {
      return rejectWithValue(error as RestError)
    }
  }
)
