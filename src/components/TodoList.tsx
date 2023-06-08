import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

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

// useForm 사용해서 간단하게 다시 만들어보기

interface IForm {
  todo: string;
}

interface ITodo {
  text: string;
  id: number;
  category: 'YET' | 'DOING' | 'DONE';
}

const todoState = atom<ITodo[]>({
  key: 'todo',

  default: [],
});

export default function TodoList() {
  // const value = useRecoilValue(todoState); => 배열받음
  // const modFn = useSetRecoilState(todoState); => 배열을 수정
  const [todos, setTodos] = useRecoilState(todoState); // 위에 두개를 합친것과 같음

  const { register, handleSubmit, setValue } = useForm<IForm>();

  const onSubmit = ({ todo }: IForm) => {
    setTodos((pre) => [{ text: todo, id: Date.now(), category: 'YET' }, ...pre]);
    setValue('todo', '');
  };

  console.log(todos);

  return (
    <>
      <h1>투두리스트</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('todo', { required: '머할건지 써주셔요' })}
          type='text'
          placeholder='머할건지'
        />
        <button>추가</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}

/** type IFormData = {
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
  extraErr?: string;
};

 export default function TodoList() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormData>({
    defaultValues: {
      email: '@naver.com',
    },
  });

  const onValid = (data: IFormData) => {
    if (data.password !== data.passwordConfirm) {
      setError(
        'passwordConfirm',
        { message: '패스워드가 일치하지 않습니다.' },
        { shouldFocus: true }
      );
    }
    // setError('extraErr', { message: '서버가 오프라인 상태입니다.' });
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

        <input
          {...register('firstName', {
            required: '쓰슈',
            validate: {
              noTest: (value) =>
                value.includes('test') ? 'test는 허용되지 않는 이름입니다' : true,
            },
          })}
          placeholder='성'
        />
        <span style={{ fontSize: '12px' }}>{errors?.firstName?.message}</span>

        <input {...register('lastName', { required: '쓰쇼' })} placeholder='이름' />
        <span style={{ fontSize: '12px' }}>{errors?.lastName?.message}</span>

        <input
          {...register('userName', {
            required: '쓰쇼',
            minLength: { value: 3, message: '닉넴이 넘 짧아용 ㅋ' },
            validate: {
              noTest: (value) =>
                value.includes('test') ? 'test는 허용되지 않는 닉네임 입니다' : true,
            },
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
        <span>{errors?.extraErr?.message}</span>
      </form>
    </>
  );
} */
