<template>
<div>
    <h1>게시판</h1>
    <component :is="currentView" :board="board"></component>
    <ListBoard :boardlist="boardlist"></ListBoard></div>
</template>

<script>
import AddBoard from './AddBoard.vue';
import ListBoard from './BoardList.vue';
import eventBus from './../../EventBus.js';


export default {
   name :'BoardMain',
   components:{AddBoard,ListBoard},
   data: function() {
        return { 
            currentView : null, 
            board : { no:0, name:'', tel:'', address:'', photo:'' },
            boardlist : {
                pageno:1, pagesize: 5, totalcount:0, contacts:[]
            }
        }
    },
    mounted:function(){
        
    }

}
</script>

<style>

</style>
