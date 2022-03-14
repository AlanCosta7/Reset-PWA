
export const setCurrentUser = (state, payload) => {
  if (payload) {
    var currentUserModelo =   state.currentUserModelo
    let merged = {...currentUserModelo, ...payload};
    state.currentUser = merged
  } else {
    state.currentUser = payload
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

export const setTrilha = (state, payload) => {
  state.trilha = payload
};

export const setListaTrilha = (state, payload) => {
  state.listaTrilha = payload
};

export const setlistMentoriados = (state, payload) => {
  state.listMentoriados = payload
};

export const setInstituicaoAll = (state, payload) => {
  state.instituicaoAll = payload
};

export const setStudent = (state, payload) => {
  console.log('setStudent',payload)
  state.selectStudent = payload
};
