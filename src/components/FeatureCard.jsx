import { aboutIcons } from '../data/images.js';

export default function FeatureCard({ icon, title, description, variant = 'light' }) {
  const isDark = variant === 'dark';

  return (
    <div
      className={`flex-1 min-w-[260px] rounded-[10px] p-8 shadow-card ${
        isDark
          ? 'bg-primary-light text-white'
          : 'bg-white border border-black/[0.03] text-ink'
      }`}
    >
      <div className="w-14 h-14 mb-5">
        <img
          src={aboutIcons[icon]}
          alt=""
          className={isDark ? 'w-full h-full brightness-0 invert' : 'w-full h-full'}
        />
      </div>
      <h3 className={`font-heading font-black text-xl tracking-wide capitalize mb-3 ${isDark ? '' : 'text-primary'}`}>
        {title}
      </h3>
      <p className="text-base opacity-85">{description}</p>
    </div>
  );
}
