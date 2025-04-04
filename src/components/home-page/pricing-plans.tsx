import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingPlans: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Essentials Pack",
      description: "Perfect for small businesses starting with AI",
      monthlyPrice: 49,
      yearlyPrice: 470,
      features: [
        "Basic AI automation tools",
        "Real-time analytics dashboard",
        "24/7 AI assistant support",
        "5 automation workflows",
        "1,000 AI interactions/month",
      ],
      highlight: false,
    },
    {
      name: "Pro Pack",
      description: "Advanced features for growing businesses",
      monthlyPrice: 99,
      yearlyPrice: 950,
      features: [
        "All Essentials features",
        "Advanced AI automations",
        "Custom AI training",
        "20 automation workflows",
        "10,000 AI interactions/month",
        "Priority support",
      ],
      highlight: true,
    },
    {
      name: "Enterprise AI Suite",
      description: "Full AI ecosystem for large organizations",
      monthlyPrice: 299,
      yearlyPrice: 2870,
      features: [
        "All Pro features",
        "Dedicated AI environment",
        "Custom AI model development",
        "Unlimited automation workflows",
        "Unlimited AI interactions",
        "Dedicated account manager",
        "24/7 premium support",
      ],
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 relative">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Flexible <span className="gradient-text">Pricing Plans</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan to supercharge your business with our
            cutting-edge AI solutions.
          </p>

          {/* Monthly/Yearly Toggle */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <span
              className={`text-sm font-medium ${
                !isYearly ? "text-white" : "text-gray-400"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                isYearly ? "bg-[#00F5FF]" : "bg-gray-600"
              }`}
              aria-label={
                isYearly
                  ? "Switch to monthly billing"
                  : "Switch to yearly billing"
              }
            >
              <span
                className={`bg-white w-4 h-4 rounded-full transform transition-transform duration-300 ${
                  isYearly ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span
              className={`text-sm font-medium flex items-center gap-2 ${
                isYearly ? "text-white" : "text-gray-400"
              }`}
            >
              Yearly
              <span className="bg-[#00F5FF]/20 text-[#00F5FF] text-xs px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`glass-card border-white/10 overflow-hidden ${
                plan.highlight
                  ? "border-[#00F5FF] relative shadow-[#00F5FF]"
                  : ""
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6]"></div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-400 ml-1">
                    {isYearly ? "/year" : "/month"}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-[#00F5FF] shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${
                    plan.highlight
                      ? "neon-button"
                      : "border border-[#00F5FF] text-white hover:bg-[#00F5FF]/20"
                  }`}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
