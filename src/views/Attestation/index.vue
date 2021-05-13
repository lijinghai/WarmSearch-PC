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

    <el-form-item label="被认领的物品名称" prop="goodsName" label-width="150px">
        <el-input v-model="ruleForm.goodsName"></el-input>
    </el-form-item>

    <el-form-item label="认领人的姓名" prop="userName" label-width="150px">
      <el-input v-model="ruleForm.userName"></el-input>
    </el-form-item>

    <el-form-item label="认领人的联系方式" prop="contact" label-width="150px">
      <el-input v-model="ruleForm.contact"></el-input>
    </el-form-item>

    <el-form-item label="认领人的学号/工号" prop="number" label-width="150px">
      <el-input v-model="ruleForm.number"></el-input>
    </el-form-item>

    <el-form-item label="认领人的地址" prop="address" label-width="150px">
      <el-input v-model="ruleForm.address"></el-input>
    </el-form-item>


    <el-form-item label="认领人的证件照" prop="imgUrl" label-width="150px">

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
      <el-button type="primary" @click="submitForm('ruleForm')">提交申请</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import axios from "axios";


export default {
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      ruleForm: {
        goodsName: '',
        userName: '',
        contact: '',
        number: '',
        address: '',
        imgUrl: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入被认领的物品名称', trigger: 'blur' },
          { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
        ],
        goodsName: [
          { required: true, message: '请输入认领人的姓名', trigger: 'blur' },
          { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
        ],
        contact: [
          { required: true, message: '请输入认领人的联系方式', trigger: 'blur' },
          { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
        ],
        number: [
          { required: true, message: '请输入认领人的学号/工号', trigger: 'blur' },
          { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请输入认领人的地址', trigger: 'blur' },
          { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
        ],
        imgUrl: [
          { required: true, message: '请上传认领人的证件照', trigger: 'change' }
        ],
      }
    };
  },
  methods: {
    beforeUpload(file) {
      this.ruleForm.imgUrl =file.url
      console.log(file.url)
    },
    handleRemove(file) {
      this.dialogImageUrl = file.url;
      console.log(file.response.url)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
      console.log(file.url)
    },
    handleDownload(file) {
      this.dialogImageUrl = file.url;
      console.log(file.url)
    },

    submitForm(formName) {

      this.$refs[formName].validate((valid) => {



        /* json格式提交： */
        let formData = JSON.stringify(this.ruleForm);

        axios({
          method:"post",
          url:"/pcattestation/all",
          // cache: false,
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            // processData: false, //默认为true，默认情况下，发送的数据将被转换为对象，设为false不希望进行转换
          },
          withCredentials:true,
          data:formData
        }).then((res)=>{
          console.log(res);
        });


        if (valid) {
          alert('恭喜您领取到您的遗失物品，请静候我们的工作人员与您的联系');
          this.$router.push({
            name: "home"
          })
        } else {
          alert('请按要求填写您的信息!!');
          return false;
        }
      });
    },
    //对该表单项进行重置，将其值重置为初始值并移除校验结果
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
  font-size:25px;
  color: #0088ff;
  font-weight: bold;
}
.nav_2{
  font-size:20px;
}
</style>
