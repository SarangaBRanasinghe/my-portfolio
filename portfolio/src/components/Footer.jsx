'use client';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 text-center text-sm">
      <div className="mb-2">© {new Date().getFullYear()} Saranga. All rights reserved.</div>
      <div className="flex justify-center gap-4">
        <a href="https://github.com/yourusername" target="_blank" className="hover:underline" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:underline" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}