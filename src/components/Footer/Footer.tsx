import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: tan;
  width: 100vw;
  height: 80px;

  display: flex;
  justify-content: space-between;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p>Copywrite</p>
      <p>logo</p>
    </StyledFooter>
  );
}
