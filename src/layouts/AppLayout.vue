<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title @click="onIndex">
          Reset
        </q-toolbar-title>
        <q-btn color="grey-2" round @click="onProfile" >
          <q-avatar size="40px">
            <q-img
              v-if="currentUser && currentUser.avatar"
              :src="currentUser.photoUrl"
              width="40px"
              spinner-color="primary"
              spinner-size="82px"
            />
          <div class="text-black" v-if="!currentUser.avatar">
            {{ getLetterUser }}
          </div>
          </q-avatar>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item @click="logout" clickable>
          <q-item-section>
            Sair
          </q-item-section>

        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Vuex from "vuex";
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
    this.$store.commit('setCurrentUser', user)
  },
  computed: {
    ...Vuex.mapGetters({
      currentUser: "currentUser",
      getLetterUser: "getLetterUser",
      err: "err",
    }),
  },
  methods: {
    onProfile() {
      var id = this.currentUser._id
      this.$router.push({
        name: "profile",
        params: { id: id }
      });
    },
    onIndex() {
      var type = this.currentUser.type
      var id = this.currentUser._id
      if(type === 'mentor') {
        this.$router.push({
          name: "index",
          params: { id: id }
        });
      } else {
        this.$router.push({
          name: "journey",
          params: { id: id }
        });


      }
    },
    logout() {
      this.$store.dispatch('logout').then( result => {
        if (result) {
          this.$router.push({
            name: "auth"
          });

        }
      })

    }
  },
}
</script>
