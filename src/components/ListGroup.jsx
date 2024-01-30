import React from 'react'
import ListItem from './ListItem'

const ListGroup = ({todos, deleteNumber, editTodo}) => {
  return (
   <ul className='list-group p-3 shadow-lg'>
   {todos.map((todo)=> (
    <ListItem key={todo.id} todo={todo} deleteNumber={deleteNumber} editTodo={editTodo}/>
   ))}
   </ul>
  )
}

export default ListGroup;
