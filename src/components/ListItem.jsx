import React from 'react'

const ListItem = ({todo, deleteNumber, editTodo}) => {
  return (
    <li className='list-group-item rounded-0 shadow-lg my-1'>
     {todo.text}
    <button className='btn btn-sm btn-warning rounded-0 float-end mx-1' onClick={()=>deleteNumber(todo.id)}>Delete</button>
    <button className='btn btn-sm btn-danger rounded-0 float-end'
    onClick={()=>editTodo(todo)}>Edit</button>
  </li>
  )
}

export default ListItem
