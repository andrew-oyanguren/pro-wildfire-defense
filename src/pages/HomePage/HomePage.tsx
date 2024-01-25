import {
  ContactSection,
  FireMap,
  HeroSection,
  IntroSection,
} from '../../components/UI';

export default function HomePage() {
  return (
    <div>
      <HeroSection />

      <IntroSection />

      <FireMap />

      <section>
        <h2>Services Section</h2>
      </section>

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
