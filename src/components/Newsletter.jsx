import { useState } from 'react';
import Button from './Button.jsx';
import { ctaBackground } from '../data/images.js';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${ctaBackground})` }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-content mx-auto px-6 py-24 flex flex-col md:flex-row md:items-center gap-8 md:gap-6 justify-between">
        <h2 className="font-heading font-bold text-white text-2xl md:text-3xl capitalize max-w-[570px]">
          Enter your email address for our mailing Promo or other interesting things
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-[300px] rounded-[5px] border border-white bg-white/[0.03] backdrop-blur-sm px-5 py-3 text-white placeholder-white/80 outline-none"
          />
          <Button type="submit" variant="solid" className="whitespace-nowrap">
            Submit
          </Button>
        </form>
      </div>

      {submitted && (
        <p className="relative text-center pb-8 text-white font-body">
          Thanks — you're on the list!
        </p>
      )}
    </section>
  );
}
