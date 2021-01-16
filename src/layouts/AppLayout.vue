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

        <q-toolbar-title>
          Reset
        </q-toolbar-title>
        <q-btn color="grey-2" round @click="onProfile" >
          <q-avatar size="40px">
            <q-img
              v-if="currentUser.avatar"
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

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
    }
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
      this.$router.push({
        name: "profile"
      });
    },
    logout() {
      this.$store.dispatch('logout').then( result => {
        if (result) {
          this.$router.push({
            name: "login"
          });

        }
      })

    }
  },
}
</script>
