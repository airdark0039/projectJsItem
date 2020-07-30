import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 获取./module文件夹下所有js文件（不需要再用import引入了）
const modulesFiles = require.context('./module', true, /\.js$/)
// 构建 modules，直接使用
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/g, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

export default new Vuex.Store({
  // modules
})
