import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  CheckCircle, UserPlus, GraduationCap, BookOpen, Award, 
  Users, Briefcase, Building, Shield, Clock, Target, 
  Lightbulb, FileText, Headphones, BarChart, Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import trainingImage from "@/images/training.webp";

const features = [
  {
    icon: <UserPlus className="h-5 w-5" />,
    title: "Experienced Trainers",
    description: "Our trainers are seasoned professionals with backgrounds spanning lifeguarding, emergency response, industrial safety, and healthcare."
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
    title: "Personalized Approach",
    description: "We collaborate closely with you to design programs that align with your goals, industry, and team dynamics."
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: "Comprehensive Curriculum",
    description: "Our courses cover the full spectrum of health and safety requirements, ensuring your team meets and exceeds standards."
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Practical Learning",
    description: "We emphasize hands-on experience, ensuring your team gains confidence to act decisively in real emergencies."
  }
];

const credentials = [
  {
    icon: <Award className="h-5 w-5" />,
    title: "Industry Credentials",
    description: "Certified by leading bodies including RLSS, STA, IOSH, and HSE, ensuring training aligns with the latest standards."
  },
  {
    icon: <Building className="h-5 w-5" />,
    title: "Cross-Sector Expertise",
    description: "From leisure centers and schools to factories and hospitals, our team has trained staff in diverse industries."
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Continuous Development",
    description: "We stay ahead of regulatory changes and emerging trends, guaranteeing your training is always current and compliant."
  }
];

const approachFeatures = [
  {
    icon: <Target className="h-5 w-5" />,
    title: "Needs Assessment",
    description: "Before training begins, we conduct a thorough evaluation of your workplace risks, existing protocols, and staff skill levels."
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    title: "Flexible Delivery",
    description: "Choose from onsite training at your facility, sessions at a local venue, or blended learning options to minimize downtime."
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Scalable Solutions",
    description: "Whether training one employee or an entire workforce, we adjust content depth, case studies, and practical exercises to suit your team."
  },
  {
    icon: <Building className="h-5 w-5" />,
    title: "Industry-Specific Customization",
    description: "We tailor our approach to your sector, whether it's healthcare, construction, education, or any other industry."
  }
];

const industryExamples = [
  {
    industry: "Healthcare",
    focus: "Safe patient handling and infection control"
  },
  {
    industry: "Construction",
    focus: "Hazard spotting and machinery safety"
  },
  {
    industry: "Education",
    focus: "Safeguarding protocols and emergency evacuation drills"
  }
];

const curriculumFeatures = [
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Regulatory Alignment",
    description: "Courses adhere to UK legislation, British Standards, and international best practices."
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    title: "Holistic Topics",
    description: "From fire safety and manual handling to advanced paediatric first aid and water treatment."
  },
  {
    icon: <Lightbulb className="h-5 w-5" />,
    title: "Future-Proof Skills",
    description: "Modules on emerging issues like mental health awareness, hybrid workplace safety, and environmental sustainability."
  }
];

const practicalFeatures = [
  {
    icon: <Users className="h-5 w-5" />,
    title: "Scenario-Based Training",
    description: "Simulated emergencies, such as mock pool rescues or fire evacuations, test decision-making under pressure."
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Live Demonstrations",
    description: "Use of professional equipment, including AEDs, fire extinguishers, and water testing kits, during sessions."
  },
  {
    icon: <Headphones className="h-5 w-5" />,
    title: "Post-Training Support",
    description: "Access to refresher guides, quick-reference posters, and 24/7 expert advice to reinforce learning."
  }
];

const trackRecord = [
  {
    icon: <Users className="h-5 w-5" />,
    title: "10,000+ Professionals Trained",
    description: "Including staff from local councils, NHS trusts, and multinational corporations."
  },
  {
    icon: <BarChart className="h-5 w-5" />,
    title: "98% Pass Rate",
    description: "Consistently high certification success across accredited courses."
  },
  {
    icon: <Building className="h-5 w-5" />,
    title: "Partnerships",
    description: "Collaborations with RLSS, STA, and IOSH ensure our programs meet rigorous accreditation standards."
  }
];

const AboutUs = () => {
  const introRef = useRef(null);
  const isIntroInView = useInView(introRef, { once: true, margin: "-100px" });
  
  const trainersRef = useRef(null);
  const isTrainersInView = useInView(trainersRef, { once: true, margin: "-100px" });
  
  const approachRef = useRef(null);
  const isApproachInView = useInView(approachRef, { once: true, margin: "-100px" });
  
  const curriculumRef = useRef(null);
  const isCurriculumInView = useInView(curriculumRef, { once: true, margin: "-100px" });
  
  const practicalRef = useRef(null);
  const isPracticalInView = useInView(practicalRef, { once: true, margin: "-100px" });
  
  const trackRecordRef = useRef(null);
  const isTrackRecordInView = useInView(trackRecordRef, { once: true, margin: "-100px" });
  
  const ctaRef = useRef(null);
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Introduction Section */}
      <section id="introduction" className="py-16 bg-white overflow-hidden">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              ref={introRef}
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={isIntroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
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
                      className="w-full h-auto object-cover aspect-[4/3]"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                </div>
                
                <div className="absolute -bottom-8 -left-8 z-0 w-full h-full rounded-2xl bg-primary/10 transform -rotate-3"></div>
                
                <div className="absolute top-1/2 right-0 transform translate-x-1/3 -translate-y-1/2 z-20">
                  <div className={cn(
                    "glass-card rounded-xl py-4 px-6 shadow-lg bg-white/80 backdrop-blur-sm",
                    "flex flex-col items-center justify-center text-center"
                  )}>
                    <span className="text-3xl font-bold text-primary">22+</span>
                    <span className="text-sm font-medium text-foreground">Years of Excellence</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="order-1 lg:order-2">
              <motion.span 
                className="badge-tag"
                initial={{ opacity: 0, y: 20 }}
                animate={isIntroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                Our Mission
              </motion.span>
              
              <motion.h2 
                className="mt-4 section-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={isIntroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Expert Training from Industry Professionals
              </motion.h2>
              
              <motion.p 
                className="mt-4 text-lg text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={isIntroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                At AMP Training Solutions Ltd, we don't just deliver training—we empower organizations with the expertise to build safer, smarter, and more compliant workplaces. With over 22 years of dedicated service across Wales and England, our mission is to equip your team with practical skills rooted in real-world experience.
              </motion.p>
              
              <motion.div 
                className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isIntroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
            </div>
          </div>
        </div>
      </section>
      
      {/* Experienced Trainers Section */}
      <section id="trainers" className="py-20 bg-slate-50">
        <div className="section-container" ref={trainersRef}>
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isTrainersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge-tag">Learn from the Best</span>
            <h2 className="mt-4 section-heading">Experienced Trainers</h2>
            <p className="mt-4 section-subheading mx-auto">
              Our trainers are more than instructors—they're seasoned professionals who have worked on the front lines of health and safety. With backgrounds spanning lifeguarding, emergency response, industrial safety, and healthcare, they bring firsthand knowledge to every session.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {credentials.map((credential, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isTrainersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <Card className="h-full border-primary/10 hover:border-primary/30 transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {credential.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">{credential.title}</h3>
                        <p className="mt-2 text-muted-foreground">{credential.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Personalized Approach Section */}
      <section id="approach" className="py-20 bg-white">
        <div className="section-container" ref={approachRef}>
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isApproachInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge-tag">Training Designed for You</span>
            <h2 className="mt-4 section-heading">Personalized Approach</h2>
            <p className="mt-4 section-subheading mx-auto">
              No two organizations are the same, and neither are their training needs. We collaborate closely with you to design programs that align with your goals, industry, and team dynamics.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {approachFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isApproachInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">{feature.title}</h3>
                    <p className="mt-2 text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="bg-slate-50 rounded-xl p-6 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isApproachInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-xl font-medium mb-4">Industry-Specific Examples</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {industryExamples.map((example, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-primary/10">
                  <Badge className="mb-2">{example.industry}</Badge>
                  <p className="text-sm text-muted-foreground">Focus on: {example.focus}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Comprehensive Curriculum Section */}
      <section id="curriculum" className="py-20 bg-slate-50">
        <div className="section-container" ref={curriculumRef}>
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isCurriculumInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge-tag">Master Every Aspect</span>
            <h2 className="mt-4 section-heading">Comprehensive Curriculum</h2>
            <p className="mt-4 section-subheading mx-auto">
              Our courses are meticulously structured to cover not just the basics but the full spectrum of health and safety requirements. We ensure your team meets—and exceeds—legal and operational standards.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {curriculumFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isCurriculumInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <Card className="h-full border-primary/10 hover:border-primary/30 transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">{feature.title}</h3>
                        <p className="mt-2 text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Practical Learning Section */}
      <section id="practical" className="py-20 bg-white">
        <div className="section-container" ref={practicalRef}>
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isPracticalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge-tag">Skills You Can Apply</span>
            <h2 className="mt-4 section-heading">Practical Learning</h2>
            <p className="mt-4 section-subheading mx-auto">
              Theory is vital, but action saves lives. Our training emphasizes hands-on experience, ensuring your team gains confidence to act decisively in real emergencies.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {practicalFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isPracticalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <Card className="h-full border-primary/10 hover:border-primary/30 transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">{feature.title}</h3>
                        <p className="mt-2 text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Track Record Section */}
      <section id="track-record" className="py-20 bg-slate-50">
        <div className="section-container" ref={trackRecordRef}>
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isTrackRecordInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge-tag">Trusted by Leading Organizations</span>
            <h2 className="mt-4 section-heading">Proven Track Record</h2>
            <p className="mt-4 section-subheading mx-auto">
              We take pride in our legacy of success, with thousands of professionals trained and consistently high certification success rates.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trackRecord.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isTrackRecordInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <Card className="h-full border-primary/10 hover:border-primary/30 transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">{item.title}</h3>
                        <p className="mt-2 text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="cta" className="py-20 bg-primary/5">
        <div className="section-container" ref={ctaRef}>
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Transform Your Workplace Today</h2>
            <p className="text-lg text-gray-600 mb-8">
              At AMP Training Solutions, we don't just check boxes—we build cultures of safety. Let us help you reduce risks, boost compliance, and protect what matters most: your people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/courses">Explore Our Courses</a>
              </Button>
            </div>
            <p className="text-xl font-medium text-primary mb-4">Certify with Confidence. Train with AMP.</p>
            <p className="text-sm text-muted-foreground">
              All courses include nationally recognized certifications, valid for 1–3 years depending on accreditation. Group discounts and multi-course bundles available.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
