import { BookOpen, Users, Trophy, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: BookOpen,
    title: "Expert Courses",
    description: "Learn from industry professionals"
  },
  {
    icon: Users,
    title: "Community",
    description: "Connect with fellow learners"
  },
  {
    icon: Trophy,
    title: "Certificates",
    description: "Earn recognized credentials"
  },
  {
    icon: Clock,
    title: "Flexible",
    description: "Learn at your own pace"
  }
];

export const Features = () => {
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div ref={featuresRef} className={`text-center mb-16 transition-all duration-1000 ease-out ${
          featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why choose us?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to succeed
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const { ref, isVisible } = useScrollAnimation();
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                ref={ref}
                className={`text-center p-8 rounded-2xl hover-lift card-hover bg-gradient-to-br from-white to-gray-50 border border-gray-100 transition-all duration-700 ease-out ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-12 scale-95'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:scale-110 hover:rotate-3">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
