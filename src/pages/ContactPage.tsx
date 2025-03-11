
import { useEffect } from "react";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
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
