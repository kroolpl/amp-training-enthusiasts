import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, MapPin, Calendar, Users, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import trainingImage from "@/images/training.webp";

const features = [
  {
    icon: <MapPin className="h-5 w-5" />,
    title: "Flexible Locations",
    description: "Training delivered onsite at your workplace or at a venue near you across Wales and England."
  },
  {
    icon: <Calendar className="h-5 w-5" />,
    title: "Convenient Scheduling",
    description: "Courses scheduled to minimize disruption to your business operations."
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Group or Individual",
    description: "Training for a single employee or an entire team, with the same high-quality experience."
  },
  {
    icon: <CheckCircle className="h-5 w-5" />,
    title: "Accredited Programs",
    description: "All courses are fully accredited and meet the latest industry standards and regulations."
  }
];

const Introduction = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  return (
    <section id="introduction" className="py-24 bg-slate-50">
      <div className="section-container px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div ref={sectionRef} className="max-w-2xl">
            <motion.span 
              className="badge-tag"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              About AMP Training
            </motion.span>
            
            <motion.h2 
              className="mt-4 section-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              22+ Years of Delivering Accredited, Tailored Training Solutions
            </motion.h2>
            
            <motion.p 
              className="mt-6 text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              At AMP Training Solutions Ltd, we empower individuals and organizations with the skills to ensure safety, compliance, and confidence. With over two decades of experience, our passionate trainers provide flexible, cost-effective courses—onsite or at a venue near you.
            </motion.p>
            
            <motion.p 
              className="mt-4 text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Whether you need to certify a single employee or an entire team, we tailor our programs to meet your needs, ensuring you receive the most relevant and effective training possible.
            </motion.p>
            
            <motion.div 
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-medium">{feature.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
            
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link to="/about">
                <Button size="lg" className="group">
                  Learn More About Us
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative lg:ml-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-white">
              <picture>
                {/* Mobile optimization */}
                <source
                  media="(max-width: 640px)"
                  srcSet={trainingImage}
                  sizes="(max-width: 640px) 100vw"
                />
                {/* Tablet optimization */}
                <source
                  media="(max-width: 1024px)"
                  srcSet={trainingImage}
                  sizes="(max-width: 1024px) 50vw"
                />
                {/* Desktop optimization */}
                <source
                  media="(min-width: 1025px)"
                  srcSet={trainingImage}
                  sizes="40vw"
                />
                <img 
                  src={trainingImage}
                  alt="Professional training session at AMP Training Solutions" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center gap-4 mb-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl">1000+</h4>
                  <p className="text-sm text-gray-600">Professionals Trained</p>
                </div>
              </div>
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[85%] transition-all duration-1000 ease-out"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Introduction; 