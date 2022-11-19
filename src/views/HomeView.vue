<template>
  <div class="home">
    <Banner/>
    <Sobre/>
    <Tecnologias/>
    <Projetos/>
    <Cursos/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import Sobre from '@/components/Sobre.vue'
import Tecnologias from '@/components/Tecnologias.vue'
import Projetos from '@/components/Projetos.vue'
import Cursos from '@/components/Cursos.vue'

export default {
  name: 'HomeView',
  components: {
    Banner,
    Sobre,
    Tecnologias,
    Projetos,
    Cursos
  }
}
</script>