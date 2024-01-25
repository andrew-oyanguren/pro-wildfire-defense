import { IntroSection, HeroSection } from '../../components/UI';

export default function HomePage() {
  return (
    <div>
      <HeroSection />

      <IntroSection />

      <section>
        <h2>Services Section</h2>
      </section>

      <aside>
        <h3>Fire Map</h3>
      </aside>

      <section>Contact Section</section>
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
