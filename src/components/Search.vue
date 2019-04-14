<template>
    <!-- <div class="background" > -->
    <div class="main">    
        <div class="layui-row">
            <div class="layui-col-xs2 layui-col-sm2 layui-col-md1  search-box-icon">
                <i class="layui-icon layui-icon-search "></i>
            </div>
            <div class="layui-col-xs8 layui-col-sm8 layui-col-md10  search-box">
                <div class="search-box-content">

                </div>
            </div>
            <div class="layui-col-xs2 layui-col-sm2 layui-col-md1  search-box-icon-enter">
                <i class="layui-icon layui-icon-return "></i>
            </div>
        </div>
        <div class="background" :style="{backgroundImage: 'url(' +backUrl+ ')' }">
            <!-- <img :src="backUrl" alt=""> -->
        </div>
    </div>
</template>

<script>
import { log } from 'util';
export default {
    // name:'HomeBackground'
    data () {
        return {
            unsplashList:{},
            photoList:[],
            backUrl:''
            
        }
    },
    created: function () { 
        this.unsplashList = store.get('photoList')
        for(let item of this.unsplashList){
            this.photoList.push(item.urls.regular);//把图片链接放到一个数组
        }
        console.log(this.photoList);
        this.backUrl = this.photoList[Math.floor(Math.random()*this.photoList.length)]//从数组里随机选一个链接
        console.log(this.backUrl);
        
     }
}
</script>
<style  lang="scss" scope>
    .main{
        width: 100%;
        height: 50%;
        overflow: hidden;
        align-items: center;
        display: flex;
         .layui-row{
            width: 90%;
            margin: 0 auto;
            height: 50px;
            border: 2px solid rgba(255,255,255,0.7);
            border-radius: 10px;
            z-index: 9;
            position: absolute;
            left: 0;
            right: 0;
            .search-box{
                display: flex;
                height: 100%;
                align-content: center;
                justify-content: center;
                border-left: 2px solid rgba(255,255,255,0.7);
                border-right: 2px solid rgba(255,255,255,0.7);
                &-content{
                    height: 100%;
                    width: 100%;
                    // border: 2px solid rgba(255,255,255,0.7);
                    // border-radius: 10px;
                    background: rgba(255,255,255,0.3);
                }
            }
            .search-box-icon,.search-box-icon-enter{
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                &:hover{
                    background: rgba(255,255,255,0.5);
                }
                &:active{
                    background: rgba(255,255,255,0.7);
                }
            }
            // .search-box-icon{
            //     // justify-content: flex-end;
            // }
            .layui-icon{
                    font-size: 30px;
                    display: flex;
                    align-items: center;
                }

        }
    .background{
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        align-items: center;
        display: flex;
        // background: url('../assets/img/aeroplane-aircraft-airplane-1465904.jpg');
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: 50%;
        animation: expand 10s linear infinite alternate;
       
    }
    }
@keyframes expand{
    // 0%{background-position: 50% 50%;background-size: 100%}
    // 50%{background-position: 50% 52.5%}
    // 100%{background-position: 50% 55%;background-size: 105%}
    0%{transform:scale(1)}
    100%{transform:scale(1.1)}
}    
</style>