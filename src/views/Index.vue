<!--
 * @Description: 路由组件
 * @Author: lijinghailjh@163.com
 * @Date: 2021/3/7
 -->
<template>
<div>
  <m-header></m-header>
    <!--导航  子路由的出口-->
    <router-view></router-view>
</div>
</template>

<script>
import MHeader from '@/common/MHeader'
export default {
    components: {
      MHeader,
    },
}
</script>

<style scoped>

</style>
