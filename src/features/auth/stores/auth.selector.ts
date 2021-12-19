import { RootState } from '~/stores/store'

export const selectAuth = (state: RootState) => state.auth

export const selectAuthSession = (state: RootState) => state.auth.session

export const selectUserUID = (state: RootState): Alias.UserUID | null => {
  if (state.auth.session && state.auth.session.user) {
    return state.auth.session.user.id
  }
  return null
}
