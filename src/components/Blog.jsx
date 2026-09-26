import BlogCard from './BlogCard.jsx';
import { blogPosts } from '../data/content.js';

export default function Blog() {
  return (
    <section className="py-24">
      <div className="max-w-content mx-auto px-6">
        <h2 className="section-heading font-bold">Interesting blog to read</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
