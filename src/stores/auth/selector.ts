import { RootState } from '~/stores/store'

export const selectAuth = (state: RootState) => state.auth

export const selectAuthSession = (state: RootState) => state.auth.session
