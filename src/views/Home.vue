<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <HelloWorld ref="myHelloWorld"/>
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
  },
  methods:{
    // refreshPhoto(){
    //   this.$refs.myHelloWorld.getPhoto;
    // }
  }
}
</script>
