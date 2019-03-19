<template>
      <div>
            {{msg}}
            <button @click="버튼1()">테스트</button>
      </div>
</template>

<script>
import module1 from './testBLC.js';

export default {
   data() {
       return {
           msg:"안녕"
       }
   },
   methods: {
       버튼1:()=>{
          var t1=new module1();
            let dta =t1.Test();
           alert(dta);
       }
   },
}
</script>

<style>

</style>
