import BoardEntity from './boardentity.js';

export default class  BoardsData{
    cnt =0;

    testmethod(arg) {
        this.cnt++;
        return this.cnt+arg+'hellow world';
    }

    nowpage =1;
    showpage=20;

    boardlist ={};


    addBorad(data)
    {        
        this.boardlist.push(data);
        //newTodos[index] = { ...newTodos[index], text };
        //const todo = newTodos.find(todo => todo.date === date);
        //const newTodos = [...this.todos];
        //const { index } = this.edit;
        //return [...this.todos.filter(todo => !todo.isDone)];
        //this.todos = this.todos.filter(todo => todo.date !== date);
    }

    getListBorad(data)
    {        
        
    }

    RemoveBorad(data)
    {        
        
    }


    GetData(arg) {
        let be =new  BoardEntity();
        be.name="fffff";
        
        let data={
            title:be.title
        }

        return data;
    }
    
}