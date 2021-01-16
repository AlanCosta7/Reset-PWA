import axios from "boot/axios"
import { LocalStorage } from 'quasar'


export function signInWithPopup ({ commit, state }) {
 // axios
 console.log('signInWithPopup')
 return true

}

export function signInWithCpfAndPassword ({ commit, state }, payload) {
  // axios
 console.log('signInWithCpfAndPassword', payload)
 commit('setCurrentUser', payload)
 return payload

}

export function createUserWithCpfAndPassword ({ commit, state }, payload) {
  // axios
 console.log('createUserWithCpfAndPassword', payload)
 commit('setCurrentUser', payload)
 return payload

}

export function saveProfile ({ commit, state }, payload) {
  // axios
 console.log('saveProfile', payload)
 commit('setCurrentUser', payload)

 return payload
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
