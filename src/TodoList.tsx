import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

/** useForm 사용하기 이전 코드
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
} */

export default function TodoList() {
  const { register, watch, handleSubmit, formState } = useForm();

  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);

  return (
    <>
      <form onSubmit={handleSubmit(onValid)} style={{ display: 'flex', flexDirection: 'column' }}>
        <input {...register('email', { required: true })} placeholder='이메일' />
        <input {...register('firstName', { required: true })} placeholder='성' />
        <input {...register('lastName', { required: true })} placeholder='이름' />
        <input {...register('userName', { required: true, minLength: 3 })} placeholder='닉네임' />
        <input
          {...register('password', {
            required: 'password is required',
            minLength: { value: 5, message: '비밀번호가넘짧다' },
          })}
          placeholder='비밀번호'
        />
        <input
          {...register('passwordConfirm', { required: true, minLength: 5 })}
          placeholder='비밀번호 확인'
        />
        <button>추가</button>
      </form>
    </>
  );
}
