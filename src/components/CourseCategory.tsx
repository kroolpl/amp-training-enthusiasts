import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CourseCard, { CourseProps } from "./CourseCard";
import { cn } from "@/lib/utils";

interface CourseCategoryProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  courses: Omit<CourseProps, 'index'>[];
  index: number;
}

const CourseCategory = ({ title, description, icon, courses, index }: CourseCategoryProps) => {
  const categoryRef = useRef(null);
  const isInView = useInView(categoryRef, { once: true, margin: "-100px" });
  
  return (
    <div className="mb-24" ref={categoryRef}>
      <motion.div 
        className="relative mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-sm">
            {icon}
          </div>
          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
        
        <div className="h-px w-full bg-gradient-to-r from-primary/20 via-primary/10 to-transparent mt-6"></div>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, courseIndex) => (
          <CourseCard 
            key={course.title} 
            {...course} 
            index={index + courseIndex * 0.1} 
          />
        ))}
      </div>
      
      {courses.length === 1 && (
        <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-center mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-primary/5 rounded-lg p-6 text-center max-w-md"
          >
            <p className="text-muted-foreground">
              More courses in this category coming soon. Contact us for more information.
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default CourseCategory; 