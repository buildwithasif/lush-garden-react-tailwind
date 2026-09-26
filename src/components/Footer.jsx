import { footerImages } from '../data/images.js';
import { footerLinks } from '../data/content.js';

const socialIcons = [
  { key: 'instagram', src: footerImages.instagram, label: 'Instagram' },
  { key: 'facebook', src: footerImages.facebook, label: 'Facebook' },
  { key: 'twitter', src: footerImages.twitter, label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="relative bg-primary text-white overflow-hidden">
      <img
        src={footerImages.monstera}
        alt=""
        className="hidden lg:block absolute left-0 top-16 w-[300px] opacity-20 pointer-events-none"
      />
      <img
        src={footerImages.fern}
        alt=""
        className="hidden lg:block absolute right-0 top-32 w-[280px] opacity-20 pointer-events-none"
      />

      <div className="relative max-w-content mx-auto px-6 pt-16 pb-10 text-center">
        <h2 className="font-heading font-black text-2xl md:text-3xl mb-8">Feel free to contact us</h2>

        <div className="flex items-center justify-center gap-6 mb-10">
          {socialIcons.map((icon) => (
            <a
              key={icon.key}
              href="#"
              aria-label={icon.label}
              className="w-14 h-14 rounded-full border border-white/60 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <img src={icon.src} alt="" className="w-8 h-8" />
            </a>
          ))}
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-8 font-heading font-bold text-base opacity-80">
          {footerLinks.map((link) => (
            <a key={link} href="#">
              {link}
            </a>
          ))}
        </nav>
      </div>

      <div className="relative bg-ink text-center py-4 text-sm font-heading font-bold opacity-80">
        Copyright © 2024 Lush. All rights reserved. Dennis Nzioki DNX
      </div>
    </footer>
  );
}
