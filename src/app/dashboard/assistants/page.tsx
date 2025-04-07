"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Bot } from "lucide-react";

const AssistantsPage = () => {
  const assistants = [
    {
      id: 1,
      name: "Tom",
      type: "Voice AI",
      description: "Phone call handler with voice recognition",
    },
    {
      id: 2,
      name: "Mickael",
      type: "Chat AI",
      description: "Customer service chat assistant",
    },
    {
      id: 3,
      name: "John",
      type: "Email AI",
      description: "Email automation and responses",
    },
    {
      id: 4,
      name: "Sophia",
      type: "Social Media AI",
      description: "Manages social media posts and engagement",
    },
    {
      id: 5,
      name: "Oliver",
      type: "Accounting AI",
      description: "Handles financial records and tax calculations",
    },
    {
      id: 6,
      name: "Emma",
      type: "Marketing AI",
      description: "Creates and manages marketing campaigns",
    },
    {
      id: 7,
      name: "Liam",
      type: "Event Planning AI",
      description: "Organizes and schedules events",
    },
    {
      id: 8,
      name: "Ava",
      type: "Customer Relationship AI",
      description: "Manages customer interactions and feedback",
    },
    {
      id: 9,
      name: "Noah",
      type: "Financing AI",
      description: "Provides loan and investment advice",
    },
    {
      id: 10,
      name: "Isabella",
      type: "CSR AI",
      description: "Manages corporate social responsibility initiatives",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">My AI Assistants</h1>
        <p className="text-gray-400">Explore and interact with your AI assistants</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assistants.map((assistant) => (
          <AssistantCard key={assistant.id} assistant={assistant} />
        ))}
      </div>
    </div>
  );
};

interface AssistantProps {
  assistant: {
    id: number;
    name: string;
    type: string;
    description: string;
  };
}

const AssistantCard = ({ assistant }: AssistantProps) => {
  return (
    <Card className="glass-card">
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-nova-blue" />
            {assistant.name}
          </CardTitle>
          <CardDescription>{assistant.type}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-400">{assistant.description}</p>
        <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
          <div>
            <p className="text-gray-400">Response Time</p>
            <p className="font-medium">1.4s</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        {/* Explore Button with Link */}
        <Link href={`/`} passHref>
          <Button variant="outline" size="sm" className="w-full border border-[#00F5FF] text-white hover:bg-[#00F5FF]/20">
            Explore
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default AssistantsPage;