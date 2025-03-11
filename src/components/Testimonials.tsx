
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "AMP Training delivered an exceptional health and safety program that perfectly aligned with our industry requirements. Their trainers were knowledgeable and engaging, making complex information accessible to our entire team.",
    author: "Sarah Johnson",
    position: "HR Director, Manufacturing Co.",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    quote: "The flexibility of AMP's training approach allowed us to customize courses for our specific workplace hazards. Their trainers were professional, patient, and provided practical solutions that we've successfully implemented.",
    author: "Mark Davies",
    position: "Operations Manager, Construction Ltd",
    image: "https://i.pravatar.cc/150?img=4"
  },
  {
    quote: "As a local council, we needed a training partner who understood public sector requirements. AMP Training delivered comprehensive courses that met all our compliance needs while engaging our diverse workforce.",
    author: "Emma Richards",
    position: "Safety Coordinator, Cardiff Council",
    image: "https://i.pravatar.cc/150?img=5"
  },
  {
    quote: "The onsite training from AMP was invaluable. Their team worked around our schedules, minimizing disruption to our operations while maximizing the impact of the safety training.",
    author: "James Wilson",
    position: "Facility Manager, Logistics International",
    image: "https://i.pravatar.cc/150?img=3"
  },
  {
    quote: "I completed an individual certification course with AMP, and the experience was outstanding. The knowledge I gained has been immediately applicable in my workplace and has helped advance my career.",
    author: "Lisa Thompson",
    position: "Site Supervisor, Engineering Solutions",
    image: "https://i.pravatar.cc/150?img=10"
  }
];

const TestimonialCard = ({ testimonial, isActive }: { testimonial: typeof testimonials[0], isActive: boolean }) => {
  return (
    <Card 
      className={cn(
        "h-full transition-all duration-500 relative overflow-hidden",
        isActive 
          ? "bg-white shadow-lg scale-100 opacity-100 z-10" 
          : "bg-white/50 scale-95 opacity-40 hover:opacity-60"
      )}
    >
      <CardContent className="p-6 md:p-8">
        <div className="flex flex-col h-full">
          <div className="mb-6">
            <svg 
              width="45" 
              height="36" 
              className="text-primary/20" 
              viewBox="0 0 45 36" 
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 36C9.9 36 6.9 34.65 4.5 31.95C2.1 29.25 0.9 25.9 0.9 22C0.9 18.4 1.85 14.9 3.75 11.5C5.65 8.1 8.5 5.05 12.3 2.35L18.6 7.65C15.8 9.75 13.7 11.7 12.3 13.5C10.9 15.3 10.2 17.1 10.2 18.9C10.2 19.9 10.4 20.7 10.8 21.3C10.1 21.9 9.55 22.7 9.15 23.7C8.75 24.7 8.55 25.8 8.55 27C8.55 28.8 9.15 30.3 10.35 31.5C11.55 32.7 13.05 33.3 14.85 33.3C16.65 33.3 18.15 32.7 19.35 31.5C20.55 30.3 21.15 28.8 21.15 27C21.15 26 20.95 25 20.55 24C20.15 23 19.6 22.2 18.9 21.6L20.85 18.3C22.25 19.1 23.35 20.2 24.15 21.6C24.95 23 25.35 24.9 25.35 27.3C25.35 30.1 24.3 32.4 22.2 34.2C20.1 36 17.1 36 13.5 36ZM34.2 36C30.6 36 27.6 34.65 25.2 31.95C22.8 29.25 21.6 25.9 21.6 22C21.6 18.4 22.55 14.9 24.45 11.5C26.35 8.1 29.2 5.05 33 2.35L39.3 7.65C36.5 9.75 34.4 11.7 33 13.5C31.6 15.3 30.9 17.1 30.9 18.9C30.9 19.9 31.1 20.7 31.5 21.3C30.8 21.9 30.25 22.7 29.85 23.7C29.45 24.7 29.25 25.8 29.25 27C29.25 28.8 29.85 30.3 31.05 31.5C32.25 32.7 33.75 33.3 35.55 33.3C37.35 33.3 38.85 32.7 40.05 31.5C41.25 30.3 41.85 28.8 41.85 27C41.85 26 41.65 25 41.25 24C40.85 23 40.3 22.2 39.6 21.6L41.55 18.3C42.95 19.1 44.05 20.2 44.85 21.6C45.65 23 46.05 24.9 46.05 27.3C46.05 30.1 45 32.4 42.9 34.2C40.8 36 37.8 36 34.2 36Z"/>
            </svg>
          </div>
          
          <p className="text-lg text-foreground mb-8 flex-grow">{testimonial.quote}</p>
          
          <div className="flex items-center mt-auto">
            <div className="flex-shrink-0 mr-4">
              <img 
                src={testimonial.image} 
                alt={testimonial.author}
                className="h-12 w-12 rounded-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <p className="font-medium text-foreground">{testimonial.author}</p>
              <p className="text-sm text-muted-foreground">{testimonial.position}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16" ref={titleRef}>
          <motion.span 
            className="badge-tag"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Testimonials
          </motion.span>
          
          <motion.h2 
            className="mt-4 section-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What Our Clients Say
          </motion.h2>
          
          <motion.p 
            className="section-subheading mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Don't just take our word for it. Hear from organizations and individuals who have transformed their safety culture through our training programs.
          </motion.p>
        </div>
        
        <div className="mt-20 relative pb-10">
          <div className="flex overflow-x-auto gap-6 pb-4 snap-x scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="min-w-[85%] md:min-w-[45%] lg:min-w-[30%] snap-center px-2"
                onClick={() => setActiveIndex(index)}
              >
                <TestimonialCard 
                  testimonial={testimonial} 
                  isActive={index === activeIndex} 
                />
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === activeIndex 
                    ? "bg-primary" 
                    : "bg-primary/20 hover:bg-primary/30"
                )}
                onClick={() => setActiveIndex(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
