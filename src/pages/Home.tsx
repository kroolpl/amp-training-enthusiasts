import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import KeyOfferings from "@/components/KeyOfferings";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Home = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title and meta description
    document.title = "AMP Training Solutions | Expert Safety Training Across Wales & England";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "AMP Training Solutions provides expert safety training across Wales and England. Specializing in water safety, health & safety, first aid, and specialist programs for corporate, education, and individual clients."
      );
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow page-transition-in">
        <Hero />
        <Introduction />
        <KeyOfferings />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
