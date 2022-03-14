<template>
  <q-layout>
    <q-card flat class="text-center q-pa-md">
      <div class="text-bold q-ma-md">
        Instituição
      </div>
      <q-card-section class="q-gutter-md">
        <div>
          <q-input outlined v-model="institution.name" type="text" label="Nome da instituição" />
        </div>
        <div class="text-subtitle2">
          <q-input outlined v-model="institution.email" type="email" label="E-mail" />
        </div>
        <div>
          <q-input
            outlined
            v-model="institution.cnpj"
            type="number"
            label="CNPJ"
            lazy-rules
            :rules="[
              val => !!val || '* Requerido',
              val => val.length === 14 || 'CNPJ inválido',
            ]"
          />
        </div>
        <div class="text-subtitle2 borda q-pa-md text-left q-gutter-md">
          Endereço:
          <q-input outlined v-model="institution.address.street" type="text" label="Rua" />
          <q-input outlined v-model="institution.address.number" type="number" label="Número" />
          <q-input outlined v-model="institution.address.city" type="text" label="Cidade" />
          <q-input outlined v-model="institution.address.state" type="text" label="Estado" />
          <!-- <q-btn color="primary" icon="room" outline label="Localização" @click="onDialogMapa" /> -->
        </div>
        <div class="text-subtitle2">
          <q-input outlined v-model="institution.phone" type="number" label="(DDD)Telefone" />
        </div>
        <div v-if="institution.type === 'student'" class="text-subtitle2">
          <q-input outlined v-model="institution.institution" type="text" label="Instituição" />
        </div>
      </q-card-section>
      <q-card-actions vertical align="center">
        <q-btn class="full-width" flat label="Salvar" @click="saveProfile" />
      </q-card-actions>
    </q-card>
    <!-- <Maps v-if="dialogMapa"></Maps> -->
  </q-layout>
</template>

<script>
import Vuex from "vuex";
import { Notify } from "quasar";
// import Maps from "../maps/Maps";

export default {
  data() {
    return {
      dialogMapa: false,
      eventSize: false,
    };
  },
  // components: {
  //   Maps
  // },
  computed: {
    ...Vuex.mapGetters({
      institution: "institution",
      getLetterUser: "getLetterUser",
      err: "err",
    }),
  },
  methods: {
    onDialogMapa() {
      var dialogMapa = this.dialogMapa
    },
    onIndex() {
      this.$router.push({
        name: "index",
      });
    },
    saveProfile() {
      var institution = this.institution;

      this.$store.dispatch("saveInstitution", institution).then((result) => {
        console.log("resultado", result);
        this.onIndex();
      });
    }
  }
}
</script>
