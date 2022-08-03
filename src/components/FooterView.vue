<template>
    <div class="footer-box">
        <span>技术支持: Vue3 /Vue Cli /TypeScript /Element-Plus/fontAwesome/Node.js </span>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent ({
    comments:{
       
    },
    data() {
        return {
            
        }
    },
    methods: {

    },
})
</script>

<style lang="less" scoped>
    .footer-box{
        height: 90%;
        color: @defaultTextColor;
        font-size: 16px;
        line-height: 22.5px;
        border-top: 1px solid #4c4d4f;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>