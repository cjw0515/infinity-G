import CanvanItem from "./CanavanItemEntity"

export default class CavanModule {

    constructor()
    {
        
    } 
    private  canvanitems :Array<CanvanItem> ;
      
    add(value: CanvanItem): void {
        this.canvanitems.push(value);
    }
 
    get(index: number): CanvanItem {
        return this.canvanitems[index];
    }

    getlist(index: number): Array<CanvanItem> {
        return this.canvanitems;
    }

}