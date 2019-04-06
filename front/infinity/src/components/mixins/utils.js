export const utils = {
    data(){
        return{

        }
    },
    methods:{
        linkTo(link) {
        // window.console.log(link);
        this.$router.push(link);
        },        
    }
}