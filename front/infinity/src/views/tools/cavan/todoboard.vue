<template>
  <div class="col-lg-12 col-12 p-0 ">
    <h4 class="bg-silver text-black md-5">{{Title}}</h4>
    <draggable
      class="list-wrapper card border-0 position-relative"
      :list="ListData"
      v-bind="dragOptions"
      group="todo"
      @change="log"
      :move="onMove"
    >
      <ul
        class="d-flex flex-column-reverse todo-list"
        v-for="(element, index) in ListData"
        :key="element.uid"
      >
        <TODOITEM :tododata="element"></TODOITEM>
      </ul>
    </draggable>
  </div>
</template>

<script>
import TODOITEM from "./todoitem.vue";
import eventBus from "../../../EventBus.js";
import draggable from "vuedraggable";

export default {
  components: {
    TODOITEM,
    draggable
  },
  props: ["Title", "ListData"],
  data() {
    return {
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
  },
  methods: {
    log: function(evt) {
      //  window.console.log(evt);

      if (evt.added != undefined) {
        eventBus.$emit("UpdateCavan", evt.added.element.uid);
      }
      //window.console.log(evt.moved);
      //window.console.log("added="+evt.added.element.uid);
    },
    onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      window.console.log(relatedElement);
      window.console.log(draggedElement);
      return true; //(!relatedElement || !relatedElement.fix) && !draggedElement.fix
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
  background-color: aqua;
}

.list-group-item {
  cursor: move;
}

.list-group-item i {
  cursor: pointer;
}
</style>
