import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

// Enhanced testimonials with categories and ratings
const testimonials = [
  {
    quote: "AMP Training delivered an exceptional health and safety program that perfectly aligned with our industry requirements. Their trainers were knowledgeable and engaging, making complex information accessible to our entire team.",
    author: "Sarah Johnson",
    position: "HR Director, Manufacturing Co.",
    image: "https://i.pravatar.cc/150?img=1",
    category: "corporate",
    rating: 5,
    courseType: "Health & Safety"
  },
  {
    quote: "The flexibility of AMP's training approach allowed us to customize courses for our specific workplace hazards. Their trainers were professional, patient, and provided practical solutions that we've successfully implemented.",
    author: "Mark Davies",
    position: "Operations Manager, Construction Ltd",
    image: "https://i.pravatar.cc/150?img=4",
    category: "corporate",
    rating: 5,
    courseType: "Workplace Safety"
  },
  {
    quote: "As a local council, we needed a training partner who understood public sector requirements. AMP Training delivered comprehensive courses that met all our compliance needs while engaging our diverse workforce.",
    author: "Emma Richards",
    position: "Safety Coordinator, Cardiff Council",
    image: "https://i.pravatar.cc/150?img=5",
    category: "public",
    rating: 5,
    courseType: "Compliance Training"
  },
  {
    quote: "The onsite training from AMP was invaluable. Their team worked around our schedules, minimizing disruption to our operations while maximizing the impact of the safety training.",
    author: "James Wilson",
    position: "Facility Manager, Logistics International",
    image: "https://i.pravatar.cc/150?img=3",
    category: "corporate",
    rating: 4,
    courseType: "Fire Safety"
  },
  {
    quote: "I completed an individual certification course with AMP, and the experience was outstanding. The knowledge I gained has been immediately applicable in my workplace and has helped advance my career.",
    author: "Lisa Thompson",
    position: "Site Supervisor, Engineering Solutions",
    image: "https://i.pravatar.cc/150?img=10",
    category: "individual",
    rating: 5,
    courseType: "First Aid"
  },
  {
    quote: "The pool lifeguard training was comprehensive and practical. The instructors were experienced and made sure we were confident in all emergency procedures before certification.",
    author: "David Hughes",
    position: "Leisure Center Manager, Swansea",
    image: "https://i.pravatar.cc/150?img=12",
    category: "public",
    rating: 5,
    courseType: "Pool Lifeguard"
  },
  {
    quote: "Our school staff benefited greatly from the Safety Award for Teachers course. We now feel much more prepared to handle pool-related emergencies during school swimming sessions.",
    author: "Claire Evans",
    position: "Head Teacher, Primary School",
    image: "https://i.pravatar.cc/150?img=9",
    category: "education",
    rating: 5,
    courseType: "Water Safety"
  },
  {
    quote: "The family first aid course was engaging and informative. As parents of young children, we now feel confident in our ability to respond to emergencies at home.",
    author: "Michael & Jenny Roberts",
    position: "Parents, Cardiff",
    image: "https://i.pravatar.cc/150?img=7",
    category: "individual",
    rating: 5,
    courseType: "Family First Aid"
  }
];

// Category filters
const categories = [
  { id: "all", label: "All Testimonials" },
  { id: "corporate", label: "Corporate" },
  { id: "public", label: "Public Sector" },
  { id: "education", label: "Education" },
  { id: "individual", label: "Individual" }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card className="h-full bg-white shadow-lg border-primary/10 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 to-primary/10"></div>
        <CardContent className="p-8 flex flex-col h-full">
          <div className="mb-6 flex justify-between items-start">
            <Quote className="h-10 w-10 text-primary/20" />
            <Badge variant="outline" className="bg-primary/5">
              {testimonial.courseType}
            </Badge>
          </div>
          
          <p className="text-lg text-foreground mb-8 flex-grow italic">{testimonial.quote}</p>
          
          <div className="mt-auto">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={cn(
                    "h-4 w-4",
                    i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"
                  )} 
                />
              ))}
            </div>
            
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="h-14 w-14 rounded-full object-cover border-2 border-primary/10"
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
    </motion.div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });
  
  // Filter testimonials by category
  const filteredTestimonials = activeCategory === "all" 
    ? testimonials 
    : testimonials.filter(t => t.category === activeCategory);
  
  const currentTestimonial = filteredTestimonials[activeIndex];
  
  // Handle navigation
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };
  
  // Reset index when category changes
  useEffect(() => {
    setActiveIndex(0);
  }, [activeCategory]);
  
  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [autoplay, activeIndex, filteredTestimonials.length]);
  
  // Pause autoplay when user interacts
  const handleManualNavigation = (callback: () => void) => {
    setAutoplay(false);
    callback();
    
    // Resume autoplay after 15 seconds of inactivity
    setTimeout(() => setAutoplay(true), 15000);
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16" ref={titleRef}>
          <motion.span 
            className="badge-tag"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Success Stories
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
        
        {/* Category filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className="rounded-full"
            >
              {category.label}
            </Button>
          ))}
        </motion.div>
        
        {/* Main testimonial display */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 hidden md:block">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-white"
              onClick={() => handleManualNavigation(prevTestimonial)}
              disabled={filteredTestimonials.length <= 1}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 hidden md:block">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-white"
              onClick={() => handleManualNavigation(nextTestimonial)}
              disabled={filteredTestimonials.length <= 1}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Testimonial card */}
          <div className="px-4">
            <AnimatePresence mode="wait">
              {currentTestimonial && (
                <TestimonialCard key={`${activeCategory}-${activeIndex}`} testimonial={currentTestimonial} />
              )}
            </AnimatePresence>
          </div>
          
          {/* Pagination indicators */}
          {filteredTestimonials.length > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {filteredTestimonials.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300",
                    index === activeIndex 
                      ? "bg-primary w-8" 
                      : "bg-primary/20 hover:bg-primary/30"
                  )}
                  onClick={() => handleManualNavigation(() => setActiveIndex(index))}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
        
        {/* Testimonial grid for larger screens */}
        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 hidden lg:grid"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {filteredTestimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="h-full">
              <Card className="h-full bg-white shadow-sm border-primary/5 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={cn(
                          "h-3 w-3",
                          i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"
                        )} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-sm text-foreground mb-4 line-clamp-4">{testimonial.quote}</p>
                  
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        className="h-10 w-10 rounded-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
