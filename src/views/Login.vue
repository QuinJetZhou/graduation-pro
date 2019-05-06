<template>
    <div class="login">
         <div class="video-container">
            <div :style="fixStyle" class="filter"></div>
            <video :style="fixStyle" autoplay loop class="fillWidth" v-on:canplay="canplay">
                <source src="../assets/MP4/Tropical.mp4" type="video/mp4"/>
            </video>
            <div class="poster hidden" v-if="!vedioCanPlay">
                <img :style="fixStyle" src="../assets/Snapshots/Tropical.jpg" alt="">
            </div>
        </div>
        <div class="login-back">
            <div class="login-container layui-row"> 
              <transition name="fade" mode="out-in" key="form1">
                <form action="" class="layui-form" v-if="!isRegist">
                      <h1>登录</h1>
                      <div class="layui-row layui-form-item layui-col-md10 layui-col-md-offset1 input-backcolor">
                        <label class="layui-form-label">账号:</label>
                        <div class="layui-input-block">
                          <input class="layui-input" placeholder="账号" name="account" v-model="account" autocomplete="off" type="text" required  lay-verify="required">
                        </div>
                      </div>
                      <div class="layui-row layui-form-item layui-col-md10 layui-col-md-offset1 input-backcolor">
                        <label class="layui-form-label">密码:</label>
                        <div class="layui-input-block">
                          <input class="layui-input" placeholder="密码" name="password" autocomplete="off" type="password" required  lay-verify="required">
                        </div>
                      </div>
                      <div class="layui-row layui-form-item layui-col-md10 layui-col-md-offset1">
                        <div class="">
                          <input class="layui-btn layui-bg-orange layui-col-md4 layui-col-md-offset4" type="button" lay-submit lay-filter="formDemo"  value="登录">
                        </div>
                      </div>    
                </form> 
                <form action="" v-else key="form2">
                      <h1>注册</h1>
                      <div class="layui-row layui-form-item layui-col-md10 layui-col-md-offset1 input-backcolor">
                        <label class="layui-form-label">账号:</label>
                        <div class="layui-input-block">
                          <input class="layui-input" placeholder="账号" name="account" v-model="registAccount" autocomplete="off" type="text" required  lay-verify="required">
                        </div>
                      </div>
                      <div class="layui-row layui-form-item layui-col-md10 layui-col-md-offset1 input-backcolor">
                        <label class="layui-form-label">密码:</label>
                        <div class="layui-input-block">
                          <input class="layui-input" placeholder="密码" name="password" v-model="registPassword" autocomplete="off" type="password" required  lay-verify="required">
                        </div>
                      </div>
                      <div class="layui-row layui-form-item layui-col-md10 layui-col-md-offset1">
                        <div class="">
                          <input class="layui-btn layui-bg-green layui-col-md4 layui-col-md-offset4" type="button" lay-submit lay-filter="formDemo" value="注册">
                        </div>
                      </div>  
                </form> 
              </transition>
            <div class="layui-row">
                <input type="button" v-bind:value="isRegist ? registText:loginText" @click="isRegist = !isRegist" class="layui-btn layui-col-md2 layui-col-md-offset8 button-back">  
              </div> 
            </div> 

                
        </div>    
    </div>
</template>

<script>
import { log } from 'util';
export default {
    name: 'login',
    data() {
      return {
        vedioCanPlay: false,
        fixStyle: '',
        isRegist: false,
        loginText: '注册',
        registText: '返回登录',
        account:'',
        password:'',
        registAccount:'',
        registPassword:''
      }
    },
    methods: {
      canplay() {
        this.vedioCanPlay = true
      },
      login() {
        if (!(/^1[34578]\d{9}$/.test(this.account))) {
          layer.msg("请输入登录手机号码");
					return;
				}
				if (this.password.length < 6) {
          layer.msg("密码最短为 6 个字符");
					return;
        }
        
      }
    },
    mounted: function() {
      window.onresize = () => {
        const windowWidth = document.body.clientWidth
        const windowHeight = document.body.clientHeight
        const windowAspectRatio = windowHeight / windowWidth
        let videoWidth
        let videoHeight
        if (windowAspectRatio < 0.5625) {
          videoWidth = windowWidth
          videoHeight = videoWidth * 0.5625
          this.fixStyle = {
            height: windowWidth * 0.5625 + 'px',
            width: windowWidth + 'px',
            'margin-bottom': (windowHeight - videoHeight) / 2 + 'px',
            'margin-left': 'initial'
          }
        } else {
          videoHeight = windowHeight
          videoWidth = videoHeight / 0.5625
          this.fixStyle = {
            height: windowHeight + 'px',
            width: windowHeight / 0.5625 + 'px',
            'margin-left': (windowWidth - videoWidth) / 2 + 'px',
            'margin-bottom': 'initial'
          }
        }
      }
      window.onresize()

      layui.use('form', function(){
        var form = layui.form;
        //监听提交
        form.on('submit(formDemo)', function(data){
          console.log(data)
          layer.msg(JSON.stringify(data.field));
          return false;
        });
      });
    }

}
</script>

<style lang="scss">
    .login{
        top: -50%;
    }
  .login,
  .video-container {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }

  .video-container .poster img,
  .video-container video {
    z-index: 9;
    position: absolute;
    left: 0px;
  }

  .video-container .filter {
    z-index: 99;
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
  }

  .login-back{
    position: absolute;
    left: 50%;
    top: 50%;
    // height: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #fff;
    border-radius: 5px;
    width: 35%;
    text-align: center;
    z-index: 999;
    min-width: 370px;
    // border:3px solid rgba(255, 255, 255, 0.1);
    // border-radius: 20px;
    //彩色边框
    // border-image: -webkit-linear-gradient(45deg, aquamarine, cornflowerblue, goldenrod, hotpink, salmon, lightgreen, sandybrown, violet)100 100 100 100;
    // border-image-width: 20px;
    //彩色背景动画
    // background-image: linear-gradient(45deg, aquamarine, cornflowerblue, goldenrod, hotpink, salmon, lightgreen, sandybrown, violet);
    // background-repeat: no-repeat;
    // background-size: 300% 300%;
    // background-position: 0% 0%;
    // animation: animate_bg 5s infinite;
    h1{
      font-size: 36px;
      color: #fff;
      font-weight: 700;
      margin-bottom: 20px;
      // position: absolute;
      // top: 0px;
      // left: 50%;
      // margin-left: -1em;
    }
    .login-container{
        width: 100%;
        height: 100%;
        // background-color: rgba(255,255,255,.7);
        border-radius: 10px;
        padding: 5% 10%;
        .input-backcolor{
          background-color: rgba(0, 0, 0, 0.9);
          color: rgba(255,255,255,1);
          border-radius: 5px;
          .layui-input{
          border-bottom-right-radius: 5px;
          border-top-right-radius: 5px;
          border-top-left-radius: 0px;
          border-bottom-left-radius: 0px;
          background: rgba(255,255,255,1);
          border: 0;
          color: #000;
          }
        }
    }
    .button-back{
      width: 100px;
      background: rgba(0,0,0,.6);
    }
    .regist-container{
      background: #fff;
    }
  }  

  @keyframes animate_bg {
      // 0%{background-position: 0% 0%;}
      // 25%{background-position: 0% 100%;}
      // 50%{background-position: 100% 100%;}
      // 75%{background-position: 100% 0;}
      // 100%{background-position: 0% 0%;}
        0% {
            border-image: linear-gradient(45deg, aquamarine, cornflowerblue, goldenrod, hotpink, salmon, lightgreen, sandybrown, violet)100 100 100 100;
        }
        25% {
            border-image: linear-gradient(135deg, aquamarine, cornflowerblue, goldenrod, hotpink, salmon, lightgreen, sandybrown, violet)100 100 100 100;
        }
        50% {
            border-image: linear-gradient(225deg, aquamarine, cornflowerblue, goldenrod, hotpink, salmon, lightgreen, sandybrown, violet)100 100 100 100;
        }
        75% {
            border-image: linear-gradient(315deg, aquamarine, cornflowerblue, goldenrod, hotpink, salmon, lightgreen, sandybrown, violet)100 100 100 100;
        }
        100% {
            border-image: linear-gradient(45deg, aquamarine, cornflowerblue, goldenrod, hotpink, salmon, lightgreen, sandybrown, violet)100 100 100 100;
        }

    }

    .fade-enter-active{
      animation: login .5s linear;
    }
    .fade-leave-active {
      animation: regist .5s linear;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }
    @keyframes login {
      0%{transform: translate(30%,0);opacity: 0;}
      50%{transform: translate(15%,0);opacity: .3;}
      100%{transform: translate(0,0);opacity: 1;}
    }
    @keyframes regist {
      0%{transform: translate(0%,0);opacity: 1;}
      50%{transform: translate(-15%,0);opacity: .3;}
      100%{transform: translate(-30%,0);opacity: 0;}
    }

</style>
