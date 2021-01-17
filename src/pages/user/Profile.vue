<template>
  <q-layout>
    <q-card flat class="text-center q-pa-md">
      <q-btn color="primary" round>
        <q-avatar size="100px">
          <img
            v-if="currentUser.avatar"
            :src="currentUser.avatar"
            alt="Foto de perfil"
            @click="onPickPhoto"
          />
          <div v-if="!currentUser.avatar">
            {{ getLetterUser }}
          </div>
          <input
            v-if="currentUser"
            ref="photoInput"
            debounce="500"
            :disable="!currentUser"
            type="file"
            name="photo"
            style="display: none"
            accept="image/*"
            @change="onPhotoPicked"
          />
        </q-avatar>
      </q-btn>
      <div v-if="currentUser.type === 'mentor' " class="text-bold q-ma-md">
        Mentor
      </div>
      <div v-if="currentUser.type === 'student' " class="text-bold q-ma-md">
        Estudante
      </div>
      <q-card-section class="q-gutter-md">
        <div>
          <q-input outlined v-model="currentUser.name" type="text" label="Nome" />
        </div>
        <div class="text-subtitle2">
          <q-input outlined v-model="currentUser.email" type="email" label="E-mail" />
        </div>
        <div>
          <q-input
            outlined
            v-model="currentUser.cpf"
            type="number"
            label="CPF"
            lazy-rules
            :rules="[
              val => !!val || '* Requerido',
              val => val.length === 11 || 'CPF inválido',
            ]"
          />
        </div>
        <div class="text-subtitle2">
          <q-input outlined label="Data de Nascimento" v-model="currentUser.birth" >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="currentUser.birth" mask="DD/MM/YYYY">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div v-if="currentUser.type === 'mentor'" class="text-subtitle2 borda q-pa-md text-left q-gutter-md">
          Endereço:
          <q-input outlined v-model="currentUser.address.street" type="text" label="Rua" />
          <q-input outlined v-model="currentUser.address.number" type="number" label="Número" />
          <q-input outlined v-model="currentUser.address.city" type="text" label="Cidade" />
          <q-input outlined v-model="currentUser.address.state" type="text" label="Estado" />
          <!-- <q-btn color="primary" icon="room" outline label="Localização" @click="onDialogMapa" /> -->
        </div>
        <div class="text-subtitle2">
          <q-select outlined v-model="currentUser.skills" multiple :options="optionsSkills" label="Interesses" />
        </div>
        <div class="text-subtitle2">
          <q-select outlined v-model="currentUser.schooling" :options="optionsSchooling" label="Escolaridade" />
        </div>
        <div v-if="currentUser.type === 'student'" class="text-subtitle2">
          <q-input outlined v-model="currentUser.institution" type="text" label="Instituição" />
        </div>
        <div v-if="currentUser.type === 'mentor'" class="text-subtitle2">
          <q-input outlined v-model="currentUser.profession" type="text" label="Profissão" />
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
import { LocalStorage } from 'quasar'

// import Maps from "../maps/Maps";

export default {
  data() {
    return {
      dialogMapa: false,
      eventSize: false,
      optionsSkills: ['Programação', 'Design', 'Sucesso do cliente', 'Marketing Digital'],
      optionsSchooling: ['Ensino Fundamental incompleto', 'Ensino Fundamental completo', 'Ensino Médio incompleto', 'Ensino Médio completo', 'Ensino Superior incompleto', 'Ensino Superior completo', 'Mestrado Completo', 'Mestrado incompleto', 'Doutorado incompleto', 'Doutorado completo']
    };
  },
  // components: {
  //   Maps
  // },
  mounted() {

  },
  computed: {
    ...Vuex.mapGetters({
      currentUser: "currentUser",
      getLetterUser: "getLetterUser",
      err: "err",
    }),
  },
  methods: {
    onDialogMapa() {
      var dialogMapa = this.dialogMapa
    },
    onIndex() {
      var id = this.currentUser._id
      this.$router.push({
        name: "index",
        params: { id: id }
      });

    },
    saveProfile() {
      var currentUser = this.currentUser;

      this.$store.dispatch("saveProfile", currentUser).then((result) => {
        //console.log("resultado", result);
        this.onIndex();
      });
    },
    onPickPhoto() {
      this.$refs.photoInput.click();
    },
    onPhotoPicked(event) {
      const files = event.target.files;
      const file = files[0];
      const filename = file.name;

      if (filename.lastIndexOf(".") <= 0) {
        const message = "Por favor, selecione uma foto válida.";
        this.$q.notify({ message, color: "negative", timeout: 1000 });
        return;
      }
      if (file.size < 100000) {
        this.eventSize = true;
        const fileReader = new FileReader();
        fileReader.addEventListener("load", () => {
          const base64 = fileReader.result;
          this.currentUser.photoUrl = base64;
          console.log("photoUrl", base64);
        });
        fileReader.readAsDataURL(file);
      } else {
        this.eventSize = false;
        Notify.create({
          type: "negative",
          color: "negative",
          icon: "report_problem",
          message:
            "A imagem não pode ser gravado porque excede o tamanho máximo permitido",
        });
      }
    },
  },
};
</script>

<style>
</style>
