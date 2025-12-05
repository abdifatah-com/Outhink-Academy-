
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Courses } from "@/components/Courses";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Hero />
      <Features />
      <Stats />
      <Courses />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
