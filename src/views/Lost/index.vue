<!--
 * @Description: 失物物品信息
 * @Author: lijinghailjh@163.com
 * @Date: 2021/3/7
 -->
<template>
  <div class="goods">
    <div class="nav">
      <div class="w">
        <a @click="handleSort(i)"
           :class="{active:i===isIndex}"
           href="javascript:;"
           v-for='(navItem,i) in navList'
           :key="i"
        style="font-size:18px">
          {{navItem.title}}
        </a>
<!--        <div class="price-interval">-->
<!--          <input type="number" class="input" placeholder="价格" v-model="min">-->
<!--          <span style="margin: 0 5px">-</span>-->
<!--          <input type="number" placeholder="价格" v-model="max">-->
<!--          <el-button type="primary" size="small" style="margin-left: 10px;">确定</el-button>-->
<!--        </div>-->
      </div>
    </div>
    <div>
      <div class="goods-box w">
        <GoodsAllLost v-for="goods in allGoods" :key="goods.id" :goods="goods"></GoodsAllLost>
      </div>
      <div class="w">
      <!--分页-->
        <div class="w">
          <el-pagination
              style="float:right;"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              :page-sizes="[8, 20, 40, 80]"
              :page-size="pageSize"
              layout="total,sizes, prev, pager, next"
              :total="total"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsAllLost from "@/components/GoodsAllLost";
export default {
  components:{
    GoodsAllLost
  },
  data() {
    return {
      max: "",
      min: "",
      navList:[
        {title:"综合排序"},
        {title:"时间由早到晚"},
        {title:"时间由晚到早"}
      ],
      isIndex: 0,
      currentPage:1,
      pageSize:20,
      sort:'',
      total: 0,
      allGoods:[]
    };
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
      this.getGoodsAlllLost();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getGoodsAlllLost();
    },
    //排序
    goodsSort(v){
      this.sort = v;
      this.getGoodsAlllLost();
    },
    //重置页数 返回第一页
    reset(){
      this.currentPage = 1;
      this.sort = '';
      this.getGoodsAlllLost();
    },
    handleSort(i) {
      this.isIndex = i;
      switch (i) {
        case 0:
          //综合排序  重置
            this.reset();
              break;
        case 1:
          //正序
            this.goodsSort(1)
              break;
        case 2:
          //倒序
          this.goodsSort(-1)
              break;
        default:
          break;
      }
    },
    async getGoodsAlllLost() {
      try {
        const res = await this.$http.get('/pcgoodsdetail/allkinds?id=1&limit='+this.pageSize+'&page='+this.currentPage+'&sort=-1')
        console.log(res)
        let data = res.data;
        if (data.code == 20000){
          let items = data.data.items;
          console.log(items)
          this.homeList = items;
          this.allGoods = items;
          console.log(items)
          this.total = res.data.data.total
          console.log(res.data.data.total)
        }
      } catch (error) {
        console.log(error.message)
      }
    }
  },
  created() {
    this.getGoodsAlllLost();
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixin";
@import "../../assets/style/theme";

.nav {
  height: 60px;
  line-height: 60px;
  > div {
    display: flex;
    align-items: center;
    a {
      padding: 0 30px 0 0;
      height: 100%;
      @extend %block-center;
      font-size: 12px;
      color: #999;
      &.active {
        color: #5683ea;
      }
      &:hover {
        color: #5683ea;
      }
    }
    input {
      @include wh(80px, 30px);
      border: 1px solid #ccc;
    }
    input + input {
      margin-left: 10px;
    }
  }
  .price-interval {
    padding: 0 15px;
    @extend %block-center;
    input[type="number"] {
      border: 1px solid #ccc;
      text-align: center;
      background: none;
      border-radius: 5px;
    }
  }
}

.goods-box {
  overflow: hidden;
  > div {
    float: left;
    border: 1px solid #efefef;
  }
}

.no-info {
  padding: 100px 0;
  text-align: center;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  .no-data {
    align-self: center;
  }
}

.img-item {
  display: flex;
  flex-direction: column;
}

.el-pagination {
  align-self: flex-end;
  margin: 3vw 10vw 2vw;
}

.section {
  padding-top: 8vw;
  margin-bottom: -5vw;
  width: 1218px;
  align-self: center;
}

.recommend {
  display: flex;
  > div {
    flex: 1;
    width: 25%;
  }
}
</style>
