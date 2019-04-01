<template>
  <div class="swal-overlay swal-overlay--show-modal" tabindex="-1" v-show="vshop">
    <div class="swal-modal" role="dialog" aria-modal="true">
      <div class="swal-title" style>{{title}}</div>
      <div class="swal-text" style>{{message}}</div>
      <div class="swal-footer">
        <div class="swal-button-container">
     
     <transition   >
      <button class="swal-button swal-button--confirm btn btn-primary" @click="GetCount()">
        {{CountText}}</button>

    </transition>

          

          <div class="swal-button__loader">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "제목",
      message: "내용",
      vshop: false,
      timerinterval:0,
      buttontext:'OK'
    };
  },
  computed:{
     CountText(){
       if(this.timerinterval==0)
          return "OK";
        else
           return "OK "+this.timerinterval;
     } 
  },
  methods: {
    GetCount() {
      this.vshop = false;      
    },
    popupSet(arg,arg2,arg3)
    {
      
        this.title=arg;
        this.message=arg2;
        this.vshop=true;
        this.timerinterval=arg3;
        if(this.timerinterval>0)
        {
          //this.buttontext ="OK  "+this.timerinterval;
          setInterval(this.fetchEventsList, this.timerinterval*1000)
        }

    },
    fetchEventsList()
    {
      if(this.timerinterval==1)
        this.vshop=false;
      else
      {
          this.timerinterval--;
          //this.buttontext ="OK "+this.timerinterval;
      }  
    }
  }
};
</script>

<style>
</style>
