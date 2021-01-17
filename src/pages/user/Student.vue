<template>
  <q-dialog v-model="dialogStudent" maximized persistent>
    <q-card>
      <q-card-section class="Column items-center q-gutter-md">
        <div>
          <q-img
            :src="student.avatar"
            :ratio="16/9"
            spinner-color="primary"
            spinner-size="82px"
          />
        </div>
        <div>Nome: {{student.name}}</div>
        <div>Data de Nascimento: {{student.birth}}</div>
        <div v-if="institution">Instituição: {{institution.name}}</div>
        <div>Interesses:</div>
        <div v-for="(item, index) in student.skills" :key='index'>
          <div>
            {{item}}
          </div>
        </div>
        <div>Escolaridade: {{student.schooling}}</div>
        <div>Email: {{student.email}}</div>

      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Cancelar" color="primary" @click="cancelar" />
        <q-btn flat label="Mentoriar" color="primary" @click="cancelar" />
      </q-card-actions>
    </q-card>
  </q-dialog>

</template>

<script>
import Vuex from "vuex";

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
      if(val) {
        this.$store.dispatch('getInstituicao', this.student.institution).then( result => {
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
  },
  mounted() {

  },
  methods: {
    cancelar() {
      this.$store.commit('setDialogStudent', false)
    }
  },
}
</script>

<style>

</style>
