import React, { useState } from "react";
import { Check, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TechStack: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const technologies = [
    {
      title: "GPT-4o Integration",
      description:
        "Access the most advanced language model with enhanced reasoning capabilities and contextual understanding.",
      icon: "🧠",
    },
    {
      title: "Cloud-Based SaaS",
      description:
        "Scalable infrastructure that grows with your business, ensuring high availability and performance.",
      icon: "☁️",
    },
    {
      title: "End-to-End Encryption",
      description:
        "Enterprise-grade security protocols protecting your data at rest and in transit.",
      icon: "🔒",
    },
    {
      title: "Real-time Processing",
      description:
        "Instant data analysis and response generation for time-sensitive applications.",
      icon: "⚡",
    },
  ];

  const comparisonData = [
    {
      feature: "Response Time",
      competitors: "5-10 seconds",
      novaai: "<1 second",
    },
    {
      feature: "Contextual Memory",
      competitors: "Limited",
      novaai: "Extensive",
    },
    { feature: "Languages Supported", competitors: "10-20", novaai: "50+" },
    {
      feature: "Custom Training",
      competitors: <X className="h-5 w-5 text-red-500 mx-auto" />,
      novaai: <Check className="h-5 w-5 text-green-500 mx-auto" />,
    },
    { feature: "API Integration", competitors: "Basic", novaai: "Advanced" },
    {
      feature: "Update Frequency",
      competitors: "Quarterly",
      novaai: "Monthly",
    },
  ];

  return (
    <section id="technology" className="py-20 md:py-32 px-4 relative">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Technology Stack</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Built on cutting-edge AI research and enterprise-grade
            infrastructure for unparalleled performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`glass-card p-6 cursor-pointer transition-all duration-300 ${
                expandedCard === index ? "scale-105 shadow-neon-glow" : ""
              }`}
              onClick={() => handleCardClick(index)}
            >
              <div className="text-4xl mb-4">{tech.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
              <p
                className={`text-gray-300 text-sm transition-all duration-300 ${
                  expandedCard === index ? "opacity-100" : "opacity-80"
                }`}
              >
                {tech.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tech FAQ Accordion */}
        <div className="glass rounded-2xl p-6 md:p-8 max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Technology FAQ
          </h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="item-1"
              className="border-b border-nova-purple/30"
            >
              <AccordionTrigger>
                How does NovaAI's technology compare to other AI solutions?
              </AccordionTrigger>
              <AccordionContent>
                NovaAI leverages the latest GPT-4o model with custom fine-tuning
                for specific business domains, resulting in more accurate and
                contextually relevant responses compared to generic AI
                solutions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border-b border-nova-purple/30"
            >
              <AccordionTrigger>
                Is my data secure with NovaAI?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely. We implement end-to-end encryption, strict access
                controls, and GDPR-compliant practices. Your data is never used
                to train our models without explicit permission.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="border-b border-nova-purple/30"
            >
              <AccordionTrigger>
                Can NovaAI integrate with our existing systems?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we offer comprehensive API documentation and pre-built
                connectors for popular business platforms including Salesforce,
                Microsoft Teams, Slack, and custom systems through our REST API.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Comparison Table */}
        <div className="overflow-hidden glass rounded-2xl">
          <div className="py-6 text-center">
            <h3 className="text-2xl font-bold">NovaAI vs. Competitors</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-nova-purple/20">
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-center">Competitors</th>
                  <th className="py-4 px-6 text-center bg-gradient-to-r from-nova-blue/20 to-nova-purple/20">
                    NovaAI
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-t border-white/10">
                    <td className="py-4 px-6 font-medium">{row.feature}</td>
                    <td className="py-4 px-6 text-center text-gray-400">
                      {row.competitors}
                    </td>
                    <td className="py-4 px-6 text-center bg-gradient-to-r from-nova-blue/10 to-nova-purple/10 text-white font-medium">
                      {row.novaai}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
