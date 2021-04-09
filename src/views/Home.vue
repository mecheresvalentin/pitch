<template>
  <div class="home">
    <Header/>
    <Boost/>
    <Collab/>
    <Powerful/>
    <Started/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Boost from '@/components/Boost.vue'
import Collab from '@/components/Collab.vue'
import Powerful from '@/components/Powerful.vue'
import Started from '@/components/getStarted.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Boost,
    Collab,
    Powerful,
    Started,
    Footer
  }
}
</script>
