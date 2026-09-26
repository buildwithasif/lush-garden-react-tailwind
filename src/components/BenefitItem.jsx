export default function BenefitItem({ icon, title, description, shade = 'a' }) {
  return (
    <div className={`p-10 md:p-12 ${shade === 'a' ? 'bg-softer' : 'bg-soft'}`}>
      <div className="w-14 h-14 mb-6">
        <img src={icon} alt="" className="w-full h-full" />
      </div>
      <h4 className="font-heading font-black text-xl text-primary mb-3">{title}</h4>
      <p className="text-base opacity-80 max-w-[260px]">{description}</p>
    </div>
  );
}
