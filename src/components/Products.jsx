import ProductCard from './ProductCard.jsx';
import { products } from '../data/content.js';

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-content mx-auto px-6">
        <h2 className="section-heading font-bold text-[36px] ">What we offer to you</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
