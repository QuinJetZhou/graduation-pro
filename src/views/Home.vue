<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <HomeBackground/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import HomeBackground from "@/components/HomeBackground.vue";
export default {
  name: 'home',
  components: {
    HelloWorld
    // HomeBackground
  }
}
</script>
