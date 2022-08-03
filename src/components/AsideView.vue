<template>
    <div class="aside-box">
        <el-row class="tac">
            <el-col :span="12">
                <div class="aside-title">
                    <img src="@/assets/images/Logo.svg" alt="logo" srcset="">
                </div>
                <el-menu        
                    class="el-menu-vertical-demo"
                    :default-active="active"  
                >
                    <el-menu-item @click="goto('/index')" index="/index">
                        <el-icon><HomeFilled /></el-icon>
                        <span>首页</span>
                    </el-menu-item>
                    <el-menu-item @click="goto('/article')"  index="/article">
                        <el-icon><Promotion /></el-icon>
                        <span>文章</span>
                    </el-menu-item>
                    <el-menu-item @click="goto('/about')"  index="/about">
                        <el-icon><Reading /></el-icon>
                        <span>关于</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <el-icon><Food /></el-icon>
                        <span>赞助</span>
                    </el-menu-item>
                </el-menu>
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
            isCollapse:true,
            active:'/index'
        }
    },
    watch: {
        // 监听路由的变化
        $route(to){
            this.active = to.path
        }
    },
    methods: {
        goto(path : string){
            this.$router.push(path)
        },
    },
})
</script>

<style lang="less" scoped>
    .aside-box{
    width: 100%;
    height: 100%;
    .tac{
        display: block;
        .aside-title{
            color: @defaultTextColor;
            padding: 5px;   
            height: 42px;
            display: flex;
            align-items: center;
            span{
                font-size: 18px;
                line-height: 27px;
                font-weight: bold;
            }
            img{
                width: 100%; 
                height: 100%;
            }
        }
        .el-col{
            max-width: 100%;
            .el-menu{
                border-right: none;
                border-top: 1px solid #4c4d4f;
                background-color: @defaultColor;
                .el-menu-item{
                    color: @defaultTextColor;
                    span{
                        font-size: 18px;
                        font-weight: 400;
                        position: relative;
                        padding-right: 5px;
                    }
                }
                .el-menu-item.is-active{
                    background-color: rgba(64,158,255,.1);
                }
                .el-menu-item:hover{
                    background-color: rgba(64,158,255,.1);
                }
            }

        }
    }
}   
</style>