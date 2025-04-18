import HeroSection from "./components/herosection/herosection";
import AboutUs from "./components/about-us/aboutus";
import ServicesSection from "./components/services-section/services";
import GetQuote from "./components/get-quote/getquote";
import OurPackages from "./components/our-packages/ourpackages";
import WhyUs from "./components/why-us/whyus";
import OurPortfolio from "./components/our-portfolio/ourportfolio";
import TestimonalsSection from "./components/testimonials/testimonials";


export default function Home() {
  return (
    <>
    <HeroSection/>
    <AboutUs/>
    <ServicesSection/>
    <GetQuote/>
    <OurPackages/>
    <WhyUs/>
    <OurPortfolio/>
    <TestimonalsSection/>
    
    
    </>
  );
}
