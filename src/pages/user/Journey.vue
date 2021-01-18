<template>
  <q-page class="bg-grey-3" v-if="currentUser.type === 'student' && listaTrilha">
    <div class="text-center text-h4 q-pa-md">Trilha</div>

    <div  class="row wrap justify-center q-gutter-md items-start content-start">
       <q-card @click="selectItem(item)" style="width: 100px; height:100px" class="bg-positive flex flex-center" v-for="(item, i) in listaTrilha" :key="i">
         <q-card-section>
           <q-icon name="done" color="white" size="40px" />
         </q-card-section>
       </q-card>
    </div>
  </q-page>
</template>

<script>
import Vuex from "vuex";
import { Loading, openURL } from "quasar";

export default {
  name: "Page Trilha",
  meta: { title: "RESET - Trilha" },
  data() {
    return {
      slide: "6004b9c348f54e0004b1d8a4"

    }
  },
  computed: {
    ...Vuex.mapGetters({
      currentUser: "currentUser",
      listaTrilha: "listaTrilha",
      err: "err",
    }),
  },

  mounted() {
    this.$store.dispatch('getAllJornada')

  },
  methods: {
    setStudent() {
      this.$store.commit('setDialogStudent', true)
    },
    selectItem(item) {
      console.log(item)

      var id = this.currentUser._id
      this.$store.dispatch('getTrilha', item._id)
      this.$router.push({
          name: "trilha",
          params: { id: id }
        });
    },
    onClick(item) {
      openURL(item)
    }
  }
}
</script>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>
