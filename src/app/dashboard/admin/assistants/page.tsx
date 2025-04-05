"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, MessageSquare, Mail, Save, RefreshCcw } from "lucide-react";
import { toast } from "sonner";

// Mock data for assistants
const assistants = [
  {
    id: "tom",
    name: "Tom",
    type: "Voice Assistant",
    icon: Phone,
    description: "Handles phone calls and voice interactions",
    active: true,
    version: "1.2.3",
    responseTime: "1.2s",
    uptime: "99.94%",
    defaultPrompt:
      "You are Tom, a friendly and professional voice assistant designed to handle customer inquiries efficiently...",
  },
  {
    id: "mickael",
    name: "Mickael",
    type: "Chat Assistant",
    icon: MessageSquare,
    description: "Manages website chat and messaging",
    active: true,
    version: "2.0.1",
    responseTime: "0.8s",
    uptime: "99.98%",
    defaultPrompt:
      "You are Mickael, a helpful chat assistant focused on providing quick and accurate responses...",
  },
  {
    id: "john",
    name: "John",
    type: "Email Assistant",
    icon: Mail,
    description: "Processes email communications",
    active: true,
    version: "1.5.7",
    responseTime: "2.5s",
    uptime: "99.90%",
    defaultPrompt:
      "You are John, a professional email assistant capable of understanding and responding to various email inquiries...",
  },
];

const AssistantConfigurationsPage: React.FC = () => {
  const [activeAssistants, setActiveAssistants] = useState(assistants);
  const [selectedAssistant, setSelectedAssistant] = useState(assistants[0]);
  const [isEditingPrompt, setIsEditingPrompt] = useState(false);
  const [prompt, setPrompt] = useState(assistants[0].defaultPrompt);
  const [temperature, setTemperature] = useState(0.7);
  const [maxTokens, setMaxTokens] = useState(2048);

  const handleAssistantToggle = (id: string) => {
    setActiveAssistants(
      activeAssistants.map((assistant) =>
        assistant.id === id
          ? { ...assistant, active: !assistant.active }
          : assistant
      )
    );

    toast(
      `${id.charAt(0).toUpperCase() + id.slice(1)} is now ${
        activeAssistants.find((a) => a.id === id)?.active
          ? "disabled"
          : "enabled"
      }`,
      {
        description: `Assistant status has been updated.`,
      }
    );
  };

  const handleSavePrompt = () => {
    setIsEditingPrompt(false);
    toast("Prompt updated", {
      description: `The prompt for ${selectedAssistant.name} has been updated successfully.`,
    });
  };

  const handleTabChange = (tabValue: string) => {
    const assistant = assistants.find((a) => a.id === tabValue);
    if (assistant) {
      setSelectedAssistant(assistant);
      setPrompt(assistant.defaultPrompt);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Assistant Configurations</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {assistants.map((assistant) => {
          const AssistantIcon = assistant.icon;
          const isActive = activeAssistants.find(
            (a) => a.id === assistant.id
          )?.active;

          return (
            <Card key={assistant.id} className={isActive ? "" : "opacity-70"}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div
                      className={`p-2 rounded-full ${
                        assistant.id === "tom"
                          ? "bg-blue-500/20"
                          : assistant.id === "mickael"
                          ? "bg-green-500/20"
                          : "bg-yellow-500/20"
                      }`}
                    >
                      <AssistantIcon
                        className={`size-6 ${
                          assistant.id === "tom"
                            ? "text-blue-500"
                            : assistant.id === "mickael"
                            ? "text-green-500"
                            : "text-yellow-500"
                        }`}
                      />
                    </div>
                    <CardTitle>{assistant.name}</CardTitle>
                  </div>
                  <Switch
                    checked={isActive}
                    onCheckedChange={() => handleAssistantToggle(assistant.id)}
                  />
                </div>
                <CardDescription>
                  {assistant.type} - {assistant.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Version:</span>
                    <span>{assistant.version}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Response Time:</span>
                    <span>{assistant.responseTime}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Uptime:</span>
                    <span>{assistant.uptime}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full"
                  disabled={!isActive}
                >
                  Configure
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Assistant Settings</CardTitle>
          <CardDescription>
            Configure behavior and responses for each assistant
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="tom" onValueChange={handleTabChange}>
            <TabsList className="mb-4">
              {assistants.map((assistant) => (
                <TabsTrigger
                  key={assistant.id}
                  value={assistant.id}
                  disabled={
                    !activeAssistants.find((a) => a.id === assistant.id)?.active
                  }
                >
                  {assistant.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {assistants.map((assistant) => (
              <TabsContent key={assistant.id} value={assistant.id}>
                <div className="space-y-6">
                  {/* General Settings */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      General Settings
                    </h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="assistant-name">Assistant Name</Label>
                          <Input
                            id="assistant-name"
                            defaultValue={assistant.name}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="model-version">Model Version</Label>
                          <Select defaultValue="gpt-4">
                            <SelectTrigger>
                              <SelectValue placeholder="Select model" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>OpenAI Models</SelectLabel>
                                <SelectItem value="gpt-4">GPT-4</SelectItem>
                                <SelectItem value="gpt-4-turbo">
                                  GPT-4 Turbo
                                </SelectItem>
                                <SelectItem value="gpt-3.5-turbo">
                                  GPT-3.5 Turbo
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <Label>Enable Voice Recognition</Label>
                          <Switch defaultChecked={assistant.id === "tom"} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <Label>Fallback to Human Support</Label>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Language Model Settings */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Language Model Settings
                    </h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label htmlFor="temperature">Temperature</Label>
                          <span className="text-sm">{temperature}</span>
                        </div>
                        <Slider
                          id="temperature"
                          min={0}
                          max={1}
                          step={0.1}
                          value={[temperature]}
                          onValueChange={(value) => setTemperature(value[0])}
                        />
                        <p className="text-xs text-gray-400">
                          Controls randomness: Lower values are more
                          deterministic, higher values more creative
                        </p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label htmlFor="max-tokens">Max Tokens</Label>
                          <span className="text-sm">{maxTokens}</span>
                        </div>
                        <Slider
                          id="max-tokens"
                          min={256}
                          max={4096}
                          step={256}
                          value={[maxTokens]}
                          onValueChange={(value) => setMaxTokens(value[0])}
                        />
                        <p className="text-xs text-gray-400">
                          Maximum number of tokens to generate in the response
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* System Prompt */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-medium">System Prompt</h3>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setIsEditingPrompt(!isEditingPrompt)}
                        >
                          {isEditingPrompt ? "Cancel" : "Edit Prompt"}
                        </Button>

                        {isEditingPrompt && (
                          <Button
                            variant="default"
                            size="sm"
                            onClick={handleSavePrompt}
                            className="flex items-center gap-1"
                          >
                            <Save size={16} />
                            Save
                          </Button>
                        )}
                      </div>
                    </div>

                    {isEditingPrompt ? (
                      <div className="space-y-2">
                        <Textarea
                          value={prompt}
                          onChange={(e) => setPrompt(e.target.value)}
                          rows={8}
                          className="font-mono text-sm"
                        />
                        <div className="flex justify-end">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-1"
                            onClick={() =>
                              setPrompt(selectedAssistant.defaultPrompt)
                            }
                          >
                            <RefreshCcw size={16} />
                            Reset to Default
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="p-4 rounded-md bg-gray-800 border font-mono text-sm h-48 overflow-auto">
                        {prompt}
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AssistantConfigurationsPage;
