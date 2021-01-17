import axios from 'axios'
import { LocalStorage } from 'quasar'

export function signInWithCpfAndPassword ({ commit, state }, payload) {
  // axios
    var path
    var mentor = "https://reset-back-end.herokuapp.com/login/mentor"
    var student = "https://reset-back-end.herokuapp.com/login/student"
    var data = {
        cpf: payload.cpf,
        password: payload.password,
    }

    if(payload.path === 'student') {
      path = student
    } else if (payload.path === 'mentor') {
      path = mentor
    } else {
      return
    }

    return axios.get(path, data).then(function (response) {

      if (response.status == "200") {
        response.data.type = payload.path
        commit('setCurrentUser', response.data)
        console.log('signInWithCpfAndPassword', response)
      }
    })

}

export function createUserWithCpfAndPassword ({ commit, state }, payload) {
  var path
  var student = "https://reset-back-end.herokuapp.com/signup/student"
  var mentor = "https://reset-back-end.herokuapp.com/signup/mentor"
  var data = {
    cpf: payload.cpf,
    password: payload.password,
  }

  if(payload.path === 'student') {
    path = student
  } else if (payload.path === 'mentor') {
    path = mentor
  } else {
    return
  }

  return axios.post(path, data).then(function (response) {

    if (response.status == "200") {
      response.data.type = payload.path
      commit('setCurrentUser', response.data)
      console.log('signInWithCpfAndPassword', response)
    }
  })

}

export function saveProfile ({ commit, state }, payload) {
  // axios
  var token = state.currentUser.token
  var path
  var student = "https://reset-back-end.herokuapp.com/student"
  var mentor = "https://reset-back-end.herokuapp.com/mentor"
  var data

  if(payload.type === 'student') {
    path = student
    data = {
      name: payload.name,
      birth: payload.birth,
      institution: payload.institution,
      skills: payload.skills,
      avatar: payload.avatar,
      schooling: payload.schooling,
      email: payload.email,
      codedPassword: payload.codedPassword
    }

  } else if (payload.type === 'mentor') {
    path = mentor
    data = {
      name: payload.name,
      birth: payload.birth,
      address: payload.address,
      skills: payload.skills,
      schooling: payload.schooling,
      profession: payload.profession
    }
  } else {
    return
  }

  return axios({
    method: 'PUT',
    url: path,
    data: data,
    headers: {
      "Content-Type": "application/json",
      token: token
    }
  }).then(function (response) {

    console.log('saveProfile', response)
    if (response.status == "200") {
      response.data.type = payload.path
      commit('setCurrentUser', response.data)
     // console.log('saveProfile', response)
    }
  })

}

export function loadUser ({ commit, state }) {
  // axios
 var user = LocalStorage.getItem('user')
 commit('setCurrentUser', user)

 return user
}

export function logout ({ commit, state }) {
  // axios
 LocalStorage.set('user', null)
 commit('setCurrentUser', null)

 return true
}

export function saveInstitution ({ commit, state }, payload) {
  // axios
 console.log('saveInstitution', payload)
 commit('setInstitution', payload)

 return payload
}

export function getListStudent ({ commit, state }, payload) {
  // axios
  var path = "https://reset-back-end.herokuapp.com/mentor/students"
  var token = state.currentUser.token


  return axios.post(path, token).then(function (response) {

    if (response.status == "200") {
      commit('setCurrentUser', response.data)
      console.log('signInWithCpfAndPassword', response)
    }
  })
}
