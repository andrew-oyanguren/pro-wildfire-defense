import styled from 'styled-components';
import { SECTION_IDS } from '../../../constants';

const StyledSection = styled.section`
  background-color: brown;
`;

export default function HazardAssessmentSection() {
  return (
    <StyledSection id={SECTION_IDS.SERVICES}>
      <h2>Steps to be prepared?</h2>
      <p>
        Hazard Assessment: A professional will assess the risks to your
        property,fire-prone areas, and educate you on wildfire awareness giving
        you the best chance of choosing services that will help you and your
        property survive a wildfire.
      </p>

      <h3>Hazard Assessment:</h3>

      <div>
        <div>
          <p>149.99</p>
          <p>Aerial view of home showing fire risks</p>
        </div>
        <div>
          <p>249.99</p>
          <p>Property walk through, with risk assessment.</p>
        </div>
        <div>
          <p>599.99</p>
          <p>
            Property walk, with risk assessment and protection certification
            plan.
          </p>
        </div>
      </div>
    </StyledSection>
  );
}
