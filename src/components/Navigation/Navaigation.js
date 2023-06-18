import { NaviLinkStyled } from './Navaigation.styled';



export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><NaviLinkStyled to='/'>Home</NaviLinkStyled></li>
        <li><NaviLinkStyled to='users'>Users</NaviLinkStyled></li>
      </ul>
    </nav>
  );
};
