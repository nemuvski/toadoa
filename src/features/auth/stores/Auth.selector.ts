import { RootState } from '~/stores/Store'

export const selectAuth = (state: RootState) => state.auth

export const selectAuthSession = (state: RootState) => state.auth.session
