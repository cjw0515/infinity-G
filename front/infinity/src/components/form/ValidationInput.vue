<template>
    <div class="form-group">
        <label :for="inputEle.inpuName">{{inputEle.inputNameDisp}}</label>
        <input :id="inputEle.inpuName" class="form-control" :name="inputEle.inpuName">        
    </div>    
</template>

<script>
export default {
    props: {
        inputEle: {
            type: Object,
            default: ()=>({
                inputName: "default",
                inputNameDisp: "default",                
                isRequired: true
            })
        }
    },
    computed:{
        requiredFlag : () => {
            return this.inputEle.isRequired;
        }
    }    
}
</script>
