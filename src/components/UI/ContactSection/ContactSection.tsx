import styled from 'styled-components';

const StyledContactSection = styled.section`
  background-color: blue;
`;

export default function ContactSection() {
  return (
    <StyledContactSection>
      <div>
        <h3>Get in contact.</h3>
        <p>Form Placeholder</p>
      </div>

      <div>
        <p>Logo Placeholder</p>
        <span>phone number placeholder</span>
        <span>address placeholder</span>
      </div>
    </StyledContactSection>
  );
}
