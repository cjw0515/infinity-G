<template>
    <div>Header
        <button v-on:click="CallMount(1)">일번</button>
        <button v-on:click="CallMount(2)">이번</button>
        <button v-on:click="CallMount(3)">삼번</button>
    </div>
</template>

<script>
import eventBus from '../../../EventBus.js';
export default {
    methods:{
        CallMount:function(idx){
            
            eventBus.$emit("CallContainer",idx);
        }
    }
}
</script>

<style>

</style>
