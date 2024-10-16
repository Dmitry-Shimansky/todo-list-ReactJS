import {ToDo} from "../models/todo-item";
import {ListItem} from "../components/ListItem/ListItem";
import {useSelector} from "react-redux";
import {RootState} from "../store";

export const ViewList = () => {

    const todoList = useSelector((state: RootState) => state.todoList.todos);

    return (
        <div className="container">
            {
                todoList.map((todo: ToDo, index: number) => {
                    return (<ListItem key={index} todo={todo}/>)
                })
            }
        </div>
    )
}