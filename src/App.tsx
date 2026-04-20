import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Steps from "./components/Steps";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <Hero />
      <Services />
      <Steps />
      <WhyUs />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

