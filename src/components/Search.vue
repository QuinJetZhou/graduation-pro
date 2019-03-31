<template>
    <div class="background">
        <!-- <img src="../assets/img/marion-michele-277282-unsplash.jpg" alt=""> -->
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
            <!-- <div class="layui-col-xs4 layui-col-sm7 layui-col-md8 layui-bg-blue">
            移动：4/12 | 平板：7/12 | 桌面：8/12
            </div>
            <div class="layui-col-xs4 layui-col-sm5 layui-col-md4 layui-bg-orange">
            移动：4/12 | 平板：5/12 | 桌面：4/12
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    // name:'HomeBackground'
}
</script>
<style  lang="scss" >
    .background{
        width: 100%;
        height: 50%;
        overflow: hidden;
        align-items: center;
        display: flex;
        background: url('../assets/img/aeroplane-aircraft-airplane-1465904.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50%;
        .layui-row{
            width: 90%;
            margin: 0 auto;
            height: 50px;
            border: 2px solid rgba(255,255,255,0.7);
            border-radius: 10px;
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
    }
</style>