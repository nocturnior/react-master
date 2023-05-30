import React, { useState } from 'react';

export default function TodoList() {
  const [todo, setTodo] = useState('');

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setTodo(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(todo);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={todo} type='text' placeholder='머할건지' />
        <button>추가</button>
      </form>
    </>
  );
}
