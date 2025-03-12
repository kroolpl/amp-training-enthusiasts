import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar, 
  Users, 
  Building, 
  ChevronDown, 
  CheckCircle2,
  MessageSquare,
  Briefcase,
  GraduationCap
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    question: "How far in advance should I book training?",
    answer: "We recommend booking at least 4-6 weeks in advance for group training sessions to ensure availability of our trainers and to allow time for any customization. For individual certifications, 2-3 weeks notice is typically sufficient."
  },
  {
    question: "Do you offer training outside of Wales and England?",
    answer: "While we primarily serve Wales and England, we can accommodate training needs in other locations for larger corporate clients. Please contact us with your specific requirements to discuss options."
  },
  {
    question: "How many people can participate in a training session?",
    answer: "Our standard group size is 8-12 participants to ensure quality instruction and adequate hands-on practice. For larger teams, we can arrange multiple sessions or discuss custom solutions based on the specific course requirements."
  },
  {
    question: "Are your certifications internationally recognized?",
    answer: "Many of our certifications are recognized internationally, particularly those aligned with IOSH, RLSS, and other global standards. For specific recognition requirements, please inquire about the particular course you're interested in."
  },
  {
    question: "Do you offer refresher courses for existing certifications?",
    answer: "Yes, we offer refresher courses for most of our certifications. These are typically shorter and focused on updating skills and knowledge based on the latest standards and practices."
  }
];

const contactOptions = [
  {
    icon: <Phone className="h-5 w-5" />,
    title: "Phone",
    details: "+44 (0)123 456 7890",
    description: "Available Monday-Friday, 9am-5pm"
  },
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Email",
    details: "info@amptraining.co.uk",
    description: "We aim to respond within 24 hours"
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    title: "Location",
    details: "Cardiff, Wales, UK",
    description: "Serving clients across Wales and England"
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Business Hours",
    details: "Monday-Friday: 9am-5pm",
    description: "Weekend training available by arrangement"
  }
];

const inquiryTypes = [
  {
    value: "corporate",
    label: "Corporate Training",
    icon: <Building className="h-4 w-4 mr-2" />
  },
  {
    value: "individual",
    label: "Individual Certification",
    icon: <GraduationCap className="h-4 w-4 mr-2" />
  },
  {
    value: "custom",
    label: "Custom Program",
    icon: <Briefcase className="h-4 w-4 mr-2" />
  },
  {
    value: "question",
    label: "General Inquiry",
    icon: <MessageSquare className="h-4 w-4 mr-2" />
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-100px" });
  
  const faqRef = useRef(null);
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" });
  
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({ 
        name: "", 
        email: "", 
        company: "", 
        phone: "",
        inquiryType: "",
        message: "" 
      });
    }, 1500);
  };

  return (
    <>
      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 to-white opacity-90"></div>
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]"></div>
          </div>
        </div>
        
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div ref={containerRef}>
              <motion.span 
                className="badge-tag"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                Get in Touch
              </motion.span>
              
              <motion.h2 
                className="mt-4 section-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Ready to Transform Your Workplace Safety?
              </motion.h2>
              
              <motion.p 
                className="mt-4 text-lg text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Contact us today to discuss your training needs. Whether you're looking for a customized corporate program or individual certification, we're here to help.
              </motion.p>
              
              <motion.div 
                className="mt-8 space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {contactOptions.map((option, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="mt-1 flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {option.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">{option.title}</h3>
                      <p className="mt-1 text-muted-foreground">{option.details}</p>
                      <p className="text-sm text-muted-foreground/80">{option.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
              
              <motion.div
                className="mt-12 p-6 bg-primary/5 rounded-xl border border-primary/10"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Quick Response Guarantee</h3>
                </div>
                <p className="text-muted-foreground">
                  We respond to all inquiries within 24 hours during business days. For urgent training needs, please call us directly.
                </p>
              </motion.div>
            </div>
            
            <motion.div 
              ref={formRef}
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.7 }}
            >
              <div className={cn(
                "relative z-10 bg-white rounded-2xl p-8 shadow-lg",
                "before:absolute before:inset-0 before:bg-gradient-to-tr before:from-primary/5 before:to-transparent before:rounded-2xl before:-z-10"
              )}>
                <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          required
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          required
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-1">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company Ltd"
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+44 1234 567890"
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-medium mb-1">
                        Inquiry Type <span className="text-red-500">*</span>
                      </label>
                      <Select 
                        value={formData.inquiryType} 
                        onValueChange={(value) => handleSelectChange("inquiryType", value)}
                        required
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              <div className="flex items-center">
                                {type.icon}
                                {type.label}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your training needs..."
                        rows={4}
                        required
                        className="w-full resize-none"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Your information is secure and will never be shared with third parties.</span>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
              
              <div className="absolute top-6 -right-6 h-24 w-24 bg-primary rounded-full opacity-10 -z-10"></div>
              <div className="absolute -bottom-6 -left-6 h-32 w-32 bg-primary rounded-full opacity-10 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-slate-50">
        <div className="section-container" ref={faqRef}>
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge-tag">FAQ</span>
            <h2 className="mt-4 section-heading">Frequently Asked Questions</h2>
            <p className="mt-4 section-subheading mx-auto">
              Find answers to common questions about our training programs, booking process, and more.
            </p>
          </motion.div>
          
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
          
          <motion.div 
            className="mt-12 max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-muted-foreground mb-4">
              Don't see your question here? Contact us directly and we'll be happy to help.
            </p>
            <Button variant="outline" asChild>
              <a href="#contact-form">Ask Your Question</a>
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Training Locations Section */}
      <section id="locations" className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="badge-tag">Our Reach</span>
            <h2 className="mt-4 section-heading">Training Locations</h2>
            <p className="mt-4 section-subheading mx-auto">
              We provide training services across Wales and England, with flexible options to suit your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-primary/10">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-3">
                  <Building className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">At Your Workplace</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  We come to your location, bringing all necessary equipment and materials for hands-on training in your own environment.
                </p>
                <Badge variant="outline" className="bg-primary/5">Most Popular</Badge>
              </CardContent>
            </Card>
            
            <Card className="border-primary/10">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Regional Venues</h3>
                </div>
                <p className="text-muted-foreground">
                  We partner with training facilities across Wales and England to provide convenient locations for your team.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/10">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Virtual Training</h3>
                </div>
                <p className="text-muted-foreground">
                  For certain courses, we offer virtual options with interactive elements and materials shipped to participants.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
