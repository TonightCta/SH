<!-- 核心产品 -->
<template lang="html">
  <div class="core_con">
    <p class="core_title">核心产品<span></span></p>
    <p class="core_title2">产品理念：零售的核心是商品组合，它是销售机会和周转效率形成平衡的关键。那么如何有效的制定商品规划和执行计划，有效的指挥和支持门店完成销售业绩呢？盛和的产品体系组合就是围绕这个核心理念设计</p>
    <div class="core_tent">
      <ul>
        <li v-for="(coreCon,index) in coreList" :key="index" @mouseenter="mouseLook(index)" @mouseleave="endLook(index)">
          <div class="tent_pic"></div>
          <p class="text_title">{{coreCon.title}}<span></span></p>
          <div class="mouse_box" ref="mouseBox">
            <p class="mouseBox_title">{{coreCon.twp.title}}</p>
            <p class="mouseBox_con">{{coreCon.twp.con}}</p>
            <p class="know_more">
              <el-button plain>了解更多</el-button>
            </p>
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
      coreList:[
        {
          title:'A+分析系统',
          twp:{
            title:'A+分析系统',
            con:'总部的作战参谋'
          }
        },
        {
          title:'A+兜便利小程序',
          twp:{
            title:'A+兜便利小程序',
            con:'先遣队的随身弹药包'
          }
        },
        {
          title:'A+平板订货系统',
          twp:{
            title:'A+平板订货系统',
            con:'单兵作战的实战武器'
          }
        },
      ]
    }
  },
  methods:{
    mouseLook(index){//鼠标移入
      let _this=this;
      _this.$refs.mouseBox[index].style.zIndex="1";
      _this.$refs.mouseBox[index].style.opacity="1";
    },
    endLook(index){//鼠标移出
      let _this=this;
      _this.$refs.mouseBox[index].style.zIndex="-1";
      _this.$refs.mouseBox[index].style.opacity="0";
    }
  }
}
</script>

<style lang="scss" scoped>
.core_con{
  width: 100%;
  height: 560px;
  background: #333;
  .core_title{
    width: 100%;
    text-align: center;
    font-size: 36px;
    letter-spacing: 9px;
    color:white;
    line-height: 110px;
    box-sizing: border-box;
    padding-top: 30px;
    position: relative;
    span{
      display: inline-block;
      width: 65px;
      height: 2px;
      border-radius: 5px;
      background: white;
      position: absolute;
      bottom: 0;
      left: 50%;
      margin-left: -32.5px;
    }
  }
  .core_title2{
    width: 65%;
    margin:0 auto;
    text-align: center;
    font-size: 16px;
    letter-spacing: 4px;
    text-align: center;
    color:white;
    margin-top: 30px;
  }
  .core_tent{
    width: 100%;
    margin-top: 80px;
    ul{
      width: 70%;
      margin:0 auto;
      display: flex;
      justify-content: space-around;
      position: relative;
      li{
        width: 370px;
        height: 210px;
        background: white;
        border-radius: 5px;
        box-sizing: border-box;
        padding-top: 40px;
        position: relative;
        cursor:pointer;
        .tent_pic{
          margin:0 auto;
          width: 108px;
          height: 80px;
          background: #666;
          border-radius: 5px;
        }
        .text_title{
          width: 100%;
          text-align: center;
          font-size: 28px;
          letter-spacing: 4px;
          margin-top: 15px;
          line-height: 55px;
          color:#333;
          span{
            width: 40px;
            height: 2px;
            background: #333;
            border-radius: 5px;
            position: absolute;
            bottom: 15px;
            left:50%;
            margin-left: -20px;
          }
        }
        .mouse_box{
          width: 100%;
          height: 100%;
          background: #409eff;
          top:0;
          left: 0;
          position: absolute;
          border-radius: 5px;
          z-index: -1;
          opacity: 0;
          transition: .3s all;
          .mouseBox_title{
            width: 100%;
            text-align: center;
            font-size: 26px;
            letter-spacing: 5px;
            color:white;
            margin-top: 40px;
          }
          .mouseBox_con{
            font-size: 16px;
            color:rgba(255,255,255,.8);
            letter-spacing: 4px;
            text-align: center;
            margin-top:10px;
          }
          .know_more{
            width: 100%;
            text-align: center;
            margin-top: 35px;
          }
        }
      }
    }
  }
}
</style>
