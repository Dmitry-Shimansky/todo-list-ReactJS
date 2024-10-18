import {ToDoListItem} from "./ToDoListItem/ToDoListItem";
import {ToDo} from "../../models/todo-item";
import {ToDoListCompleted, ToDoListContainer, ToDoListFailed} from "./ToDoList.styled";

export const ToDoList = (props: {todos: ToDo[], updateToDo: Function, deleteToDo: Function}) => {
    const checkedList = () => {
        return props.todos
            .filter((item) => !item.isDone)
            .map((item) => {
                return (
                    <ToDoListItem
                        todoItem={item}
                        key={item.id}
                        updateToDo={props.updateToDo}
                        deleteToDo={props.deleteToDo}/>
                )
            })
    }

    const unCheckedList = () => {
        return props.todos
            .filter((item) => item.isDone)
            .map((item) => {
                return (
                    <ToDoListItem
                        todoItem={item}
                        key={item.id}
                        updateToDo={props.updateToDo}
                        deleteToDo={props.deleteToDo}/>
                )
            })
    }

    return (
        <ToDoListContainer>
            <ToDoListFailed>
                {checkedList()}
            </ToDoListFailed>
            <ToDoListCompleted>
                {unCheckedList()}
            </ToDoListCompleted>
        </ToDoListContainer>
    )
}