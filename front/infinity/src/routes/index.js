import TestComponent from '../components/TestComponent.vue'
import TestComponent2 from '../components/TestComponent2.vue'
import TestComponent3 from '../components/TestComponent3.vue'
import Sample1 from '../views/sample.vue'

/**
 * path : 도메인을 제외한 url 경로를 지정
 * name: 이름을 정의
 * component: 렌더링할 컴포넌트를 지정
 */

 export default [
    {
        path:'/',
        name: 'TestComponent',
        component: TestComponent
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
        path:'/sample1',
        name: 'Sample1',
        component: Sample1
    },    
 ]