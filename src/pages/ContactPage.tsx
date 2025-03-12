import { useEffect } from "react";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title and meta description
    document.title = "Contact AMP Training | Get in Touch for Safety Training";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Contact AMP Training Solutions for expert health and safety training across Wales and England. Inquire about corporate training, individual certifications, or custom programs tailored to your needs."
      );
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow page-transition-in pt-20">
        <div className="section-container py-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="badge-tag">Contact Us</span>
            <h1 className="mt-4 section-heading">Get in Touch</h1>
            <p className="section-subheading mx-auto">
              Have a question or ready to get started? Our team is here to help you with all your training needs.
            </p>
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
