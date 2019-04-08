<template>
<div class="swal-overlay swal-overlay--show-modal" tabindex="-1" v-show="vshow">
    <div class="swal-modal" role="dialog" aria-modal="true">
    <div class="loader-demo-box">
                        <div class="pixel-loader"></div>
                        
                      </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            vshow:false
        }

    },
    methods: {
        
    },
}
</script>

<style>

</style>
