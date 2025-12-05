import { ArrowRight, Play, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWatchDemo = () => {
    alert("Demo video coming soon!");
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] animate-pulse"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-300"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-600"></div>

      {/* Login Button - Top Right */}
      <div className="absolute top-8 right-8 z-20">
        <Button
          onClick={handleLogin}
          variant="outline"
          size="sm"
          className="bg-white/80 backdrop-blur-sm border-purple-200 text-purple-700 hover:bg-purple-50 transition-all duration-300 hover:scale-105"
        >
          <LogIn className="w-4 h-4 mr-2" />
          Login
        </Button>
      </div>

      {/* Main Content */}
      <div ref={heroRef} className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img
              src=" src/Logo.png"
              alt="Outthink Academy"
              className="h-16 w-auto transition-transform duration-700 hover:scale-110"
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6 transition-transform duration-500 hover:scale-105">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
            Transform your future
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Learn. Build.
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-glow">
              Succeed.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Master in-demand skills with expert instructors
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={handleWatchDemo}
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 group"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center">
              <span className="font-semibold text-gray-900">2000+</span>
              <span className="ml-1">students</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-gray-900">4.9/5</span>
              <span className="ml-1">rating</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-gray-900">98%</span>
              <span className="ml-1">completion</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
