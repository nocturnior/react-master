import { Link, Outlet, useParams } from 'react-router-dom';
import { users } from '../../db';

export default function User() {
  //  <Route path >와 일치하는 현재 URL에서 동적 매개변수의 key/value 쌍 객체를 반환합니다. 하위 경로는 상위 경로에서 모든 매개변수를 상속합니다.
  const { userId } = useParams();
  console.log('🚀 ⁝ User ⁝ userId:', userId);

  return (
    <>
      <h1>
        유저의 아이디는 {userId} 이고, 이름은 {users[Number(userId) - 1].name} 입니다 ㅋ
      </h1>

      <hr />
      {/* '/'를 쓰면 절대경로가 된다 → '/'를 빼고 쓰면 현재 있는 URL다음에 경로를 추가 */}
      <Link to='followers'>팔로워</Link>

      {/* context : 이것들을 자식한테 보내주세요 */}
      <Outlet context={{ nameOfMyUser: users[Number(userId) - 1].name, }} />
    </>
  );
}
