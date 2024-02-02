import { TodoCheck, TodoID, Todo as TodoType } from "../types"

interface Props extends TodoType 
{
    onRemoveTodo: (id : TodoID) => void
    onCompleted: ({id, completed} : TodoCheck) => void
}

const Todo:React.FC<Props> = ({id,title,completed, onRemoveTodo, onCompleted}) => 
{
    return (
        <div className="view">
            <input
                type="checkbox"
                className="toggle"
                checked={completed}
                onChange={(e)=>
                    {
                        onCompleted({id,completed: e.target.checked})
                    }}
            />
            <label htmlFor="">{title}</label>
            <button
            className="destroy"
            onClick={()=>onRemoveTodo({id})}></button>
        </div>
    )
}

export default Todo