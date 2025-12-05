import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const CTA = () => {
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const handleStartLearning = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      alert("Welcome to Outthink Academy! Course enrollment will be available soon. Stay tuned!");
    }, 1000);
  };

  const handleNewsletterSignup = () => {
    const email = prompt("Enter your email to get notified when enrollment opens:");
    if (email && email.includes('@')) {
      alert(`Thank you! We'll notify you at ${email} when enrollment opens.`);
    } else if (email) {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div ref={ctaRef} className="container mx-auto px-6 relative z-10">
        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
          ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to Transform 
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
              Your Career?
            </span>
          </h2>
          
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of successful students who have already transformed their careers with Outthink Academy. 
            Start your journey today with our comprehensive courses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              onClick={handleStartLearning}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black px-12 py-4 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              Start Learning Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg" 
              onClick={handleNewsletterSignup}
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full transition-all duration-300 group"
            >
              <Mail className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Get Notified
            </Button>
          </div>
          
          <p className="text-purple-200 text-sm mb-8">
            30-day money-back guarantee • No hidden fees
          </p>
          
          <div className={`p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 max-w-2xl mx-auto transition-all duration-700 delay-300 ${
            ctaVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <h3 className="text-2xl font-bold mb-4">🎉 Coming Soon!</h3>
            <p className="text-purple-100 mb-4">
              Be the first to know when enrollment opens - exclusive early bird pricing available!
            </p>
            <div className="flex justify-center items-center space-x-4 text-sm text-purple-200">
              <span>✓ Lifetime Access</span>
              <span>✓ Certificate Included</span>
              <span>✓ 24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
