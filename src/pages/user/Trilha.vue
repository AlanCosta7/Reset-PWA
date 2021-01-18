<template>
  <q-page class="bg-grey-3" v-if="currentUser.type === 'student' && trilha">
    <div class="text-center text-h4 q-pa-md">Trilha</div>
    <div class="q-pa-md">
      <div class="text-h6">{{trilha.title}}</div>
      <div class="text-bold">Habilidade: {{trilha.skill}}</div>
    </div>
    <q-carousel
      class="absolute-bottom"
      arrows
      animated
      v-model="slide"
      height="70vh"
    >
      <q-carousel-slide
        v-for="(item, index) in trilha.content"
        :key="index"
        :name="item._id"
        :img-src="item.image">
        <div class="absolute-full custom-caption">
          <div class="text-h6">{{item.title}}</div>
          <div class="text-subtitle1">{{item.description}}</div>
        </div>

        <div class="absolute-bottom">
          <q-btn color="primary" class="full-width" label="Acessar conteúdo" @click="onClick(item.url)" />
        </div>
      </q-carousel-slide>

    </q-carousel>
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
      slide: null
    }
  },
  watch: {
    trilha(val) {
      if(val) {
        this.slides
      }
    }
  },
  computed: {
    ...Vuex.mapGetters({
      currentUser: "currentUser",
      trilha: "trilha",
      err: "err",
    }),
    slides: {
      get() {
        return this.slide = this.trilha.content[0]._id
      },
      set(val) {
        this.slide = val
      }
    }
  },
  mounted() {

  },
  methods: {
    setStudent() {
      this.$store.commit('setDialogStudent', true)
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
