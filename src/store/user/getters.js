
export const currentUser = (state) => state.currentUser
export const err = (state) => state.err
export const listaJovem = (state) => state.listaJovem

export const getLetterUser = state => {
  const { currentUser } = state
  return currentUser.name ? currentUser.name[0] : '.'
}
