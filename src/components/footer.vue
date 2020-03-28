<!-- 底部导航 -->
<template lang="html">
  <div class="footer_con">
    <div class="footer_top">
      <div class="footer_pro">
        <p class="top_title">盛和产品</p>
        <ul>
          <li>A+分析系统</li>
          <li>A+兜便利小程序</li>
          <li>A+平板订货系统</li>
          <li>A+ERP系统</li>
        </ul>
      </div>
      <div class="footer_contact">
        <p class="top_title centerTitle">联系方式</p>
        <p>邮箱联系：tanglong@winpeace.com.cn</p>
        <p style="marginTop:10px;">地址：北京市西城区普天德胜产业园主楼211室</p>
      </div>
      <div class="footer_phone">
        <p class="top_title">售前咨询</p>
        <p class="top_phone">010-8886-6207</p>
      </div>
    </div>
    <div class="footer_bot">
      Copyright © 2015-2020 盛和(北京)资讯科技有限公司版权所有&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;京公网安备11010202007725 | 京ICP备14053942号-1
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.footer_con{
  width: 100%;
  height: 270px;
  background: #1a1a1a;
  .footer_top{
    width: 100%;
    height: 220px;
    display: flex;
    justify-content: center;
    .top_title{
      width: 100%;
      color:white;
      line-height: 80px;
    }
    .footer_pro{
      height: 100%;
      width: 120px;
      ul{
        li{
          color:white;
          opacity: .7;
          line-height: 30px;
          font-size: 13px;
        }
      }
    }
    .footer_contact{
      width: 550px;
      height: 100%;
      box-sizing: border-box;
      padding-left: 130px;
      p{
        color:white;
        font-size: 13px;
      }

      // background: blue;
    }
    .footer_phone{
      height: 100%;
      width: 250px;
      .top_phone{
        font-size: 24px;
        color:white;
      }
      // background: yellow;
    }
  }
  .footer_bot{
    width: 100%;
    height: 50px;
    background: #000;
    color:#999;
    font-size: 12px;
    line-height: 50px;
    text-align: center;
  }

}
</style>
