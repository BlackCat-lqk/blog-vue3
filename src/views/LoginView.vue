<template>
    <div style="margin: 20px" />
    <span>土味情话：</span>
    <el-input
    v-model="qinghua"
        :rows="2"
        type="textarea"
        disabled
    />
    <el-form
        label-position="top"
        label-width="100px"
        :model="formLabelAlign"
        style="max-width: 460px"
    >
        <el-form-item label="Name">
        <el-input v-model="formLabelAlign.name" />
        </el-form-item>
        <el-form-item label="Activity zone">
        <el-input v-model="formLabelAlign.region" />
        </el-form-item>
        <el-form-item label="Activity form">
        <el-input v-model="formLabelAlign.type" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary">Submit</el-button>
            <el-button @click="getMessage">获取土味情话</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import { ElMessage } from 'element-plus'
    import {defineComponent} from 'vue'
    import api from '../http/api/login.js'
    export default defineComponent({
        data() {
            return {
                formLabelAlign:{
                        name:'',
                        region:'',
                        type:'',
                },
                myParams:{
                    format:'json'
                },
                qinghua:'',
            }
        },
        created(){
            // console.
        },
        methods:{
            getMessage(){
                // 发送接口请求前要先进行表单的验证

                api.getMyMessge(this.myParams).then((res) => {
                    this.qinghua = res.content;
                    // 这里可以判断存储token
                    ElMessage.success('获取成功！')
                }).catch((error) => {
                    ElMessage.error(error+'')
                })
            },
        }
    })
</script>

<style lang="less" scoped>

</style>