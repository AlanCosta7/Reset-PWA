<template>
  <q-page class=" bg-grey-2 row justify-center" v-if="currentUser && currentUser.type === 'mentor'" >
     <q-card class="q-py-md" style="max-width: 700px; width:100vw; height: 600px">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="estudantes" label="Lista de estudantes" />
          <q-tab name="mentoriados" label="Meus mentoriados" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="estudantes">
            <q-list bordered v-for="(item, index) in listStudent" :key="index">
              <q-item v-if="item" clickable v-ripple @click="setStudent(item)">
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

              </q-item>
            </q-list>
          </q-tab-panel>

          <q-tab-panel name="mentoriados">
            <q-list bordered v-for="(item, index) in listMentoriados" :key="index">
              <q-item v-if="item" >
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
              </q-item>
            </q-list>
          </q-tab-panel>

        </q-tab-panels>
      </q-card>
                <dialogStudent></dialogStudent>

  </q-page>
</template>

<script>
import Vuex from "vuex";
import { Loading } from "quasar";
import dialogStudent from "./user/Student"

export default {
  name: "PageIndex",
  meta: { title: "RESET - Index" },
  data() {
    return {
      tab: 'estudantes'

    }
  },
  components: {
    dialogStudent
  },
  computed: {
    ...Vuex.mapGetters({
      currentUser: "currentUser",
      listStudent: "listStudent",
      listMentoriados: "listMentoriados",
      err: "err",
    }),
  },

  mounted() {
    setTimeout(() => {
      this.$store.dispatch('getListStudent')
      this.$store.dispatch('getListMentoriados')
    }, 1000);
  },
  methods: {
    setStudent(item) {
      this.$store.commit('setStudent', item)
      this.$store.commit('setDialogStudent', true)
    }
  }
}
</script>
