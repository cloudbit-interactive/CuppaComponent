import {CuppaComponent} from "../../../../../libs/cuppa.component.js"

export default class SimpleTodo extends CuppaComponent {
    value = "";
    todoList = ['Todo1', 'Todo2', 'Todo3'];

    onAdd(e){
        e.preventDefault();
        if(!this.value.trim()) return;
        let todoList = [...this.todoList, this.value];
        this.todoList = todoList;
        this.value = "";
    }

    onDelete(index){
        let todoList = this.todoList;
            todoList.splice(index, 1);
        this.todoList = todoList;
    }
    
    render(){
        return /*html*/`
            <div>
                <h2>Simple Todo &nbsp;</h2>
                <form onsubmit="this.onAdd">
                    <input value="${this.value}" oninput="(e)=>{ this.value = e.target.value }" placeholder="Type any word..." />
                    <button>Add</button>
                </form>
                <ul>
                    ${ this.todoList.map((todoItem, index)=>{
                        return /*html*/`
                            <li key="${todoItem}">
                                <span>${todoItem}</span>
                                <button onclick="this.onDelete(${index})" >Delete</button>
                            </li>`
                    }).join("") }
                </ul>
            </div>`
    }
}
customElements.define('simple-todo', SimpleTodo);