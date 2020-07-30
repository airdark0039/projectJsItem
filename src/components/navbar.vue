<template>
  <div class="navbar" :class="{'navbar-thin': isCollapse}">
    <div class="sys-logo">
      <img src="@/assets/logo.png" alt="logo">
      <i class="iconfont nav-logo" v-html="!isCollapse ? '&#xe623;' : '&#xe621;'" style="cursor:pointer" @click="changeMeun"></i>
    </div>
    <el-menu class="el-menu-vertical-demo" :router="true" :collapse="isCollapse">
      <template v-for="(item, index) in navList">
        <el-submenu v-if="item.children&&item.children.length!==0" :index="item.path" :key="index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.name }}</span>
            </template>
            <el-menu-item :index="nav.path"  v-for="(nav, i) in item.children" :key="i">
              <i :class="nav.icon"></i>
              <span slot="title">{{ nav.name }}</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item v-else :index="item.path" :key="index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isCollapse: false,
      navList: [{
        index: '1',
        path: '/project',
        icon: 'el-icon-s-home',
        name: '项目管理',
        children: [{
          index: '1-1',
          path: '/project',
          icon: 'el-icon-s-order',
          name: '项目列表',
        }]
      }, {
        index: '2',
        path: '/user',
        icon: 'el-icon-s-operation',
        name: '系统管理',
        children: [{
          index: '2-1',
          path: '/user',
          icon: 'el-icon-s-custom',
          name: '人员管理',
        },{
          index: '2-2',
          path: '/role',
          icon: 'el-icon-guide',
          name: '角色管理',
        }]
      }]
    }
  },
  methods: {
    changeMeun() {
      this.isCollapse = !this.isCollapse
      this.$emit('changeWidth', this.isCollapse)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.navbar {
  width: 240px;
  height: 100%;
  border-right:  1px solid #e6e6e6;

  img {
    width: 32px;
  }
}
.navbar-thin {
  width: 64px!important;

  img {
    width: 22px;
  }
}
.sys-logo {
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    padding: 0 8px;
  }
}

.nav-logo {
  font-size: 24px;
  color: #333;
  padding-right: 12px;
}

/deep/ .el-menu {
  border-right: 0;
}
</style>
