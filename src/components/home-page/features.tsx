import React from "react";
import { Bot, BarChart, Globe, Shield } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="glass-card hover-card-effect p-6 md:p-8">
      <div
        className="h-14 w-14 rounded-xl bg-gradient-to-br from-[#00F5FF] to-[#8B5CF6] flex items-center justify-center mb-6"
        style={{
          boxShadow:
            "0 0 5px rgba(0, 245, 255, 0.5), 0 0 20px rgba(0, 245, 255, 0.3)",
        }}
      >
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>

      <div className="mt-6 relative">
        <span className="text-[#00F5FF] text-sm font-medium group inline-flex items-center">
          Learn more
          <svg
            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
        <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-nova-blue to-nova-magenta group-hover:w-24 transition-all duration-300"></div>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Bot size={28} className="text-white" />,
      title: "Automation",
      description:
        "Streamline workflows and eliminate repetitive tasks with our AI-powered automation engine.",
    },
    {
      icon: <BarChart size={28} className="text-white" />,
      title: "Real-Time Analytics",
      description:
        "Get instant insights with powerful data visualization and predictive analytics.",
    },
    {
      icon: <Globe size={28} className="text-white" />,
      title: "Multilingual AI",
      description:
        "Communicate effectively in 50+ languages with our advanced language processing.",
    },
    {
      icon: <Shield size={28} className="text-white" />,
      title: "GDPR-Compliant Security",
      description:
        "Enterprise-grade security with end-to-end encryption and full GDPR compliance.",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32 px-4 relative">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">AI-Powered</span> Features
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our cutting-edge AI solutions are designed to transform your
            business operations and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
