<template>
  <q-layout>
    <q-toolbar class="bg-primary text-white">
      <q-img
        src="../../assets/logocab.svg"
        width="180px"
        spinner-color="primary"
        spinner-size="82px"
      />
      <div>
        <q-btn color="amber" flat label="Seja um mentor" @click="onMentors" />
      </div>
      <q-space />
      <div>
        <q-btn color="white" flat label="Início" @click="onMentors" />
        <q-btn color="white" flat label="Quem somos" @click="onMentors" />
        <q-btn color="white" flat label="Como funciona" @click="onMentors" />
        <q-btn color="white" flat label="Login" @click="onMentors" />
      </div>
    </q-toolbar>
    <section>
      <div class="fit row wrap justify-around items-center content-center">
        <div class="col">
          <q-img
            src="../../assets/menina.png"
            width="70vw"
            spinner-color="primary"
            spinner-size="82px"
          />
        </div>
        <div class="col-4 q-ma-md text-primary text-h4">
          <div>
          Venha fazer da tecnologia um mecanismo de inclusão para adolescente e jovens de lares de acolhimento!
          </div>
          <div class="q-my-md">
            <q-btn color="primary" flat size="lg" label="Seja um mentor" @click="onClick" />
          </div>
        </div>
      </div>
    </section>
    <section class="bg-accent">
      <div class="fit row wrap justify-around items-center content-center">
        <div class="col q-pa-md q-ma-md text-primary">
          <h3 class="text-white text-bold">Quem Somos</h3>
          <div class="text-white text-h6">
            A Reset, é uma plataforma que projeta uma conexão entre adolescentes e jovens, de lares de acolhimento, a profissionais dispostos a mentorá-los no processo de aprendizagem, por meio de apadrinhamento profissional. Com isso, permitir o desenvolvimento pessoal e profissional de maneira adequada, dando perspectivas de um futuro melhor após suas saídas com a maioridade, das Casa Lares.          </div>
          <div class="q-my-md">
            <q-btn color="white" flat size="lg" label="Seja um mentor" @click="onClick" />
          </div>
        </div>
        <div class="col">
          <q-img
            src="../../assets/quemsomos.svg"
            width="40vw"
            spinner-color="primary"
            spinner-size="82px"
          />
        </div>
      </div>
    </section>
    <section class="q-pa-lg">
      <div class="fit row wrap justify-around items-center content-center">
        <div class="col q-pa-md q-ma-md">
          <h3 class="text-primary text-bold">Como funciona</h3>
          <div class="text-primary text-h6">
            Criamos uma trilha para ajudar você, mentor, a fazer a diferença na vida de que realmente precisa de ajuda.
          </div>
          <div class="q-my-md">
            <q-btn color="white" flat size="lg" label="Seja um mentor" @click="onClick" />
          </div>

        <div class="fit row wrap justify-around q-gutter-lg items-center content-center">
          <div class="col column items-center">
            <q-img
            class="text-center"
              src="../../assets/cadastramento.svg"
              width="300px"
              spinner-color="primary"
              spinner-size="82px"
            />
            <div class="text-center text-h6">Cadastramento</div>
            <div class="text-center">
              A Reset faz o cadastramento dos adolescentes e jovens, de forma presencial, imputando seus dados e mapeando seu perfil de aprendizagem e interesses profissionais.
            </div>
            </div>
          <div class="col column items-center">
            <q-img
              src="../../assets/apadrinhamento.svg"
              width="300px"
              spinner-color="primary"
              spinner-size="82px"
            />
            <div class="text-center text-h6">Apadrinhamento</div>
            <div class="text-center">
              Você, profissional interessado em mentorar um desses jovens, faz seu cadastro e tem acesso as instituições e jovens num raio de 30 Km. Serão direcionados a você, aqueles que possuírem maior aderência as suas Skills e área profissional de atuação.            </div>
            </div>
          <div class="col column items-center">
            <q-img
              src="../../assets/sucesso.svg"
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

}
</script>

<style>

</style>
