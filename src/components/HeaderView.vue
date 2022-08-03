<template>
    <div class="header-box">
        <div class="header-title">
            <span @click="theme">Cat Blog</span>
            <el-switch
                v-model="value"
                class="mt-2"
                size="large"
                style="margin-left: 24px"
                inline-prompt
                active-icon="Moon"
                inactive-icon="Sunny"
                @change="ChangeTheme"
            />
        </div>
        <div class="user">
            <el-badge :is-dot="msg" class="item">
                <font-awesome-icon icon="fa-solid fa-bell" :class="{'fa-shake':msg, 'fa-2x':true}" />
            </el-badge>
            <span @click="gotLogin('/login')">{{userName}}</span>
            <div>
                <el-avatar :src="userUrl"/>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue'
import {setTheme,getStorageTheme} from '../theme/theme.js'
export default defineComponent ({
    comments:{
       
    },
    data() {
        return {
            userUrl:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
            msg:1,
            value:true,
            userName:'您好，请登录',
        }
    },
    created(){
        const mytheme = getStorageTheme('theme');
        if(mytheme == 'light'){
            this.value = false;
        }else{
            this.value = true;
        }
        setTheme(mytheme)
    },
    methods: {
        ChangeTheme(val){
            // const mytheme = getStorageTheme('theme');
            val ? setTheme('dark') : setTheme('light');
        },
        gotLogin(path){
            this.$router.push(path)
        }
    },
})
</script>

<style lang="less" scoped>
    .header-box{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: @defaultTextColor;
    .header-title{
        font-size: 18px;
        line-height: 27px;
        font-weight: bold;
    }
    // 换肤开关
    .el-switch{
        --el-switch-off-color:#4d5d6d;
        --el-switch-border-color:#409eff;
        --el-switch-on-color:@defaultColor;
    }
    // 头像
    .user{
        .item {
            margin-right: 40px;
        }
        .el-badge{
            display: flex;
            align-items: center;
        }
        span{
            margin-right: 5px;
            margin-left: 5px;
        }
        display: flex;
        justify-content: center;
        align-items: center;
        .demo-type {
            display: flex;
          }
          .demo-type > div {
            flex: 1;
            text-align: center;
          }
          
          .demo-type > div:not(:last-child) {
            border-right: 1px solid var(--el-border-color);
          }
    }
}
</style>