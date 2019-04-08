<template>
<div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                   
                    <div class="col-lg-12">
                      <div class="d-flex justify-content-between">
                        <div>
                          <button class="btn btn-outline-primary" @click="CurrentViewIndex=1">List</button>
                          <button class="btn btn-outline-primary m-3" @click="CurrentViewIndex=2">WRITE</button>
                          <button class="btn btn-outline-primary m-3" @click="CallBlc()">WRITE</button>
                        </div>
                      </div>
                      <div class="mt-4 py-2 border-top border-bottom">
                        <ul class="nav profile-navbar">
                          <li class="nav-item">
                            <a class="nav-link" href="#">
                              <i class="ti-user"></i>
                              Info
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link active" href="#">
                              <i class="ti-receipt"></i>
                              Feed
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#">
                              <i class="ti-calendar"></i>
                              Agenda
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#">
                              <i class="ti-clip"></i>
                              Resume
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="profile-feed">
                      
                        <div class="d-flex align-items-start profile-feed-item">
                           
                        </div>
                        <div class="d-flex align-items-start profile-feed-item">
                          
                          <div class="ml-4">
                            <Progress></Progress>
                            <!-- 여기에 COMPONENT -->
                             <transition >
                           <component :is="GeneratedView(CurrentViewIndex)" v-on:AddBoard="AddBoard"></component>
                             </transition>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
         
      </div>
</template>

<script>
import BoardList from './boardlist.vue'
import BoardInput from './boardinput.vue'
import BoardView from './boardview.vue'
import BoardBLC from './boardblc.js'
import BoardEntity from './boardentity'
import ModalPopup from "./modalpopup.vue";
import Progress from "./progressbar.vue";
import eventBus from '@/EventBus.js';
import {Showlog} from "./utility.js";



const BLC=new BoardBLC();

export default {
   components: {
     BoardList,BoardInput,BoardView,Progress
   },
   data() {
      return {
        CurrentViewIndex:2
        
      }
   },
   computed: {
     

   },
   mounted() {
      eventBus.$on("AddBoard", (data) => {
          alert(data);
      });
   },
   methods: {  
    AddBoard:function(data)
    {
         Showlog(data);
        BLC.addBoard(data);
        Showlog(BLC.getListBorad(1));
        this.CurrentViewIndex=1;
    },
    CallBlc(){
      let be =new BoardEntity();
      be.name ="니미라아아";
      let d= BLC.GetData("ccc");
      //be.callback(this.ErroCallback);
      window.console.log('test:'+be.name);
      window.console.log(d);

      //alert( BLC.testmethod("fff"));
    },
    ErroCallback(arg){
      alert("CallBack"+arg);
    },
    GeneratedView : function(uiNumber) {
            switch (uiNumber) {
                case 1 :
                    return BoardList;
                case 2 :
                    return BoardInput;
                case 3: 
                    return BoardView;                
                default : 
                    return ''
            }
      }

    }
 }

</script>

<style>
</style>
