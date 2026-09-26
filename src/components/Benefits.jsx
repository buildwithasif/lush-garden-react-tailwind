import BenefitItem from './BenefitItem.jsx';
import { benefits } from '../data/content.js';
import { benefitImages } from '../data/images.js';

export default function Benefits() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div
        className="relative min-h-[420px] md:min-h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${benefitImages.background})` }}
      >
        <div className="absolute inset-0 bg-black/10" />
        <img
          src={benefitImages.floating}
          alt="Potted succulent detail"
          className="hidden md:block absolute w-[175px] h-[175px] object-cover rounded-[10px] shadow-[10px_10px_20px_rgba(0,0,0,0.25)] top-[15%] left-[40%] z-[2]"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        {benefits.map((benefit, i) => (
          <BenefitItem key={benefit.title} {...benefit} shade={i % 2 === 0 ? 'a' : 'b'} />
        ))}
      </div>
    </section>
  );
}
