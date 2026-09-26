export default function TestimonialCard({ name, avatar, quote, background }) {
  return (
    <div
      className={`relative rounded-[10px] p-9 min-h-[260px] ${
        background ? 'bg-cover bg-center text-white' : 'bg-soft text-ink'
      }`}
      style={background ? { backgroundImage: `url(${background})` } : undefined}
    >
      {background && <div className="absolute inset-0 bg-black/35 rounded-[10px]" />}

      <div className="relative flex items-center gap-5 mb-6">
        <img src={avatar} alt={name} className="w-16 h-16 rounded-full object-cover" />
        <h4 className={`font-heading font-black text-xl ${background ? 'text-white' : 'text-primary'}`}>
          {name}
        </h4>
      </div>

      <p className="relative text-base opacity-90">&ldquo; {quote} &rdquo;</p>
    </div>
  );
}
