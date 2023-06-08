import { ITodo } from '../atom';

export default function Todo({ text }: ITodo) {
  return (
    <>
      <li>{text}</li>
      <button>할거야</button>
      <button>하는중이야</button>
      <button>끝냇어</button>
    </>
  );
}
