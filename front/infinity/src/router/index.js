import Router from 'vue-router'
import Vue from 'vue';
import authChk from "@/auth/";
import {firebase} from "@/config/"

import TestComponent2 from '../components/TestComponent2.vue'
import Login from '../components/Login/Login.vue'
import TestComponent3 from '../components/TestComponent3.vue'
import CodeEditor from '../views/tools/codeeditor.vue'
import JsonView from '../views/tools/jsonview.vue'
import Scrum from '../views/tools/scrumboard.vue'
import Home from '../views/Home.vue'
import TodoContainer from '../components/todolists/TodoContainer.vue'
import Menu from '@/pages/menu/Index.vue'
import Chat from '@/pages/chat/Index.vue'
import Board from '@/pages/board/boardmain.vue'

Vue.use(Router);
/**
 * path : 도메인을 제외한 url 경로를 지정
 * name: 이름을 정의
 * component: 렌더링할 컴포넌트를 지정
 */
const router = new Router({
    // mode: 'history',
    scrollBehavior: () => ({y:0}),
    routes: [
        {
            path: '*',
            redirect: '/'
        },
        {
            path:'/',
            name: 'Home',
            component: Home,
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
                },
                {
                    path:'/menu',
                    name: 'menu',
                    component: Menu,                
                    props: true 
                },
                {
                    path:'/chat',
                    name: 'chat',
                    component: Chat,                
                    props: true 
                },
                {
                    path:'/board',
                    name: 'board',
                    component: Board,                
                    props: true 
                }                           
            ],
            meta: { requiresAuth: true }        
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
        } 
     ]
 }) 
//전역 가드
/**
 * beforeEach - 가드 전 훅
 * next() - 항상 호출
 */
//  router.beforeEach((to, from, next) => {        
//     authChk.authUser().then((user) => {          
//         if(to.matched.some(record => record.meta.requiresAuth)){
//             if(user) next();
//             else next('login')            
//         }else{
//             next()
//         }        
//     }, (error)=>{
//       window.error(error)
//     })
//     next()
//   }) 

 export default router
 