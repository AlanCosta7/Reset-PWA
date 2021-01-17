import { LocalStorage } from 'quasar'

export const setCurrentUser = (state, payload) => {
  if (payload) {
    var currentUserModelo =   state.currentUserModelo
    let merged = {...currentUserModelo, ...payload};
    LocalStorage.set('user', merged)
    state.currentUser = merged

  }
};

export const setErr = (state, payload) => {
  state.err = payload
};

export const setGeoLocation = (state, payload) => {
  state.geoLocation = payload
};

export const setInstitution = (state, payload) => {
    state.institution = payload
};

export const setListStudent = (state, payload) => {
  state.listStudent = payload
};

export const setDialogStudent = (state, payload) => {
  state.dialogStudent = payload
};

