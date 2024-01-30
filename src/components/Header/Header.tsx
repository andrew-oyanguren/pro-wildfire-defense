import styled from 'styled-components';
import Navigation from '../Navigation/Navigation';
import Logo from '../../assets/logo.png';

import Hamburger from '../Hamburger/Hamburger';

const StyledHeader = styled.header`
  background-color: brown;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Header() {
  return (
    <StyledHeader>
      <img src={Logo} style={{ width: 200 }} />
      {window.innerWidth > 675 ? <Navigation /> : <Hamburger />}
    </StyledHeader>
  );
}
