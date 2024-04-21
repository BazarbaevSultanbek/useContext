import { useState } from "react";
import { useTodo } from '../TodoProvider/TodoProvider.jsx';



const Todo = () => {
    const { todos, addTask, removeTask, changeStatus, inputValue,setInputValue } = useTodo();

    return (
        <div className="Todo">
            <div className="container">

                <div className="Todo-block">
                    <div className="Todo-block-input">
                        <input type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
                        <button onClick={() => addTask()}>Add Task</button>
                    </div>
                    <div className="Todo-block-list">
                        <ul>
                            {
                                todos.map((item) => (
                                    <li id={item.id} key={item.id}>
                                        <input type="checkbox" id="check" className="checkbox" onChange={e => changeStatus(e.target.checked, item.id)} />
                                        <p style={{ textDecoration: item.isCompleted ? 'line-through' : 'none' }}>{item.text}</p>
                                        <button onClick={() => removeTask(item.id)}>X</button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}



export default Todo;