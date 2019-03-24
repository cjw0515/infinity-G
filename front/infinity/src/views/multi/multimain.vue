<template>
 <div class="container-widget">
    <div class="col-md-12">
      <div id="documenter_content" class="method-area-wrapper">
        <div id="documenter-1" class="method">
          <div class="method-area">
            <div class="pb-20">
              <h4 class="font-title">
                <b>Multi</b> Componet
              </h4>
              <p>멀티 연습</p> 
            </div>

            <div class="col-md-12 col-lg-12 pa-0 ">
                  <a @click="CallComoponet(1)" class="btn btn-default mr-20">Grid</a>
                  <a @click="CallComoponet(2)" class="btn btn-primary mr-20">Modal</a>
                  <a @click="CallComoponet(3)" class="btn btn-success mr-20">Svg</a>
                  <a @click="CallComoponet(4)" class="btn btn-info mr-20">Tree</a>
                  
            </div>
            <div class="col-md-12 col-lg-12 pa-0 ">
            
            <component :is="currentView"   ></component>
            </div>
           
            <div class="col-md-6 col-lg-3">

                  <div class="panel panel-transparent">
                    <div class="panel-title">
                      Basic
                    </div>
                    <div class="panel-body">
                      <!-- Start an Alert -->
                      <div class="pixxett-alert alert1">
                        <a href="#" class="closed">×</a>
                        You have a mail.
                      </div>
                      <!-- End an Alert -->

                      <!-- Start an Alert -->
                      <div class="pixxett-alert alert2">
                        <a href="#" class="closed">×</a>
                        This is another pixxett-alert.
                      </div>
                      <!-- End an Alert -->

                      <!-- Start an Alert -->
                      <div class="pixxett-alert alert3">
                        <a href="#" class="closed">×</a>
                        Woahhh. This is going to be real.
                      </div>
                      <!-- End an Alert -->

                      <!-- Start an Alert -->
                      <div class="pixxett-alert alert4">
                        <a href="#" class="closed">×</a>
                        Get a drink. This is important message.
                      </div>
                      <!-- End an Alert -->

                      <!-- Start an Alert -->
                      <div class="pixxett-alert alert5">
                        <a href="#" class="closed">×</a>
                        Warning Message. You know what i mean.
                      </div>
                      <!-- End an Alert -->

                      <!-- Start an Alert -->
                      <div class="pixxett-alert alert6">
                        <a href="#" class="closed">×</a>
                        Danger fellas. We are under attack !
                      </div>
                      <!-- End an Alert -->

                      <!-- Start an Alert -->
                      <div class="pixxett-alert alert7">
                        <a href="#" class="closed">×</a>
                        Fabulous everytime !
                      </div>
                      <!-- End an Alert -->

                      <!-- Start an Alert -->
                      <div class="pixxett-alert alert8">
                        <a href="#" class="closed">×</a>
                        It's so fluffy...
                      </div>
                      <!-- End an Alert -->

                      <!-- Start an Alert -->
                      <div class="pixxett-alert alert9">
                        <a href="#" class="closed">×</a>
                        Pinky pinky pinky !
                      </div>
                      <!-- End an Alert -->

                      <!-- Start an Alert -->
                      <div class="pixxett-alert alert10">
                        <a href="#" class="closed">×</a>
                        File sent to John Doe !
                      </div>
                      <!-- End an Alert -->

                      <!-- Start an Alert -->
                      <div class="pixxett-alert alert11">
                        <a href="#" class="closed">×</a>
                        I like trains
                      </div>
                      <!-- End an Alert -->
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
import GridCompo from './components/gridcomponent.vue';
import ModalCompo from './components/modalcomponent.vue';
import SvgCompo from './components/svgcomponent.vue';
import TreeCompo from './components/treeviewcomponent.vue';


export default {
 components:{
     GridCompo,ModalCompo,SvgCompo,TreeCompo
 },
 data() {
     return {
          currentView:null
     }
 },
 methods: {
     CallComoponet:function(arg){
         this.currentView = null;
         
         switch (arg) {
                case 1 :
                    window.console.log(arg+"grid");
                    this.currentView=GridCompo;
                    break;
                case 2 :
                    window.console.log(arg+"modal");
                    this.currentView=ModalCompo;
                    break;
                case 3 : 
                window.console.log(arg+"svg");
                    this.currentView=SvgCompo;
                    break;
                case 4 : 
                window.console.log(arg+"tree");
                    this.currentView=TreeCompo;
                    break;
                default : 
                    return '';
            } 
     }
 },
}
</script>

<style>

</style>
