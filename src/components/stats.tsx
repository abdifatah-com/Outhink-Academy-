import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { number: "50k+", label: "Students" },
  { number: "200+", label: "Instructors" },
  { number: "500+", label: "Courses" },
  { number: "95%", label: "Success rate" }
];

export const Stats = () => {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  return (
    <section className="py-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <div ref={statsRef} className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center transition-all duration-700 ${
                statsVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-3xl lg:text-4xl font-bold mb-1">
                {stat.number}
              </div>
              <div className="text-purple-100 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
