<template>
    <div class="about-box">
        <div class="breadcrumb">
            <el-breadcrumb separator-icon="ArrowRight">
                <el-breadcrumb-item :to="{ path: '/index' }" >首页</el-breadcrumb-item>
                <el-breadcrumb-item>关于</el-breadcrumb-item>
            </el-breadcrumb>
        </div>  
        <el-row>
            <el-col :span="8">
                <el-card>
                    <img
                    :src="src"
                    class="image"
                    />
                    <div class="descript-detail">
                        <p>昵称：</p>
                        <p>创建时间：</p>
                        <p>个人简介：</p> 
                        <p>等级：</p>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template> 
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent ({
    comments:{
       
    },
    data() {
        return {
            currentDate:new Date(),
            src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        }
    },
    methods: {
        
    },
})
</script>
<style lang="less" scoped>
    .about-box{
        // 面包屑
        .breadcrumb{
            padding: 10px;
            .el-breadcrumb{
                border-bottom: 1px solid #999;
                padding-bottom: 5px;
            }
            :deep(.el-breadcrumb__inner){
                font-size: 14px;
                font-weight: bold;
                color: @defaultTextColor;
            }
        }
        .el-row{
            width: 100%;
            height: auto;
            justify-content: center;
            align-items: center;
            :deep(.el-card__body){
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction:column;
            }
            .el-card{
                background: none;
                border: none;
                box-shadow: none;
            }
            .image{
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 30%;
            }
            .descript-detail{
                display: flex;
                align-items: center;
                flex-direction: column;
                width: 40%;
                p{
                    font-size: 18px;
                    font-weight: bold;
                    line-height: 54px;
                    display: flex;
                    color:@defaultTextColor;
                }
            }
        }
    }
</style>
