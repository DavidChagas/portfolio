<template>
  <div class="home">
    <Banner/>
    <Sobre/>
    <Tecnologias/>
    <Projetos/>
    <Cursos/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import Sobre from '@/components/Sobre.vue'
import Tecnologias from '@/components/Tecnologias.vue'
import Projetos from '@/components/Projetos.vue'
import Cursos from '@/components/Cursos.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Banner,
    Sobre,
    Tecnologias,
    Projetos,
    Cursos,
    Footer
  }
}
</script>