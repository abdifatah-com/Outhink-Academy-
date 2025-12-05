import { Star, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Full Stack Developer",
    company: "TechCorp",
    image: "https://images.unsplash.com/photo-1494790108755-2616c50b7352?auto=format&fit=crop&w=150&h=150&q=80",
    content: "Outthink Academy transformed my career. Amazing instructors and up-to-date content.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Data Scientist",
    company: "DataPro",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
    content: "Comprehensive course. Landed my dream job 3 months after completing the program.",
    rating: 5
  },
  {
    name: "Emma Davis",
    role: "UX Designer",
    company: "DesignStudio",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
    content: "Exceeded expectations. Hands-on projects and feedback were invaluable.",
    rating: 5
  }
];

export const Testimonials = () => {
  const { ref: testimonialsRef, isVisible: testimonialsVisible } = useScrollAnimation();

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <div ref={testimonialsRef} className={`text-center mb-12 transition-all duration-1000 ${
          testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Student success
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our graduates
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <div 
                key={index}
                ref={ref}
                className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative group cursor-pointer ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Quote className="absolute top-4 right-4 w-6 h-6 text-purple-200" />
                
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                    <p className="text-purple-600 text-sm font-medium">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-600 text-sm italic">"{testimonial.content}"</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
