<template>
        <div class="breadcrumb">
            <el-breadcrumb separator-icon="ArrowRight">
                <el-breadcrumb-item :to="{ path: '/index' }" >首页</el-breadcrumb-item>
                <el-breadcrumb-item>文章</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
  <div v-if="true" class="main-home-box">
    
    <div class="carouse">
        <div class="option">
            <div class="search-main-box">
                <div @click="visible = true" class="choose-tags"> 
                    <span>选择标签</span><font-awesome-icon icon="fa-solid fa-tags" class="fa-solid fa-tags fa-2xl" style="margin-left:5px" />
                </div>
                <div class="search">
                    <el-input v-model="input" placeholder="Please input search content" />
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="fa-solid fa-2xl" style="--fa-animation-duration: 3s;"/>
                </div>
            </div>
        </div>
        
        <div class="show-article">
            <el-scrollbar>
            <el-timeline>
                <el-timeline-item v-for="(item, key) in 20" :key="key" :timestamp="nowTime" placement="top">
                    <el-card>
                        <h4>Update Github template{{item}}</h4>
                        <p>Tom committed 2018/4/12 20:46{{item}}</p>
                    </el-card>
                </el-timeline-item>
            </el-timeline>
            </el-scrollbar>
        </div>
          
    </div>
    <PanelView></PanelView>
  </div>
  <el-drawer direction="ltr" v-model="visible" :show-close="false" size="20%">
    <template #header="{ close, titleId, titleClass }">
      <h4 :id="titleId" :class="titleClass">请选择文章标签过滤</h4>
      <el-button type="danger" @click="close">
        <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
        Close
      </el-button>
    </template>
    <div>
        <el-check-tag v-for="tagName in tagList" :key="tagName.id" :checked=tagName.isClick @change="onChange(tagName.isClick)">{{tagName.name}}</el-check-tag>
        <!-- <el-check-tag :checked="checked" @change="onChange">都市</el-check-tag>
        <el-check-tag :checked="checked" @change="onChange">言情</el-check-tag> -->
    </div>  
  </el-drawer>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import PanelView from '@/components/PanelView.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass, faTags } from '@fortawesome/free-solid-svg-icons'
library.add(faMagnifyingGlass, faTags)

export default defineComponent({
    name:'ArticleView',
    components:{
        PanelView,
    },
    data(){
        return {
            input:'',
            visible:false,
            checked:false,
            nowTime:new Date(),
            tagList : [
                    {
                        id:'1',
                        name:'修仙',
                        isClick:false
                    },
                    {
                        id:'2',
                        name:'都市',
                        isClick:false
                    },
                    {
                        id:'3',
                        name:'言情',
                        isClick:false
                    },
                ],
        }
    },
    methods: {
        onChange(data : boolean){
            console.log('选择了');
        }
    },
})

</script>
<style lang="less" scoped>
    // 面包屑
    .breadcrumb{
    margin-bottom: 1vh;
    padding-bottom: 5px;
    border-bottom: 1px solid #999;
    :deep(.el-breadcrumb__inner){
      color: @defaultTextColor;
      font-size: 14px;
    }
  } 
    // 整体容器
    .main-home-box{
    height: 96%;
    display: flex;
    justify-content: space-evenly;
    // 左边容器
    .carouse{
      width: 68%;
      background-color: @defaultColor;
      padding: 10px 0px;
      border-radius: 10px;
      .el-scrollbar{
        box-shadow: 0px 0px 6px @defaultTextColor;
        padding: 10px;
        border-radius: 10px;
      }
      .option{
        .search-main-box{
            width: 100%;
            display: flex;
            justify-content: center;
            .choose-tags{
                color: @defaultTextColor;
                span{
                    font-size: 18px;
                }
            }
        }
        .search{
            width: 80%;
            display: flex;
            justify-content: center;
            align-items: center;
            .el-input{
                margin-right: 10px;
                margin-left: 20px;
            }
            .fa-solid{
                color: @defaultTextColor;
            }
        }
      }
    //   滚动条
    .scrollbar-demo-item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        margin: 10px;
        text-align: center;
        border-radius: 4px;
        background: var(--el-color-primary-light-9);
        color: var(--el-color-primary);
    }
      .show-article{
        height: 92%;
        margin: 40px 20px 10px 20px;
        .el-timeline-item__timestamp.is-top{
            color: @defaultTextColor;
        }
      }
    }
    // 抽屉
    .el-drawer{
        background-color: #000;
    }
  } 
</style>