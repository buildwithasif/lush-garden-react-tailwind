import { useState } from 'react';
import { loveIcon } from '../data/images.js';
import Button from './Button.jsx';

export default function ProductCard({ name, image, price, originalPrice }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="group bg-white border border-black/[0.03] rounded-[10px] shadow-card overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <div
        className="relative h-[220px] bg-cover bg-center bg-black/[0.03] overflow-hidden"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        <button
          type="button"
          onClick={() => setLiked((v) => !v)}
          aria-label="Add to favorites"
          className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 ${
            liked ? 'bg-pink-100' : 'bg-white/90'
          }`}
        >
          <img src={loveIcon} alt="" className="w-4 h-4" />
        </button>
      </div>

      <div className="p-6 pt-5">
        <h4 className="font-heading font-black text-base text-primary-light capitalize mb-3">
          {name}
        </h4>

        <div className="flex items-center justify-between gap-3">
          <div className="flex items-baseline gap-2 font-heading">
            <span className="text-xs line-through opacity-50">(${originalPrice})</span>
            <span className="text-xs font-bold text-primary-light">${price}</span>
          </div>
          <Button variant="solid" className="px-6 py-2 text-xs capitalize">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}
