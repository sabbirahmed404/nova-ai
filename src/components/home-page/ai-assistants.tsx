import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";

interface Assistant {
  id: string;
  name: string;
  role: string;
  description: string;
  capabilities: string[];
  avatar: string;
}

const AIAssistants: React.FC = () => {
  const [activeAssistant, setActiveAssistant] = useState("tom");

  const assistants: Assistant[] = [
    {
      id: "tom",
      name: "Tom",
      role: "Call Center AI",
      description:
        "Tom handles customer inquiries with natural language processing and sentiment analysis, resolving issues without human intervention.",
      capabilities: [
        "Voice Recognition",
        "Sentiment Analysis",
        "Multi-Language Support",
        "24/7 Availability",
      ],
      avatar: "👨‍💼",
    },
    {
      id: "mickael",
      name: "Mickael",
      role: "Customer Support Bot",
      description:
        "Mickael provides instant responses to customer queries through chat and email, with contextual understanding and personalized interactions.",
      capabilities: [
        "Knowledge Base Integration",
        "Smart Escalation",
        "Conversation Memory",
        "Custom Workflows",
      ],
      avatar: "👨‍💻",
    },
    {
      id: "john",
      name: "John",
      role: "Social Media Assistant",
      description:
        "John analyzes social trends and automates content creation and scheduling, while engaging with followers and tracking performance metrics.",
      capabilities: [
        "Content Generation",
        "Trend Analysis",
        "Engagement Automation",
        "Performance Tracking",
      ],
      avatar: "👨‍🚀",
    },
  ];

  return (
    <section id="assistants" className="py-20 md:py-32 px-4 relative">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="gradient-text">AI Assistants</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our specialized AI assistants are designed to handle specific tasks
            and integrate seamlessly with your workflow.
          </p>
        </div>

        <div className="glass rounded-3xl p-6 md:p-10">
          <Tabs
            defaultValue="tom"
            value={activeAssistant}
            onValueChange={setActiveAssistant}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger
                value="tom"
                className="group data-[state=active]:bg-[#8B5CF6]/20 data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-[#8B5CF6] transition-all"
              >
                Tom
              </TabsTrigger>
              <TabsTrigger
                value="mickael"
                className="group data-[state=active]:bg-[#8B5CF6]/20 data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-[#8B5CF6] transition-all"
              >
                Mickael
              </TabsTrigger>
              <TabsTrigger
                value="john"
                className="group data-[state=active]:bg-[#8B5CF6]/20 data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-[#8B5CF6] transition-all"
              >
                John{" "}
                <Badge
                  variant="outline"
                  className="ml-2 bg-[#8B5CF6]/20 text-xs"
                >
                  Soon
                </Badge>
              </TabsTrigger>
            </TabsList>

            {assistants.map((assistant) => (
              <TabsContent
                key={assistant.id}
                value={assistant.id}
                className="animate-fade-in-up"
              >
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div className="order-2 md:order-1">
                    <h3 className="text-2xl font-bold mb-2 gradient-text">
                      {assistant.name}
                    </h3>
                    <h4 className="text-xl text-white mb-4">
                      {assistant.role}
                    </h4>
                    <p className="text-gray-300 mb-6">
                      {assistant.description}
                    </p>

                    <div className="space-y-4">
                      <h5 className="text-md font-semibold text-white">
                        Key Capabilities:
                      </h5>
                      <div className="flex flex-wrap gap-3">
                        {assistant.capabilities.map((capability, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 rounded-full bg-[#8B5CF6]/20 text-white text-sm"
                          >
                            {capability}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="order-1 md:order-2 flex justify-center">
                    <div className="relative">
                      <div className="w-48 h-48 flex items-center justify-center rounded-full bg-gradient-to-br from-[#00F5FF] via-[#8B5CF6] to-[#FF00E5] p-1">
                        <div className="w-full h-full rounded-full bg-[#0A0F24] flex items-center justify-center">
                          <span className="text-8xl animate-float">
                            {assistant.avatar}
                          </span>
                        </div>
                      </div>
                      <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-[#00F5FF] to-[#FF00E5] opacity-20 blur-xl"></div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      <Link href={"/dashboard/assistants"} className="flex justify-center">
        <Button className="neon-button">Explore More Agent</Button>
      </Link>
    </section>
  );
};

export default AIAssistants;
