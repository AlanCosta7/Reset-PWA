import axios from 'axios'
import { LocalStorage } from 'quasar'

export function signInWithCpfAndPassword ({ commit, state }, payload) {
  // axios
    var path
    var mentor = "https://reset-back-end.herokuapp.com/login/mentor"
    var student = "https://reset-back-end.herokuapp.com/login/student"

    if(payload.path === 'student') {
      path = student
    } else if (payload.path === 'mentor') {
      path = mentor
    } else {
      return
    }

    return axios({
      url: path,
      method: 'POST',
      data: {
        cpf: payload.cpf,
        password: payload.password
      },
      contentType: "application/json",
      dataType: "json",
    }).then(function (response) {

     // console.log('signInWithCpfAndPassword', response)
      if (response.status == "200") {
        response.data.type = payload.path
        commit('setCurrentUser', response.data)
        console.log('signInWithCpfAndPassword', response)
        return response.data
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

  return axios({
    method: 'POST',
    url: path,
    data: data,
    headers: {
      "Content-Type": "application/json",
    }
  }).then(function (response) {

    console.log('signInWithCpfAndPassword', response)
    if (response.status == "201") {
      commit('setCurrentUser', response.data)
      console.log('signInWithCpfAndPassword', response)
      return response.data

    }
  })

}

export function saveProfile ({ commit, state }, payload) {
  // axios
  var token = state.currentUser.token
  var path
  var student = "https://reset-back-end.herokuapp.com/student"
  var mentor = "https://reset-back-end.herokuapp.com/mentor"

  if(payload.type === 'student') {
    path = student
  } else if (payload.type === 'mentor') {
    path = mentor
  } else {
    return
  }

  return axios({
    method: 'PUT',
    url: path,
    data: state.currentUser,
    headers: {
      "Content-Type": "application/json",
      token: token
    }
  }).then(function (response) {

    console.log('saveProfile', response)
    return response

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


  return axios({
    method: 'GET',
    url: path,
    headers: {
      "Content-Type": "application/json",
      token: token
    }
  }).then(function (response) {

    if (response.status == "200") {
      commit('setListStudent', response.data)
      console.log('signInWithCpfAndPassword', response.data)
    }
  })
}


export function getInstituicao ({ commit, state }, payload) {
  // axios
  var path = `https://reset-back-end.herokuapp.com/institution/${payload}`

  return axios({
    method: 'GET',
    url: path
  }).then(function (response) {

    if (response.status == "200") {
      return response.data
      //console.log('setInstituicao', response.data)
    }
  })
}

export function setMentoriar ({ commit, state }, payload) {
  // axios
  var path = "https://reset-back-end.herokuapp.com/mentor/students"
  var token = state.currentUser.token

  var data = {
    student: payload
  }

  return axios({
    method: 'POST',
    url: path,
    data: data,
    headers: {
      "Content-Type": "application/json",
      token: token
    }
  }).then(function (response) {

    if (response.status == "200") {
      return response.data
      //console.log('setInstituicao', response.data)
    }
  })
}


export function getTrilha ({ commit, state }, payload) {
  // axios
  var path = `https://reset-back-end.herokuapp.com/journey/${payload}`

  return axios({
    method: 'GET',
    url: path,
  }).then(function (response) {

    if (response.status == "200") {
      commit('setTrilha', response.data)
      //console.log('setTrilha', response)
    }
  })
}

export function getAllJornada ({ commit, state }, payload) {
  // axios
  var path = "https://reset-back-end.herokuapp.com/journey"

  return axios({
    method: 'GET',
    url: path,
  }).then(function (response) {

    if (response.status == "200") {
      commit('setListaTrilha', response.data)
      console.log('setListaTrilha', response)
    }
  })
}
