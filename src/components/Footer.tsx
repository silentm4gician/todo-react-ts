import { Filter } from "../types"
import Filters from "./Filters"

interface Props 
{
    onClearCompleted : ()=>void
    activeCount: number
    completedCount : number
    filterSelected : Filter
    handleFilterChange : (filter:Filter) => void
}

const Footer:React.FC<Props> = ({
    activeCount = 0,
    completedCount = 0,
    onClearCompleted,
    filterSelected,
    handleFilterChange
}) => 
{
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount}</strong> tareas pendientes
            </span>
            <Filters
                filterSelected={filterSelected}
                onFilterChange={handleFilterChange}
            />
            {completedCount>0&&(
            <button
                className="clear-completed"
                onClick={onClearCompleted}
            >borrar completadas</button>)}
        </footer>
    )
}

export default Footer