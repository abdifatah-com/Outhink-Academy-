import { Star, Clock, Users, Eye, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";

const allCourses = [
  {
    id: 1,
    title: "Full Stack Development",
    description: "Complete React, Node.js, and MongoDB mastery with real projects",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&h=300&q=80",
    price: "$199",
    originalPrice: "$299",
    rating: 4.9,
    students: 2340,
    duration: "40h",
    level: "Beginner",
    lessons: 45,
    certificate: true
  },
  {
    id: 2,
    title: "Data Science",
    description: "Python, Machine Learning, and data visualization from scratch",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&h=300&q=80",
    price: "$249",
    originalPrice: "$349",
    rating: 4.8,
    students: 1890,
    duration: "35h",
    level: "Intermediate",
    lessons: 38,
    certificate: true
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Figma, design principles, and user experience fundamentals",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=500&h=300&q=80",
    price: "$179",
    originalPrice: "$249",
    rating: 4.9,
    students: 3120,
    duration: "25h",
    level: "All levels",
    lessons: 32,
    certificate: true
  },
  {
    id: 4,
    title: "Digital Marketing",
    description: "SEO, social media, and online advertising strategies",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&h=300&q=80",
    price: "$159",
    originalPrice: "$229",
    rating: 4.7,
    students: 1654,
    duration: "28h",
    level: "Beginner",
    lessons: 35,
    certificate: true
  },
  {
    id: 5,
    title: "Mobile App Development",
    description: "React Native and Flutter for iOS and Android apps",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=500&h=300&q=80",
    price: "$279",
    originalPrice: "$379",
    rating: 4.8,
    students: 987,
    duration: "42h",
    level: "Advanced",
    lessons: 48,
    certificate: true
  },
  {
    id: 6,
    title: "Cybersecurity Fundamentals",
    description: "Network security, ethical hacking, and threat analysis",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=500&h=300&q=80",
    price: "$229",
    originalPrice: "$319",
    rating: 4.6,
    students: 876,
    duration: "30h",
    level: "Intermediate",
    lessons: 40,
    certificate: true
  }
];

const CoursesPage = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const navigate = useNavigate();

  const handleEnroll = (courseId: number, courseTitle: string) => {
    alert(`Enrolling in ${courseTitle}!\n\nRedirecting to payment...`);
  };

  const viewCourseDetails = (courseTitle: string) => {
    alert(`${courseTitle}\n\nDetailed course preview coming soon!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-6">
          <div ref={headerRef} className={`text-center transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              All Courses
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Choose from our complete catalog of courses and start your learning journey today
            </p>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="container mx-auto px-6 py-6">
        <Button 
          variant="outline" 
          onClick={() => navigate('/')}
          className="mb-6"
        >
          ← Back to Home
        </Button>
      </div>

      {/* Courses Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCourses.map((course, index) => {
              const { ref, isVisible } = useScrollAnimation();
              return (
                <div 
                  key={course.id}
                  ref={ref}
                  className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {course.level}
                    </div>
                    <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-md text-xs">
                      {Math.round(((parseFloat(course.originalPrice.slice(1)) - parseFloat(course.price.slice(1))) / parseFloat(course.originalPrice.slice(1))) * 100)}% OFF
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                    
                    <div className="flex items-center justify-between mb-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium text-gray-900">{course.rating}</span>
                        <span className="text-gray-500">({course.students})</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {course.duration}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="text-gray-500 text-sm">
                        {course.lessons} lessons • Certificate included
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Users className="w-4 h-4 mr-1" />
                        {course.students.toLocaleString()}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-purple-600">{course.price}</span>
                        <span className="text-lg text-gray-400 line-through">{course.originalPrice}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button 
                        onClick={() => viewCourseDetails(course.title)}
                        variant="outline"
                        className="flex-1 border-purple-600 text-purple-600 hover:bg-purple-50"
                      >
                        <Eye className="mr-2 w-4 h-4" />
                        Preview
                      </Button>
                      <Button 
                        onClick={() => handleEnroll(course.id, course.title)}
                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                      >
                        <ShoppingCart className="mr-2 w-4 h-4" />
                        Enroll Now
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;