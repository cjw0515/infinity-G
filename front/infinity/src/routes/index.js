// import TestComponent from '../components/TestComponent.vue'
import TestComponent2 from '../components/TestComponent2.vue'
import Login from '../components/Login/Login.vue'
import TestComponent3 from '../components/TestComponent3.vue'
import CodeEditor from '../views/tools/codeeditor.vue'
import JsonView from '../views/tools/jsonview.vue'
import Scrum from '../views/tools/scrumboard.vue'
import Sandbox from '../views/sandbox.vue'
import Main from '../views/Main.vue'
import TodoContainer from '../components/todolists/TodoContainer.vue'

import canvan from '../views/tools/canvanboard.vue'
import cboard from '../views/boards/commonboards/boardmain.vue'
import multimain from '../views/multi/multimain.vue'



/**
 * path : 도메인을 제외한 url 경로를 지정
 * name: 이름을 정의
 * component: 렌더링할 컴포넌트를 지정
 */

export default [{
        path: '/',
        name: 'main',
        component: Main,
        children: [{
                path: 'login',
                name: 'login',
                component: Login
            },
            {
                path: '/todolists/:name',
                name: 'todolists',
                component: TodoContainer,
                props: true
            },
            {
                path: '/tools/scrum',
                name: 'Scrum',
                component: Scrum,
                props: true
            },
            {
                path: '/tools/canvan',
                name: 'Cavan',
                component: canvan,
                props: true
            }, {
                path: '/board/common',
                name: 'cboard',
                component: cboard,
                props: true
            },
            {
                path: '/pratice/multi',
                name: 'multimain',
                component: multimain,
                props: true
            } 

        ]
    },
    {
        path: '/storeTest',
        name: 'TestComponent2',
        component: TestComponent2
    }, {
        path: '/week1',
        name: 'TestComponent3',
        component: TestComponent3
    }, {
        path: '/tools/code',
        name: 'CodeEditor',
        component: CodeEditor
    }, {
        path: '/tools/json',
        name: 'JsonView',
        component: JsonView
    }, {
        path: '/sandbox',
        name: 'Sandbox',
        component: Sandbox
    }
]