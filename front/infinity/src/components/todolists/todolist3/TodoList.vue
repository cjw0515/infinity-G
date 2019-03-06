<template>
    <div>
        <!-- {{ this.propsData[0] }} -->
        <ul>
            <li v-for="(todo, index) in propsData" :key="index">{{todo}}
                <button v-on:click="deleteTodo(index)">삭제</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    methods: {
        deleteTodo(idx){
            //alert('버튼 클릭')
            this.$emit("removeTodo", idx)
        }
    },
    props: ["propsData"]
}
</script>

<style>

</style>
