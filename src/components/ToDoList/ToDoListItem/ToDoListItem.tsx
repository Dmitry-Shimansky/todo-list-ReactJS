import {ToDo} from "../../../models/todo-item";
import {ToDoItem, ToDoItemControl, ToDoItemControls, ToDoItemText} from "./ToDoListItem.styled";

import checkIcon from '../../../assets/images/check.png';
import uncheckIcon from '../../../assets/images/uncheck.png';
import trashIcon from '../../../assets/images/trash.png';

export const ToDoListItem = (props: {todoItem: ToDo, updateToDo: Function, deleteToDo: Function}) => {
    return (
        <ToDoItem>
            <ToDoItemText>{props.todoItem.text}</ToDoItemText>
            <ToDoItemControls>
                <ToDoItemControl
                    icon={trashIcon}
                    onClick={() => props.deleteToDo(props.todoItem)}
                ></ToDoItemControl>
                <ToDoItemControl
                    icon={props.todoItem.isDone ? checkIcon : uncheckIcon}
                    onClick={() => props.updateToDo(props.todoItem)}
                ></ToDoItemControl>
            </ToDoItemControls>
        </ToDoItem>
    )
}