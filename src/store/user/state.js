export default function () {
  return {
    currentUser: null,
    selectStudent: null,
    currentUserModelo: {
      cpf: '',
      avatar: '',
      name: '',
      birth: '',
      institution: '',
      skills: [],
      profession: '',
      schooling: '',
      learningStyle: '',
      token: '',
      type: '',
      address: {
        street: '',
        number: '',
        city: '',
        state: '',
        coord: ''
      }
    },
    institution: {
      type: 'institution',
      cnpj: '12018110748',
      name: '',
      email: '',
      phone: '',
      address: {
        street: '',
        number: '',
        city: '',
        state: '',
        coord: ''
      }
    },
    err: null,
    geoLocation: null,
    listStudent: [],
    dialogStudent: null,
    trilha: null,
    listaTrilha: null,
    listMentoriados: null,
    instituicaoAll: []
  }
}
