import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todoTitle:"Todo 1",
            compleeted:false
        }
    ],
    addTodo:(todoTitle) => {},
    updatedTodo:(id,todoTitle) => {},
    deleteTodo:(id) => {},
    toggleComplete:(id) => {},
});

export const useTodo = () => {
    return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;