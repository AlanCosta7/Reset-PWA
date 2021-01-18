export default function () {
  return {
    currentUser: null,
    currentUserModelo: {
      cpf: '',
      codedPassword: '',
      avatar: '',
      name: '',
      birth: '',
      institution: '',
      skills: [],
      profession: '',
      tuto: '',
      mentor: '',
      schooling: '',
      learningStyle: '',
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
    listaTrilha: null
  }
}
