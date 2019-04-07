<template>
  <div class="hello">
    <h1></h1>
    <div class="img-wrapper" v-for="(item,index) of unsplashList" :key="index">
      <img :src="item.urls.small" alt="">
      <!-- <p>{{item}}</p> -->
    </div>
  </div>
</template>

<script>
export default {
  // name: 'HelloWorld',
  // props: {
  //   msg: String
  // },
  data(){
    return{
      unsplashList:[]
    }
  },
  created(){
    // unsplash api调用
        this.getPhoto();
  },
  methods:{
    getPhoto(){
      let that = this;
      that.$http.get(`https://api.unsplash.com/photos/`,{
        params: {
          client_id: "d46fae74f794e091ca220153b982053aeb53218e7bbf0f3e9ba9d19d9a5a6143",
          per_page: 30
        }
      }).then(function (response) {
            console.log(response.data);
            that.unsplashList = response.data;
            console.log(that.unsplashList)

          })
          .catch(function (error) {
            console.log(error);
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  color: #42b983;
}
</style>
