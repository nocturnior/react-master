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

type IFormData = {
  errors: {
    email: {
      message: string;
    };
  };
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
  passwordConfirm: string;
};

export default function TodoList() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    defaultValues: {
      email: '@naver.com',
    },
  });

  const onValid = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onValid)} style={{ display: 'flex', flexDirection: 'column' }}>
        <input
          {...register('email', {
            required: '이메일이 필요합니다',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: '네이버 형식 이메일만 사용할 수 있습니다.',
            },
          })}
          placeholder='이메일'
        />
        <span style={{ fontSize: '12px' }}>{errors?.email?.message}</span>

        <input {...register('firstName', { required: '쓰슈' })} placeholder='성' />
        <span style={{ fontSize: '12px' }}>{errors?.firstName?.message}</span>

        <input {...register('lastName', { required: '쓰쇼' })} placeholder='이름' />
        <span style={{ fontSize: '12px' }}>{errors?.lastName?.message}</span>

        <input
          {...register('userName', {
            required: '쓰쇼',
            minLength: { value: 3, message: '닉넴이 넘 짧아용 ㅋ' },
          })}
          placeholder='닉네임'
        />
        <span style={{ fontSize: '12px' }}>{errors?.userName?.message}</span>

        <input
          {...register('password', {
            required: '비번을 필수로 입력',
            minLength: { value: 5, message: '비밀번호가넘짧다' },
          })}
          placeholder='비밀번호'
        />
        <span style={{ fontSize: '12px' }}>{errors?.password?.message}</span>

        <input
          {...register('passwordConfirm', {
            required: '비번을 필수로 입력',
            minLength: { value: 5, message: '비밀번호가 다르다' },
          })}
          placeholder='비밀번호 확인'
        />
        <span style={{ fontSize: '12px' }}>{errors?.passwordConfirm?.message}</span>
        <button>추가</button>
      </form>
    </>
  );
}
