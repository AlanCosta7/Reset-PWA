<template>
  <q-dialog v-model="dialogStudent" :maximized="mobile" persistent>
    <q-card style="max-width: 400px; width:100vw">
          <q-img
            :src="student.avatar"
            :ratio="16/9"
            spinner-color="primary"
            spinner-size="82px"
          />
      <q-card-section class="Column items-center q-gutter-md">

        <div>Nome: {{student.name}}</div>
        <div>Data de Nascimento: {{formatData(student.birth)}}</div>
        <div v-if="institution">Instituição: {{institution.name}}</div>
        <div>Interesses:</div>
        <div v-for="(item, index) in student.skills" :key='index' class="row items-center">
          <div class="col">
            {{item}}
          </div>
        </div>
        <div>Escolaridade: {{student.schooling}}</div>
        <div>Email: {{student.email}}</div>

      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Cancelar" color="primary" @click="cancelar" />
        <q-btn flat label="Mentoriar" color="primary" @click="mentoriar" />
      </q-card-actions>
    </q-card>
  </q-dialog>

</template>

<script>
import Vuex from "vuex";
import { date } from 'quasar'

export default {
  data() {
    return {
      institution: null
    }
  },
  props: {
    student: Object
  },
  watch: {
    dialogStudent(val) {
      var institution = this.student.institution
      if(val && institution) {
        this.$store.dispatch('getInstituicao', institution).then( result => {
            this.institution = result
           // console.log('getInstituicao', result.data)

      })
    }
    }

  },
  computed: {
    ...Vuex.mapGetters({
      currentUser: "currentUser",
      dialogStudent: "dialogStudent",
      err: "err",
    }),
    mobile() {
      var mobile = this.$q.platform.is.mobile;
      return mobile;
    },
  },
  mounted() {

  },
  methods: {
    cancelar() {
      this.$store.commit('setDialogStudent', false)
    },
    formatData(item) {
      let formattedString = date.formatDate(item, 'DD/MM/YYYY')
      return formattedString
    },
    mentoriar() {
      var id = this.student._id
      this.$store.dispatch('setMentoriar', id).then( result => {
        this.cancelar()
      })
    }
  },
}
</script>

<style>

</style>
