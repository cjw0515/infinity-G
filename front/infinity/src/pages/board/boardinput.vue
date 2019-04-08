<template>
  <div class="grid-margin stretch-card col-12" style="width:1000px">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">게시물 입력</h4>

        <form class="forms-sample">
          <div class="form-group">
            <label for="exampleInputName1">이름</label>
            <input type="text" class="form-control" id="exampleInputName1" v-model="name" placeholder="이름을 입력해주세요"            
            v-bind:style="getstyle('name')"            
            >
          </div>
          <div class="form-group">
            <label for="exampleInputEmail3">제목</label>
            <input              
              class="form-control"
              id="exampleInputEmail3"
              v-model="title"
              placeholder="제목을 입력해주세요"
               v-bind:style="getstyle('name')"   
            >
          </div>

          <div class="form-group">
            <label for="exampleSelectGender">성별</label>
            <select class="form-control" id="exampleSelectGender" v-model="gender"  v-bind:style="getstyle('gender')"   >
              <option>Male</option>
              <option>Female</option>
            </select>
          
          </div>
          <div class="form-group">
            <label>File upload</label>
            <input type="file" name="img[]" class="file-upload-default">
            <div class="input-group col-xs-12">
              <input
                type="text"
                class="form-control file-upload-info"
                disabled
                placeholder="Upload Image"
              >
              <span class="input-group-append">
                <button class="file-upload-browse btn btn-primary" type="button">Upload</button>
              </span>
            </div>
          </div>

          <div class="form-group">
            <label for="exampleTextarea1">내용</label>
            <textarea class="form-control" id="exampleTextarea1" rows="4" v-model="cotent"  v-bind:style="getstyle('content')"   ></textarea>
          </div>
          <button type="submit" class="btn btn-primary mr-2" @click="AddContent()">Submit</button>
          <button class="btn btn-light">Cancel</button>
        </form>
      </div>
    </div>
    <ModalPopup    ref="popup"  ></ModalPopup>
  </div>
</template>

<script>
import BoardEntity from "./BoardEntity.js";
import ModalPopup from "@/components/commons/modalpopup.vue";
import {Showlog} from "./utility.js";
import eventBus from '@/EventBus.js';

export default {
  components: {
    ModalPopup
  },
  data() {
    return {
      name:'',
      title:'',
      gender:'',
      cotent:'',
      isEdit: false,
      style1:{},
      validname :true,
      validchk:{name:false,title:false,gender:false,content:false}
    };
  },
  methods: {
    AddContent() {
      let msg='';
      this.validchk={name:false,title:false,gender:false,content:false};

      //this.validname=true;
      if(this.name.trim().length==0)      
      {
        this.validchk.name=true;
        msg +='이름을 입력해주세요.<br/>';
      }
      if(this.title.trim().length==0)
      {
         this.validchk.title=true;
         msg +='제목을 입력해주세요.<br/>';
      }
      if(this.gender.trim().length==0)
      {
        this.validchk.gender=true;
        msg +='성별을 입력해주세요.<br/>';
      }
      if(this.cotent.trim().length==0)
      {
        this.validchk.content=true;
        msg +='내용을 입력해주세요.<br/>';
      }

      //this.$refs.txtname.style ={backgroundColor:'aqua',border:'solid 1px gray'};

      //this.backgroundColor:'aqua',border:'solid 2px red'
      if(msg.length>0)
      {
        this.$refs.popup.popupSet('게시판 등록',msg,3);
        return;
      }
      
      let adddata ={
        uid :'',
        name :this.name,
        title :this.title,
        gender :this.gender,
        cotent :this.cotent
      }
      Showlog(adddata);
      this.$emit("AddBoard",adddata); 
      //alert("");
      ///this.$refs.popup.popupSet('고고','구구',3);
      //this.ModalPopup.popupSet('고고','구구',3);
      //foo.popupSet('고고','구구',3);
      //this.popupCall('가가','나나',3);
      //this.ModalPopup.vshop = true;
    },
    CancelButton() {},
    IsAction() {} ,
    getstyle(arg){
      if(arg=='name' && this.validchk.name ==true)
        return {backgroundColor:'aqua',border:'solid 1px gray'}; 
      else if(arg=='name' && this.validchk.name ==false)
        return {}; 
      if(arg=='title' && this.validchk.title ==true)
        return {backgroundColor:'aqua',border:'solid 1px gray'}; 
      else if(arg=='title' && this.validchk.title ==false)
        return {}; 
      if(arg=='gender' && this.validchk.gender ==true)
        return {backgroundColor:'aqua',border:'solid 1px gray'}; 
      else if(arg=='gender' && this.validchk.gender ==false)
        return {}; 
       if(arg=='content' && this.validchk.content ==true)
        return {backgroundColor:'aqua',border:'solid 1px gray'}; 
      else if(arg=='content' && this.validchk.content ==false)
        return {}; 

    }
  },
  computed: {
    inputStyle:function() {
      //,style1:{backgroundColor:'aqua',border:'solid 1px gray',width:'100px',textAlign:'center'}
      return {backgroundColor:'aqua',border:'solid 1px gray'}; 
    },
  },

};
</script>

<style>

 #alertouter{
      border: solid 2px red;     
  }
</style>
