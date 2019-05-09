export const utils = {    
    methods:{
        linkTo(link) {
            // window.console.log(link);
            this.$router.push(link);
        },
        isEmptyObject(obj){
            return !Object.keys(obj).length;
        },
        getArrayFromObject(targetObj, selectedData){
            let colArr = [];      
            for (let iKey in targetObj) {
              for (let jKey in selectedData) {
                if (iKey == jKey) {
                  colArr.push({
                    [selectedData[jKey]]: targetObj[iKey]
                  });
                }
              }
            }
            return colArr;
        }        
    }
}