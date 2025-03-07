import Link from 'next/link';

const navItems = {
  '/': {
    name: 'Alfono J Garcia',
  },
  '/blog': {
    name: 'Blog',
  },
  '/about': {
    name: 'About',
  },
  '/showcase': {
    name: 'Showcase',
  },
};

export function Navbar() {
  return (
    <div className="flex flex-row justify-between space-between font-semibold text-lg text-white">
      <Link className="pr-60" href="/">
        Alfonso J Garcia
      </Link>
      <Link href="/showcase">Showcase</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/About">About</Link>
    </div>
  );
}
