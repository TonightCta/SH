<!-- 典型案例 -->
<template lang="html">
  <div class="typical_con">
    <p class="typical_title">典型案例<span></span></p>
    <div class="typical_tent">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <p class="typical_btn">
      <button type="button" name="button">案例介绍</button>
    </p>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.typical_con{
  width: 100%;
  height: 756px;
  .typical_title{
    width: 100%;
    text-align: center;
    font-size: 36px;
    color:#111;
    letter-spacing: 9px;
    line-height: 110px;
    box-sizing: border-box;
    padding-top: 30px;
    position: relative;
    span{
      display: inline-block;
      width: 60px;
      height: 2px;
      border-radius: 5px;
      background: #409eff;
      position: absolute;
      bottom:0;
      left: 50%;
      margin-left: -30px;
    }
  }
  .typical_tent{
    width: 70%;
    margin:0 auto;
    margin-top: 30px;
    ul{
      display: flex;
      flex-wrap: wrap;
      li{
        width: 275px;
        height: 120px;
        background: #666;
        margin-left: 50px;
        margin-top:20px;
      }
    }
  }
  .typical_btn{
    width: 100%;
    text-align: center;
    line-height: 180px;
    button{
      width: 150px;
      height: 60px;
      outline: none;
      border:0;
      background:#409eff;
      border-radius: 3px;
      font-size: 18px;
      color:white;
    }
  }
}
</style>
