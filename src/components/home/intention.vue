<!-- 产品初衷 -->
<template lang="html">
  <div class="intention_con">
    <p class="int_title">产品初衷<span></span></p>
    <div class="int_con">
      <ul>
        <li v-for="(intCon,index) in intList" :key="index">
          <div class="int_pic">

          </div>
          <div class="int_text">
            <p class="text_title">{{intCon.title}}</p>
            <p class="text_con">{{intCon.con}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      intList:[
        {
          title:'理念融合',
          con:'融合日系便利店企业的精细化管理理念和中国国情，做一个可以给行业赋能的系统'
        },
        {
          title:'成本可控',
          con:'无需替换企业的ERP，以SaaS服务的方式快速部署，做一个成本上可以接受的系统'
        },
        {
          title:'突破传统',
          con:'用产品交互固化管理流程，用AI技术协助和简化人的判断，做一个为企业老板解忧的系统'
        },
        {
          title:'内部挖掘',
          con:'充分发挥企业内部运营数据（小数据）的潜力，做一个落地靠谱的系统'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.intention_con{
  width: 100%;
  height: 720px;
  background: #2F6CF4;
  box-sizing: border-box;
  .int_title{
    width: 100%;
    text-align: center;
    font-size: 36px;
    letter-spacing: 9px;
    color:white;
    line-height: 110px;
    padding-top: 40px;
    position: relative;
    span{
      display: inline-block;
      width: 60px;
      position: absolute;
      bottom:0;
      height: 2px;
      border-radius: 5px;
      background: white;
      left:50%;
      margin-left:-30px;
    }
  }
  .int_con{
    width: 65%;
    margin:0 auto;
    height: 500px;
    background: white;
    margin-top: 30px;
    ul{
      width: 85%;
      margin:0 auto;
      box-sizing: border-box;
      padding-top: 20px;
      padding-bottom: 20px;
      li{
        height: 100px;
        display: flex;
        padding-top: 25px;
        box-sizing: border-box;
        margin-top: 10px;
        .int_pic{
          width: 50px;
          height:50px;
          border-radius: 50%;
          background: #666;
        }
        .int_text{
          margin-left: 15px;
          .text_title{
            font-size: 20px;
            color:#333;
            letter-spacing: 5px;
          }
          .text_con{
            font-size: 14px;
            letter-spacing: 3.5px;
            color:#666;
            line-height: 30px;
          }
        }
      }
    }
  }
}
</style>
