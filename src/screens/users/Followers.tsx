import { useOutletContext } from 'react-router-dom';

interface IFollowersContext {
  nameOfMyUser: string;
}

export default function Followers() {
  const { nameOfMyUser } = useOutletContext<IFollowersContext>();

  return <h1>여긴~ {nameOfMyUser}의 followers</h1>;
}
