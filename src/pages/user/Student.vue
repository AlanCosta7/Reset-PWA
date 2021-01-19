<template>
  <q-dialog v-model="dialogStudent" :maximized="mobile" persistent v-if="selectStudent">
    <q-card style="max-width: 400px; width:100vw">
      <div v-if="selectStudent.avatar">
      <q-img
        :src="selectStudent.avatar"
        :ratio="16/9"
        spinner-color="primary"
        spinner-size="82px"
      />
      </div>
      <q-card-section class="column items-start">
        <div class="text-h5">{{selectStudent.name}}</div>
        <div class="text-h6 text-weight-light" v-if="institution">Instituição: {{institution.name}}</div>
        <q-separator spaced inset />
        <div class="text-bold" >Data de Nascimento: {{formatData(selectStudent.birth)}}</div>
        <div class="text-bold">Interesses:</div>
        <div v-for="(item, index) in selectStudent.skills" :key='index' class="row wap items-center">
            <q-chip color="secondary" class="col" text-color="black" :label="'#'+item" />
        </div>
        <div> <span class="text-bold">Escolaridade: </span> {{selectStudent.schooling}}</div>
        <div><span class="text-bold">Email: </span> {{selectStudent.email}}</div>

      </q-card-section>
      <q-card-section v-if="selectStudent.mentor" class="bg-positive text-white text-h6 text-center">
        <div>
          <q-icon name="done" color="white" size="30px" /> Sendo mentorado
        </div>
      </q-card-section>
      <q-card-actions align="right">
        <div class="q-gutter-md q-pa-md">
          <q-btn outline label="Voltar" color="primary" @click="cancelar" />
          <q-btn v-if="!selectStudent.mentor" label="Mentoriar" color="primary" @click="mentoriar" />
        </div>
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
  watch: {
    dialogStudent(val) {
      if(val) {

        var institutionID = this.selectStudent.institution

        //console.log(this.selectStudent)
        if(institutionID) {
          this.$store.dispatch('getInstituicao', institutionID).then( result => {
              this.institution = result
            // console.log('getInstituicao', result.data)
          })
        }
      }
    }

  },
  computed: {
    ...Vuex.mapGetters({
      currentUser: "currentUser",
      dialogStudent: "dialogStudent",
      selectStudent: "selectStudent",
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
      var id = this.selectStudent._id
      this.$store.dispatch('setMentoriar', id).then( result => {
        this.cancelar()
      })
    }
  },
}
</script>

<style>

</style>
