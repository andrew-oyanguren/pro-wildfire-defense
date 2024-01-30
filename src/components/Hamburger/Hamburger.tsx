import { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledHamburger = styled.div<{ $isActive: boolean }>`
  background-color: green;
  height: 60px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  > div {
    background-color: black;
    border-radius: 10px;

    width: 60px;
    height: 8px;
  }

  > div:first-of-type {
    transform: ${({ $isActive }) =>
      $isActive ? 'rotate(-135deg) translate(-12px, -11px)' : 'rotate(0)'};
    background-color: orange;
    transition: transform 0.2s linear 0.1s;
  }
  > div:nth-of-type(2) {
    opacity: ${({ $isActive }) => ($isActive ? '0' : '1')};
    transform: ${({ $isActive }) =>
      $isActive ? 'translateX(-20px)' : 'translateX(0)'};
    transition: all 0.2s ease-in;
  }
  > div:last-of-type {
    transform: ${({ $isActive }) =>
      $isActive ? 'rotate(135deg) translate(-12px, 11px)' : 'rotate(0)'};
    transition: transform 0.2s linear 0.1s;
  }
`;

export default function Hamburger() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    console.log('[STATE] isActive: ', isActive);
  }, [isActive]);

  const toggleActive = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <StyledHamburger $isActive={isActive} onClick={toggleActive}>
      <div></div>
      <div></div>
      <div></div>
    </StyledHamburger>
  );
}
