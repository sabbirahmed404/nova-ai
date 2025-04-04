import React from "react";
import { Button } from "@/components/ui/button";
import { Play, ChevronDown } from "lucide-react";
import AnimatedText from "./animated-text";

const Hero: React.FC = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="container max-w-7xl mx-auto text-center">
        <div className="flex flex-col items-center justify-center space-y-8 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-2">
            Transform Your Business with
            <div className="mt-4">
              <AnimatedText
                text="AI-Powered Automation"
                className="gradient-text font-extrabold"
              />
            </div>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
            NovaAI brings cutting-edge artificial intelligence to automate
            tasks, analyze data in real-time, and unlock insights that drive
            growth and efficiency.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Button className="neon-button text-white font-medium px-8 py-6">
              Get Started
            </Button>

            <Button
              variant="outline"
              className="flex items-center gap-2 border-nova-blue text-white hover:bg-nova-blue/20 px-8 py-6"
            >
              <Play size={16} className="text-nova-blue" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
          onClick={scrollToFeatures}
        >
          <ChevronDown className="h-10 w-10 text-[#00f5ff]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
