import { navLinks } from '../data/content.js';
import { logoImage } from '../data/images.js';
import Button from './Button.jsx';

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 py-8">
      <div className="max-w-content mx-auto px-6 flex items-center justify-between gap-6">
        <a href="#home" className="flex items-center">
          <img src={logoImage} alt="Lush" className="h-9 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-heading text-white text-base ${
                i === 0 ? 'font-bold underline' : 'opacity-90'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button variant="outline" className="text-white px-8 py-2.5">
          Call Us
        </Button>
      </div>
    </header>
  );
}
