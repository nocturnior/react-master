import { atom } from 'recoil';

export const isDarkAtom = atom({
  key: 'isDark', // 유일한 이름!
  default: false,
});
