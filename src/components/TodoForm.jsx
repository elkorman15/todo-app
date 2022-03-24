import React, { useState } from 'react';
import Input from "./Input";
import Button from "./Button";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <Input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            className='edit'
          />
          <Button className='edit'>
            Update
          </Button>
        </>
      ) : (
        <>
          <Input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
          />
          <Button>
            Add todo
          </Button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
