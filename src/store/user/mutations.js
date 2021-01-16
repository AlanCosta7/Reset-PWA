import { LocalStorage } from 'quasar'

export const setCurrentUser = (state, payload) => {
  if (payload !== 'null') {
    LocalStorage.set('user', payload)
    state.currentUser = payload

  }
};

export const setErr = (state, payload) => {
  state.err = payload
};
