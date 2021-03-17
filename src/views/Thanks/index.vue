<!--
 * @Description: 捐赠页面
 * @Author: lijinghailjh@163.com
 * @Date: 2021/3/7
 -->
<template>
  <div>
    <div class="block">
      <el-image :src="src"></el-image>
    </div>
    <div class="block">
      <el-image :src="src1"></el-image>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        src: 'https://img-blog.csdnimg.cn/20210316185346693.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0RvcmlhbjE1,size_16,color_FFFFFF,t_70#pic_center',
        src1: 'https://img-blog.csdnimg.cn/20210316185346369.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0RvcmlhbjE1,size_16,color_FFFFFF,t_70#pic_center'
      }
    }
}
</script>

<style lang="scss" scoped>
.block {
    height:1030px;
    width:1030px;
    padding-left: 600px;
}
</style>
