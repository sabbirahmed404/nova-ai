import { useState } from "react";
import { cn } from "@/lib/utils";
import { MessageCircle, Phone, Instagram } from "lucide-react";

const AIAssistants = () => {
  const [activeTab, setActiveTab] = useState(0);

  const assistants = [
    {
      name: "Tom",
      role: "Call Center AI",
      description:
        "Tom handles inbound and outbound calls with natural conversation flow and emotional intelligence. Integrates with all major telephony systems.",
      icon: <Phone className="h-6 w-6" />,
      features: [
        "Natural voice synthesis with 98% accuracy",
        "Multi-language support for global operations",
        "Sentiment analysis and customer satisfaction tracking",
        "Seamless call routing and escalation protocols",
      ],
      color: "from-nova-cyan to-blue-500",
    },
    {
      name: "Mickael",
      role: "Customer Support Bot",
      description:
        "Mickael provides 24/7 instant customer support across multiple channels. Self-learning from past interactions to constantly improve.",
      icon: <MessageCircle className="h-6 w-6" />,
      features: [
        "Integrated with chat, email, and SMS platforms",
        "Knowledge base connection for accurate responses",
        "Automated ticket creation and management",
        "Custom workflows based on business rules",
      ],
      color: "from-purple-500 to-nova-magenta",
    },
    {
      name: "John",
      role: "Social Media Assistant",
      description:
        "Coming Soon - John will create engaging social content, respond to comments, and analyze trends to boost your brand's online presence.",
      icon: <Instagram className="h-6 w-6" />,
      features: [
        "Content generation across major platforms",
        "Trend analysis and engagement optimization",
        "Scheduled posting and performance reporting",
        "Brand voice consistency and sentiment monitoring",
      ],
      color: "from-yellow-400 to-orange-500",
      comingSoon: true,
    },
  ];

  return (
    <section
      id="assistants"
      className="py-20 px-4 bg-gradient-to-b from-nova-darkBlue/50 to-[#0D1028]"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-4">
            AI Assistants
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Meet our specialized AI assistants designed to handle specific
            business functions with human-like interaction and exceptional
            efficiency.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {assistants.map((assistant, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={cn(
                "px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2",
                activeTab === index
                  ? `bg-gradient-to-r ${assistant.color} text-white font-medium shadow-lg`
                  : "bg-white/5 text-white/70 hover:bg-white/10"
              )}
            >
              {assistant.icon}
              {assistant.name}
              {assistant.comingSoon && (
                <span className="text-xs bg-white/10 px-2 py-1 rounded-full">
                  Soon
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="glass-card p-8 mt-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-nova-cyan/20 to-nova-magenta/20 flex items-center justify-center overflow-hidden relative">
              <div
                className={cn(
                  "w-40 h-40 rounded-full bg-gradient-to-br absolute animate-pulse-glow",
                  `${assistants[activeTab].color}`
                )}
              ></div>
              <div className="z-10 text-white text-6xl font-bold">
                {assistants[activeTab].name.charAt(0)}
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center mb-4">
                <h3 className="text-2xl font-bold text-white">
                  {assistants[activeTab].name}
                </h3>
                <span className="ml-3 px-3 py-1 rounded-full bg-white/10 text-sm text-white/70">
                  {assistants[activeTab].role}
                </span>
              </div>

              <p className="text-white/70 mb-6">
                {assistants[activeTab].description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {assistants[activeTab].features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-1.5 h-1.5 mt-2 rounded-full bg-nova-cyan mr-2"></div>
                    <p className="text-white/80 text-sm">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistants;
