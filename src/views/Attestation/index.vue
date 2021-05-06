<!--
 * @Description: 用户认证信息页面
 * @Author: lijinghailjh@163.com
 * @Date: 2021/5/7
 -->
<template>

  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label=" " class="nav">
      <span class="nav_1">广而告之:</span>
      <span class="nav_2"> 很高兴我的平台可以帮到您,为了防止恶意认领现象的发生请登录您的信息，还望谅解！</span>
    </el-form-item>

    <el-form-item label="被认领的物品名称" prop="goodsDetail" label-width="150px">
      <el-input v-model="ruleForm.goodsDetail"></el-input>
    </el-form-item>

    <el-form-item label="认领人的姓名" prop="goodsDetail" label-width="150px">
      <el-input v-model="ruleForm.goodsDetail"></el-input>
    </el-form-item>

    <el-form-item label="认领人的联系方式" prop="goodsDetail" label-width="150px">
      <el-input v-model="ruleForm.goodsDetail"></el-input>
    </el-form-item>

    <el-form-item label="认领人的学号/工号" prop="goodsDetail" label-width="150px">
      <el-input v-model="ruleForm.goodsDetail"></el-input>
    </el-form-item>

    <el-form-item label="认领人的地址" prop="goodsDetail" label-width="150px">
      <el-input v-model="ruleForm.goodsDetail"></el-input>
    </el-form-item>


    <el-form-item label="认领人的证件照" prop="goodsDetail" label-width="150px">

      <el-upload
          ref="upload"
          name="file"
          class="upload-demo"
          action="http://localhost:8091/upload"
          :on-success="beforeUpload"
          :on-remove="handleRemove"
          list-type="picture-card"
      >
        <i slot="default" class="el-icon-plus"></i>
        <div slot="file" slot-scope="{file}">
          <img
              class="el-upload-list__item-thumbnail"
              :src="file.url" alt=""
          >
          <span class="el-upload-list__item-actions">
        <span
            class="el-upload-list__item-preview"
            @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleDownload(file)"
        >
          <i class="el-icon-download"></i>
        </span>
        <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
        </div>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>

    </el-form-item>

    <el-form-item label-width="150px">
      <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        goodsDetail: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>
.nav{
  text-align:center;
}
.nav_1{
  font-size:20px;
  color: #0088ff;
  font-weight: bold;
}
</style>
