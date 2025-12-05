import { Star, Clock, Users, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    title: "Full Stack Development",
    description: "React, Node.js, and MongoDB mastery",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&h=300&q=80",
    price: "$199",
    rating: 4.9,
    students: 2340,
    duration: "40h",
    level: "Beginner"
  },
  {
    title: "Data Science",
    description: "Python, ML, and data visualization",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&h=300&q=80",
    price: "$249",
    rating: 4.8,
    students: 1890,
    duration: "35h",
    level: "Intermediate"
  },
  {
    title: "UI/UX Design",
    description: "Figma and design principles",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=500&h=300&q=80",
    price: "$179",
    rating: 4.9,
    students: 3120,
    duration: "25h",
    level: "All levels"
  }
];

export const Courses = () => {
  const { ref: coursesRef, isVisible: coursesVisible } = useScrollAnimation();

  const viewCourseDetails = (courseTitle: string) => {
    alert(`${courseTitle}\n\nCourse preview only. Full catalog coming soon!`);
  };

  const navigate = useNavigate();
  
  const viewAllCourses = () => {
    navigate('/courses');
  };

  return (
    <section id="courses" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div ref={coursesRef} className={`text-center mb-12 transition-all duration-1000 ${
          coursesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured courses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Most popular courses to boost your career
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <div 
                key={index}
                ref={ref}
                className={`bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1 group cursor-pointer ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={course.image}
                    alt={course.title}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-purple-600 text-white px-2 py-1 rounded-md text-xs font-medium">
                    {course.level}
                  </div>
                  <div className="absolute top-3 right-3 bg-black/50 text-white px-2 py-1 rounded-md text-xs">
                    Preview
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                  
                  <div className="flex items-center justify-between mb-4 text-xs">
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-gray-900">{course.rating}</span>
                      <span className="text-gray-500">({course.students})</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Clock className="w-3 h-3 mr-1" />
                      {course.duration}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xl font-bold text-purple-600">{course.price}</div>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Users className="w-3 h-3 mr-1" />
                      {course.students.toLocaleString()}
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => viewCourseDetails(course.title)}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-2 rounded-lg text-sm font-medium transition-all duration-300 group"
                  >
                    <Eye className="mr-2 w-4 h-4" />
                    View details
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-10">
          <Button 
            variant="outline" 
            onClick={viewAllCourses}
            className="border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-2 rounded-lg text-sm hover:scale-105 transition-all duration-300"
          >
            View all courses
          </Button>
        </div>
      </div>
    </section>
  );
};
