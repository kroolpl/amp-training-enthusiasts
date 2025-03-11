
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      containerRef.current.style.setProperty('--mouse-x', `${x}`);
      containerRef.current.style.setProperty('--mouse-y', `${y}`);
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen pt-20 flex items-center relative overflow-hidden"
      ref={containerRef}
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white opacity-70"></div>
        <div 
          className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_calc(50%_+_var(--mouse-x,_0.5)*50%_-_25%)_calc(50%_+_var(--mouse-y,_0.5)*50%_-_25%)),hsl(var(--primary))_0%,transparent_50%)]"
          style={{ '--mouse-x': '0.5', '--mouse-y': '0.5' } as React.CSSProperties}
        ></div>
      </div>

      <div className="section-container relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-8">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-block">
                  <span className="badge-tag">22+ Years of Excellence</span>
                </div>
              </motion.div>
              
              <motion.h1 
                className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 text-balance"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Professional <span className="text-gradient">Health & Safety</span> Training Solutions
              </motion.h1>
              
              <motion.p 
                className="mt-6 text-lg md:text-xl text-gray-600 text-balance"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Delivering expert health and safety training across Wales and England with a focus on quality, flexibility, and customized solutions.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size="lg" className="text-sm md:text-base">
                Explore Our Courses
              </Button>
              <Button variant="outline" size="lg" className="text-sm md:text-base">
                Contact Us
              </Button>
            </motion.div>
            
            <motion.div 
              className="pt-4 flex items-center gap-x-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex flex-col">
                <span className="font-bold text-3xl text-primary">22+</span>
                <span className="text-sm text-gray-600">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-3xl text-primary">100+</span>
                <span className="text-sm text-gray-600">Satisfied Clients</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-3xl text-primary">50+</span>
                <span className="text-sm text-gray-600">Training Courses</span>
              </div>
            </motion.div>
          </div>
          
          <div className="md:col-span-5">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className={cn(
                "relative rounded-2xl overflow-hidden shadow-xl",
                "before:absolute before:inset-0 before:bg-gradient-to-tr before:from-primary/20 before:to-transparent before:z-10",
                "animated-border"
              )}>
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                  alt="AMP Training in action" 
                  className="w-full h-auto object-cover aspect-[4/3]"
                  loading="lazy"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="font-bold text-xl text-primary">100%</div>
                  <div className="text-xs text-gray-600">Certified</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
