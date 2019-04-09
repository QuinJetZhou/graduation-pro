<template>
  <div class="hello">
    <div class="img-wrapper" v-for="(item,index) of unsplashList" :key="index">
       <!-- <a :href="downLoad" download=""> -->
      <img :src="item.urls.small" alt="" @click="downLoadPhoto(item.links.download_location)">
      <!-- </a> -->
      <!-- <p>{{item}}</p> -->
    </div>
  </div>
</template>

<script>
import { log } from 'util';
export default {
  // name: 'HelloWorld',
  // props: {
  //   msg: String
  // },
  data(){
    return{
      unsplashList:[],
      downLoad:''
    }
  },
  created(){
    // unsplash api调用
        if(!store.get('photoList')){
          this.getPhoto();
          console.log("download")
        }
        this.unsplashList = store.get('photoList');
        // this.$bus.emit(this.getPhoto()) 
  },
  methods:{
    getPhoto(){
          console.log(2)
      let that = this;
      that.$http.get(`https://api.unsplash.com/photos/`,{
        params: {
          client_id: that.unsplashId,
          per_page: 30
        }
      }).then(function (response) {
            that.unsplashList = response.data;
            console.log(that.unsplashList)
            store.set('photoList',that.unsplashList)
          })
          .catch(function (error) {
            console.log(error);
        });
    },
    downLoadPhoto(url){
      let that = this;
      that.$http.get(url,{
        params: {
          client_id: that.unsplashId,
          force: true
        }
      }).then(function (response) {
            console.log(response);
            that.downLoad = response.data.url;
            // window.location.href = downLoad;
          })
          .catch(function (error) {
            console.log(error);
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello{
  display:flex;
  width: 100%;
  flex-wrap: wrap;
  .img-wrapper{
    // width: 400px;
    flex: 1;
  }
}


</style>


