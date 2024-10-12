import {Header} from "../components/Header/Header";
import {Form} from "../components/Form/Form";
import {ToDoList} from "../components/ToDoList/ToDoList";
import {ToDo} from "../models/todo-item";
import {useState} from "react";

export const ToDoListPage = () => {
    const [todos, setTodos] = useState<ToDo[]>([
        {
            id: 0,
            text: "Первая задача",
            isDone: false,
        },
        {
            id: 1,
            text: "Вторая задача",
            isDone: true,
        },
        {
            id: 2,
            text: "Третья задача",
            isDone: true,
        }
    ]);

    const createNewToDo = (text: string) => {
        const newToDo: ToDo = {
            id: todos.length,
            text: text,
            isDone: false,
        }
        setTodos([...todos, newToDo])
    }

    const updateToDo = (todoItem: ToDo) => {
        const newToDos = todos.map((todo) => {
            if (todo.id === todoItem.id) {
                todo.isDone = !todo.isDone;
            }
            return todo
        });
        setTodos(newToDos);
    }

    const deleteToDo = (todoItem: ToDo) => {
        const newToDos = todos.filter((todo) => todo.id !== todoItem.id);
        setTodos(newToDos);
    }

    return (
        <>
            <Header/>
            <Form createNewToDo={createNewToDo} />
            <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />
        </>
    )
}