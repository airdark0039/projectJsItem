<template>
	<div class="project">
		<el-breadcrumb style="margin-bottom: 24px;" separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/' }">项目管理</el-breadcrumb-item>
			<el-breadcrumb-item>项目新建/编辑</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="sreach-btn">
      <div>
        <el-button size="small" style="margin-right:8px">返回</el-button>
        <el-button type="primary" size="small">保存</el-button>
      </div>
    </div>
    <div class="form-info">
      
    </div>
	</div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [],
      currentPage: 1,
      tableHeight: 'calc(100% - 40px)'
    }
  },
  methods: {
    handleSizeChange() {
      console.log(`每页 ${val} 条`);
    }
  }
}
</script>
<style lang="less" scoped>
	.project {
    width: 100%;
    height: 100%;
    padding: 24px;
    box-sizing: border-box;

    .sreach-btn {
      width: 100%;
      margin-bottom: 24px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    .form-info {
      height: calc(100% - 95px);
    }
  }
</style>
