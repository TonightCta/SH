<!-- 行业痛点 -->
<template lang="html">
  <div class="industry_con">
    <p class="ind_title">行业痛点<span></span></p>
    <div class="ind_text">
      <ul>
        <li>
          <div class="text_pic">

          </div>
          <p class="text_title">竞争加剧<span></span></p>
          <p class="text_con">
            “新零售”概念的提出非但没有给传统企业带来出路，反而引来很多高科技武装的跨界竞争者，面对他们的技术优势如何抗争？
          </p>
        </li>
        <li>
          <div class="text_pic">

          </div>
          <p class="text_title">系统束缚<span></span></p>
          <p class="text_con">
            现有的ERP系统已经严重束缚企业发展却无法轻易替换，系统的升级赶不上业务革新所需的速度，无法适应新形势下的瞬息万变。
          </p>
        </li>
        <li>
          <div class="text_pic">

          </div>
          <p class="text_title">人才缺乏<span></span></p>
          <p class="text_con">
            有经验的店长和管理者本来就少，能力的成长需要较长的时间，但是人员流动率还超高，到底该不该对员工进行持续培养成为老板心头的痛。
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.industry_con{
  width: 100%;
  height: 550px;
  .ind_title{
    margin-top: 40px;
    line-height: 110px;
    font-size: 36px;
    letter-spacing: 9px;
    text-align: center;
    position: relative;
    span{
      position: absolute;
      bottom: 0;
      left: 50%;
      margin-left: -36px;
      display: inline-block;
      width: 60px;
      height: 2px;
      border-radius: 5px;
      background: #409eff;
    }
  }
  .ind_text{
    width: 70%;
    margin:0 auto;
    margin-top: 30px;
    ul{
      display: flex;
      justify-content: space-around;
      li{
        width: 240px;
        height: 362px;
        // background: red;
        .text_pic{
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: #333;
          margin:0 auto;
          margin-top: 30px;
        }
        .text_title{
          width: 100%;
          text-align: center;
          line-height: 60px;
          color:#333;
          letter-spacing: 5px;
          font-size: 20px;
          position: relative;
          span{
            display: inline-block;
            width: 30px;
            height: 2px;
            border-radius: 5px;
            position: absolute;
            bottom:0;
            background: #666;
            left: 50%;
            margin-left: -15px;
          }
        }
        .text_con{
          margin-top: 30px;
          text-align: justify;
          font-size: 14px;
          letter-spacing: 3.5px;
          color:#666;
        }
      }
    }
  }
}
</style>
