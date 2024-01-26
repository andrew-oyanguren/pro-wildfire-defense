import {
  ContactSection,
  FireMap,
  HazardAssessmentSection,
  HeroSection,
  IntroSection,
} from '../../components/UI';

export default function HomePage() {
  return (
    <div>
      <HeroSection />

      <IntroSection />

      <FireMap />

      <HazardAssessmentSection />

      <ContactSection />
    </div>
  );
}

/*
layout plan:
  section: hero
    title:
    details (p):

  section: intro 
    subtitle:
    details (p):

  section: services
    subtitle:
    details (p):

  aside: fire map
    subtitle:
    details (p):

  section: contact
    subtitle:
    details (p):
*/
