<template>
  <div class="hello">
    <div v-if="isView" class="main-wrapper">
      <div class="img-wrapper"  v-for="(item,index) of unsplashList" :key="index">
        <!-- <a :href="downLoad" download=""> -->
        <img :src="item.urls.small" alt="" @click="downLoadPhoto(item.links.download_location)">
        <!-- </a> -->
        <!-- <p>{{item}}</p> -->
      </div>
    </div>
    <div v-else >
      <h1><strong>Loading...</strong></h1>
      <h2><strong>{{percent}}</strong></h2>
    </div>
  </div>
</template>

<script>
import { log } from 'util';
import { truncate } from 'fs';
export default {
  // name: 'HelloWorld',
  // props: {
  //   msg: String
  // },
  data(){
    return{
      unsplashList:[],
      downLoad:'',
      count: 0,
      percent: '',
      isView:false
    }
  },
  watch: {
    count: function(val) {
      // console.log(val)
      if (val === 30) {
        // 图片加载完成后跳转页面
        this.isView = true;
      }
    }
  },
  created: function() {
    // unsplash api调用
        if(!store.get('photoList')){
          this.getPhoto();
          console.log("download")
        }
        this.unsplashList = store.get('photoList');
        // this.$bus.emit(this.getPhoto()) 
  },
    mounted: function() {
    this.preload()
  },
  methods:{
    preload(){
      console.log(123);
      
      for(let img of this.unsplashList){
        let image = new Image()
        image.src = img.urls.small
        image.onload = () => {
          this.count++
          // 计算图片加载的百分数，绑定到percent变量
          let percentNum = Math.floor(this.count / 30 * 100)
          this.percent = `${percentNum}%`
        }
      }
    },
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
            var open = " "  //先声明open 为 “”，，这样window.open()方法就能找到并下载。
		        window.open(response.data.url)
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
  width: 100%;
  .main-wrapper{
    width: 100%;
    display:flex;
    flex-wrap: wrap;
    .img-wrapper{
      // width: 400px;
      flex: 1;
      margin: 10px;
      img{
      border-radius: 10px;
      box-shadow: 5px 5px 10px #999;
      }
      img:hover{
        animation: tohight .5s  ease-out;
        // animation-direction:alternate;
      }
    }
  }
}
@keyframes tohight
{
0%{position: relative;bottom: 0px;z-index: 0}
50%{position: relative;bottom: 5px;z-index: 0}
100% {position: relative;bottom: 0px;z-index: 0}
}


</style>


