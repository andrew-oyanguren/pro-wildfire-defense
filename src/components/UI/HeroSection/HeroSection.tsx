import styled from 'styled-components';
import { flexCenter } from '../../../styles';

const StyledHeroSection = styled.div`
  background-color: pink;
  height: 60vh;

  ${flexCenter}
  flex-direction: column;
`;

export default function HeroSection() {
  return (
    <StyledHeroSection>
      <h1>Pro Wildfire Defense</h1>
      <p>Is your home wildfire prepared?</p>
    </StyledHeroSection>
  );
}
