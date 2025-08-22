import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import dashboardScreenshot from "@/assets/dashboard-screenshot.png";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Collect faster.
            <br />
            <span className="text-accent">Think less.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            InstaCredit automates your invoice collection and payment reminders, 
            so you can focus on growing your business instead of chasing payments.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => window.open('https://youtu.be/kRm-vvUW9qs', '_blank')}
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-3xl"></div>
            <img 
              src={dashboardScreenshot} 
              alt="InstaCredit Dashboard Interface" 
              className="relative rounded-2xl shadow-elegant max-w-full h-auto mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;