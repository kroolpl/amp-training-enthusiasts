import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import heroImage from '@/images/FA.webp';

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
      className="min-h-[90vh] lg:min-h-screen pt-24 lg:pt-0 flex items-center relative overflow-hidden"
      ref={containerRef}
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white opacity-70"></div>
        <div 
          className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_calc(50%_+_var(--mouse-x,_0.5)*50%_-_25%)_calc(50%_+_var(--mouse-y,_0.5)*50%_-_25%)),hsl(var(--primary))_0%,transparent_50%)]"
          style={{ '--mouse-x': '0.5', '--mouse-y': '0.5' } as React.CSSProperties}
        ></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      <div className="section-container relative px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Content Column */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4 lg:space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center lg:justify-start"
              >
                <span className="badge-tag inline-block">Nationally Accredited Training</span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 text-balance max-w-3xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Safety Training That <span className="text-gradient">Saves Lives</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg lg:text-xl text-gray-600 text-balance max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Equip your team with life-saving skills through our industry-leading training programs. From first aid to fire safety, we deliver practical knowledge that creates safer workplaces and confident responders.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="/courses" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto text-base">
                  Explore Our Courses
                </Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-base">
                  Contact Us Today
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              className="pt-6 lg:pt-8 flex items-center justify-center lg:justify-start gap-8 lg:gap-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-bold text-3xl lg:text-4xl text-primary">22+</span>
                <span className="text-sm lg:text-base text-gray-600">Years Experience</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-bold text-3xl lg:text-4xl text-primary">4</span>
                <span className="text-sm lg:text-base text-gray-600">Key Training Areas</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-bold text-3xl lg:text-4xl text-primary">50+</span>
                <span className="text-sm lg:text-base text-gray-600">Training Courses</span>
              </div>
            </motion.div>
          </div>
          
          {/* Image Column */}
          <div className="lg:col-span-5 mt-8 lg:mt-0">
            <motion.div 
              className="relative mx-auto max-w-2xl lg:max-w-none"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className={cn(
                "relative rounded-2xl overflow-hidden shadow-xl",
                "before:absolute before:inset-0 before:bg-gradient-to-tr before:from-primary/20 before:to-transparent before:z-10",
                "animated-border"
              )}>
                <picture>
                  {/* Mobile optimization */}
                  <source
                    media="(max-width: 640px)"
                    srcSet={heroImage}
                    sizes="(max-width: 640px) 100vw"
                  />
                  {/* Tablet optimization */}
                  <source
                    media="(max-width: 1024px)"
                    srcSet={heroImage}
                    sizes="(max-width: 1024px) 50vw"
                  />
                  {/* Desktop optimization */}
                  <source
                    media="(min-width: 1025px)"
                    srcSet={heroImage}
                    sizes="40vw"
                  />
                  {/* Fallback image */}
                  <img 
                    src={heroImage}
                    alt="First Aid Training in action at AMP Training Solutions" 
                    className="w-full h-auto object-cover aspect-[4/3]"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />
                </picture>
              </div>
              
              <div className="absolute -bottom-6 -right-6 h-20 w-20 sm:h-24 sm:w-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="font-bold text-lg sm:text-xl text-primary">100%</div>
                  <div className="text-xs sm:text-sm text-gray-600">Certified</div>
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
