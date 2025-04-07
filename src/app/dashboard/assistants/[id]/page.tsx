"use client";

import React, { useState, useRef, useEffect, use } from "react";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

interface PageParams {
  id: string; // Define the type of the dynamic parameter
}

const PromptPage = ({ params }: { params: Promise<PageParams> }) => {
  const { id } = use(params);
  console.log(id);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your AI assistant. How can I help you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    // Add user message to the chat
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate AI response delay (this will be replaced with the actual API call later)
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getMockResponse(inputValue),
        sender: "ai",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  // Mock response function (will be replaced with actual API call)
  const getMockResponse = (prompt: string): string => {
    if (
      prompt.toLowerCase().includes("hello") ||
      prompt.toLowerCase().includes("hi")
    ) {
      return "Hello! How can I assist you today?";
    } else if (prompt.toLowerCase().includes("help")) {
      return "I'm here to help! You can ask me questions about your business, analytics, or how to optimize your workflows.";
    } else if (prompt.toLowerCase().includes("thank")) {
      return "You're welcome! Is there anything else I can help you with?";
    } else {
      return (
        "I understand you're asking about \"" +
        prompt +
        "\". When the DeepSeek API is integrated, I'll provide a more detailed and relevant response to your query."
      );
    }
  };

  return (
    <div className="h-[calc(100vh-120px)] flex flex-col space-y-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold">AI Assistant</h1>
          <p className="text-gray-400">Chat with your personal AI assistant</p>
        </div>
      </div>

      <Card className="flex-1 glass-card overflow-hidden scroll-auto flex flex-col">
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4 pb-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-4 ${
                    message.sender === "user"
                      ? "bg-nova-blue/20 text-white"
                      : "bg-white/5 border border-white/10"
                  }`}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    {message.sender === "ai" && (
                      <Avatar className="h-6 w-6 bg-nova-purple">
                        <span className="text-xs">AI</span>
                      </Avatar>
                    )}
                    <span className="text-xs text-gray-400">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  <div className="whitespace-pre-wrap">{message.content}</div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        <div className="p-4 border-t border-white/10">
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <Textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message here..."
              className="flex-1 resize-none"
              rows={1}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
            />
            <Button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="neon-button"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </form>
          <p className="text-xs text-gray-400 mt-2">
            Press Enter to send, Shift+Enter for a new line
          </p>
        </div>
      </Card>
    </div>
  );
};

export default PromptPage;
