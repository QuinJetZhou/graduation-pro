<template>
  <div id="app">
    <HomeBackground/>
    <div id="nav">
      <ul class="layui-nav" lay-filter="demo">
        <li class="layui-nav-item layui-this"><router-link to="/">Home</router-link></li>
        <li class="layui-nav-item"><router-link to="/about">About</router-link></li>
        <li class="layui-nav-item"><a href="javascript:void(0);">社区</a></li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>
<script>
// import HomeBackground from '@/components/HomeBackground.vue'
import HomeBackground from "@/components/HomeBackground.vue";


export default {
      data(){
        return{
            a: 0 
        }
      },
      created: function () {
        console.log('a is: ' + this.a);

      },
      methods:{

      }
      ,
      components:{
        HomeBackground
      }
      
}


</script>

<style>
@import '../public/layui-src/dist/css/layui.css';
body{
  background: #F4F6F6;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
