import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/form/edit/index'
import preview from '@/components/preview'

import '../../static/iconfont/demo.css'
import '../../static/iconfont/iconfont.css'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {// 表单预览
      path: '/preview',
      name: 'preview',
      component: preview
    },
    {// 表单分析
      path: '/analyze',
      name: 'analyze',
      component (resolve) {
        require(['@/components/analyze.vue'], resolve)
      }
    }
  ]
})
