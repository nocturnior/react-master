import { Link, useSearchParams } from 'react-router-dom';
import { users } from '../db';

function Home() {
  const [readSearchParams, setSearchParams] = useSearchParams();
  console.log('🚀 ⁝ Home ⁝ readSearchParams:', readSearchParams.has('geo'));
  // URLSearchParams : JS메소드~ useSearchParams를 사용하려면 JS메소드인 URL웅애웅이랑 같이써야한다

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
