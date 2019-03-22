<template>
  <div id="app">
    <div id="nav">
      <ul class="layui-nav" lay-filter="demo">
        <li class="layui-nav-item"><router-link to="/">Home</router-link></li>
        <li class="layui-nav-item layui-this"><router-link to="/about">About</router-link></li>
        <li class="layui-nav-item"><a href="">社区</a></li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>
<script>
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
  /* padding: 30px; */
}

#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
