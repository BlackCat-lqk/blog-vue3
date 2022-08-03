<template>
    <div class="box-r">
      <div class="time-day">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <el-icon :size="60"><Calendar /></el-icon>
              <span>{{date}}</span>
            </div>
          </template>
          <div class="text item"><span class="week-title">{{week}}</span><el-divider style="height:3em" direction="vertical" /><span class="time-title">{{datetime}}</span></div>
        </el-card>
      </div>
      <div class="hot-article">
          <el-card class="box-card" style="overflow:auto;">
            <template #header>
              <div class="card-header">
                <div style="display:flex;align-items: center;">
                  <el-icon :size="30"><HotWater /></el-icon><span>热门文章</span>
                </div>
                <el-button class="button" text>查看更多<el-icon><DArrowRight /></el-icon></el-button>
              </div>
            </template>
            <div v-for="o in 100" :key="o" class="text item">
              <span>{{hotTime}}</span>
              <h2>What is the biggest problem with Web3</h2>
              <span class="discript-content">CSS3中自定义滚动条样式的方法：首先创建一个HTML示例文件；然后通过给元素设置“overflow：scroll”来生成滚动条；最后通过设置scrollbar属性的各个值重新自定义滚动条的样式即可</span>
              <div class="favorite-ike">
                <el-badge :value="200" :max="99" class="item">
                  <el-icon :size="20"><View /></el-icon>
                </el-badge>
                <el-badge :value="200" :max="99" class="item">
                  <el-icon :size="20"><Grape /></el-icon>
                </el-badge> 
                <el-badge :value="200" :max="99" class="item">
                  <el-icon :size="20"><StarFilled /></el-icon>
                </el-badge>
                <el-badge :value="200" :max="99" class="item">
                  <el-icon :size="20"><Comment /></el-icon>
                </el-badge>
              </div>
            </div>
          </el-card>
      </div>
      <div class="tag-box">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <el-icon :size="30"><PriceTag /></el-icon><span>标签</span>
              </div>
            </template>
            <div class="tag-group my-2 flex flex-wrap gap-1 items-center">
              <el-tag
                v-for="item in items"
                :key="item.label"
                class="mx-1"
                :type="item.type"
                effect="dark"
                size="large"
                hit
              >
                {{ item.label }}
              </el-tag>
            </div>
          </el-card>
      </div>
    </div>
</template>
<script lang="ts">  
import { defineComponent } from 'vue' 
export default defineComponent ({
  components: {
  },
  data() {
      return {
        date:'',
        datetime:'',
        hotTime:new Date(),
        week:'',
        items:[
          { type: '', label: 'Tag 111111111' },
          { type: 'success', label: 'Tag 211111111111' },
          { type: 'info', label: 'Tag 311111111' },
          { type: 'danger', label: 'Tag 411111111111' },
          { type: 'warning', label: 'Tag 5111111' },
          { type: '', label: 'Tag 111111111' },
          { type: 'success', label: 'Tag 211111111' },
          { type: 'info', label: 'Tag 3111111111' },
          { type: 'danger', label: 'Tag 4111111111' },
        ]
      };
  },
  computed:{
    
  },
  created() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dataWeek : any = {0:"星期日",1:"星期一",2:"星期二",3:"星期三",4:"星期四",5:"星期五",6:"星期六"}
    this.$nextTick(() => {
    setInterval(() => {
        let dd = new Date()
        let year = dd.getFullYear()
        let month = dd.getMonth() + 1
        let day = dd.getDate()
        let hour = dd.getHours()
        let mins = dd.getMinutes()
        let second = dd.getSeconds()
        let week = dd.getDay()
        this.date = `${year}年${month}月${day}日`
        this.datetime = `${hour}:${mins}:${second}`
        this.week = dataWeek[week];
      })
    })
  },
  methods: {
    
  },
})
</script>
<style lang="less" scoped>
    // 右边卡片
    .box-r{
      width: 28%;
      height: 99%;
      border-radius: 10px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .time-day{
        margin-bottom: 10px;
        padding: 5px;
        .el-card{
          height: auto;
          :deep(.el-card__header), :deep(.el-card__body){
            // background-color: #262727;
            background-color: @defaultColor;
            // color: #fff;
            color: @defaultTextColor;
          }
        }
        .card-header {
          display: flex;
          justify-content: center;
          align-items: center;
          span{
            font-size: 36px;
            line-height: 54px;
            font-weight: bold;
            margin-left: 10px;
          }
        }
        .text, .item{
          display: flex;
          justify-content: space-around;
          .week-title{
            font-size: 32px;
            line-height: 45px;
            font-weight: bold;
          }
          .time-title{
            font-size: 32px;
            line-height: 45px;
          }
        }
      }
      .hot-article{
        height: 50%;
        overflow: auto;
        :deep(.el-scrollbar__view){
          height: 100%;
        }
        padding: 5px;
        .el-card{
          height: 97%;
          :deep(.el-card__header), :deep(.el-card__body){
            background-color: @defaultColor;
            color: @defaultTextColor;
          }
        }
        .el-card::-webkit-scrollbar{
            display: none;
          }
        .text{
          margin-top: 50px;
          border-bottom: 1px solid #999;
          h2{
            font-size: 18px;
            font-weight: bold;
            line-height: 54px;
          }
          span{
            font-size: 12px;
          }
          .discript-content{
            font-size: 14px;
            line-height: 45px;
          }
          .favorite-ike{
            display: flex;
            justify-content: flex-end;
            margin-right: 50px;
            margin-top: 10px;
            .el-icon{
              margin-left: 50px;
            }
          }
        }
      }
      .tag-box{
        height: 30%;
        overflow: auto;
        :deep(.el-scrollbar__view){
          height: 100%;
        }
        padding: 5px;
        .card-header {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        }
        .el-card{
          height: 99%;
          overflow: auto;
          background-color: @defaultColor;
          :deep(.el-card__header), :deep(.el-card__body){
            background-color: @defaultColor;
            color: @defaultTextColor;
          }
        }
        .el-card::-webkit-scrollbar{
            display: none;
          }
        .el-tag{
          margin:5px 10px;
        }
      }
    }
    .el-card.is-always-shadow{
      box-shadow: 0px 0px 6px @defaultTextColor;
    }
</style>

