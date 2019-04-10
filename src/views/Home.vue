<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Photo ref="myphoto"/>
    <!-- <HomeBackground/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Photo from '@/components/photo.vue'
// import HomeBackground from "@/components/HomeBackground.vue";
export default {
  name: 'home',
  components: {
    Photo
    // HomeBackground
  },
  methods:{
    // refreshPhoto(){
    //   this.$refs.myHelloWorld.getPhoto;
    // }
  }
}
</script>
