<template>
  <div class="home">
    <Banner/>
    <Sobre/>
    <Tecnologias/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import Sobre from '@/components/Sobre.vue'
import Tecnologias from '@/components/Tecnologias.vue'

export default {
  name: 'HomeView',
  components: {
    Banner,
    Sobre,
    Tecnologias
  }
}
</script>