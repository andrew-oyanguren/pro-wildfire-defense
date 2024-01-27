import styled from 'styled-components';
import { SECTION_IDS } from '../../../constants';

const StyledIntroSection = styled.section`
  background-color: grey;
`;

export default function IntroSection() {
  return (
    <StyledIntroSection id={SECTION_IDS.ABOUT}>
      <div>
        <p>FIRE ICON PLACEHOLDER</p>
        <p>
          Our fast-changing environment means higher temperatures and drier
          conditions, creating conditions which are prime for wildfires to
          spread to neighborhoods that were unaffected 15+ years ago.
        </p>
      </div>

      <div>
        <h2>What is wildfire prepared?</h2>
        <p>
          Wildfire Prepared is a voluntary, research-based mitigation program
          designed to meaningfully reduce wildfire risk. Our protection services
          are focused on the critical components of your home and property that
          the latest wildfire mitigation science shows are the most vulnerable
          to wildfires.
        </p>
      </div>
    </StyledIntroSection>
  );
}
