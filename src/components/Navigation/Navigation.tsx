import { NavLink } from 'react-router-dom';

const LINKS_CONFIG = [
  {
    path: '/home',
    title: 'Home',
  },
  {
    path: '/about',
    title: 'About',
  },
  {
    path: '/services',
    title: 'Services',
  },
  {
    path: '/contact',
    title: 'Contact',
  },
];

export default function Navigation() {
  return (
    <nav>
      {LINKS_CONFIG.map(({ path, title }) => (
        <NavLink key={title} to={path}>
          {title}
        </NavLink>
      ))}
    </nav>
  );
}
