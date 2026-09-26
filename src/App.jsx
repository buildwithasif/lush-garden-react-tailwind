import Hero from './components/Hero.jsx';
import AboutUs from './components/AboutUs.jsx';
import Products from './components/Products.jsx';
import Benefits from './components/Benefits.jsx';
import Gallery from './components/Gallery.jsx';
import Testimonials from './components/Testimonials.jsx';
import Newsletter from './components/Newsletter.jsx';
import Blog from './components/Blog.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="font-body text-ink">
      <Hero />
      <AboutUs />
      <Products />
      <Benefits />
      <Gallery />
      <Testimonials />
      <Newsletter />
      <Blog />
      <Footer />
    </div>
  );
}
