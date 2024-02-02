import { useState } from "react"
import { TodoTitle } from "../types"

interface Props
{
    saveTodo: ({title}:TodoTitle) => void
}

const CreateTodo:React.FC<Props> = ({saveTodo}) => 
{
    const [inputValue,setInputValue] = useState('')

    return (
        <form onSubmit={(e)=>
        {
            e.preventDefault()
            saveTodo({title:inputValue})
            setInputValue('')
        }}>
            <input
                className="new-todo"
                value={inputValue}
                onChange={(e)=>{setInputValue(e.target.value)}}
                onKeyDown={()=>{}}
                placeholder="agregar tarea"
                autoFocus/>
        </form>
    )
}

export default CreateTodo