<!--
 * @Description: 首页图片功能性性插件
 * @Author: lijinghailjh@163.com
 * @Date: 2021/3/11
 -->
<template>
  <el-row class="good-item">
    <el-col>
      <el-card :body-style="{padding: 0}">
        <div class="good-img">
          <a>
            <img :src="goods.url" alt>
          </a>
        </div>
        <h6 class="good-title">{{goods.goodsName}}</h6>
        <h3 class="sub-title ellipsis">{{goods.goodsDetail}}</h3>
        <div class="good-price pr">
          <div class="ds pa">
            <a href>
              <el-button type="default" size="medium" @click="goodsDetails(goods.goodsId)">查看详情</el-button>
            </a>
            <a href="javascript:;">
              <el-button
                  type="primary"
                  size="medium"
                  :plain="true" @click="open">
                <!--                  @click="addCart(goods.panelId,goods.createTime,goods.goodsName,goods.url)"-->
                现在认领</el-button>
            </a>
          </div>
          <p>
            <span style="font-size:14px"></span>
            {{goods.status}}
          </p>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import {mapState} from 'vuex'
import { getStore } from '@/utils/storage'
export default {
  props:['goods'],
  computed: {
    ...mapState(['login'])
  },
  methods:{
    open() {
      this.$confirm('如果不确定是否是您的物品，您可以点击查看详情', '小主您好：', {
        distinguishCancelAndClose: true,
        confirmButtonText: '马上带回去',
        cancelButtonText: '看错了'
      })
          .then(() => {
            this.$message({
              type: 'info',
              message: '很高兴我的平台可以帮到您'
            });
          })
          .catch(action => {
            this.$message({
              type: 'info',
              message: action === 'cancel'
                  ? '别着急，再看看肯定有您的东西'
                  : '您还在犹豫吗？'
            })
          });
    },

    goodsDetails(id) {
      // 编程式导航
      this.$router.push({
        path: 'goodsDetailUrgent?goodsId='+id
        // name: 'goodsDetail',
        // query:{
        //   goodsId:id
        // }
      });
    },
    addCart(id) {
      if(this.login) {
        //用户以登录
        this.$http.post('/api/addCart',{
          username: getStore('username'),
          panelId:id,
          productNum: 1
        });
        //已经存储成功,讲当前的物品存储到store的carList中


      }else {
        //如果用户未登录可以讲物品存储到carlist

      }
    }
  }
}
</script>

<style lang="scss" scoped>
.good-img {
  display: flex;
  justify-content: center;
  a {
    display: block;
    img {
      margin: 50px auto 10px;
      width: 206px;
      height: 206px;
      display: block;
    }
  }
}
.good-price {
  margin: 15px 0;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #d44d44;
  font-family: Arial;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  justify-content: space-around;
  padding-bottom: 60px;
  a {
    margin-right: 5px;
  }
  .ds {
    display: none;
  }
}
.good-price:hover .ds {
  display: block;
}
.good-title {
  line-height: 1.2;
  font-size: 16px;
  color: #424242;
  margin: 0 auto;
  padding: 0 14px;
  text-align: center;
  overflow: hidden;
}
h3 {
  text-align: center;
  line-height: 1.2;
  font-size: 12px;
  color: #d0d0d0;
  padding: 10px;
}
.good-item {
  background: #fff;
  width: 25%;
  transition: all 0.5s;
  height: 410px;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 1px 1px 20px #999;
    .good-price p {
      display: none;
    }
    .ds {
      display: flex;
    }
  }
}
.el-card {
  border: none;
}
</style>
