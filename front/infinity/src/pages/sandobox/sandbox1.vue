<template>
    <div>
        X:<input type='text' v-model="x" /><br/>
        Y:<input type='text' v-model="y" /><br/>
        덧셈결과:{{sum}}
        <div id='outer' @click.stop="OuterClick">
        <div id='inner' @click="InnerClick"></div>

        
        </div>
        <button @click.stop.once="OnceClick">한번</button>

            <button @click.stop="dynamipara('광일',12,'사과','배')">다중이</button>
            <button @click.stop="collectiontest">콜렉션</button>
            

        <button id='a' v-bind:style="style1" @mouseover.stop="overEvent" @mouseout.stop="outEvent"  >스타일</button>


        <div>
                <p>1부터 100까지만 입력 가능합니다.</p>
                <div>
                <child>
                  <template slot='type1' scope='p1'>
                        <div>{{p1.cx}} +{{p1.cy}}
                            ={{parseInt(p1.cx)+parseInt(p1.cy)}}
                        </div>
                  </template>
                  <template slot="type2" scope="p2">
                        <idv>{{p2.cx}}더하기{{p2.cy}}는 
                            {{parseInt(p2.cx)+parseInt(p2.cy)}}
                        </idv>
                  </template>
                </child>   

                </div>
              
        </div>
    </div>
</template>

<script>
import child from './slottest.vue'

export default {
  components:{
   child
  },
  data() {
      return {
          x:0,y:0//,sum:0
          ,style1:{backgroundColor:'aqua',border:'solid 1px gray',width:'100px',textAlign:'center'}
      }
  },
  computed:{
   sum:function(){
       var result = Number(this.x) +Number(this.y);
       if(isNaN(result)) return 0;
       else return result;
   },
   info:function(){
       if(this.score>=1 && this.score<=100)
        return {warning:false};
       else
         return {warning:true};
   }
  },
  methods: {
      OuterClick:function(e){
          window.console.log('### OUTER CLICK')
          window.console.log('Event Pahse :',e.eventPhase);
          window.console.log('Current Target :',e.eventPhase);
          window.console.log('Target :',e.target);
          //e.stopPropagation();          
      },
      InnerClick:function(e){
          window.console.log('### Inner CLICK')
          window.console.log('Event Pahse :',e.eventPhase);
          window.console.log('Current Target :',e.eventPhase);
          window.console.log('Target :',e.target);
         // e.stopPropagation();
      },
      OnceClick:function(e){
          window.console.log('한번만')
          
         // e.stopPropagation();
      },
      overEvent:function(e){
          window.console.log('mouse over');
          this.style1.backgroundColor='purple';
          this.style1.color='yellow';
      },
      outEvent:function(e){
          window.console.log('mouse out');
          this.style1.backgroundColor='aqua';
          this.style1.color='black';
      }
      ,dynamipara:function(name,age,...fodds)
      {
          window.console.log(name);
          window.console.log(age);
          window.console.log(fodds);
          this.splitmethod();
      },
      splitmethod:function()
      {
          let arr=[10,20,30,40];
          let [a1,a2,a3]=arr;
          window.console.log(a1,a2,a3);

      },
      collectiontest:function()
      {
          let s1=new Set();  //중복을 허용하지 않는 컬렉션
          s1.add('사과');
          s1.add('배');
          s1.add('사과');
          s1.add('포도');
         window.console.log(s1);

        let j1 =new Set(['사과','배','포도']);
        let j2 =new Set(['망고','사과','딸기']);
        //합집합
        let union =new Set([...j1.values(),...j2.values()]);
         window.console.log("합집합:{0}",union);
         //교집합
         var intersection =new Set([...j1.values()].filter(e=>j2.has(e)));
         window.console.log("교집합:{0}",intersection);
         //차집합
         var diff =new Set([...j1.values()].filter(e=>!j2.has(e)));
            window.console.log("차집합:{0}",diff);
      }
  },
//   watch: {
//       x:function(v){          
//           window.console.log('## x 변경');
//           var result =Number(v)+Number(this.y);
//           if(isNaN(result)) this.sum=0;
//           else this.sum=result;
//       },
//       y:function(v){
//           window.console.log('## y 변경');
//           this.y=v;
//           var result =Number(this.x)+Number(v);
//           if(isNaN(result)) this.sum=0;
//           else this.sum=result;
//       }
//   },
}
</script>

<style scoped>
  #outer{
      width:200px;border: solid 2px black;
      background-color: aqua;
      position: absolute;top:100px;left:50px;
      padding: 10px 10px 10px 10px;
  }
  #inner{
      width: 100px;height: 100px;border:solid 2px black;
      background-color: yellow;
  }
  .score {border: solid 1px black}
  .warning {background-color: orange;color:purple}
  .warnimage {width:18px;height: 18; top:5px;position: relative;}
  </style>

