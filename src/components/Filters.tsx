import { FILTERS_BUTTONS } from "../consts"
import { Filter } from "../types"


interface Props 
{
    filterSelected: Filter
    onFilterChange: (filter:Filter) => void
}

const Filters:React.FC<Props> = ({filterSelected, onFilterChange}) => 
{
    return (
        <ul className="filters">
            {
                Object.entries(FILTERS_BUTTONS).map(([key,{href,literal}])=>
                {
                    const isSelected = key == filterSelected
                    const className = isSelected?'selected':''

                    return(
                        <li key={key}>
                            <a 
                                href={href}
                                className={className}
                                onClick={(e)=>
                                    {
                                        e.preventDefault()
                                        onFilterChange(key as Filter)
                                    }}
                            >{literal}</a>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Filters