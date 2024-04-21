import React, { useContext, useState } from "react";

const TaskContext = React.createContext();

const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTask = () => {
        if (!inputValue.trim()) {
            return; 
        }
    
        setTodos(prevState => [
            ...prevState,
            {
                text: inputValue,
                id: Math.floor(Math.random() * 1000000),
                isCompleted: false
            }
        ]);
        setInputValue(''); 
    };
    

    const changeStatus = (status, id) => {
        setTodos(prevState =>
            prevState.map(item =>
                item.id === id ? { ...item, isCompleted: status } : item
            )
        );
    };

    const removeTask = (id) => {
        setTodos(prevState => prevState.filter(item => item.id !== id))
    }

    return (
        <TaskContext.Provider value={{ todos, addTask, removeTask, changeStatus, setInputValue,inputValue}}>
            {children}
        </TaskContext.Provider>
    );
}

export const useTodo = () => {
    const context = useContext(TaskContext);
    return context;
};

export default TodoProvider;
