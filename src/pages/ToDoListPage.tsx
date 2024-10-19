import {Form} from "../components/Form/Form";
import {ToDoList} from "../components/ToDoList/ToDoList";
import {ToDo} from "../models/todo-item";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {createAction, deleteAction, updateAction} from "../feature/todoList";
import {toast} from "react-toastify";

export const ToDoListPage = () => {
    const todoList = useSelector((state: RootState) => state.todoList.todos);
    const dispatch = useDispatch();

    const createNewToDo = (text: string) => {
        dispatch(createAction(text));
        toast.success(`${text} - Created !`);
    }

    const updateToDo = (todoItem: ToDo) => {
        dispatch(updateAction(todoItem));
        toast.update(`${todoItem.text} - Updated !`);
    }

    const deleteToDo = (todoItem: ToDo) => {
        dispatch(deleteAction(todoItem));
        toast.error(`${todoItem.text} - Deleted !`);
    }

    return (
        <>
            <Form createNewToDo={createNewToDo} />
            <ToDoList todos={todoList} updateToDo={updateToDo} deleteToDo={deleteToDo} />
        </>
    )
}