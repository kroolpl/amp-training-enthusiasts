
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, UserPlus, GraduationCap, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: <CheckCircle className="h-5 w-5" />,
    title: "Experienced Trainers",
    description: "Our team brings over 22 years of real-world experience to every training session."
  },
  {
    icon: <UserPlus className="h-5 w-5" />,
    title: "Personalized Approach",
    description: "We tailor our training to your specific industry requirements and company needs."
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
    title: "Comprehensive Curriculum",
    description: "Our courses cover all essential aspects of health and safety regulations."
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: "Practical Learning",
    description: "We emphasize hands-on training that translates directly to workplace safety."
  }
];

const AboutUs = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            ref={imageRef}
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="AMP Training professional at work" 
                  className="w-full h-auto object-cover aspect-[4/3]"
                  loading="lazy"
                />
              </div>
              
              <div className="absolute -bottom-8 -left-8 z-0 w-full h-full rounded-2xl bg-primary/10 transform -rotate-3"></div>
              
              <div className="absolute top-1/2 right-0 transform translate-x-1/3 -translate-y-1/2">
                <div className={cn(
                  "glass-card rounded-xl py-4 px-6 shadow-lg",
                  "flex flex-col items-center justify-center text-center"
                )}>
                  <span className="text-3xl font-bold text-primary">22+</span>
                  <span className="text-sm font-medium text-foreground">Years of Excellence</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div 
            ref={containerRef}
            className="order-1 lg:order-2"
          >
            <motion.span 
              className="badge-tag"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              About Us
            </motion.span>
            
            <motion.h2 
              className="mt-4 section-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Expert Training from Industry Professionals
            </motion.h2>
            
            <motion.p 
              className="mt-4 text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              At AMP Training Solutions, our experienced team has been delivering high-quality health and safety training for over two decades. We're passionate about sharing our knowledge and helping organizations create safer workplaces.
            </motion.p>
            
            <motion.div 
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">{feature.title}</h3>
                    <p className="mt-1 text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
            
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button size="lg">Learn More About Us</Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
