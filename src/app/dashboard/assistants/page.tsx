"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, Settings, ToggleLeft, ToggleRight } from "lucide-react";

const AssistantsPage = () => {
  const [assistants, setAssistants] = useState([
    {
      id: 1,
      name: "Tom",
      type: "Voice AI",
      active: true,
      description: "Phone call handler with voice recognition",
    },
    {
      id: 2,
      name: "Mickael",
      type: "Chat AI",
      active: true,
      description: "Customer service chat assistant",
    },
    {
      id: 3,
      name: "John",
      type: "Email AI",
      active: false,
      description: "Email automation and responses",
    },
  ]);

  const toggleAssistant = (id: number) => {
    setAssistants(
      assistants.map((assistant) =>
        assistant.id === id
          ? { ...assistant, active: !assistant.active }
          : assistant
      )
    );
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">My AI Assistants</h1>
        <p className="text-gray-400">Manage and configure your AI assistants</p>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="bg-card border border-white/10">
          <TabsTrigger value="all">All Assistants</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="inactive">Inactive</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assistants.map((assistant) => (
              <AssistantCard
                key={assistant.id}
                assistant={assistant}
                onToggle={() => toggleAssistant(assistant.id)}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="active" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assistants
              .filter((a) => a.active)
              .map((assistant) => (
                <AssistantCard
                  key={assistant.id}
                  assistant={assistant}
                  onToggle={() => toggleAssistant(assistant.id)}
                />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="inactive" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assistants
              .filter((a) => !a.active)
              .map((assistant) => (
                <AssistantCard
                  key={assistant.id}
                  assistant={assistant}
                  onToggle={() => toggleAssistant(assistant.id)}
                />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface AssistantProps {
  assistant: {
    id: number;
    name: string;
    type: string;
    active: boolean;
    description: string;
  };
  onToggle: () => void;
}

const AssistantCard = ({ assistant, onToggle }: AssistantProps) => {
  return (
    <Card
      className={`glass-card ${assistant.active ? "border-[#00F5FF]/50" : ""}`}
    >
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-nova-blue" />
            {assistant.name}
          </CardTitle>
          <CardDescription>{assistant.type}</CardDescription>
        </div>
        <button onClick={onToggle} className="text-gray-400 hover:text-white">
          {assistant.active ? (
            <ToggleRight className="h-6 w-6 text-nova-blue" />
          ) : (
            <ToggleLeft className="h-6 w-6" />
          )}
        </button>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-400">{assistant.description}</p>
        <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
          <div>
            <p className="text-gray-400">Status</p>
            <p
              className={`font-medium ${
                assistant.active ? "text-green-400" : "text-red-400"
              }`}
            >
              {assistant.active ? "Active" : "Inactive"}
            </p>
          </div>
          <div>
            <p className="text-gray-400">Response Time</p>
            <p className="font-medium">1.4s</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">
          <Settings className="h-4 w-4 mr-2" />
          Configure
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AssistantsPage;
