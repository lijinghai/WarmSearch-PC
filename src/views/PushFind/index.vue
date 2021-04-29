<!--
 * @Description: 失物招领发布信息页面
 * @Author: lijinghailjh@163.com
 * @Date: 2021/4/28
 -->
<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="物品名称" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>

    <el-form-item label="物品描述" prop="goodsDetail">
      <el-input v-model="ruleForm.goodsDetail"></el-input>
    </el-form-item>

    <el-form-item label="物品图片" prop="image">

      <el-upload
          action="#"
          list-type="picture-card"
          :auto-upload="false">
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

    <el-form-item label="物品种类" prop="region">
      <el-select v-model="ruleForm.region" placeholder="请选择物品种类">
        <el-option label="已失物品" value="shanghai"></el-option>
        <el-option label="待寻物品" value="beijing"></el-option>
      </el-select>
    </el-form-item>


<!--    <el-form-item label="活动时间" required>-->
<!--      <el-col :span="11">-->
<!--        <el-form-item prop="date1">-->
<!--          <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>-->
<!--        </el-form-item>-->
<!--      </el-col>-->
<!--      <el-col class="line" :span="2">-</el-col>-->
<!--      <el-col :span="11">-->
<!--        <el-form-item prop="date2">-->
<!--          <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>-->
<!--        </el-form-item>-->
<!--      </el-col>-->
<!--    </el-form-item>-->

<!--    <el-form-item label="即时配送" prop="delivery">-->
<!--      <el-switch v-model="ruleForm.delivery"></el-switch>-->
<!--    </el-form-item>-->

    <el-form-item label="物品类别" prop="panelId">
      <el-radio-group v-model="ruleForm.panelId">
        <el-radio label="日用类" name="panelId"></el-radio>
        <el-radio label="证件类" name="panelId"></el-radio>
        <el-radio label="现金类" name="panelId"></el-radio>
        <el-radio label="电子类" name="panelId"></el-radio>
        <el-radio label="数码类" name="panelId"></el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="物品状态" prop="status">
      <el-radio-group v-model="ruleForm.status">
        <el-radio label="未找到"></el-radio>
        <el-radio label="未找到主人"></el-radio>
      </el-radio-group>
    </el-form-item>

<!--    <el-form-item label="活动形式" prop="desc">-->
<!--      <el-input type="textarea" v-model="ruleForm.desc"></el-input>-->
<!--    </el-form-item>-->

    <el-form-item>
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
        goodsDetail: '',
        image: '',
        region: '',
        // date1: '',
        // date2: '',
        // delivery: false,
        panelId: '',
        status: '',
        desc: '',
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false
      },
      rules: {
        name: [
          { required: true, message: '请输入遗失物品名称', trigger: 'blur' },
          { min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur' }
        ],
        goodsDetail: [
          { required: true, message: '请描述遗失物品详情', trigger: 'blur' },
          { min: 10, max: 500, message: '长度在 10 到 500 个字符', trigger: 'blur' }
        ],
        image: [
          { required: true, message: '请添加物品图片', trigger: 'blur' },
        ],
        region: [
          { required: true, message: '请选择物品种类', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        panelId: [
          {  required: true, message: '请至少选择一个物品类别', trigger: 'change' }
        ],
        status: [
          { required: true, message: '请选择物品状态', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
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

</style>
