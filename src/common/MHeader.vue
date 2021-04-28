<template>
  <div class="header-box">
    <div>
      <header class="w">
        <div class="w-box">
          <div class="nav-logo">
            <h1>
              <router-link to="/" title="暖寻官网">暖寻</router-link>
            </h1>
          </div>
          <div class="right-box">
            <div class="nav-list">
              <p style="width:443px;height:31px;font-size:24px;">暖寻(校园失物招领)</p>
              <el-input
                  placeholder="请输入物品信息"
                  suffix-icon="el-icon-search"
                  v-model="productInfo"
                  minlength="1"
                  maxlength="100"
              ></el-input>
              <router-link to="/Lost">全部物品</router-link>
              <router-link to="/thanks">捐赠</router-link>
            </div>

            <div class="nav-aside">
              <!-- 用户 -->
              <div class="user pr">
                <router-link to="/user">个人中心</router-link>
                <div class="nav-user-wrapper pa" v-if="login">
                  <div class="nav-user-list">
                    <ul>
                      <!-- 头像 -->
                      <li class="nav-user-avatar">
                        <div>
<!--                          <span class="avatar">-->
                          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
<!--                          </span>-->
                        </div>
                        <p class="name">{{userInfo.data.username}}</p>
                      </li>
<!--                      <li>-->
<!--                        <router-link to="/user/orderList">我的订单</router-link>-->
<!--                      </li>-->
<!--                      <li>-->
<!--                        <router-link to="/user/information">账号资料</router-link>-->
<!--                      </li>-->
<!--                      <li>-->
<!--                        <router-link to="/user/addressList">收货地址</router-link>-->
<!--                      </li>-->
<!--                      <li>-->
<!--                        <router-link to="/user/support">售后服务</router-link>-->
<!--                      </li>-->
<!--                      <li>-->
<!--                        <router-link to="/user/coupon">我的优惠</router-link>-->
<!--                      </li>-->
                      <li>
                        <a href="javascript:;" @click="logout">退出</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- 购物车 -->
              <div
                class="shop pr"
                @mouseenter="cartShowState(true)"
                @mouseleave="cartShowState(false)"
              >
                <router-link to="/"></router-link>
                <!--小红点-->
                <span class="cart-num" >
                  <i class="num" ></i>
                </span>

                <!-- 购物车显示 -->
                <div class="nav-user-wrapper pa active" v-show="showCart">
                  <div class="nav-user-list">
                    <div class="full">
<!--                      <div class="nav-cart-items">-->
<!--                        <ul>-->
<!--                          <li class="clearfix" v-for="(goods,index) in cartList" :key="index">-->
<!--                            <div class="cart-item">-->
<!--                              <div class="cart-item-inner">-->
<!--                                <a>-->
<!--                                  <div class="item-thumb">-->
<!--                                    <img :src="goods.productImageBig">-->
<!--                                  </div>-->
<!--                                  <div class="item-desc">-->
<!--                                    <div class="cart-cell">-->
<!--                                      <h4>-->
<!--                                        <a href>{{goods.productName}}</a>-->
<!--                                      </h4>-->
<!--                                      &lt;!&ndash; <p class="attrs"><span>白色</span></p> &ndash;&gt;-->
<!--                                      <h6>-->
<!--                                        <span class="price-icon">¥</span>-->
<!--                                        <span class="price-num">{{goods.salePrice}}</span>-->
<!--                                        <span class="item-num">x {{goods.productNum}}</span>-->
<!--                                      </h6>-->
<!--                                    </div>-->
<!--                                  </div>-->
<!--                                </a>-->
<!--                                <div class="del-btn del">删除</div>-->
<!--                              </div>-->
<!--                            </div>-->
<!--                          </li>-->
<!--                        </ul>-->
<!--                      </div>-->


                      <!-- 总件数 -->
                      <div class="nav-cart-total">
                        <p class="a">
<!--                          共-->
<!--                          <strong>{{totalNum}}</strong> 件商品-->
<!--                          {{userInfo.data.username}}用户您好：-->
                        </p>
                        <h5>
                          亲爱的网站体验者您好：
<!--                          <span class="price-icon">¥</span>-->
<!--                          <span class="price-num">111</span>-->
                        </h5>
                        <h6>
<!--                          <el-button type="danger">去购物车</el-button>-->
                          <template>
                            <div>
                              <el-button
                                  plain
                                  type="primary"
                                  @click="open">
                                加入我们
                              </el-button>
                            </div>
                          </template>

                        </h6>
                      </div>
                    </div>
<!--                    <div style="height: 313px;text-align: center" class="cart-con" v-if='!totalNum'>-->
<!--                    不是吧，居然没有你要的东西？？？-->
                    <div style="height: 313px;text-align: center" class="cart-con">
                      <p>本网站目前仍在不断完善中，可能部分功能不太完善，凭我艺人之力，不太可能将本网站做的完美；
                        所有，我恳请有更多的志同道合的人来加入我们，一起来完善我的项目

                      <span>

                        <el-rate
                            v-model="value"
                            show-text>
                        </el-rate>
                      </span>

                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <slot name="nav">
        <div class="nav-sub">
          <div class="nav-sub-bg"></div>
          <div class="nav-sub-wrapper">
            <div class="w">
<!--              <el-breadcrumb separator-class="el-icon-arrow-right">-->
              <el-breadcrumb separator-class="el-icon-s-promotion">
                <el-breadcrumb-item></el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{path:'/Lost'}">寻失物</el-breadcrumb-item>
                <el-breadcrumb-item :to="{path:'/find'}">寻失主</el-breadcrumb-item>
                <el-breadcrumb-item :to="{path:'/thanks'}">捐赠</el-breadcrumb-item>
                <el-breadcrumb-item></el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </div>
        </div>
      </slot>
    </div>
    <div>
<!--      <beautiful-chat-->
<!--          :participants="participants"-->
<!--          :titleImageUrl="titleImageUrl"-->
<!--          :onMessageWasSent="onMessageWasSent"-->
<!--          :messageList="messageList"-->
<!--          :newMessagesCount="newMessagesCount"-->
<!--          :isOpen="isChatOpen"-->
<!--          :close="closeChat"-->
<!--          :icons="icons"-->
<!--          :open="openChat"-->
<!--          :showEmoji="true"-->
<!--          :showFile="true"-->
<!--          :showEdition="true"-->
<!--          :showDeletion="true"-->
<!--          :showTypingIndicator="showTypingIndicator"-->
<!--          :showLauncher="true"-->
<!--          :showCloseButton="true"-->
<!--          :colors="colors"-->
<!--          :alwaysScrollToBottom="alwaysScrollToBottom"-->
<!--          :disableUserListToggle="false"-->
<!--          :messageStyling="messageStyling"-->
<!--          @onType="handleOnType"-->
<!--          @edit="editMessage" />-->
    </div>
  </div>

</template>




<script>
import { mapState, mapMutations } from "vuex";
import { removeStore} from '@/utils/storage';

export default {
  data() {
    return {
      productInfo: '',
      value: null,

      participants: [
        {
          id: 'user1',
          name: 'Matteo',
          imageUrl: 'https://avatars3.githubusercontent.com/u/1915989?s=230&v=4'
        },
        {
          id: 'user2',
          name: 'Support',
          imageUrl: 'https://avatars3.githubusercontent.com/u/37018832?s=200&v=4'
        }
      ], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
      // titleImageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
      messageList: [
        // {type: 'text', author: `me`, data: {text: `Say yes!`}},
        // {type: 'text', author: `user1`, data: {text: `No.`}}
      ], // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 0,
      isChatOpen: false, // to determine whether the chat window should be open or closed
      showTypingIndicator: '', // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
        header: {
          bg: '#4e8cff',
          text: '#ffffff'
        },
        launcher: {
          bg: '#4e8cff'
        },
        messageList: {
          bg: '#ffffff'
        },
        sentMessage: {
          bg: '#4e8cff',
          text: '#ffffff'
        },
        receivedMessage: {
          bg: '#eaeaea',
          text: '#222222'
        },
        userInput: {
          bg: '#f4f7f9',
          text: '#565867'
        }
      }, // specifies the color scheme for the component
      alwaysScrollToBottom: false, // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
      messageStyling: true // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)


    };
  },
  computed:{
    ...mapState(['login','userInfo','showCart']),

  },
  methods: {
    ...mapMutations(["SHOWCART"]),
    sendMessage (text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1
        this.onMessageWasSent({ author: 'support', type: 'text', data: { text } })
      }
    },
    onMessageWasSent (message) {
      // called when the user sends a message
      this.messageList = [ ...this.messageList, message ]
    },
    openChat () {
      // called when the user clicks on the fab button to open the chat
      this.isChatOpen = true
      this.newMessagesCount = 0
    },
    closeChat () {
      // called when the user clicks on the botton to close the chat
      this.isChatOpen = false
    },
    handleScrollToTop () {
      // called when the user scrolls message list to top
      // leverage pagination for loading another page of messages
    },
    handleOnType () {
      console.log('Emit typing event')
    },
    editMessage(message){
      const m = this.messageList.find(m=>m.id === message.id);
      m.isEdited = true;
      m.data.text = message.data.text;
    },
    open() {
      this.$notify({
        title: '来着站长的一句话',
        dangerouslyUseHTMLString: true,
        message: '<strong>同舟共济扬帆起，乘风破浪万里航</strong>'
      });
    },
    cartShowState(state) {
      console.log(state);
      this.SHOWCART({
        showCart: state
      });
    },
    logout() {
      removeStore("token");
      // removeStore("buyCart");
      window.location.href = "/";
    }
  },
  mounted() {
    let headerBox = document.getElementsByClassName('header-box')[0]
    let home = document.getElementsByClassName('home')[0]
    window.addEventListener('scroll',function (){
      if(document.body.scrollTop>170||document.documentElement.scrollTop>170){
        headerBox.style.position = 'fixed';
        home.style.marginTop = '170px';
      }else {
        headerBox.style.position = 'static';
        home.style.marginTop = '0px';
      }
    })
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/theme";
@import "../assets/style/mixin";

.w-box .nav-list .el-input .p {
  margin-right: 10px;
}
.header-box {
  //background: #87CEFF;
  //background: $head-bgc;
  //background-image: -webkit-linear-gradient(#000, #121212);
  //background-image: linear-gradient(#000, #121212);

  //background-color: #FBAB7E;
  //background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);

  background-color: #8EC5FC;
  background-image: linear-gradient(270deg, #8EC5FC 0%, #f0edf2 100%);
  top:0;
  left:0;
  z-index:999;








  width: 100%;
}

header {
  height: 100px;
  z-index: 30;
  position: relative;
}

.w-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  // position: relative;
  h1 {
    height: 100%;
    display: flex;
    align-items: center;
    > a {
      background: url(/static/images/lost1.png) no-repeat 50%;
      background-size: cover;
      display: block;
      @include wh(58px, 63px);
      text-indent: -9999px;
      background-position: 0 0;
    }
  }
  .nav-list {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 22px;
    .el-input {
      width: 305px;
    }
    a {
      width: 110px;
      //顶部导航栏字体颜色
      color: #010513;
      display: block;
      font-size: 14px;
      padding: 0 25px;
      &:hover {
        color: #fff;
      }
    }
    a:nth-child(2) {
      // width: 5vw;
      margin-left: -10px;
    }
    // a:nth-child(3){
    //   width: 5vw;
    // }
  }
  .nav-aside {
    position: relative;
    &:before {
      background: #333;
      background: hsla(0, 0%, 100%, 0.2);
      content: " ";
      @include wh(1px, 13px);
      overflow: hidden;
      // position: absolute;
      display: flex;
      align-items: center;
      // top: 4px;
      left: 0;
    }
    &.fixed {
      width: 262px;
      position: fixed;
      left: 50%;
      top: 19px;
      margin-left: 451px;
      margin-top: 0;
      z-index: 32;
      top: -40px;
      -webkit-transform: translate3d(0, 59px, 0);
      transform: translate3d(0, 59px, 0);
      -webkit-transition: -webkit-transform 0.3s
        cubic-bezier(0.165, 0.84, 0.44, 1);
      transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
      .user {
        &:hover {
          a:before {
            background-position: -215px 0;
          }
        }
      }
      .shop {
        &:hover {
          a:before {
            background-position: -210px -22px;
          }
        }
      }
    }
  }

  .right-box {
    display: flex;
  }
  .nav-aside {
    display: flex;
    align-items: center;
  }
  // 用户
  .user {
    margin-left: 41px;
    width: 36px;
    &:hover {
      a:before {
        background-position: -5px 0;
      }
      .nav-user-wrapper {
        top: 18px;
        visibility: visible;
        opacity: 1;
        -webkit-transition: opacity 0.15s ease-out;
        transition: opacity 0.15s ease-out;
      }
    }
    > a {
      position: relative;
      @include wh(36px, 20px);
      display: block;
      text-indent: -9999px;
      &:before {
        content: " ";
        position: absolute;
        left: 8px;
        top: 0;
        @include wh(20px);
        background: url(/static/images/account-icon@2x.32d87deb02b3d1c3cc5bcff0c26314ac.png) -155px
          0;
        background-size: 240px 107px;
        transition: none;
      }
    }
    li + li {
      text-align: center;
      position: relative;
      border-top: 1px solid #f5f5f5;
      line-height: 44px;
      height: 44px;
      color: #616161;
      font-size: 12px;
      &:hover {
        background: #fafafa;
      }
      a {
        display: block;
        color: #616161;
      }
    }
    .nav-user-avatar {
      > div {
        position: relative;
        margin: 0 auto 8px;
        @include wh(46px);
        text-align: center;
        &:before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          border-radius: 50%;
          box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.06);
        }
        .avatar {
          border-radius: 50%;
          display: block;
          @include wh(100%);
          background-repeat: no-repeat;
          background-size: contain;
          background-url:url(/static/images/tuxiang.jpg)
        }
      }
      .name {
        margin-bottom: 16px;
        font-size: 12px;
        line-height: 1.5;
        text-align: center;
        color: #757575;
      }
    }
    .nav-user-wrapper {
      width: 168px;
      transform: translate(-50%);
      left: 50%;
    }
    .nav-user-list {
      width: 168px;
      &:before {
        left: 50%;
      }
    }
  }
  .shop {
    position: relative;
    float: left;
    margin-left: 21px;
    width: 61px;
    z-index: 99;
    &:hover {
      a:before {
        content: " ";
        background-position: 0 -22px;
      }
    }
    .nav-user-wrapper.active {
      top: 18px;
      visibility: visible;
      opacity: 1;
      -webkit-transition: opacity 0.15s ease-out;
      transition: opacity 0.15s ease-out;
    }
    > a {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      display: block;
      right: 0;
      z-index: 1;
      &:before {
        display: block;
        @include wh(30px, 100%);
        content: " ";
        background-size: 240px 107px;
        background: url(/static/images/account-icon@2x.32d87deb02b3d1c3cc5bcff0c26314ac.png) -150px -22px;
        //background: url(/static/images/gaoshi.png) -150px -22px;
      }
    }
    .cart-num {
      position: relative;
      display: block;
      margin-left: 31px;
      margin-top: -1px;
      min-width: 30px;
      text-indent: 0;
      line-height: 20px;
      > i {
        //background: #eb746b;
        //background-image: -webkit-linear-gradient(#eb746b, #e25147);
        //background-image: linear-gradient(#eb746b, #e25147);
        //box-shadow: inset 0 0 1px hsla(0, 0%, 100%, 0.15),
        //  0 1px 2px hsla(0, 0%, 100%, 0.15);
        text-align: center;
        font-style: normal;
        display: inline-block;
        @include wh(20px);
        line-height: 20px;
        border-radius: 10px;
        color: #fff;
        font-size: 12px;
        &.no {
          background: #969696;
          background-image: -webkit-linear-gradient(#a4a4a4, #909090);
          background-image: linear-gradient(#a4a4a4, #909090);
          box-shadow: inset 0 0 1px #838383, 0 1px 2px #838383;
        }
      }
    }
    .nav-user-wrapper {
      right: 0;
      width: 360px;
      .nav-user-list {
        &:before {
          right: 34px;
        }
      }
    }
    .nav-user-list {
      padding: 0;
      width: 100%;
      .full {
        border-radius: 8px;
        overflow: hidden;
      }
      .nav-cart-items {
        max-height: 363px;
        overflow-x: hidden;
        overflow-y: auto;
      }
      .cart-item {
        height: 120px;
        width: 100%;
        overflow: hidden;
        border-top: 1px solid #f0f0f0;
        &:hover {
          background: #fcfcfc;
          .del {
            display: block;
          }
        }
      }
      li:first-child .cart-item:first-child {
        border-top: none;
        border-radius: 8px 8px 0 0;
        overflow: hidden;
      }
      .cart-item-inner {
        padding: 20px;
        position: relative;
      }
      .item-thumb {
        position: relative;
        float: left;
        width: 80px;
        height: 80px;
        border-radius: 3px;
        &:before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          z-index: 2;
          border: 1px solid #f0f0f0;
          border: 0 solid transparent;
          box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.06);
          border-radius: 3px;
        }
        img {
          display: block;
          @include wh(80px, 80px);
          border-radius: 3px;
          overflow: hidden;
        }
      }
      .item-desc {
        margin-left: 98px;
        display: table;
        @include wh(205px, 80px);
        h4 {
          color: #000;
          width: 185px;
          overflow: hidden;
          word-break: keep-all;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 14px;
          line-height: 16px;
          margin-bottom: 10px;
        }
        .attrs span {
          position: relative;
          display: inline-block;
          margin-right: 20px;
          font-size: 14px;
          line-height: 14px;
          color: #999;
        }
        .attrs span:last-child {
          margin-right: 0;
        }
        h6 {
          color: #cacaca;
          font-size: 12px;
          line-height: 14px;
          margin-top: 20px;
          span {
            display: inline-block;
            font-weight: 700;
            color: #cacaca;
          }
          .price-icon,
          .price-num {
            color: #d44d44;
          }
          .price-num {
            margin-left: 5px;
            font-size: 14px;
          }
          .item-num {
            margin-left: 10px;
          }
        }
      }
      .cart-cell {
        display: table-cell;
        vertical-align: middle;
      }
      .del {
        display: none;
        overflow: hidden;
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .nav-cart-total {
      box-sizing: content-box;
      position: relative;
      padding: 20px;
      height: 40px;
      background: #fafafa;
      border-top: 1px solid #f0f0f0;
      border-radius: 0 0 8px 8px;
      box-shadow: inset 0 -1px 0 hsla(0, 0%, 100%, 0.5),
        0 -3px 8px rgba(0, 0, 0, 0.04);
      background: -webkit-linear-gradient(#fafafa, #f5f5f5);
      background: linear-gradient(#fafafa, #f5f5f5);
      p {
        margin-bottom: 4px;
        line-height: 16px;
        font-size: 12px;
        color: #0f44c7;
      }
      h5 {
        line-height: 20px;
        font-size: 14px;
        color: #6f6f6f;
        span {
          font-size: 18px;
          color: #de4037;
          display: inline-block;
          font-weight: 700;
        }
        span:first-child {
          font-size: 12px;
          margin-right: 5px;
        }
      }
      h6 {
        position: absolute;
        right: 20px;
        top: 20px;
        width: 108px;
      }
    }
  }
}

@media (max-height: 780px) {
  .nav-cart-items {
    max-height: 423px !important;
  }
}

@media (max-height: 900px) {
  .nav-cart-items {
    max-height: 544px !important;
  }
}

@media (max-height: 1080px) {
  .nav-cart-items {
    max-height: 620px !important;
  }
}

// 用户信息弹出
.nav-user-wrapper {
  position: absolute;
  z-index: 30;
  padding-top: 18px;
  opacity: 0;
  visibility: hidden;
  top: -3000px;
  .nav-user-list {
    position: relative;
    padding-top: 20px;
    background: #fff;
    border: 1px solid #d6d6d6;
    border-color: rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    z-index: 10;
    &:before {
      position: absolute;
      content: " ";
      background: url(/static/images/account-icon@2x.32d87deb02b3d1c3cc5bcff0c26314ac.png)
        no-repeat -49px -43px;
      background-size: 240px 107px;
      @include wh(20px, 8px);
      top: -8px;
      margin-left: -10px;
    }
  }
}

.nav-sub {
  position: relative;
  z-index: 20;
  height: 60px;
  background: #f7f7f7;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
  &.fixed {
    position: fixed;
    z-index: 21;
    height: 60px;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: 1px solid #dadada;
    background-image: -webkit-linear-gradient(#fff, #f1f1f1);
    background-image: linear-gradient(#fff, #f1f1f1);
  }
  .nav-sub-wrapper {
    padding: 24px 0;
    height: 90px;
    position: relative;
    &.fixed {
      padding: 0;
      height: 100%;
      display: flex;
      align-items: center;
    }
    &:after {
      content: " ";
      position: absolute;
      top: 89px;
      left: 50%;
      margin-left: -610px;
      width: 1220px;
      background: #000;
      height: 1px;
      display: none;
      opacity: 0;
      -webkit-transition: opacity 0.3s ease-in;
      transition: opacity 0.3s ease-in;
    }
  }
  .w {
    display: flex;
    justify-content: space-between;
  }
  .nav-list2 {
    height: 28px;
    line-height: 28px;
    display: flex;
    align-items: center;
    height: 100%;
    li:first-child {
      padding-left: 0;
      a {
        padding-left: 10px;
      }
    }
    li {
      position: relative;
      float: left;
      padding-left: 2px;
      a {
        display: block;
        padding: 0 10px;
        color: #666;
        &.active {
          font-weight: bold;
        }
      }
      a:hover {
        color: #5683ea;
      }
    }
    li:before {
      content: " ";
      position: absolute;
      left: 0;
      top: 13px;
      width: 2px;
      height: 2px;
      background: #bdbdbd;
    }
  }
}

@media (min-width: 1px) {
  .nav-sub .nav-sub-wrapper:after {
    display: block;
  }
}

.cart-con {
  /*display: flex;*/
  text-align: center;
  position: relative;
  p {
    padding-top: 100px;
    color: #333333;
    font-size: 16px;
  }
}

//.cart-con:before {
//  position: absolute;
//  content: " ";
//  left: 50%;
//  transform: translate(-50%, -70%);
//  top: 50%;
//  width: 76px;
//  height: 62px;
//  //background: url("/static/images/cart-empty-new.png") no-repeat;
//  background-size: cover;
//}
</style>
