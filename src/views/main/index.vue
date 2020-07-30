<template>
	<div class="main-ctn">
    <Navbar/>
    <div class="right-content">
      <Banner/>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
	</div>
</template>
<script>
import Navbar from '@/components/navbar'
import Banner from '@/components/banner'
export default {
  components: {
    Navbar,
    Banner
  }
}
</script>
<style lang="less">
	.main-ctn {
    width: 100%;
    height: 100%;
    display: flex;

    .right-content {
      width: 100%;
      height: 100%;
      background-color: #fafafa;

      .content {
        width: calc(100% - 48px);
        height: calc(100% - 104px);
        background: #fff;
        margin: 24px;
      }
    }
  }
</style>