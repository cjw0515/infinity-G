<template>
  <div class="col-12 grid-margin">
    <div class="card">
      <div class="card-body">
        <h4 class="font-weight-bold">Scrum Board</h4>

        <TODOINPUT v-on:addTodo="AddTodo"></TODOINPUT>

        <TODOBOARD :Title="TodoTitle" :ListData="todoprocess"></TODOBOARD>
        <TODOBOARD :Title="IngTitle" :ListData="inprocess"></TODOBOARD>
        <TODOBOARD :Title="ComTitle" :ListData="completeprocess"></TODOBOARD>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import TODOINPUT from "./cavan/todoinput.vue";
import TODOBOARD from "./cavan/todoboard.vue";
import eventBus from "../../EventBus.js";
import { CAVAN, LIST } from "@/api/canvan/";

const todoprocess = [];
const inprocess = [];
const completeprocess = [];
const isbusy = false;

export default {
  components: {
    TODOINPUT,
    draggable,
    TODOBOARD
  },
  mounted() {
    this.GetCavan();
    eventBus.$on("UpdateCavan", no => {
      this.UpdateCavan(no);
      //this.fetchCompo(no);
    });
    eventBus.$on("DeleteCavan", no => {
      this.DeleteCavan(no);
      //this.fetchCompo(no);
    });
  },
  data() {
    return {
      todoprocess,
      inprocess,
      completeprocess,
      TodoTitle: "할일",
      IngTitle: "진행",
      ComTitle: "완료"
    };
  },
  computed: {},
  methods: {
    AddTodo(todoata) {
      this.AddCavan(todoata);
      //console.log(todoprocess);
    },
    async AddCavan(tododata) {
      let apiurl = CAVAN;

      const response = await fetch(apiurl, {
        method: "post",
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json"
        }),
        body: JSON.stringify({
          kind: "todo",
          titledata: tododata.titledata,
          todoval: tododata.todoval,
          pri: tododata.pri,
          id: "daniel"
        })
      });
      const rtdata = await response.text();
      console.log(rtdata);
      this.GetCavan();
    },
    async GetCavan() {
      window.console.log(LIST);
      let apiUrl = LIST;

      window.console.log(apiUrl);

      const response = await fetch(apiUrl);
      const json = await response.json();
      this.clearCavan();
      this.Bind_CavanList(json);
    },
    clearCavan() {
      this.todoprocess.splice(0, this.todoprocess.length);
      this.inprocess.splice(0, this.inprocess.length);
      this.completeprocess.splice(0, this.completeprocess.length);
    },
    Bind_CavanList(cavandata) {
      let datatod = [];
      let dataing = [];
      let datacom = [];

      $.each(cavandata, function(i, member) {
        for (var i in member) {
          if (member[i].kind == "todo") {
            datatod.push({
              kind: member[i].kind,
              uid: member[i].uid,
              titledata: member[i].titledata,
              todoval: member[i].todoval,
              pri: member[i].pri,
              id: member[i].id
            });
          }
          if (member[i].kind == "ing") {
            dataing.push({
              kind: member[i].kind,
              uid: member[i].uid,
              titledata: member[i].titledata,
              todoval: member[i].todoval,
              pri: member[i].pri,
              id: member[i].id
            });
          }
          if (member[i].kind == "com") {
            datacom.push({
              kind: member[i].kind,
              uid: member[i].uid,
              titledata: member[i].titledata,
              todoval: member[i].todoval,
              pri: member[i].pri,
              id: member[i].id
            });
          }
        }
      });
      this.todoprocess = datatod;
      this.inprocess = dataing;
      this.completeprocess = datacom;
    },
    async UpdateCavan(uid) {
      this.isbusy = true;
      //데이타 찾기
      let seldata;
      for (var i = 0; i < this.todoprocess.length; i++) {
        if (this.todoprocess[i].uid == uid) {
          seldata = this.todoprocess[i];
          seldata.kind = "todo";
        }
      }
      for (var i = 0; i < this.inprocess.length; i++) {
        if (this.inprocess[i].uid == uid) {
          seldata = this.inprocess[i];
          seldata.kind = "ing";
        }
      }
      for (var i = 0; i < this.completeprocess.length; i++) {
        if (this.completeprocess[i].uid == uid) {
          seldata = this.completeprocess[i];
          seldata.kind = "com";
        }
      }

      let apiUrl = CAVAN + "?uid=" + uid;
      const response = await fetch(apiUrl, {
        method: "put",
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json"
        }),
        body: JSON.stringify({
          kind: seldata.kind,
          titledata: seldata.titledata,
          todoval: seldata.todoval,
          pri: seldata.pri,
          id: "daniel"
        })
      });
      const rtdata = await response.text();
      console.log(rtdata);
      this.isbusy = false;
    },
    async DeleteCavan(uid) {
      let apiUrl = CAVAN + "?uid=" + uid;
      const response = await fetch(apiUrl, {
        method: "delete",
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json"
        })
      });

      await this.GetCavan();
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
