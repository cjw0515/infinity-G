<template>

    <div class="page-header">
    <h1 class="title">게시판</h1>


    <div class="method-copy">
            <div class="method-copy-padding">
              <div class="text-widget-wrapper mb-20">
                <div class="pb-20">
                
                </div>
                <div class="row">

                  <!-- Start Panel -->
                  <div class="col-md-12">
                    <div class="panel ">
                      <div class="panel-title">
                        Default Table
                      </div>
                      <div class="panel-body">
                        
                        <div class="table-responsive">
                          <table class="table table-hover">
                            <thead>
                            <tr>
                              <td class="text-center"><i class="fa fa-trash"></i></td>
                              <td>ID</td>
                              <td>Product</td>
                              <td>Buyer</td>
                              <td>Date</td>
                              <td>Order Note</td>
                              <td>Payment</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                              <td class="text-center"><div class="checkbox margin-t-0"><input id="checkbox1" type="checkbox"><label for="checkbox1"></label></div></td>
                              <td># <b>9652</b></td>
                              <td>Pixxett Gaming Laptop</td>
                              <td>John Doe</td>
                              <td>12/10/2015</td>
                              <td>As we got further and further away, it [the Earth] diminished in size. <br>Finally it shrank to the size of a marble, the most beautiful you can imagine.</td>
                              <td>Credit Card</td>
                            </tr>
                            
                            </tbody>
                          </table>
                        </div>
                      </div>

                    </div>
                  </div>
                  <!-- End Panel -->
 
                </div>
              </div>
            </div>
          </div>
<div class="text-widget-wrapper mb-20">
<div class="col-md-12">
<button class="btn btn-default" type="button" @click="show()" >추가</button>
<button class="btn btn-default" type="button" @click="show2()" >추가</button>
<button class="btn btn-default" type="button" @click="hide()" >추가</button>
</div>
</div>
  <modal name="a1">
  fdsfsdfs
</modal>

<modal name="a2">
  cccccc
</modal>

    </div>      

</template>

<script>
 

 
export default {
    name:'Board',
     
   data(){
        return  {
              
              } 
   },methods: {
  show () {
    this.$modal.show('a1');
  },
  show2 () {
    this.$modal.show('a2');
  },
  hide () {
    this.$modal.hide('hello-world');
  }
}
}
</script>

<style>
 
</style>
