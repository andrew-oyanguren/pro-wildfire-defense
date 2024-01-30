import styled from 'styled-components';
import { SECTION_IDS } from '../../constants';

const LINKS_CONFIG = [
  {
    sectionId: `#${SECTION_IDS.HERO}`,
    title: 'Top',
  },
  {
    sectionId: `#${SECTION_IDS.ABOUT}`,
    title: 'About',
  },
  {
    sectionId: `#${SECTION_IDS.SERVICES}`,
    title: 'Services',
  },
  {
    sectionId: `#${SECTION_IDS.CONTACT}`,
    title: 'Contact',
  },
];

const StyledNavigation = styled.nav`
  > * + * {
    margin-left: 40px;
  }
`;

export default function Navigation() {
  return (
    <StyledNavigation>
      {LINKS_CONFIG.map(({ sectionId, title }) => (
        <a key={title} href={sectionId}>
          {title}
        </a>
      ))}
    </StyledNavigation>
  );
}
