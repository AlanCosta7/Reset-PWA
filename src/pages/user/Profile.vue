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
          <q-input filled v-model="currentUser.birth" >
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
        <div class="text-subtitle2">
          <q-select outlined v-model="currentUser.skills" :options="options" label="Interesses" />
        </div>
        <div class="text-subtitle2">
          <q-input outlined v-model="currentUser.schooling" type="text" label="Escolaridade" />
        </div>
        <div class="text-subtitle2">
          <q-input outlined v-model="currentUser.institution" type="text" label="Instituição" />
        </div>
      </q-card-section>
      <q-card-actions vertical align="center">
        <q-btn flat label="Salvar" @click="saveProfile" />
      </q-card-actions>
    </q-card>
  </q-layout>
</template>

<script>
import Vuex from "vuex";
import { Notify } from "quasar";

export default {
  data() {
    return {
      eventSize: false,
      options: [],
    };
  },
  computed: {
    ...Vuex.mapGetters({
      currentUser: "currentUser",
      getLetterUser: "getLetterUser",
      err: "err",
    }),
  },
  methods: {
    onIndex() {
      this.$router.push({
        name: "index",
      });
    },
    saveProfile() {
      var currentUser = this.currentUser;

      this.$store.dispatch("saveProfile", currentUser).then((result) => {
        console.log("resultado", result);
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
