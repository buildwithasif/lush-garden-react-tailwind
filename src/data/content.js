import { productImages, benefitImages, testimonialImages, blogImages, galleryImages } from './images.js';

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Planters', href: '#products' },
  { label: 'Contact', href: '#contact' },
];

export const aboutCards = [
  {
    icon: 'indoor',
    title: 'Indoor Plants',
    description: 'Bring the beauty of nature to your outdoor spaces with our wide selection of outdoor plants',
    variant: 'light',
  },
  {
    icon: 'outdoor',
    title: 'Outdoor Plants',
    description:
      'Bring a touch of greenery to your living spaces with our collection of indoor plants, perfect for purifying the air and adding a natural touch to your home.',
    variant: 'dark',
  },
  {
    icon: 'bamboo',
    title: 'Plants Pots',
    description:
      'Add a touch of style to your indoor or outdoor spaces with our collection of pots plants, available in a variety of sizes and designs to fit any decor',
    variant: 'light',
  },
];

export const products = productImages.map((image, index) => ({
  id: index + 1,
  name: 'Cactus Plant',
  image,
  price: 8,
  originalPrice: 10,
}));

export const benefits = [
  {
    icon: benefitImages.timeConsuming,
    title: 'Quality Product',
    description: 'Our flowers are of the highest quality, carefully selected and sourced from reputable',
  },
  {
    icon: benefitImages.growSprout,
    title: 'Always Fresh',
    description: 'Our flowers are always fresh, handpicked and delivered promptly for maximum longevity and enjoyment.',
  },
  {
    icon: benefitImages.temperature,
    title: 'Work Smart',
    description: 'We work smart, using innovative techniques and technology to streamline our processes',
  },
  {
    icon: benefitImages.pruning,
    title: 'Excelent Service',
    description: "We pride ourselves on providing excellent service, going above and beyond to meet our customers' needs",
  },
];

export const galleryPhotos = [
  { image: galleryImages.tall, span: 'row-span-2' },
  { image: galleryImages.topMiddle, span: '' },
  { image: galleryImages.topRight, span: '' },
  { image: galleryImages.bottomMiddle, span: '' },
  { image: galleryImages.bottomRight, span: '' },
];

export const testimonials = [
  {
    name: 'Doris Watson',
    avatar: testimonialImages.avatar1,
    quote: 'Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service.',
  },
  {
    name: 'Kate Szu',
    avatar: testimonialImages.avatar2,
    quote: 'Great service, beautiful flowers, timely delivery. Highly recommend.',
  },
  {
    name: 'Dyness',
    avatar: testimonialImages.avatar3,
    quote: 'I am very happy with my purchase from this website, the plants were healthy and arrived on time.',
    background: testimonialImages.card3Background,
  },
];

export const blogPosts = [
  {
    title: 'More productive with an atmosphere of greenery',
    excerpt:
      'An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...',
    date: 'January 20, 2023',
    image: blogImages.moreProductive,
  },
  {
    title: 'The benefits of plants in your room',
    excerpt:
      'Plants in your room can bring numerous benefits, such as improved air quality, reduced stress, and increased feelings of well-being....',
    date: 'January 10, 2023',
    image: blogImages.benefitsOfPlants,
  },
  {
    title: 'Hobbyist plants in the house',
    excerpt: 'Having hobbyist plants in the house is a great way to bring nature indoors. Not only do they purify the air, but they....',
    date: 'January 15, 2023',
    image: blogImages.hobbyistPlants,
  },
];

export const footerLinks = ['Home', 'About Us', 'Plants', 'Delivery', 'Blog', 'Contact Us'];
