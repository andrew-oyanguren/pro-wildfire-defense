import styled from 'styled-components';
import Navigation from '../Navigation/Navigation';

const StyledHeader = styled.header`
  background-color: orange;
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
      <p>Logo</p>
      <Navigation />
    </StyledHeader>
  );
}
