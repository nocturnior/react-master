import React, { useState } from 'react';

export default function TodoList() {
  const [todo, setTodo] = useState('');
  const [todoErr, setTodoErr] = useState('');

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setTodoErr('');
    setTodo(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.length < 10) {
      return setTodoErr('할일이 넘 짧닼ㅋㅋ');
    }
    console.log('등록!');
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={todo} type='text' placeholder='머할건지' />
        <button>추가</button>
        {todoErr !== '' ? todoErr : null}
      </form>
    </>
  );
}
