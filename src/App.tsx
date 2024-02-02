import { useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import { Filter, TodoCheck, TodoID, TodoTitle } from './types'
import { TODO_FILTERS } from './consts'
import Footer from './components/Footer'
import Header from './components/Header'

const mock =
[
  {
    id:'1',
    title:'jugar yugioh',
    completed:false
  },
  {
    id:'2',
    title:'jugar magic',
    completed:true
  },
  {
    id:'3',
    title:'jugar ajedrez',
    completed:false
  },
]

const App = ():JSX.Element => 
{
  const [todos,setTodos] = useState(mock)
  const [filterSelected,setFilterSelected] = useState<Filter>(TODO_FILTERS.ALL)
  const activeCount = todos.filter(todo=>!todo.completed).length
  const completedCount = todos.length - activeCount
  
  const handleDelete = ({id} : TodoID) =>
  {
    const newTodo = todos.filter(todo=>todo.id != id)
    setTodos(newTodo)
  }

  const handleCompleted = ({id,completed}:TodoCheck) =>
  {
    const newTodo = todos.map(todo => 
      {
        if(todo.id == id)
        {
          return {...todo, completed}
        }
        return todo
      })

    setTodos(newTodo)
  }

  const handleFilterSelected = (filter:Filter) =>
  {
    setFilterSelected(filter)
  }

  const handleRemoveCompleted = ()=>
  {
    const newTodo = todos.filter(todo=>!todo.completed)
    setTodos(newTodo)
  }

  const handleAddTodo =({title}:TodoTitle)=>
  {
    const newTodo = 
    {
      title,
      id: crypto.randomUUID(),
      completed:false
    }

    const newTodos = [...todos,newTodo]
    setTodos(newTodos)
  }

  const filteredTodos = todos.filter(todo=>
    {
      if(filterSelected == TODO_FILTERS.ACTIVE) return !todo.completed
      if(filterSelected == TODO_FILTERS.COMPLETED) return todo.completed
      return todo
    })

  return (
    <div className='todoapp'>
      <Header
        onAddTodo={handleAddTodo}
      />
      <Todos 
        todos={filteredTodos} 
        onCompleted={handleCompleted}
        onRemoveTodo={handleDelete}/>
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleRemoveCompleted}
        handleFilterChange={handleFilterSelected}
      />
    </div>
  )
}

export default App
