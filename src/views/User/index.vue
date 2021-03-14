<!--
 * @Description:用户信息列表 注册，登录
 * @Author: lijinghailjh@163.com
 * @Date: 2021/3/14
 -->
<template>
  <div class="layout-container">
    <m-header>
      <div slot="nav"></div>
    </m-header>
    <div class="w">
      <div class="content">


      </div>
    </div>


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

<style lang="scss" scoped>
@import "../../assets/style/mixin";

.w {
  padding-top: 40px;
}

.content {
  display: flex;
  height: 100%;
}

.account-sidebar {
  width: 210px;
  border-radius: 6px;
  .avatar {
    padding-top: 20px;
    border-radius: 10px;
    text-align: center;
    img {
      width: 168px;
      height: 168px;
    }
    h5 {
      font-size: 18px;
      line-height: 48px;
      font-weight: 700;
    }
  }
  .account-nav {
    padding-top: 15px;
    li {
      position: relative;
      height: 48px;
      border-top: 1px solid #EBEBEB;
      line-height: 48px;
      &:hover {
        a {
          position: relative;
          z-index: 1;
          height: 50px;
          background-color: #98AFEE;
          line-height: 50px;
          color: #FFF;
        }

      }
      a {
        display: block;
      }
      &.current {
        a {
          position: relative;
          z-index: 1;
          height: 50px;
          background-color: #98AFEE;
          line-height: 50px;
          color: #FFF;
        }
      }

    }
  }
}

.account-content {
  margin-left: 20px;
  flex: 1;
}
</style>
