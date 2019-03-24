import Router from 'vue-router'
import Vue from 'vue';
import authChk from "@/auth/";

import TestComponent2 from '../components/TestComponent2.vue'
import Login from '../components/Login/Login.vue'
import TestComponent3 from '../components/TestComponent3.vue'
import CodeEditor from '../views/tools/codeeditor.vue'
import JsonView from '../views/tools/jsonview.vue'
import Scrum from '../views/tools/scrumboard.vue'
import Sandbox from '../views/sandbox.vue'
import Main from '../views/Main.vue'
import TodoContainer from '../components/todolists/TodoContainer.vue'

Vue.use(Router);
/**
 * path : 도메인을 제외한 url 경로를 지정
 * name: 이름을 정의
 * component: 렌더링할 컴포넌트를 지정
 */
const router = new Router({
    mode: 'history',
    scrollBehavior: () => ({y:0}),
    routes: [
        {
            path:'/',
            name: 'main',
            component: Main,
            children: [                
                {
                    path:'/todolists/:name',
                    name: 'todolists',
                    component: TodoContainer,                
                    props: true 
                } ,
                {
                    path:'/tools/scrum',
                    name: 'Scrum',
                    component: Scrum,                
                    props: true 
                }           
            ]        
        },        
        {
            path: '/login',
            name: 'login',
            component: Login                
        },        
        {
            path:'/storeTest',
            name: 'TestComponent2',
            component: TestComponent2
        },{
            path:'/week1',
            name: 'TestComponent3',
            component: TestComponent3
        },{
            path:'/tools/code',
            name: 'CodeEditor',
            component: CodeEditor
        },{
            path:'/tools/json',
            name: 'JsonView',
            component: JsonView
        } ,{
            path:'/sandbox',
            name: 'Sandbox',
            component: Sandbox
        } 
     ]
 }) 

 router.beforeEach((to, from, next) => {
    authChk.authUser().then(() => {
      next()
    })
  }) 

 export default router
 