import { atom } from 'recoil';

export interface ITodo {
  text: string;
  id: number;
  category: 'YET' | 'DOING' | 'DONE';
}

export const todoState = atom<ITodo[]>({
  key: 'todo',
  default: [],
});
