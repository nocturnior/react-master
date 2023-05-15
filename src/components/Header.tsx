import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <ul style={{ display: 'flex', justifyContent: 'space-between', paddingInlineStart:'0', listStyle:'none'}}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
