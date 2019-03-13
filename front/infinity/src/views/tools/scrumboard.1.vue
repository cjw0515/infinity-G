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


    <rawDisplayer class="col-3" :value="Todo" title="Todo" />

    <rawDisplayer class="col-3" :value="Process" title="Process" />



    <div class="col-md-3">
      <draggable class="list-group" element="ul" v-model="list" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
        <transition-group type="transition" :name="'flip-list'">
          <li class="list-group-item" v-for="element in list" :key="element.order">
            <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
            {{element.name}}
            <span class="badge">{{element.order}}</span>
          </li>
        </transition-group>
      </draggable>

      <draggable class="list-group" element="ul" v-model="todoprocess" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false" group="todo">
        <transition-group type="transition" :name="'flip-list'">
          <li class="list-group-item" v-for="element in todoprocess" :key="element.uid">
            <i :class="element.fix? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fix=! element.fix" aria-hidden="true"></i>
            {{element.title}}
            <span class="badge">{{element.uid}}</span>
          </li>
        </transition-group>
      </draggable>

      <draggable class="list-group" element="ul" v-model="inprocess" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false" group="todo">
        <transition-group type="transition" :name="'flip-list'">
          <li class="list-group-item" v-for="element in inprocess" :key="element.uid">
            <i :class="element.fix? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fix=! element.fix" aria-hidden="true"></i>
            {{element.title}}
            <span class="badge">{{element.uid}}</span>
          </li>
        </transition-group>
      </draggable>


      <draggable class="list-group" element="ul" v-model="completeprocess" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false" group="todo">
        <transition-group type="transition" :name="'flip-list'">
          <li class="list-group-item" v-for="element in completeprocess" :key="element.uid">
            <i :class="element.fix? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fix=! element.fix" aria-hidden="true"></i>
            {{element.title}}
            <span class="badge">{{element.uid}}</span>
          </li>
        </transition-group>
      </draggable>

    </div>
 
    

    <div class="list-group col-md-3">
      <pre>{{listString}}</pre>
    </div>
    <div class="list-group col-md-3">
      <pre>{{list2String}}</pre>
    </div>

</div>
  </div>
</div>
</template>
<script>
import draggable from "vuedraggable";

const message = [
  "vue.draggable",
  "draggable",
  "component",
  "for",
  "vue.js 2.0",
  "based",
  "on",
  "Sortablejs"
];

const todoprocess =[{uid:"13",title:"Todo",user:"daniel",fix:true},{uid:"1",title:"할일1",user:"daniel",fix:false},{uid:"2",title:"할일2",user:"daniel",fix:false}];
const inprocess =[{uid:"12",title:"ING",user:"daniel",fix:true},{uid:"3",title:"할일3",user:"daniel",fix:false},{uid:"4",title:"할일4",user:"daniel",fix:false}];
const completeprocess =[{uid:"11",title:"Complete",user:"daniel",fix:true},{uid:"5",title:"할일5",user:"daniel",fix:false},{uid:"6",title:"할일6",user:"daniel",fix:false}];



export default {
    components: {
    draggable
  },
     data() {
    return {
      todoprocess,inprocess,completeprocess,      
      list: message.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      list2: [],
      editable: true,
      isDragging: true,
      delayedDragging: false
    };
  },
  methods: {
    orderList() {
      this.list = this.list.sort((one, two) => {
        return one.order - two.order;
      });
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
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: !this.editable,
        ghostClass: "ghost"
      };
    },
    listString() {
      return JSON.stringify(this.list, null, 2);
    },
    list2String() {
      return JSON.stringify(this.list2, null, 2);
    }
  },
  watch: {
    isDragging(newValue) {
       console.log('isDragging:'+newValue);
      if (newValue) {
        this.delayedDragging = true;
        return;
      }
      this.$nextTick(() => {
        this.delayedDragging = false;
      });
    }
  },methods: {
    add: function() {
      this.list.push({ name: "Juan" });
    },
    replace: function() {
      this.list = [{ name: "Edgard" }];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function(evt) {
      window.console.log(evt);
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
