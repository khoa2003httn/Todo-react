import React from "react";
import AddTodo from "./AddTodo";
import { ToastContainer, toast } from 'react-toastify';
class Todolist extends React.Component {
    state = {
        ListTodo: [
            {id: 1, name: 'Learn React'},
            {id: 2, name: 'Learn Redux'},
            {id: 3, name: 'Learn React Native'},
            {id: 4, name: 'Learn React Natve'}

        ]
    }
    addNewTodo = (todo) => {
        this.setState({
            ListTodo: [...this.state.ListTodo,todo]
        })
        toast.success("Thêm thành công")
    }
    hendleDeleteTodo = (todo) => {
       let currentTodo = this.state.ListTodo;
       currentTodo = currentTodo.filter(item => item.id !== todo.id)
       this.setState({
           ListTodo: currentTodo
       })
        
    }

    render() {
        let {ListTodo} = this.state
        return (
            <div className="List-todo-container ">
                <AddTodo
                 addNewTodo={this.addNewTodo} 
                 />
               
                <div className="List-todo-conten  ">
                    {ListTodo && ListTodo.length > 0 && 
                    ListTodo.map((item, index) => {
                        return (
                              <div className="todo-child border-b-4 border-black m-5" key={item.id}> 
                        <span>{index + 1}-{item.name}-</span>
                        <button type="button " className="ml-5 bg-white text-black"
                        onClick={()=>this.hendleDeleteTodo(item)}
                        >Delete</button>
                        <button type="button" className="ml-4 bg-white text-black">Edit</button>
                         </div>
                        )
                    })}
                  
                </div>
            </div>
        )
    }
}
export default Todolist;