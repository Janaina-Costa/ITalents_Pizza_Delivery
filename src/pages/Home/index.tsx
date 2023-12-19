import { Banner } from '../../components/Banner';
import { Menu } from '../../components/Menu';

export const Home = () => (
  <main className="relative flex flex-col items-center max-w-7xl mx-auto mt-28">
    <Banner />
    <Menu />
  </main>
);
