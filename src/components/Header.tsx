import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate(); // 일반적으로 이 훅보다 loaders 및 actions에서 redirect을 사용하는 것이 좋습니다
  const onAboutClick = () => {
    navigate('/about');
  };

  return (
    <header>
      <ul style={{ display: 'flex', justifyContent: 'space-between', paddingInlineStart: '0', listStyle: 'none' }}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          {/* <Link to='/about'>About</Link> */}
          <button onClick={onAboutClick}>About</button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
