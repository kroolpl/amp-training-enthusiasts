
import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, GraduationCap, Users, Award, Building } from "lucide-react";
import { cn } from '@/lib/utils';

const services = [
  {
    title: "Corporate Training",
    description: "Tailored health and safety training programs for companies of all sizes, designed to meet your specific industry requirements.",
    icon: <Building className="h-10 w-10" />,
    link: "#",
    color: "from-blue-500 to-sky-400"
  },
  {
    title: "Council Partnerships",
    description: "Specialized training solutions for local councils, helping public sector organizations maintain the highest safety standards.",
    icon: <Building className="h-10 w-10" />,
    link: "#",
    color: "from-emerald-500 to-teal-400"
  },
  {
    title: "Individual Certification",
    description: "Professional development courses for individuals looking to enhance their skills and improve their career prospects.",
    icon: <GraduationCap className="h-10 w-10" />,
    link: "#",
    color: "from-orange-500 to-amber-400"
  },
  {
    title: "Team Development",
    description: "Comprehensive group training that builds a culture of safety awareness and compliance within your organization.",
    icon: <Users className="h-10 w-10" />,
    link: "#",
    color: "from-purple-500 to-violet-400"
  },
  {
    title: "Accredited Courses",
    description: "Industry-recognized certifications that demonstrate your commitment to maintaining high safety standards.",
    icon: <Award className="h-10 w-10" />,
    link: "#",
    color: "from-pink-500 to-rose-400"
  },
  {
    title: "Onsite Training",
    description: "Flexible training delivered at your workplace, minimizing disruption and maximizing relevance to your specific environment.",
    icon: <Building className="h-10 w-10" />,
    link: "#",
    color: "from-indigo-500 to-blue-400"
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden relative">
        <div className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500",
          service.color
        )} />
        
        <CardHeader className="pb-2">
          <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-md bg-primary/10 text-primary">
            {service.icon}
          </div>
          <CardTitle className="text-xl">{service.title}</CardTitle>
        </CardHeader>
        
        <CardContent>
          <CardDescription className="text-base text-muted-foreground">
            {service.description}
          </CardDescription>
        </CardContent>
        
        <CardFooter>
          <a 
            href={service.link} 
            className="inline-flex items-center text-sm text-primary font-medium hover:underline"
          >
            Learn more <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const Services = () => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });
  
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16" ref={titleRef}>
          <motion.span 
            className="badge-tag"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.span>
          
          <motion.h2 
            className="mt-4 section-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Comprehensive Training Solutions
          </motion.h2>
          
          <motion.p 
            className="section-subheading mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our training courses can be tailored to meet your specific needs, whether you require training for a single employee or your entire team.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
