import { HomePage } from '../pages';
import { Header, Footer } from '../components';

export default function Root() {
  return (
    <div>
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}
