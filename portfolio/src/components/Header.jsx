'use client';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-6 flex justify-center gap-8 bg-white/80 backdrop-blur-md text-gray-900 text-lg font-medium shadow">
      {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="hover:text-blue-500 transition scroll-smooth"
        >
          {item}
        </a>
      ))}
    </header>
  );
}