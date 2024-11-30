import React from "react";
import { toast } from "react-toastify";
class AddTodo extends React.Component {
    state = {
        name: ''
    }
    //
    hendleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    hendleTodo = () => {
        if(!this.state.name){
            toast.error("Vui long nhap todo")
            return;
        } 
        let todo = {
            id: Math.floor(Math.random() * 1000),
            name: this.state.name
        }
        this.props.addNewTodo(todo)
    }
     
    render() {
        let {name} = this.state

        return (
            <div className="add-todo h-10 ">
            <input type="text" className="text-green-700" value={name}
                onChange={(event)=>this.hendleOnChangeName(event)}
            />
             <button type="button" onClick={this.hendleTodo} >add</button>
         </div>
        )
    }
}
export default AddTodo