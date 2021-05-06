<!--
 * @Description: 物品详情页
 * @Author: lijinghailjh@163.com
 * @Date: 2021/3/12
 -->
<template>
  <div class="w store-content">
    <div class="gray-box">
      <div class="gallery-wrapper">
        <div class="gallery">
          <div class="thumbnail">
            <ul>
              <!--小图-->
              <li v-for="(item,i) in product" :key="i"
                  :class="{on:item===item.url}"
                  @click="handleClick(item)">
                <img :src='item.url'>
              </li>
            </ul>
          </div>
          <div class="thumb">
            <div class="big" v-for="(item,i) in product" :key="i">
              <img :src='item.url'>
            </div>
          </div>
        </div>
      </div>
      <!--右边-->
      <div class="banner" v-for="(item,i) in product" :key="i">
        <div class="sku-custom-title">
          <h4>{{item.goods_name}}</h4>
          <h6>
            <span>{{item.goods_detail}}</span>
            <span class="price">
              <em></em>
              <i>{{item.status}}</i>
            </span>
          </h6>
        </div>
        <div class="num">
          <span class="params-name">发布时间:{{item.create_time}}</span>
        </div>
        <div class="buy">

          <span class="params-name">现在正在认领的人是: <span class="username">{{userInfo.data.username}}</span></span>
          <el-button type="danger" :plain="true" @click="open">现在认领</el-button>


        </div>
      </div>
    </div>
    <!--产品信息-->
    <div class="item-info">

    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  data() {
    return {
      product:{},
      productInfo: ''
      // //存小图
      // small:[],
      // //存大图
      // big:''
    };
  },
  computed: {
    ...mapState(['login', 'userInfo', 'carList', 'showCart']),
  },

  methods:{
    open() {
      this.$confirm('请您仔细查看已确保是您的宝贝', '小主您好：', {
        distinguishCancelAndClose: true,
        confirmButtonText: '马上带回去',
        cancelButtonText: '看错了'
      })
          .then(() => {
            this.$router.push('/Attestation')
            this.$message({
              type: 'info',
              message: '很高兴我的平台可以帮到您,为了防止恶意认领现象的发生请登录您的信息'

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


    handleClick(url){
      this.item.url1 = url;
    },
    async getGoodsDetail() {
      try {
        const res = await this.$http.get('/pcurgent/goodsid?limit=19&page=1&sort=1&id='+this.$route.query.goodsId)
        console.log(res)
        this.product = res.data.data.items
        console.log(res.data.data.items)
        // //存小图
        // this.small = this.product.url;
        // //大图
        // this.big = this.product.url;
        // console.log(this.product.url)
        let data = res.data;
        if (data.code == 20000){
          let items = data.data.items;
          console.log(items)
          this.product = items;
          console.log(items)
        }
      } catch (error) {
        console.log(error.message)
      }
    }
  },
  created() {
    this.getGoodsDetail();
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixin";

.username{
  color: #007bff;
  font-size:20px;
  font-weight: bold;
}

.store-content {
  clear: both;
  width: 1220px;
  min-height: 600px;
  padding: 0 0 25px;
  margin: 0 auto;
}

.gray-box {
  display: flex;
  padding: 60px;
  margin: 20px 0;
  .gallery-wrapper {
    .gallery {
      display: flex;
      width: 540px;
      .thumbnail {
        li:first-child {
          margin-top: 0px;
        }
        li {
          @include wh(80px);
          margin-top: 10px;
          padding: 12px;
          border: 1px solid #f0f0f0;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 5px;
          cursor: pointer;
          &.on {
            padding: 10px;
            border: 3px solid #ccc;
            border: 3px solid rgba(0, 0, 0, 0.2);
          }
          img {
            display: block;
            @include wh(100%);
          }
        }
      }
      .thumb {
        .big {
          margin-left: 20px;
        }
        img {
          display: block;
          @include wh(440px);
        }
      }
    }
  }
  // 右边
  .banner {
    width: 450px;
    margin-left: 10px;
    h4 {
      font-size: 24px;
      line-height: 1.25;
      color: #000;
      margin-bottom: 13px;
    }
    h6 {
      font-size: 14px;
      line-height: 1.5;
      color: #bdbdbd;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .sku-custom-title {
      overflow: hidden;
      padding: 8px 8px 18px 10px;
      position: relative;
    }
    .params-name {
      padding-right: 90px;
      font-size: 14px;
      color: #8d8d8d;
      line-height: 36px;
    }
    .num {
      padding: 29px 0 8px 10px;
      border-top: 1px solid #ebebeb;
      display: flex;
      align-items: center;
    }
    .buy {
      position: relative;
      border-top: 1px solid #ebebeb;
      padding: 30px 0 0 10px;
    }
  }
}

.item-info {
  .gray-box {
    padding: 0;
    display: block;
  }
  .img-item {
    width: 1220px;
    // padding: 1vw;
    text-align: center;
    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
}

.no-info {
  padding: 200px 0;
  text-align: center;
  font-size: 30px;
}

.price {
  display: block;
  color: #d44d44;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: right;
  i {
    padding-left: 2px;
    font-size: 24px;
  }
}
</style>
