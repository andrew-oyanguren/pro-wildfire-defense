import styled from 'styled-components';
import { Form } from '../../index';
import { SECTION_IDS } from '../../../constants';

const StyledContactSection = styled.section`
  background-color: blue;
`;

const CompanyDetails = styled.div`
  background-color: pink;
`;

export default function ContactSection() {
  return (
    <StyledContactSection id={SECTION_IDS.CONTACT}>
      <div>
        <h3>Get in contact.</h3>
        <Form />
      </div>

      <CompanyDetails>
        <p>Logo Placeholder</p>
        <p>phone number placeholder</p>
        <p>address placeholder</p>
      </CompanyDetails>
    </StyledContactSection>
  );
}
