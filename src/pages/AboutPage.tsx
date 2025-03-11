
import { useEffect } from "react";
import Header from "@/components/Header";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow page-transition-in pt-20">
        <div className="section-container py-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="badge-tag">About Us</span>
            <h1 className="mt-4 section-heading">Our Story & Mission</h1>
            <p className="section-subheading mx-auto">
              With over 22 years of experience in health and safety training, we have built a reputation for excellence across Wales and England.
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
