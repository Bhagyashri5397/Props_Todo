import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import ListGroup from './components/ListGroup'

const App = () => {

  // const numbers = [1,2,3,4,5,6,7,8,9,10];

  // const [x , setx] = useState(1)

  // const increaseValue = () => {
  //   setx(x+1);
  //   // console.log(x);
  // };
  // const decreaeValue = () => {
  //   setx(x-1);
  //   // console.log(x);
  // };



  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState({
   todo: {},
   editMode: false, 
  });



  // DELETE :-----------------

  const deleteNumber = (id) => {
  //  console.log(id);
   setTodos( todos.filter((todo) => {
    if (todo.id !== id) {
      return true;
    }
  }))
  };

  // SAVETODO :-----------------

  const saveTodo = (text) => {
    // console.log(text);
    const newTodo = {
      id : crypto.randomUUID(),
      text : text,
    };
    // console.log(newTodo);
    setTodos([newTodo, ...todos]);
  };

  // EDITTODO :----------------------

  const editTodo = (todo) => {
    // console.log(todo);
    setEdit({
      todo: todo,
      editMode: true,
    });
  };

  const updateTodo = (oldId , newText) => {
    // console.log(oldId , newText);

    setTodos(
      todos.map(item => item.id === oldId ? {...item , id : oldId , text : newText} : item)
    )
    setEdit({
      todo : {},
      editMode : false,
    })
  }
  return (
    <>
      <Navbar/>
      {/* <button className='btn btn-danger' onClick={()=>increaseValue()}>Add</button>
      <button className='btn btn-dark float-end' onClick={()=>decreaeValue()}>Dicrease</button>
      <h1 className='text-center'>{x}</h1> */}

      <div className="container p-5">
      <Form saveTodo={saveTodo} edit={edit} updateTodo={updateTodo}/>
      <ListGroup todos={todos} deleteNumber={deleteNumber} editTodo={editTodo}/>
      </div>
    </>
  )
}

export default App
