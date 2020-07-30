<template>
	<div class="project">
		<el-breadcrumb style="margin-bottom: 24px;" separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/' }">项目管理</el-breadcrumb-item>
			<el-breadcrumb-item>项目列表</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="sreach-btn">
      <el-input style="width:132px;" placeholder="请输入内容"></el-input>
      <el-button type="primary" size="small" @click="jumpPage">新建</el-button>
    </div>
    <div class="table-list">
      <el-table :data="tableData" border stripe style="width: 100%" :height="tableHeight">
        <el-table-column prop="date" label="日期"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
      <el-pagination style="margin-top:8px;float: right;" @size-change="handleSizeChange"  @current-change="handleCurrentChange" :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
      </el-pagination>
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
    },
    handleCurrentChange() {
      console.log(`当前页: ${val}`);
    },
    jumpPage() {
      this.$router.push('/project-edit')
    }
  }
}
</script>
<style lang="less">
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
      justify-content: space-between;

      /deep/ .el-input__inner {
        height: 32px;
      }
    }

    .table-list {
      height: calc(100% - 95px);
    }
  }
</style>
