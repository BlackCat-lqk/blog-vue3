<template>
<div class="breadcrumb">
    <el-breadcrumb separator-icon="ArrowRight">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
    </el-breadcrumb>
</div>
  <div v-if="true" class="main-home-box">
    <div class="carouse">
      <div class="infinite-list-wrapper" style="overflow: auto">
        <el-scrollbar height="">
          <ul
            v-infinite-scroll="load"
            class="list"
            :infinite-scroll-disabled="disabled"
          >
              <el-card v-for="i in count" :key="i"  class="box-card">
                <template #header>
                  <div class="card-header">
                    <!-- <span>标题............</span> -->
                    <el-button class="button">详情<el-icon :size="20"><View /></el-icon></el-button>
                  </div>
                </template>
                <div class="card-content">
                  <div class="card-l">
                    <div class="demo-image__placeholder">
                      <div class="block">
                        <el-image :src="imgListUrl[1]" />
                      </div>
                    </div>
                  </div>
                  <div class="card-r">
                    <font-awesome-icon icon="fa-brands fa-affiliatetheme" class="fa-solid fa-heart fa-beat" style="--fa-animation-duration: 2s;"/>
                    <h1>OhMyStock - 自建给室友用的简单 Screener 平台起因</h1>
                    <span>{{hotTime}}</span>
                    <p>许景明小时候身体不好，父亲教他武术强身健体，其中就有“单臂倒立桩”。因为长期练习效果挺好，也成了他每日练的五大桩功之一，冬练三九，夏练三伏，练习至今已有二十年，即便生病受伤也会坚持，没太特殊原因是不会断的。俗话说‘练拳不练功，到老一场空’，这所谓的功，就是日常基本功。</p>
                  </div>
                </div>
              </el-card>
          </ul>
          <p class="loading-more" v-if="loading"><el-icon :size="30" class=is-loading><Loading /></el-icon></p>
          <p class="loading-more" v-if="noMore"><el-icon :size="18" style="margin-right:5px;"><Hide /></el-icon>No more</p>
        </el-scrollbar>
      </div>
    </div>
    <PanelView></PanelView>
  </div>
</template>
<script lang="ts">  
import { defineComponent } from 'vue' 
import PanelView from '@/components/PanelView.vue'
import { ElMessage } from 'element-plus'
export default defineComponent ({
  components: {
    PanelView,
  },
  data() {
      return {
        imgListUrl:['https://img.tukuppt.com/bg_grid/00/03/45/k9gVVHX4fc.jpg!/fh/350','https://img.tukuppt.com/bg_grid/00/11/80/y9ucZfy35D.jpg!/fh/350'],
        count:10,
        loading:false,
        hotTime:new Date(),
      };
  },
  computed:{
    noMore():boolean{
      const isnoMore:boolean = this.count >= 20
      return isnoMore
    },
    disabled():boolean{
      return this.noMore || this.loading
    }
  },
  created() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  },
  methods: {
    load(){
      this.loading = true
      setTimeout(()=>{
        this.count += 2
        this.loading = false
      },2000)
    },
    tip(){
      ElMessage({
    showClose: true,
    message: 'Centered text',
    center: true,
  })
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
   .main-home-box{
    height: 96%;
    display: flex;
    justify-content: space-evenly;
    .carouse{
      width: 68%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    // 滚动列表
    .infinite-list-wrapper{
      height: 100%;
      text-align: center;
      overflow: hidden; 
      background-color: @defaultColor;
      border-radius: 10px;
      .list {
        padding: 0 5px;
        margin: 0;
        list-style: none;
      }
      .list-item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        background: var(--el-color-danger-light-9);
        color: var(--el-color-danger);
      }
      .list-item + .list-item {
        margin-top: 10px;
      }
      p{
        color: @defaultTextColor;
        text-align: justify;
        text-justify: inter-ideograph;
        text-indent: 2em;
      }
      span{
        font-weight: 300;
      }
      .loading-more{
        margin-top: 15px;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        color: @defaultTextColor;
      }
    }
    //滚动列表滚动条
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
    // 卡片
    .el-card{
      border:none;
      margin-top: 10px;
      height: 400px;
      border-radius: 10px;
      :deep(.el-card__header), :deep(.el-card__body){
      background-color: @defaultColor;
      }
      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        span{
          font-size: 18px;
          font-weight: bold;
          line-height: 22.5px;
        }
        .button{
          font-weight: bold;
          .el-icon{
            margin-left: 5px;
          }
        }
      }
      .card-content{
        display: flex;
        justify-content: space-between;
      }
      .box-card {
        width: 100%;
        padding: 10px;
      }
      .card-l, .card-r{
          width: 48%;
          height: 300px;
        }
      .card-r{
        color: @defaultTextColor;
        h1{
          font-size: 18px;
          font-weight: bold;
          line-height: 54px;
        }
        p{
          font-size: 16px;
          line-height: 54px;
        }
      }
    }
    .el-card.is-always-shadow{
      box-shadow: 0px 0px 6px @defaultTextColor;
    }
    // 列表图片
    .demo-image__placeholder{
      height: 100%;
      .block {
        height: 100%;
        width: 100%;
      }
      .el-image {
        height: 100%;
        width: 100%;
        border-radius: 10px;
      }
    }
  } 
</style>
