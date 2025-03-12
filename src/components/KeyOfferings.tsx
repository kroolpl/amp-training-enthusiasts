import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  Droplets, 
  Heart, 
  BookOpen, 
  Users, 
  Award, 
  CheckCircle, 
  Clock, 
  Calendar, 
  Building, 
  Briefcase,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const offerings = [
  {
    id: "water-safety",
    icon: <Droplets className="h-12 w-12" />,
    title: "Pool Lifeguard & Water Safety",
    description: "Comprehensive training for pool lifeguards and water safety professionals, ensuring safe aquatic environments.",
    color: "from-blue-500 to-cyan-400",
    features: [
      "RLSS National Pool Lifeguard Qualification",
      "Pool Emergency Procedures",
      "Water Safety Management",
      "Lifesaving Skills & Techniques"
    ],
    stats: {
      courses: 6,
      duration: "1-5 days",
      certification: "2-3 years"
    },
    popular: true
  },
  {
    id: "health-safety",
    icon: <Shield className="h-12 w-12" />,
    title: "Health & Safety Certifications",
    description: "IOSH, Fire Safety, and Manual Handling certifications to ensure workplace compliance and employee safety.",
    color: "from-green-500 to-emerald-400",
    features: [
      "IOSH Managing & Working Safely",
      "Manual Handling Training",
      "Risk Assessment Workshops",
      "Workplace Safety Audits"
    ],
    stats: {
      courses: 8,
      duration: "1-3 days",
      certification: "1-3 years"
    },
    popular: false
  },
  {
    id: "first-aid",
    icon: <Heart className="h-12 w-12" />,
    title: "First Aid Courses",
    description: "Workplace, Paediatric, Family, and Foster Care first aid training to prepare for emergencies and save lives.",
    color: "from-red-500 to-rose-400",
    features: [
      "Emergency First Aid at Work",
      "Paediatric First Aid",
      "Mental Health First Aid",
      "Specialized Care Settings"
    ],
    stats: {
      courses: 10,
      duration: "1-3 days",
      certification: "1-3 years"
    },
    popular: true
  },
  {
    id: "specialist",
    icon: <BookOpen className="h-12 w-12" />,
    title: "Specialist Programs",
    description: "Specialized training in Pool Plant Operations, Safeguarding, and other niche safety requirements.",
    color: "from-purple-500 to-indigo-400",
    features: [
      "Pool Plant Operations",
      "Safeguarding Training",
      "Fire Safety & Warden Training",
      "Custom Corporate Programs"
    ],
    stats: {
      courses: 7,
      duration: "1-5 days",
      certification: "1-3 years"
    },
    popular: false
  }
];

const clientTypes = [
  {
    id: "corporate",
    title: "Corporate",
    icon: <Building className="h-5 w-5" />,
    description: "Tailored training solutions for businesses of all sizes, from SMEs to large corporations.",
    benefits: [
      "Customized to your industry needs",
      "On-site training options",
      "Group discounts available",
      "Compliance documentation provided"
    ]
  },
  {
    id: "education",
    title: "Education",
    icon: <BookOpen className="h-5 w-5" />,
    description: "Specialized programs for schools, colleges, universities, and educational facilities.",
    benefits: [
      "Term-time scheduling options",
      "Student-focused approaches",
      "Campus-wide safety planning",
      "Staff development programs"
    ]
  },
  {
    id: "individuals",
    title: "Individuals",
    icon: <Users className="h-5 w-5" />,
    description: "Professional certifications for career advancement or personal skill development.",
    benefits: [
      "Flexible scheduling options",
      "CV-enhancing qualifications",
      "Practical hands-on training",
      "Career advancement support"
    ]
  }
];

const KeyOfferings = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("corporate");
  
  return (
    <section id="key-offerings" className="py-24 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 to-white opacity-90"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
      </div>
      
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16" ref={sectionRef}>
          <motion.span 
            className="badge-tag"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Our Expertise
          </motion.span>
          
          <motion.h2 
            className="mt-4 section-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Industry-Leading Training Solutions
          </motion.h2>
          
          <motion.p 
            className="section-subheading mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Nationally recognized qualifications delivered by expert trainers with real-world experience. 
            Our programs combine theory and practical skills to ensure competence and confidence.
          </motion.p>
        </div>
        
        {/* Main offerings grid with enhanced cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {offerings.map((offering, index) => (
            <motion.div 
              key={offering.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Card className="h-full overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className={cn(
                    "p-6 bg-gradient-to-br text-white",
                    offering.color
                  )}>
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-4">
                        <div className="bg-white/20 p-3 rounded-xl">
                          {offering.icon}
                        </div>
                        <h3 className="text-xl font-semibold">{offering.title}</h3>
                      </div>
                      {offering.popular && (
                        <Badge className="bg-white/30 hover:bg-white/40 text-white border-0">
                          Popular
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{offering.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {offering.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 mb-6 border-t border-gray-100 pt-4">
                      <div className="text-center">
                        <p className="text-xs text-gray-500">Courses</p>
                        <p className="text-lg font-semibold text-gray-900">{offering.stats.courses}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-gray-500">Duration</p>
                        <p className="text-lg font-semibold text-gray-900">{offering.stats.duration}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-gray-500">Valid For</p>
                        <p className="text-lg font-semibold text-gray-900">{offering.stats.certification}</p>
                      </div>
                    </div>
                    
                    <Link to={`/courses#${offering.id}`} className="inline-flex items-center text-primary font-medium text-sm hover:underline">
                      View Courses <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Client types section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h3 className="text-2xl font-bold mb-4">Training Solutions For Every Need</h3>
            <p className="text-gray-600">
              We provide specialized training solutions for different organizations and individuals.
              Our approach is tailored to meet the specific requirements of each client type.
            </p>
          </div>
          
          <Tabs defaultValue="corporate" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {clientTypes.map((client) => (
                <TabsTrigger key={client.id} value={client.id} className="flex items-center gap-2">
                  {client.icon}
                  <span className="hidden sm:inline">{client.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {clientTypes.map((client) => (
              <TabsContent key={client.id} value={client.id} className="mt-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={client.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-slate-50 rounded-xl p-6 border border-slate-100"
                  >
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="md:w-1/2">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-primary/10 rounded-full">
                            {client.icon}
                          </div>
                          <h4 className="text-xl font-semibold">{client.title} Training</h4>
                        </div>
                        <p className="text-gray-600 mb-4">{client.description}</p>
                        
                        <ul className="space-y-2 mb-6">
                          {client.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <Link to="/contact">
                          <Button size="sm" className="mt-2">
                            Request Information
                          </Button>
                        </Link>
                      </div>
                      
                      <div className="md:w-1/2 bg-white p-5 rounded-lg border border-slate-100 shadow-sm">
                        <h5 className="text-lg font-medium mb-4">Why Choose AMP Training?</h5>
                        <div className="space-y-4">
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                              <Award className="h-5 w-5" />
                            </div>
                            <div>
                              <h6 className="font-medium">Accredited Programs</h6>
                              <p className="text-sm text-gray-600">Nationally recognized qualifications</p>
                            </div>
                          </div>
                          
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                              <Calendar className="h-5 w-5" />
                            </div>
                            <div>
                              <h6 className="font-medium">Flexible Scheduling</h6>
                              <p className="text-sm text-gray-600">Training when it suits you</p>
                            </div>
                          </div>
                          
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                              <Briefcase className="h-5 w-5" />
                            </div>
                            <div>
                              <h6 className="font-medium">Expert Trainers</h6>
                              <p className="text-sm text-gray-600">Industry professionals with real experience</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div 
          className="text-center bg-primary/5 rounded-2xl p-10 border border-primary/10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <h3 className="text-2xl font-bold mb-4">Transform Your Team's Safety Expertise</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join the hundreds of organizations across Wales and England who trust AMP Training Solutions 
            for their safety training needs. Our expert-led programs ensure compliance, build confidence, 
            and ultimately save lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses">
              <Button size="lg" className="text-sm md:text-base group">
                Explore Our Courses
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="text-sm md:text-base">
                Request Custom Training
              </Button>
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            <Clock className="inline-block h-4 w-4 mr-1 mb-1" />
            Most courses can be scheduled within 4-6 weeks of inquiry
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyOfferings; 