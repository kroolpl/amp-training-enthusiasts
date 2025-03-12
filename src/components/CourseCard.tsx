import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Clock, Users, PoundSterling, ArrowRight, Award, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CourseProps {
  title: string;
  overview: string;
  keyFeatures?: string[];
  highlights?: string[];
  whoShouldAttend?: string[];
  prerequisites?: string[];
  duration?: string;
  price?: string;
  specialOffer?: string;
  ctaText: string;
  ctaLink: string;
  index: number;
}

const CourseCard = ({ 
  title, 
  overview, 
  keyFeatures, 
  highlights,
  whoShouldAttend,
  prerequisites,
  duration,
  price,
  specialOffer,
  ctaText, 
  ctaLink,
  index 
}: CourseProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden group border-primary/10 hover:border-primary/30">
        {specialOffer && (
          <div className="bg-primary text-primary-foreground text-xs font-medium py-1.5 px-3 absolute top-4 right-0 rounded-l-full shadow-sm">
            Special Offer
          </div>
        )}
        
        <CardHeader className="pb-2 relative">
          <div className="absolute -left-3 top-0 h-full w-1.5 bg-primary/40 rounded-full"></div>
          <div className="mb-1">
            {duration && (
              <Badge variant="outline" className="flex items-center gap-1 mb-2">
                <Clock className="h-3 w-3" />
                {duration}
              </Badge>
            )}
          </div>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">{title}</CardTitle>
          {price && (
            <div className="flex items-center gap-1 text-sm font-medium text-primary mt-1">
              <PoundSterling className="h-3.5 w-3.5" />
              {price}
            </div>
          )}
        </CardHeader>
        
        <CardContent className="space-y-4">
          <CardDescription className="text-base text-muted-foreground">
            {overview}
          </CardDescription>
          
          {keyFeatures && keyFeatures.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium flex items-center gap-1.5">
                <Award className="h-4 w-4 text-primary" />
                Key Features
              </h4>
              <ul className="space-y-1.5">
                {keyFeatures.map((feature, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary/70 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {highlights && highlights.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium flex items-center gap-1.5">
                <Award className="h-4 w-4 text-primary" />
                Highlights
              </h4>
              <ul className="space-y-1.5">
                {highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary/70 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {whoShouldAttend && whoShouldAttend.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium flex items-center gap-1.5">
                <Users className="h-4 w-4 text-primary" />
                Who Should Attend
              </h4>
              <ul className="space-y-1.5">
                {whoShouldAttend.map((attendee, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary/70 flex-shrink-0 mt-0.5" />
                    <span>{attendee}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {prerequisites && prerequisites.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium flex items-center gap-1.5">
                <Award className="h-4 w-4 text-primary" />
                Prerequisites
              </h4>
              <ul className="space-y-1.5">
                {prerequisites.map((prerequisite, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary/70 flex-shrink-0 mt-0.5" />
                    <span>{prerequisite}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {specialOffer && (
            <div className="bg-primary/10 p-4 rounded-md border border-primary/20">
              <p className="text-sm font-medium text-primary flex items-center gap-2">
                <Award className="h-4 w-4" />
                Special Offer: {specialOffer}
              </p>
            </div>
          )}
        </CardContent>
        
        <CardFooter>
          <Button className="w-full group" asChild>
            <a href={ctaLink} className="flex items-center justify-center">
              {ctaText}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CourseCard; 