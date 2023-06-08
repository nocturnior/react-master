import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { todoState } from '../atom';

interface IForm {
  todo: string;
}

export default function CreateTodo() {
  const setTodos = useSetRecoilState(todoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const onSubmit = ({ todo }: IForm) => {
    setTodos((pre) => [{ text: todo, id: Date.now(), category: 'YET' }, ...pre]);
    setValue('todo', '');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('todo', { required: '머할건지 써주셔요' })}
        type='text'
        placeholder='머할건지'
      />
      <button>추가</button>
    </form>
  );
}
