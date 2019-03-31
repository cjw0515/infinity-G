

export default class  BoardEntity{
    constructor()
   {}    
   _name="";

   get name() {
     return this._name;
   }
   set name(value) {
    if (value.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }

  _title ="";
  _content ="";
  _write ="";
  _regdate ="";
  _gender ="";
  _age =0;
  _tag ="";
  _uid ="";

  get uid() {    return this._uid;  }  
  set uid(value) {      this._uid = value;  }

  get title() {    return this._title;  }  
  set title(value) {      this._title = value;  }

  get content() {    return this._content;  }  
  set content(value) {      this._content = value;  }

  get write()      {    return this._write;  }  
  set write(value) {    this._write = value;  }

  get regdate()      {    return this._regdate;  }  
  set regdate(value) {    this._regdate = value;  }

  get gender()      {    return this._gender;  }  
  set gender(value) {    this._gender = value;  }

  get age()      {    return this._write;  }  
  set age(value) {    this._ti_writetle = value;  }
  
  get tag()      {    return this._tag;  }  
  set tag(value) {    this._tag = value;  }
}