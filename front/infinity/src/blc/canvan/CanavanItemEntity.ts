export default class CanavanItemEntity{
   constructor()
   {

   }
   private _Uid  : string;
   private _Priority : number;
   private _Sort : number;
   private _Kind : string;
   private _Title : string;
   private _Desc : string;
   private _id : string;
   private _Regdate : Date;

    public get_Uid(): string {
        return this._Uid;
    }

    public set_Uid(_Uid: string): void {
        this._Uid = _Uid;
    }

    public get_Priority(): number {
        return this._Priority;
    }

    public set_Priority(_Priority: number): void {
        this._Priority = _Priority;
    }

    public get_Sort(): number {
        return this._Sort;
    }

    public set_Sort(_Sort: number): void {
        this._Sort = _Sort;
    }

    public get_Kind(): string {
        return this._Kind;
    }

    public set_Kind(_Kind: string): void {
        this._Kind = _Kind;
    }

    public get_Title(): string {
        return this._Title;
    }

    public set_Title(_Title: string): void {
        this._Title = _Title;
    }

    public get_Desc(): string {
        return this._Desc;
    }

    public set_Desc(_Desc: string): void {
        this._Desc = _Desc;
    }

    public get_id(): string {
        return this._id;
    }

    public set_id(_id: string): void {
        this._id = _id;
    }

    public get_Regdate(): Date {
        return this._Regdate;
    }

    public set_Regdate(_Regdate: Date): void {
        this._Regdate = _Regdate;
    }

    


}