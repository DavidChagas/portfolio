<template>
  <div class="home">
    <Banner/>
    <Sobre/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import Sobre from '@/components/Sobre.vue'

export default {
  name: 'HomeView',
  components: {
    Banner,
    Sobre
  }
}
</script>