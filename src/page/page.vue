<!-- 首页 -->
<template lang="html">
  <div class="page_con">
    <Banner/>
    <Industry/>
    <Intention/>
    <Core/>
    <Typecal/>
  </div>
</template>

<script>
import Banner from '@/components/home/banner'//轮播图
import Industry from '@/components/home/industry'//行业痛点
import Intention from '@/components/home/intention'//产品初衷
import Core from '@/components/home/core'//核心产品
import Typecal from '@/components/home/typical'//典型案例

//以上组件代码详情见  components--->home

export default {
  components:{
    Banner,
    Industry,
    Intention,
    Core,
    Typecal
  }
}
</script>

<style lang="scss" scoped>
</style>
