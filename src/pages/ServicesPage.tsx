
import { useEffect } from "react";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow page-transition-in pt-20">
        <div className="section-container py-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="badge-tag">Our Services</span>
            <h1 className="mt-4 section-heading">Comprehensive Training Solutions</h1>
            <p className="section-subheading mx-auto">
              Our training courses can be tailored to meet your specific needs, whether you require training for a single employee or your entire team.
            </p>
          </div>
        </div>
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
