import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NaviLinkStyled = styled(NavLink)`
text-decoration: none;
&.active {
    color: orange;
  }`