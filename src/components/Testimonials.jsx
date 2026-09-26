import TestimonialCard from './TestimonialCard.jsx';
import { testimonials } from '../data/content.js';

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-content mx-auto px-6">
        <h2 className="section-heading font-bold">What do they say about us</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
