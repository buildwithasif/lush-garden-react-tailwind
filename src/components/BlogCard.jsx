import { blogImages } from '../data/images.js';

export default function BlogCard({ title, excerpt, date, image }) {
  return (
    <article>
      <div
        className="h-[280px] rounded-[10px] bg-cover bg-center mb-6"
        style={{ backgroundImage: `url(${image})` }}
      />

      <h3 className="font-heading font-black text-xl text-primary mb-4">{title}</h3>
      <p className="text-base opacity-80 mb-6">{excerpt}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm opacity-80">
          <img src={blogImages.calendarIcon} alt="" className="w-5 h-5" />
          <span>{date}</span>
        </div>

        <a href="#" className="flex items-center gap-1 font-heading font-black text-primary text-base">
          Read More
          <img src={blogImages.arrowIcon} alt="" className="w-6 h-6" />
        </a>
      </div>
    </article>
  );
}
