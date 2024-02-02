import { TodoID, type ListOfTodos, TodoCheck } from "../types"
import Todo from "./Todo"

interface Props
{
    todos: ListOfTodos
    onRemoveTodo: (id : TodoID) => void
    onCompleted: ({id, completed} : TodoCheck) => void
}

const Todos: React.FC<Props> = ({todos, onRemoveTodo, onCompleted}) => {
    return (
        <ul className="todo-list">
            {todos.map(todo=>
            <li
            key={todo.id}
            className={`${todo.completed ? 'completed' : ''}`}>
            <Todo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
                onRemoveTodo={onRemoveTodo}
                onCompleted={onCompleted}
            />
            </li>)}
        </ul>
    )
}

export default Todos