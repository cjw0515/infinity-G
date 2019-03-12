<template>
    <div class="page-header">
  <h1 class="title">Scrum Board</h1>
    <div class="discription">
      <span class="active">Scrum Board</span>
      <div class="content">
   
   <div class="col-3">
      <h3>할일</h3>
      <draggable class="list-group" :list="todoprocess" v-bind="dragOptions" group="todo" @change="log" :move="onMove">
        <div
          class="list-group-item"
          v-for="(element, index) in todoprocess"
          :key="element.uid"
        >
          {{ element.title }} {{ index }}
        </div>
      </draggable>
    </div>

     <div class="col-3">
      <h3>진행중</h3>
      <draggable class="list-group" :list="inprocess" v-bind="dragOptions" group="todo" @change="log" :move="onMove">
        <div
          class="list-group-item"
          v-for="(element, index) in inprocess"
          :key="element.uid"
        >
          {{ element.title }} {{ index }}
        </div>
      </draggable>
    </div>

    <div class="col-3">
      <h3>완료</h3>
      <draggable class="list-group" :list="completeprocess" v-bind="dragOptions" group="todo" @change="log" :move="onMove">
        <div
          class="list-group-item"
          v-for="(element, index) in completeprocess"
          :key="element.uid"
        >
          {{ element.title }} {{ index }}
        </div>
      </draggable>
    </div>


</div>
  </div>
</div>
</template>
<script>
import draggable from "vuedraggable";
 

const todoprocess =[{uid:"13",title:"Todo",user:"daniel",fix:false},{uid:"1",title:"할일1",user:"daniel",fix:false},{uid:"2",title:"할일2",user:"daniel",fix:false}];
const inprocess =[{uid:"12",title:"ING",user:"daniel",fix:false},{uid:"3",title:"할일3",user:"daniel",fix:false},{uid:"4",title:"할일4",user:"daniel",fix:false}];
const completeprocess =[{uid:"11",title:"Complete",user:"daniel",fix:false},{uid:"5",title:"할일5",user:"daniel",fix:false},{uid:"6",title:"할일6",user:"daniel",fix:false}];



export default {
    components: {
    draggable
  },
     data() {
    return {
      todoprocess,inprocess,completeprocess,       
      editable: true,
      isDragging: true,
      delayedDragging: false
    };
  },
   
  computed: {
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
      window.console.log(evt);
    },
    onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      console.log('onmove:'+relatedElement);
      console.log('onmove:'+draggedElement);
      return (
        (!relatedElement || !relatedElement.fix) && !draggedElement.fix
      );
    }
  }
};
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
