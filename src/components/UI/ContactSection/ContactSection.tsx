import styled from 'styled-components';
import { Form } from '../../index';

const StyledContactSection = styled.section`
  background-color: blue;
`;

export default function ContactSection() {
  return (
    <StyledContactSection>
      <div>
        <h3>Get in contact.</h3>
        <Form />
      </div>

      <div>
        <p>Logo Placeholder</p>
        <span>phone number placeholder</span>
        <span>address placeholder</span>
      </div>
    </StyledContactSection>
  );
}
