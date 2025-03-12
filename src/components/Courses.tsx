import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Droplets, Shield, Heart, Flame, BookOpen, Users, Search, Filter, 
  Wrench, Beaker, Briefcase, Truck, Building, School, GraduationCap, Award, ArrowRight
} from "lucide-react";
import CourseCategory from "./CourseCategory";
import { CourseProps } from "./CourseCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Service types data
const serviceTypes = [
  {
    title: "Corporate Training",
    description: "Tailored health and safety training programs for companies of all sizes, designed to meet your specific industry requirements.",
    icon: <Building className="h-10 w-10" />,
    link: "#corporate-training",
    color: "from-blue-500 to-sky-400"
  },
  {
    title: "Council Partnerships",
    description: "Specialized training solutions for local councils, helping public sector organizations maintain the highest safety standards.",
    icon: <Building className="h-10 w-10" />,
    link: "#council-partnerships",
    color: "from-emerald-500 to-teal-400"
  },
  {
    title: "Individual Certification",
    description: "Professional development courses for individuals looking to enhance their skills and improve their career prospects.",
    icon: <GraduationCap className="h-10 w-10" />,
    link: "#individual-certification",
    color: "from-orange-500 to-amber-400"
  },
  {
    title: "Team Development",
    description: "Comprehensive group training that builds a culture of safety awareness and compliance within your organization.",
    icon: <Users className="h-10 w-10" />,
    link: "#team-development",
    color: "from-purple-500 to-violet-400"
  },
  {
    title: "Accredited Courses",
    description: "Industry-recognized certifications that demonstrate your commitment to maintaining high safety standards.",
    icon: <Award className="h-10 w-10" />,
    link: "#accredited-courses",
    color: "from-pink-500 to-rose-400"
  },
  {
    title: "Onsite Training",
    description: "Flexible training delivered at your workplace, minimizing disruption and maximizing relevance to your specific environment.",
    icon: <Building className="h-10 w-10" />,
    link: "#onsite-training",
    color: "from-indigo-500 to-blue-400"
  }
];

// Course data organized by categories
const courseCategories = [
  {
    id: "water-safety",
    title: "Water Safety & Pool Management Qualifications",
    description: "Professional qualifications for pool safety, lifeguarding and pool management",
    icon: <Droplets className="h-7 w-7" />,
    courses: [
      {
        title: "STA Pool Lifeguard",
        overview: "Comprehensive training for pool lifeguards, covering water rescue, first aid, and pool supervision.",
        keyFeatures: [
          "Water rescue techniques",
          "CPR and first aid",
          "Pool supervision",
          "Hazard identification"
        ],
        prerequisites: [
          "Minimum age 16",
          "Able to swim 100m continuously",
          "Able to surface dive to the deepest part of the pool",
          "Able to climb out of the pool unaided"
        ],
        whoShouldAttend: [
          "Aspiring lifeguards",
          "Swimming pool staff",
          "Leisure center employees"
        ],
        duration: "5 Days",
        price: "£250pp",
        ctaText: "Book Now",
        ctaLink: "/contact"
      },
      {
        title: "STA Safety Award for Teachers",
        overview: "Essential water safety skills for swimming teachers and coaches who need to ensure safety during lessons.",
        keyFeatures: [
          "Rescue techniques",
          "Basic pool safety",
          "Emergency response"
        ],
        whoShouldAttend: [
          "Swimming teachers",
          "School teachers",
          "Sports coaches"
        ],
        duration: "1 Day",
        price: "£95pp",
        ctaText: "Enquire Now",
        ctaLink: "/contact"
      },
      {
        title: "National Pool Plant Operators Certificate",
        overview: "Comprehensive training in pool water chemistry, filtration, and plant room operations for pool maintenance staff.",
        keyFeatures: [
          "Water testing",
          "Chemical handling",
          "Filtration systems",
          "Health and safety compliance"
        ],
        whoShouldAttend: [
          "Pool maintenance staff",
          "Facility managers",
          "Leisure center operators"
        ],
        duration: "3 Days",
        price: "£350pp",
        ctaText: "Get Details",
        ctaLink: "/contact"
      },
      {
        title: "STA Award in Pool Emergency Procedures",
        overview: "Training in emergency response procedures specific to swimming pool environments.",
        keyFeatures: [
          "Emergency action plans",
          "Evacuation procedures",
          "Communication protocols"
        ],
        duration: "1 Day",
        price: "£95pp",
        ctaText: "Book Training",
        ctaLink: "/contact"
      }
    ]
  },
  {
    id: "health-safety",
    title: "Health & Safety Certifications",
    description: "Essential workplace safety training and certifications",
    icon: <Shield className="h-7 w-7" />,
    courses: [
      {
        title: "IOSH Working Safely",
        overview: "A foundational course for workplace safety, covering hazard identification, risk control, and legal responsibilities.",
        keyFeatures: [
          "Hazard identification",
          "Risk control",
          "Workplace safety fundamentals"
        ],
        whoShouldAttend: [
          "All employees to meet HSE compliance"
        ],
        duration: "1 Day",
        price: "£75pp",
        highlights: [
          "Group discounts available"
        ],
        ctaText: "Request Group Booking",
        ctaLink: "/contact"
      },
      {
        title: "Level 2 Safe Moving and Handling",
        overview: "Practical training in safe manual handling techniques to prevent workplace injuries and comply with regulations.",
        keyFeatures: [
          "Manual handling principles",
          "Risk assessments",
          "Safe techniques"
        ],
        whoShouldAttend: [
          "Warehousing sector",
          "Logistics sector",
          "Healthcare sector"
        ],
        ctaText: "Book Training",
        ctaLink: "/contact"
      },
      {
        title: "Manual Handling – People Handling (All Wales Passport)",
        overview: "Specialized training for safely handling people in care environments, mandatory for Welsh workplaces involving physical care.",
        keyFeatures: [
          "Risk assessment",
          "Ergonomics",
          "Practical handling techniques"
        ],
        whoShouldAttend: [
          "Care workers",
          "Healthcare professionals",
          "Welsh workplaces involving physical care"
        ],
        duration: "2 Days",
        ctaText: "Enquire Today",
        ctaLink: "/contact"
      }
    ]
  },
  {
    id: "fire-safety",
    title: "Fire Safety Training",
    description: "Essential fire safety and prevention training",
    icon: <Flame className="h-7 w-7" />,
    courses: [
      {
        title: "Fire Warden",
        overview: "Equip your team to safely evacuate premises and manage fire risks. Includes live extinguisher training.",
        keyFeatures: [
          "Evacuation procedures",
          "Fire risk control",
          "Live extinguisher training"
        ],
        highlights: [
          "Meets employer obligations under fire safety regulations"
        ],
        whoShouldAttend: [
          "Nominated fire wardens",
          "Safety officers"
        ],
        duration: "4 Hours",
        ctaText: "Book Training",
        ctaLink: "/contact"
      },
      {
        title: "Fire Safety Awareness",
        overview: "Basic fire safety training for all employees, covering emergency response and evacuation protocols.",
        keyFeatures: [
          "Emergency response",
          "Fire spread prevention",
          "Evacuation protocols"
        ],
        duration: "1.5 Hours",
        ctaText: "Contact for Details",
        ctaLink: "/contact"
      }
    ]
  },
  {
    id: "first-aid",
    title: "First Aid Courses",
    description: "Life-saving skills for workplace and family settings",
    icon: <Heart className="h-7 w-7" />,
    courses: [
      {
        title: "Family First Aid",
        overview: "Learn CPR, choking response, and injury management in emergencies. Ideal for parents and caregivers.",
        keyFeatures: [
          "CPR (adult/child/baby)",
          "Choking",
          "Bleeding control",
          "Minor injury care"
        ],
        specialOffer: "Family of 4 for £80",
        duration: "2 Hours",
        price: "£25pp",
        ctaText: "Sign Up Now",
        ctaLink: "/contact"
      },
      {
        title: "STA Level 3 Emergency First Aid at Work (EFAW)",
        overview: "Complies with HSE requirements for low-risk workplaces. Covers CPR, bleeding control, and incident management.",
        whoShouldAttend: [
          "Low-risk workplaces"
        ],
        highlights: [
          "Group discounts available"
        ],
        duration: "1 Day",
        price: "£60pp",
        ctaText: "Book Your Team",
        ctaLink: "/contact"
      },
      {
        title: "STA Level 3 First Aid at Work (FAW)",
        overview: "Comprehensive first aid training for high-risk environments, covering advanced trauma care and medical emergencies.",
        keyFeatures: [
          "Advanced trauma care",
          "Spinal injuries",
          "Anaphylaxis",
          "Medical emergencies"
        ],
        whoShouldAttend: [
          "High-risk environments (factories, construction)"
        ],
        duration: "3 Days",
        ctaText: "Enquire Now",
        ctaLink: "/contact"
      },
      {
        title: "Emergency Paediatric First Aid",
        overview: "Essential first aid skills focused on children and infants, ideal for childcare professionals and parents.",
        duration: "1 Day",
        price: "£60pp",
        ctaText: "Book Course",
        ctaLink: "/contact"
      },
      {
        title: "Full Paediatric First Aid",
        overview: "Comprehensive paediatric first aid training covering a wide range of emergency scenarios involving children.",
        duration: "2 Days",
        ctaText: "Contact for Pricing",
        ctaLink: "/contact"
      },
      {
        title: "Foster Care First Aid",
        overview: "Specialized first aid training tailored for foster carers managing all age groups.",
        keyFeatures: [
          "Tailored for carers managing all age groups"
        ],
        ctaText: "Get Information",
        ctaLink: "/contact"
      }
    ]
  },
  {
    id: "safeguarding",
    title: "Safeguarding Training",
    description: "Essential training for protecting vulnerable individuals",
    icon: <Shield className="h-7 w-7" />,
    courses: [
      {
        title: "Safeguarding Children, Young People & Vulnerable Adults",
        overview: "Comprehensive training on safeguarding protocols and legal responsibilities for those working with vulnerable individuals.",
        keyFeatures: [
          "Child protection protocols",
          "Risk identification",
          "Legal responsibilities"
        ],
        whoShouldAttend: [
          "Education sector",
          "Childcare sector",
          "Healthcare sector"
        ],
        highlights: [
          "Mandatory for education, childcare, and healthcare sectors"
        ],
        price: "£40pp",
        ctaText: "Book Training",
        ctaLink: "/contact"
      }
    ]
  }
];

// Service Card Component
const ServiceCard = ({ service, index }: { service: typeof serviceTypes[0], index: number }) => {
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

const Courses = () => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  
  // Filter categories based on active tab
  const filteredCategories = activeTab === "all" 
    ? courseCategories 
    : courseCategories.filter(category => category.id === activeTab);
  
  // Filter courses based on search query
  const getFilteredCourses = () => {
    if (!searchQuery.trim()) return filteredCategories;
    
    return filteredCategories.map(category => ({
      ...category,
      courses: category.courses.filter(course => 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.overview.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(category => category.courses.length > 0);
  };
  
  const displayedCategories = getFilteredCourses();
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center" ref={titleRef}>
            <motion.span 
              className="badge-tag"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              Training Solutions
            </motion.span>
            
            <motion.h1 
              className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Comprehensive Training Programs
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              From specialized courses to complete training solutions, we offer flexible options to meet your specific needs. All training can be delivered at your workplace or at a venue near you.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Service Types Section */}
      <section className="py-20 bg-slate-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.span 
              className="badge-tag"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              How We Deliver
            </motion.span>
            
            <motion.h2 
              className="mt-4 section-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Training Service Options
            </motion.h2>
            
            <motion.p 
              className="section-subheading mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We offer multiple delivery methods to ensure our training fits seamlessly into your organization's needs and schedule.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceTypes.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Course Categories Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.span 
              className="badge-tag"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Courses
            </motion.span>
            
            <motion.h2 
              className="mt-4 section-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Accredited Training Programs
            </motion.h2>
            
            <motion.p 
              className="section-subheading mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Browse our comprehensive range of training courses designed to meet your specific needs. All courses can be delivered at your workplace or at a venue near you.
            </motion.p>
          </div>
          
          {/* Search and Filter */}
          <motion.div 
            className="mb-12 bg-white rounded-xl shadow-sm border p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="relative w-full md:w-1/3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search courses..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="w-full md:w-2/3">
                <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
                  <TabsList className="w-full justify-start overflow-x-auto">
                    <TabsTrigger value="all">All Courses</TabsTrigger>
                    <TabsTrigger value="water-safety">Water Safety</TabsTrigger>
                    <TabsTrigger value="health-safety">Health & Safety</TabsTrigger>
                    <TabsTrigger value="fire-safety">Fire Safety</TabsTrigger>
                    <TabsTrigger value="first-aid">First Aid</TabsTrigger>
                    <TabsTrigger value="safeguarding">Safeguarding</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </motion.div>
          
          {/* Course Categories */}
          {displayedCategories.length > 0 ? (
            displayedCategories.map((category, index) => (
              <CourseCategory
                key={category.title}
                title={category.title}
                description={category.description}
                icon={category.icon}
                courses={category.courses}
                index={index}
              />
            ))
          ) : (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-medium mb-2">No courses found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setActiveTab("all");
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary/5 py-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Transform Your Team's Safety Expertise</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us to book courses, discuss group discounts, or tailor a program for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">Request Custom Training</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/contact">Get Group Discounts</a>
              </Button>
            </div>
            <p className="mt-8 text-xl font-medium text-primary">Certify your competence. Protect your people.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses; 