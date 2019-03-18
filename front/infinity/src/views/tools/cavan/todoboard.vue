<template>
   <div class="col-3">
      <h3>{{Title}}</h3>        
       <draggable class="list-group" :list="ListData" v-bind="dragOptions" group="todo" @change="log" :move="onMove">
        <div
          class="list-group-item"
          v-for="(element, index) in ListData"
          :key="element.uid"  >
        <TODOITEM :tododata=element></TODOITEM>          
        </div>
      </draggable>
   </div>
</template>

<script>
import  TODOITEM from "./todoitem.vue";
import eventBus from '../../../EventBus.js';
import draggable from "vuedraggable";

export default {
  components:{
       TODOITEM,draggable
    },
    props:["Title","ListData"],
    data() {
       return {          
            editable: true,
            isDragging: true,
            delayedDragging: false
       }
   }, computed: {
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: !this.editable,
        ghostClass: "ghost"
      };
    } 
  },methods: {
   
    log: function(evt) {
      
      if(evt.added !=undefined)
      {
        eventBus.$emit("UpdateCavan",evt.added.element.uid);
      }
      //window.console.log(evt.moved);
      //window.console.log("added="+evt.added.element.uid);
    },
    onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      
      return (
        true//(!relatedElement || !relatedElement.fix) && !draggedElement.fix
      );
    }
  }
}
</script> 
<style>
 .flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.list-group {
  min-height: 100px;
  background-color:aqua;
}

.list-group-item {
  cursor: move;
}

.list-group-item i {
  cursor: pointer;
}
</style>
