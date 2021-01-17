<template>
  <q-page class="bg-grey-2">
    <q-card flat class="bg-grey-2" style="width: 100%; min-height: 500px">
      <div
        class="full-width row wrap justify-center items-start content-start q-py-xl"
      >
        <q-img
          src="../../assets/logo.svg"
          width="50vw"
          spinner-color="primary"
          spinner-size="82px"
        />
      </div>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey bg-grey-2"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="mentor" label="Mentor" />
        <q-tab name="student" label="Aluno" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated class="bg-grey-2">
        <q-tab-panel
          name="mentor"
          class="flex flex-center"
          style="width: 100%; min-height: 200px"
        >
          <!-- Formulário de Login -->
          <q-form
            v-if="setLogin"
            @submit="onSubmit()"
            class="q-gutter-md row justify-center"
          >
            <q-input
              class="col-10"
              id="cpf"
              type="number"
              dense
              outlined
              rounded
              color="primary"
              v-model="cpf"
              label="CPF"
              lazy-rules
              :rules="[
                (val) => !!val || '* Requerido',
                (val) => val.length === 11 || 'CPF inválido',
              ]"
            />

            <q-input
              class="col-10"
              dense
              bottom-slots
              color="primary"
              outlined
              rounded
              :type="typePass"
              v-model="password"
              label="Senha"
              :rules="[(val) => !!val || '* Requerido']"
              lazy-rules
            >
              <template v-slot:append>
                <q-btn
                  aria-label="visibility"
                  round
                  dense
                  flat
                  :icon="iconVisibility"
                  @click="visibility = !visibility"
                />
              </template>
            </q-input>
            <div class="column row justify-center fit">
              <q-btn
                color="primary"
                class="full-width"
                type="submit"
                rounded
                label="Acessar com CPF e senha"
              ></q-btn>
            </div>
          </q-form>

          <!-- Formulário de Cadastro -->
          <q-form
            v-if="!setLogin"
            @submit="cadastrar()"
            class="q-gutter-md row justify-center"
          >
            <q-input
              class="col-10"
              id="cpf"
              type="number"
              dense
              outlined
              rounded
              color="primary"
              v-model="cpf"
              label="CPF"
              lazy-rules
              :rules="[
                (val) => !!val || '* Requerido',
                (val) => val.length === 11 || 'CPF inválido',
              ]"
            />

            <q-input
              class="col-10"
              dense
              bottom-slots
              color="primary"
              outlined
              rounded
              :type="typePass"
              v-model="password"
              label="Senha"
              :rules="[(val) => !!val || '* Requerido']"
              lazy-rules
            >
              <template v-slot:append>
                <q-btn
                  aria-label="visibility"
                  round
                  dense
                  flat
                  :icon="iconVisibility"
                  @click="visibility = !visibility"
                />
              </template>
            </q-input>

            <q-input
              class="col-10"
              dense
              bottom-slots
              color="primary"
              outlined
              rounded
              :type="typePass"
              v-model="confirmPassword"
              label="Confirmar senha"
              :rules="[
                (val) => !!val || '* Requerido',
                (val) => val === password || 'Senha não confere',
              ]"
              lazy-rules
            >
              <template v-slot:append>
                <q-btn
                  aria-label="visibility"
                  round
                  dense
                  flat
                  :icon="iconVisibility"
                  @click="visibility = !visibility"
                />
              </template>
            </q-input>
            <div class="column row justify-center fit">
              <q-btn
                color="primary"
                class="full-width"
                type="submit"
                rounded
                label="cadastrar"
              ></q-btn>
            </div>
          </q-form>
          <q-btn
            color="primary"
            flat
            class="q-ma-md full-width"
            @click="setLogin = !setLogin"
            rounded
            :label="setLogin ? 'Cadastrar' : 'Login'"
          ></q-btn>
        </q-tab-panel>

        <q-tab-panel name="student" class="flex flex-center">
          <!-- Formulário de Login -->
          <q-form
            v-if="setLogin"
            @submit="onSubmit()"
            class="q-gutter-md row justify-center"
          >
            <q-input
              class="col-10"
              id="cpf"
              type="number"
              dense
              outlined
              rounded
              color="primary"
              v-model="cpf"
              label="CPF"
              lazy-rules
              :rules="[
                (val) => !!val || '* Requerido',
                (val) => val.length === 11 || 'CPF inválido',
              ]"
            />

            <q-input
              class="col-10"
              dense
              bottom-slots
              color="primary"
              outlined
              rounded
              :type="typePass"
              v-model="password"
              label="Senha"
              :rules="[(val) => !!val || '* Requerido']"
              lazy-rules
            >
              <template v-slot:append>
                <q-btn
                  aria-label="visibility"
                  round
                  dense
                  flat
                  :icon="iconVisibility"
                  @click="visibility = !visibility"
                />
              </template>
            </q-input>
            <div class="column row justify-center fit">
              <q-btn
                color="primary"
                class="full-width"
                type="submit"
                rounded
                label="Acessar com CPF e senha"
              ></q-btn>
            </div>
          </q-form>

          <!-- Formulário de Cadastro -->
          <q-form
            v-if="!setLogin"
            @submit="cadastrar()"
            class="q-gutter-md row justify-center"
          >
            <q-input
              class="col-10"
              id="cpf"
              type="number"
              dense
              outlined
              rounded
              color="primary"
              v-model="cpf"
              label="CPF"
              lazy-rules
              :rules="[
                (val) => !!val || '* Requerido',
                (val) => val.length === 11 || 'CPF inválido',
              ]"
            />

            <q-input
              class="col-10"
              dense
              bottom-slots
              color="primary"
              outlined
              rounded
              :type="typePass"
              v-model="password"
              label="Senha"
              :rules="[(val) => !!val || '* Requerido']"
              lazy-rules
            >
              <template v-slot:append>
                <q-btn
                  aria-label="visibility"
                  round
                  dense
                  flat
                  :icon="iconVisibility"
                  @click="visibility = !visibility"
                />
              </template>
            </q-input>

            <q-input
              class="col-10"
              dense
              bottom-slots
              color="primary"
              outlined
              rounded
              :type="typePass"
              v-model="confirmPassword"
              label="Confirmar senha"
              :rules="[
                (val) => !!val || '* Requerido',
                (val) => val === password || 'Senha não confere',
              ]"
              lazy-rules
            >
              <template v-slot:append>
                <q-btn
                  aria-label="visibility"
                  round
                  dense
                  flat
                  :icon="iconVisibility"
                  @click="visibility = !visibility"
                />
              </template>
            </q-input>
            <div class="column row justify-center fit">
              <q-btn
                color="primary"
                class="full-width"
                type="submit"
                rounded
                label="cadastrar"
              ></q-btn>
            </div>
          </q-form>
          <q-btn
            color="primary"
            flat
            class="q-ma-md full-width"
            @click="setLogin = !setLogin"
            rounded
            :label="setLogin ? 'Cadastrar' : 'Login'"
          ></q-btn>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
import Vuex from "vuex";
import { Loading } from "quasar";

export default {
  name: "PageLogin",
  meta: { title: "RESET - Login" },
  data() {
    return {
      setLogin: true,
      tab: "mentor",
      typePass: "password",
      visibility: false,
      iconVisibility: "visibility",
      cpf: null,
      password: null,
      confirmPassword: null,
    };
  },
  watch: {
    currentUser(newUser, oldUser) {
      if (newUser) {
        this.redirectToApp(3000);
      }
    },
    visibility(val) {
      if (!val) {
        this.typePass = "text";
        this.iconVisibility = "visibility_off";
      } else {
        this.typePass = "password";
        this.iconVisibility = "visibility";
      }
    },
  },
  computed: {
    ...Vuex.mapGetters({
      currentUser: "currentUser",
      err: "err",
    }),
  },
  mounted() {
    this.$store.dispatch("loadUser");
    setTimeout(() => {
      if (this.currentUser) {
        console.log(this.currentUser);
        const rediretDelay = 3000;
        this.redirectToApp(rediretDelay);
      }
    }, 1000);
  },
  methods: {
    async onLinkedin() {
      this.$store.dispatch("signInWithPopup").then((result) => {
        console.log("onLinkedin", result);
        this.redirectToApp(3000);
      });
    },
    onSubmit() {
      var cpf = this.cpf;
      var password = this.password;

      var value = {
        path: this.tab,
        cpf: cpf,
        password: password,
      };
      this.$store.dispatch("signInWithCpfAndPassword", value).then((result) => {
        console.log('resultado', result)
      });
    },
    cadastrar() {
      var cpf = this.cpf;
      var password = this.password;
      var confirmPassword = this.confirmPassword;
      if (password !== confirmPassword) {
        alert("Senha não confere");
      } else {
        var value = {
          path: this.tab,
          cpf: cpf,
          password: password,
        };
        this.$store
          .dispatch("createUserWithCpfAndPassword", value)
          .then((result) => {
            console.log(result);
          });
      }
    },
    handleResetPassword() {
      this.$store.dispatch("handleResetPassword");
    },
    redirectToApp(redirectDelay) {
      const currentUser = this.currentUser;
      console.log("redirectToApp");

      Loading.show();
      if (currentUser) {
        setTimeout(() => {
          var id = this.currentUser._id;
          this.$router.push({
            name: "index",
            params: { id: id },
          });

          Loading.hide();
        }, redirectDelay);
      } else {
        Loading.hide();
      }
    },
  },
};
</script>
