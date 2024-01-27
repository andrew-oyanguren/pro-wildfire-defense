import styled from 'styled-components';
import { flexCenter } from '../../../styles';
import { SECTION_IDS } from '../../../constants';

const StyledHeroSection = styled.div`
  background-color: pink;
  height: 60vh;

  ${flexCenter}
  flex-direction: column;
`;

export default function HeroSection() {
  return (
    <StyledHeroSection id={SECTION_IDS.HERO}>
      <h1>Pro Wildfire Defense</h1>
      <p>Is your home wildfire prepared?</p>
    </StyledHeroSection>
  );
}
