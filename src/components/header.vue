<template lang="html">
  <div class="header_con">
    <div class="con_box">
      <div class="login_box">
        LOGO
      </div>
      <div class="tab_box">
        <ul>
          <router-link to="/" tag="li" :class="{turn:code==1}"  @click.native="code=1">首页<span></span></router-link>
          <router-link to="/introduce" tag="li" :class="{turn:code==2}"  @click.native="code=2">产品介绍<span></span></router-link>
          <router-link to="/case" tag="li" :class="{turn:code==3}" @click.native="code=3">典型案例<span></span></router-link>
          <router-link to="/aboutUs" tag="li" :class="{turn:code==4}" @click.native="code=4">关于我们<span></span></router-link>
          <el-tooltip class="item" effect="dark" content="点击拨打客服" placement="bottom">
            <li>
              <i class="el-icon-phone" size="20"></i>&nbsp;0&nbsp;1&nbsp;0&nbsp;-&nbsp;8&nbsp;8&nbsp;8&nbsp;6&nbsp;-&nbsp;6&nbsp;2&nbsp;0&nbsp;7&nbsp;
            </li>
          </el-tooltip>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      code:1
    }
  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
.turn{
  color:#409eff!important;
  span{
    width: 50px!important;
  }
}
.header_con{
  width: 100%;
  height:60px;
  background: #1A1A1A;
  .con_box{
    width: 70%;
    min-width: 1000px;
    height: 100%;
    margin:0 auto;
    position: relative;
    .login_box{
      width: 220px;
      height: 100%;
      background:rgba(255,255,255,.4);
      color:white;
      line-height: 60px;
      text-align: center;
    }
    .tab_box{
      position: absolute;
      top:0;
      right:0;
      ul{
        display: flex;
        li{
          color:white;
          line-height: 60px;
          padding-left: 30px;
          padding-right: 30px;
          text-align: center;
          cursor:pointer;
          position: relative;
          transition: .5s all;
          span{
            display: inline-block;
            width: 0;
            height: 2px;
            background: #409eff;
            position: absolute;
            bottom: 5px;
            left:50%;
            margin-left: -25px;
            border-radius: 5px;
            transition: .5s all;
          }
          i{
            color:white;
          }
        }
      }
    }
  }
}
</style>
