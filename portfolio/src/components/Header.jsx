export default function Header() {
  return (
    <header className="w-full py-6 flex justify-center gap-8 bg-transparent text-back text-lg font-medium">
      {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="hover:text-blue-400 transition scroll-smooth"
        >
          {item}
        </a>
      ))}
    </header>
  );
}