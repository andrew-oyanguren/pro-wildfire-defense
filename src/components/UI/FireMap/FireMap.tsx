import styled from 'styled-components';

const StyledFireMap = styled.aside`
  background-color: orange;
`;

export default function FireMap() {
  return (
    <StyledFireMap>
      <h2>Current Fire Season</h2>

      <div>Map</div>

      <p>
        The 2024 fire season in California presents a mixed scenario due to
        diverse climatic conditions. The season's outlook calls for vigilant
        monitoring and preparedness, as these varied weather patterns may lead
        to differing fire risks across regions.
      </p>
    </StyledFireMap>
  );
}
