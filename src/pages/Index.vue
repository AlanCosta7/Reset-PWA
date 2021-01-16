<template>
  <q-page class=" bg-grey-2">
    <div class="text-h6 q-pa-md">Lista de jovens</div>
    <q-list bordered v-for="(item, index) in listaJovem" :key="index">
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-img
            :src="item.avatar"
            width="40px"
            spinner-color="primary"
            spinner-size="82px"
          />
        </q-item-section>
        <q-item-section>{{item.name}}</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import Vuex from "vuex";
import { Loading } from "quasar";

export default {
  name: "Page Index",
  meta: { title: "RESET - Index" },
  data() {
    return {

    }
  },
  computed: {
    ...Vuex.mapGetters({
      currentUser: "currentUser",
      listaJovem: "listaJovem",
      err: "err",
    }),
  },
  mounted() {

  },
  methods: {
  }
}
</script>
