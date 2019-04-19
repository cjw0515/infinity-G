export const utils = {    
    methods:{
        linkTo(link) {
            // window.console.log(link);
            this.$router.push(link);
        },
        isEmptyObject(obj){
            return !Object.keys(obj).length;
        }
    }
}