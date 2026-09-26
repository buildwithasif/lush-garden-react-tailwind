import Navbar from './Navbar.jsx';
import Button from './Button.jsx';
import { heroImages } from '../data/images.js';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[780px] flex items-center bg-cover bg-bottom bg-[#cddad0] overflow-hidden"
      style={{ backgroundImage: `url(${heroImages.potsRow})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(18,56,39,0.4)] to-[rgba(40,90,67,0.15)]" />

      <Navbar />

      <div className="relative z-[2] max-w-content mx-auto px-6 text-center pt-32 pb-56 w-full">
        <h1 className="font-heading font-bold text-white text-4xl md:text-6xl mb-6">
          Beauty Delivered to You
        </h1>

        <p className="max-w-[787px] mx-auto text-[#f8f8f8] text-lg leading-relaxed mb-8">
          Nature's beauty is just a click away with our online flower and plant shop. We offer a wide
          variety of flowers that will bring a touch of nature to your home!
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Button variant="solid">Book Now</Button>
          <Button
            variant="outline"
            className="text-white"
            icon={<img src={heroImages.playIcon} alt="" />}
          >
            Watch Video
          </Button>
        </div>
      </div>

      <div className="hidden sm:flex absolute right-10 top-1/2 -translate-y-16 z-[2] flex-col gap-5 font-heading font-black text-white">
        <span className="text-[#9fe0bf] underline">01</span>
        <span className="opacity-60">02</span>
        <span className="opacity-60">03</span>
      </div>
    </section>
  );
}
