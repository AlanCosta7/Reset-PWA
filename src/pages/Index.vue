<template>
  <q-page class=" bg-grey-2 row justify-center" v-if="currentUser.type === 'mentor'" >
    <div style="max-width: 400px; width:100vw">
      <div class="text-h6 q-pa-md">Lista de estudantes</div>
      <q-list bordered v-for="(item, index) in listStudent" :key="index">
        <q-item v-if="item" clickable v-ripple @click="setStudent">
          <q-item-section v-if="item.avatar" avatar>
            <q-avatar size="40px" >
              <img
                v-if="item.avatar"
                :src="item.avatar"
                style="width:40px"
              >
            </q-avatar>
          </q-item-section>
          <q-item-section v-if="!item.avatar" avatar>
            <q-avatar class="bg-primary text-white" size="40px" >
              <div>{{item.name[0]}}</div>
            </q-avatar>
          </q-item-section>
          <q-item-section>{{item.name}}</q-item-section>
          <dialogStudent :student="item"></dialogStudent>

        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import Vuex from "vuex";
import { Loading } from "quasar";
import dialogStudent from "./user/Student"

export default {
  name: "Page Index",
  meta: { title: "RESET - Index" },
  data() {
    return {

    }
  },
  components: {
    dialogStudent
  },
  computed: {
    ...Vuex.mapGetters({
      currentUser: "currentUser",
      listStudent: "listStudent",
      err: "err",
    }),
  },

  mounted() {
    this.$store.dispatch('getListStudent')

  },
  methods: {
    setStudent() {
      this.$store.commit('setDialogStudent', true)
    }
  }
}
</script>
