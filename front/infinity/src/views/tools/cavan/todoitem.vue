<template>
    
        <li class="list-group-item" >            
            

            {{tododata.titledata}}
            {{tododata.todoval}}


            <span class="badge">{{tododata.pri}}</span>
            <button class="float-right"  @click="delbtn(tododata.uid)" >삭제</button>
          </li>

</template>

<script>
import eventBus from '../../../EventBus.js';

export default {
    props:["tododata"],
    data() {
        return {
            
        }
    },
    mounted: {
      
    },
    methods: {
        delbtn(uid){
            if(confirm("삭제하시겠습니까?")){
                eventBus.$emit("DeleteCavan",uid);                 
            }
        }
    },  
}
</script>

<style>

</style>
