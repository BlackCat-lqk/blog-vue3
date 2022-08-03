<template>
  <div class="home">
    <div class="common-layout">
      <el-container>
        <el-aside width="200px"><AsideView></AsideView></el-aside>
        <el-container>
          <el-header><HeaderView></HeaderView></el-header>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer><FooterView></FooterView></el-footer>
        </el-container>
      </el-container>
    </div>
  </div>
</template> 

<script lang="ts">
import { defineComponent } from 'vue'
import AsideView from '@/components/AsideView.vue';
import HeaderView from '../components/HeaderView.vue';
import FooterView from '@/components/FooterView.vue';

export default defineComponent({
  components: {
    AsideView,
    HeaderView,
    FooterView,
  },
  data() {
    return {
      
    }
  },
  // 动态注册模块在使用vuex的模块才注册
  mounted () { 
    // this.$store.registerModule('myModule', MyModule)
  },
  // 在不使用的时候，注销模块：
  beforeUnmount () {
      // this.$store.unregisterModule('myModule')
  },
  created(){
    this.$router.push('/index')
  },
  methods: {
    
  },
})
// export default class HomeView extends Vue {}
</script>
<style lang="less" scoped>
.common-layout{
    .el-container{
        height: 100vh;
    }
    .el-aside, .el-header ,.el-footer{
        background-color: @defaultColor;
    }
    .el-header{
        height: auto;
        padding: 5px;
        border-bottom: 1px solid #4c4d4f;
    }
    .el-aside{
        width: auto;
         border-right: 1px solid #4c4d4f;
    }
    .el-footer{
        height: 40px;
    }
    .el-main{
        padding: 20px;
        background-color: @defaultColor;
        // background-image: url('@/assets/images/bg_1920.jpg');
        // background-repeat: no-repeat;
        // background-position: center center fiexd;
        // background-size: 100%;
    }
} 
</style>