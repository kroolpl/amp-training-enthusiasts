import { useEffect } from "react";
import Header from "@/components/Header";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

const AboutPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title and meta description
    document.title = "About AMP Training | Industry-Leading Safety Experts";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "With over 22 years of experience, AMP Training Solutions delivers expert health and safety training across Wales and England. Our experienced trainers, personalized approach, comprehensive curriculum, and practical learning methods have helped thousands of professionals create safer workplaces."
      );
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow page-transition-in pt-20">
        <div className="section-container py-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="badge-tag">About Us</span>
            <h1 className="mt-4 section-heading">Building Safer Workplaces Together</h1>
            <p className="section-subheading mx-auto">
              For over two decades, we've been empowering organizations with the expertise to create safer, smarter, and more compliant environments.
            </p>
          </div>
        </div>
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
