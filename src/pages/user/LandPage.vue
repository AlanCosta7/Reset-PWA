<template>
  <q-layout>
    <q-toolbar class="bg-primary text-white">
      <q-img
        src="../../assets/logocab.svg"
        width="180px"
        spinner-color="primary"
        spinner-size="82px"
      />
      <div v-if="!mobile">
        <q-btn color="amber" flat label="Seja um mentor" @click="onLogin" />
      </div>
      <q-space />
      <div v-if="!mobile">
        <q-btn color="white" flat label="Início" @click="onInicio" />
        <q-btn color="white" flat label="Quem somos" @click="onSomos" />
        <q-btn color="white" flat label="Como funciona" @click="onFunciona" />
        <q-btn color="white" flat label="Login" @click="onLogin" />
      </div>
    </q-toolbar>
    <section id="inicio">
      <div class="fit row wrap justify-evenly items-center content-center">
        <div v-if="mobile" class="col-lg-4 col-xs-12 col-md-4 col-sm-4 q-pa-md text-primary text-h6">
          <div>
          Venha fazer da tecnologia um mecanismo de inclusão para adolescente e jovens de lares de acolhimento!
          </div>
          <div class="q-my-md">
            <q-btn color="primary" outline size="lg" label="Seja um mentor" @click="onLogin" />
          </div>
        </div>
        <div class="col-lg col-xs-12 col-md col-sm fit row justify-center">
          <q-img
            src="../../assets/menina.png"
            spinner-color="primary"
            spinner-size="82px"
          />
        </div>
        <div v-if="!mobile" class="col-lg-4 col-xs-12 col-md-4 col-sm-4 q-ma-md text-primary text-h4">
          <div>
          Venha fazer da tecnologia um mecanismo de inclusão para adolescente e jovens de lares de acolhimento!
          </div>
          <div class="q-my-md">
            <q-btn color="primary" outline size="lg" label="Seja um mentor" @click="onLogin" />
          </div>
        </div>
      </div>
    </section>
    <section  id="somos" class="bg-accent q-pa-lg">
      <div class="fit row wrap justify-around items-center content-center">
        <div class="col-xs-12 col-lg q-pa-md q-ma-md text-primary">
          <div v-if="!mobile" class="text-white text-h3 text-bold">Quem Somos</div>
          <div v-if="mobile" class="text-white text-h4  text-bold">Quem Somos</div>
          <div class="text-white q-my-xl text-h5">
            A Reset, é uma plataforma que projeta uma conexão entre adolescentes e jovens, de lares de acolhimento, a profissionais dispostos a mentorá-los no processo de aprendizagem, por meio de apadrinhamento profissional. Com isso, permitir o desenvolvimento pessoal e profissional de maneira adequada, dando perspectivas de um futuro melhor após suas saídas com a maioridade, das Casa Lares.          </div>
          <div class="q-my-md">
            <q-btn color="white" outline size="lg" label="Seja um mentor" @click="onLogin" />
          </div>
        </div>
        <div class="col-xs-12 col-lg-4">
          <q-img
            src="../../assets/quemsomos.svg"
            style="width: 100%; max-width: 400px"
            spinner-color="primary"
            spinner-size="82px"
          />
        </div>
      </div>
    </section>
    <section id="funciona" class="q-pa-lg">
      <div class="fit row wrap justify-around items-center content-center">
        <div class="col q-pa-md ">
          <div v-if="!mobile" class="text-primary text-h3 text-bold">Como funciona</div>
          <div v-if="mobile"  class="text-primary text-h4 text-bold">Como funciona</div>
          <div class="text-primary q-my-xl text-h5">
            Criamos uma trilha para ajudar você, mentor, a fazer a diferença na vida de que realmente precisa de ajuda.
          </div>
          <div class="q-my-md">
            <q-btn color="white" flat size="lg" label="Seja um mentor" @click="onLogin" />
          </div>

        <div class="fit row wrap justify-around items-center">
          <div class="col-lg col-md col-sm col-xs-12 q-mx-md column items-center">
            <q-img
              src="../../assets/cadastramento.svg"
              :ratio="16/9"
              width="300px"
              spinner-color="primary"
              spinner-size="82px"
            />
            <div class="text-center text-h6">Cadastramento</div>
            <div class="text-center">
              A Reset faz o cadastramento dos adolescentes e jovens, de forma presencial, imputando seus dados e mapeando seu perfil de aprendizagem e interesses profissionais.
            </div>
          </div>
          <div class="col-lg col-md col-sm col-xs-12 q-mx-md column items-center">
            <q-img
              src="../../assets/apadrinhamento.svg"
              :ratio="16/9"
              width="300px"
              spinner-color="primary"
              spinner-size="82px"
            />
            <div class="text-center text-h6">Apadrinhamento</div>
            <div class="text-center">
              Você, profissional interessado em mentorar um desses jovens, faz seu cadastro e tem acesso as instituições e jovens num raio de 30 Km. Serão direcionados a você, aqueles que possuírem maior aderência as suas Skills e área profissional de atuação.            </div>
            </div>
          <div class="col-lg col-md col-sm col-xs-12 q-mx-md column items-center">
            <q-img
              src="../../assets/sucesso.svg"
              :ratio="16/9"
              width="300px"
              spinner-color="primary"
              spinner-size="82px"
            />
            <div class="text-center text-h6">Sucesso</div>
            <div class="text-center">
              Com sua ajuda estes jovens, com a chegada da maioridade e serem convidados a se retirar dos lares, poderão vislumbrar um futuro melhor e perspectiva de vida.            </div>
            </div>
        </div>

        </div>
      </div>
      <div class="q-ma-xl"></div>
    </section>
    <q-footer class="q-pa-lg">
      E-mail: appresetgroup@gmail.com
    </q-footer>
  </q-layout>
</template>

<script>

export default {
  name: 'LandPage',
  data () {
    return {
      leftDrawerOpen: false,
    }
  },
  computed: {
    mobile() {
      if (this.$q.platform.is.mobile) {
        return true
      }
      return false
    }
  },
  methods: {
    onInicio() {
      var scrollDiv = document.getElementById("inicio").offsetTop;
      window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
    },
    onSomos() {
      var scrollDiv = document.getElementById("somos").offsetTop;
      window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
    },
    onFunciona() {
      var scrollDiv = document.getElementById("funciona").offsetTop;
      window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
    },
    onLogin() {
      this.$router.push({ name: 'auth'})
    }
  }
}
</script>

<style>
  section{
    scroll-behavior: smooth;
  }
</style>
