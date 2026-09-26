import { galleryPhotos } from '../data/content.js';

export default function Gallery() {
  return (
    <section className="py-24">
      <div className="max-w-content mx-auto px-6">
        <h2 className="section-heading font-bold ">Our Gallery View</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[260px] gap-5">
          {galleryPhotos.map((photo, i) => (
            <div
              key={photo.image}
              className={`relative rounded-[3px] bg-cover bg-center after:absolute after:inset-0 after:bg-black/10 after:rounded-[3px] ${
                photo.span
              } ${i === 0 ? 'col-span-2 md:col-span-1' : ''}`}
              style={{ backgroundImage: `url(${photo.image})` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
