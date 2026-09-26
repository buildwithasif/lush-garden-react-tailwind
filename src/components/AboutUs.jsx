import FeatureCard from './FeatureCard.jsx';
import { aboutCards } from '../data/content.js';

export default function AboutUs() {
  return (
    <section id="about" className="py-24 max-w-content mx-auto px-6">
      <div className="flex flex-wrap gap-10 justify-between mb-14">
        <h2 className="font-heading font-bold text-[36px] md:text-4xl text-primary tracking-wide capitalize max-w-[480px]">
          We Help choose the most suitable plants for you
        </h2>
        <p className="max-w-[560px] text-lg font-medium opacity-80">
          Our selection includes a wide variety of flowers, from classic roses to exotic orchids, as well
          as a variety of lush indoor and outdoor plants and also offer unique floral arrangements that
          are perfect for any occasion, whether you're looking to brighten up your home or send a
          thoughtful gift.
        </p>
      </div>

      <div className="flex flex-wrap gap-8">
        {aboutCards.map((card) => (
          <FeatureCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
}
