import React, { useEffect, useState } from 'react'

const Form = ({saveTodo , edit , updateTodo}) => {

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
   e.preventDefault();
   if(edit.editMode){
    updateTodo(edit.todo.id , text);
   }else{
    saveTodo(text);
   }
   setText("");
  };

  useEffect(() => {
    setText(edit.todo.text);
  }, [edit]);

  return (
    <form className=' form my-3  shadow-lg' onSubmit={(e)=>handleSubmit(e)} >
      <input type="text"  className='text-center form-control rounded-0 my-2 bg-info' 
      placeholder='Enter your todo' 
      onChange={(e)=>setText(e.target.value)}
      value={text} required/>
      <button className='btn btn-success rounded-0'>Add</button>
    </form>
  )
}

export default Form;
