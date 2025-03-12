import { useEffect } from "react";
import Header from "@/components/Header";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";

const CoursesPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title and meta description
    document.title = "Training Solutions | AMP Training Solutions";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore our comprehensive training solutions including accredited courses, corporate training, and specialized programs in water safety, health & safety, first aid, fire safety, and safeguarding."
      );
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow page-transition-in pt-20">
        <Courses />
      </main>
      <Footer />
    </div>
  );
};

export default CoursesPage; 