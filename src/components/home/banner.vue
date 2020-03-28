<template lang="html">
  <div class="banner_box">
    <el-carousel height="450px" :interval="2000" arrow="never">
      <el-carousel-item v-for="item in 4" :key="item">
       <h3 class="small">{{ item }}</h3>
     </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.el-carousel__item h3 {
  text-align: center;
   color: white;
   font-size: 38px;
   opacity: 0.75;
   line-height: 450px;
   margin: 0;
 }

 .el-carousel__item:nth-child(2n) {
    background-color: #666;
 }

 .el-carousel__item:nth-child(2n+1) {
    background-color: #333;
 }
</style>
