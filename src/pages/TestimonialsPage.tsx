
import { useEffect } from "react";
import Header from "@/components/Header";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow page-transition-in pt-20">
        <div className="section-container py-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="badge-tag">Testimonials</span>
            <h1 className="mt-4 section-heading">What Our Clients Say</h1>
            <p className="section-subheading mx-auto">
              Hear from the organizations and individuals who have experienced our training programs firsthand.
            </p>
          </div>
        </div>
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
