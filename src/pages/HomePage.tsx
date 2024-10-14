import {ToDo} from "../models/todo-item";
import {ListItem} from "../components/ListItem/ListItem";

interface ComponentProps {
    todos: ToDo[]
}

export const HomePage = ({todos}: ComponentProps) => {
    return (
        <div className="container">
            {
                todos.map((todo: ToDo, index) => {
                    return (<ListItem key={index} todo={todo}/>)
                })
            }
        </div>
    )
}