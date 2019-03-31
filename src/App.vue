<template>
  <div id="app">
    <Search/>
    <div id="nav">
      <ul class="layui-nav" lay-filter="demo">
        <li class="layui-nav-item layui-this"><router-link to="/">Home</router-link></li>
        <li class="layui-nav-item"><router-link to="/about">About</router-link></li>
        <li class="layui-nav-item" v-on:click="fullScreen()" style="float:right"><i v-if="fullScreenClick" class="fas fa-expand"></i> <i v-else class="fas fa-compress"></i></li>
        <li></li> 

      </ul>
    </div>
    <router-view/>
  </div>
</template>
<script>
import Search from "@/components/Search.vue";
import { log } from 'util';
import { constants } from 'fs';


export default {
      data(){
        return{
            fullScreenClick: true
        }
      },
      created(){
        // 监听屏幕变化事件
        window.addEventListener("resize", this.ifFull)
      },
      beforeDestroy(){
        window.removeEventListener("resize", this.ifFull)

      },
      methods:{
        fullScreen(){
            if(this.fullScreenClick){
              if(document.documentElement.RequestFullScreen){
                document.documentElement.RequestFullScreen();
              }
              //兼容火狐
              if(document.documentElement.mozRequestFullScreen){
                document.documentElement.mozRequestFullScreen();
              }
              //兼容谷歌等可以webkitRequestFullScreen也可以webkitRequestFullscreen
              if(document.documentElement.webkitRequestFullScreen){
                document.documentElement.webkitRequestFullScreen();
              }
              //兼容IE,只能写msRequestFullscreen
              if(document.documentElement.msRequestFullscreen){
                document.documentElement.msRequestFullscreen();
              }
            }else{
              if(document.exitFullScreen){
                document.exitFullscreen()
              }
              //兼容火狐
              if(document.mozCancelFullScreen){
                document.mozCancelFullScreen()
              }
              //兼容谷歌等
              if(document.webkitExitFullscreen){
                document.webkitExitFullscreen()
              }
              //兼容IE
              if(document.msExitFullscreen){
                document.msExitFullscreen()
              }
            }  
          // console.log(window.fullScreen || document.webkitIsFullScreen)  
          this.fullScreenClick = !this.fullScreenClick;
        },
        ifFull(){
          //如果为不为全屏状态，则this.fullScreenClick = true;
          if(!(window.fullScreen || document.webkitIsFullScreen)){
            this.fullScreenClick = true;
          }
        }
      }
      ,
      components:{
        Search
      }
      
}


</script>

<style lang="scss">
@import url('../public/reset.css');


html,
body{
  height: 100%;
  width: 100%;
  background: #F4F6F6;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
body::-webkit-scrollbar {
        display: none;
    }
#nav {
  position: fixed;
  top: 0;
  width: 100%;
  
}
.layui-nav{
  background-color: rgba(57,61,73,0.3);

}

#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
