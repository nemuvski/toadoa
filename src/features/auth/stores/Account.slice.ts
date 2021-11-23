import { createSlice } from '@reduxjs/toolkit'
import { Account } from '~/features/auth/models/Account'
import RestError from '~/exceptions/RestError'
import { createAccountAction, getAccountAction } from '~/features/auth/stores/Account.action'

export interface AccountState {
  account: Account | null
  error?: RestError | null
  isLoading: boolean
}

const initialState: AccountState = {
  account: null,
  error: null,
  isLoading: false,
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    clearAccountState: (state) => ({
      ...state,
      account: null,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(getAccountAction.pending, (state) => ({
      ...state,
      isLoading: true,
    }))
    builder.addCase(getAccountAction.rejected, (state, action) => ({
      ...state,
      error: action.payload,
      isLoading: false,
    }))
    builder.addCase(getAccountAction.fulfilled, (state, action) => ({
      ...state,
      account: action.payload,
      isLoading: false,
    }))

    builder.addCase(createAccountAction.pending, (state) => ({
      ...state,
      isLoading: true,
    }))
    builder.addCase(createAccountAction.rejected, (state, action) => ({
      ...state,
      error: action.payload,
      isLoading: false,
    }))
    builder.addCase(createAccountAction.fulfilled, (state, action) => ({
      ...state,
      account: action.payload,
      isLoading: false,
    }))
  },
})

export const { clearAccountState } = accountSlice.actions
