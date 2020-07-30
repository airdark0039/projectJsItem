<template>
	<div class="main-ctn">
    <Navbar @changeWidth="changeWidth" />
    <div class="right-content" :class="{'right-content-thin': isWidth}">
      <Banner />
      <div class="content">
        <router-view />
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
  },
  data() {
    return {
      isWidth: false
    }
  },
  methods: {
    // 修改宽度
    changeWidth(val) {
      this.isWidth = val
    }
  }
}
</script>
<style lang="less" scoped>
.main-ctn {
  width: 100%;
  height: 100%;
  display: flex;

  .right-content {
    width: calc(100% - 240px);
    height: 100%;
    background-color: #fafafa;
  }

  .right-content-thin {
    width: calc(100% - 64px)!important;
  }

  .content {
    width: calc(100% - 48px);
    height: calc(100% - 104px);
    background: #fff;
    margin: 24px;
  }
}
</style>