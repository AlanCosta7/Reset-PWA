<template>
  <q-layout>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { LocalStorage } from 'quasar'

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
    }
  },

  mounted() {

    var user = LocalStorage.getItem('user')
   // console.log(user)
   if (user.token) {
      this.$store.commit('loadUser', user)
   }
  },
}
</script>
