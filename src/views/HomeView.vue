<template>
  <div class="home">
    <Banner/>
    <Sobre/>
    <Tecnologias/>
    <Projetos/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import Sobre from '@/components/Sobre.vue'
import Tecnologias from '@/components/Tecnologias.vue'
import Projetos from '@/components/Projetos.vue'

export default {
  name: 'HomeView',
  components: {
    Banner,
    Sobre,
    Tecnologias,
    Projetos
  }
}
</script>