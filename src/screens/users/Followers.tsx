import { useOutletContext } from 'react-router-dom';

interface IFollowersContext {
  nameOfMyUser: string;
}

export default function Followers() {
  const { nameOfMyUser } = useOutletContext<IFollowersContext>();

  return <h1>여긴~ {nameOfMyUser}의 followers</h1>;
}

// 종종 상위 경로는 하위 경로와 state 또는 기타 값을 공유합니다.
// 원하는 경우 context provider를 만들 수 있지만 Outlet에 기본 제공되는 context를 사용할 수도 있습니다.