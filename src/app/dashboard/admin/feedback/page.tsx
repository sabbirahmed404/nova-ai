"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Search, Star, MessageCircle, BarChart3, Send, CheckCircle2, XCircle, Filter } from "lucide-react";
import { Label } from "@/components/ui/label";
import { toast } from 'sonner';

// Mock feedback data
const feedbackData = [
  { 
    id: 1, 
    user: "Sophie Bernard", 
    email: "sophie@example.com", 
    rating: 5, 
    source: "TrustPilot", 
    date: "2023-04-01", 
    content: "The AI assistant is incredibly helpful and responsive. It's like having a real person helping me 24/7!",
    responded: true
  },
  { 
    id: 2, 
    user: "Thomas Roux", 
    email: "thomas@example.com", 
    rating: 4, 
    source: "Google Reviews", 
    date: "2023-03-28", 
    content: "Very satisfied with the service. The assistant understood my needs quickly and provided relevant solutions.",
    responded: false
  },
  { 
    id: 3, 
    user: "Marie Lambert", 
    email: "marie@example.com", 
    rating: 2, 
    source: "In-App", 
    date: "2023-03-25", 
    content: "The assistant doesn't understand complex questions and keeps giving me irrelevant answers.",
    responded: false
  },
  { 
    id: 4, 
    user: "Jean Dupont", 
    email: "jean@example.com", 
    rating: 3, 
    source: "Email", 
    date: "2023-03-22", 
    content: "Decent service but sometimes slow to respond. Could use some improvements in understanding French queries.",
    responded: true
  },
  { 
    id: 5, 
    user: "Pierre Martin", 
    email: "pierre@example.com", 
    rating: 5, 
    source: "TrustPilot", 
    date: "2023-03-20", 
    content: "Exceptional service! The AI assistant has helped me save so much time with customer inquiries.",
    responded: true
  }
];

// Mock support requests
const supportRequests = [
  {
    id: 101,
    user: "Sophie Bernard",
    email: "sophie@example.com",
    subject: "Billing Issue with Pro Plan",
    status: "open",
    priority: "high",
    date: "2023-04-02",
    messages: [
      {
        sender: "user",
        content: "I was charged twice for my Pro plan this month. Could you please check and refund the extra charge?",
        timestamp: "2023-04-02 14:32"
      }
    ]
  },
  {
    id: 102,
    user: "Thomas Roux",
    email: "thomas@example.com",
    subject: "Assistant Not Responding",
    status: "in-progress",
    priority: "medium",
    date: "2023-04-01",
    messages: [
      {
        sender: "user",
        content: "My Tom assistant isn't responding to calls properly since yesterday. Is there an outage?",
        timestamp: "2023-04-01 09:15"
      },
      {
        sender: "admin",
        content: "I'm checking on this issue right now. Can you tell me which region you're located in?",
        timestamp: "2023-04-01 10:22"
      },
      {
        sender: "user",
        content: "I'm in Paris, France.",
        timestamp: "2023-04-01 10:45"
      }
    ]
  },
  {
    id: 103,
    user: "Marie Lambert",
    email: "marie@example.com",
    subject: "Feature Request",
    status: "closed",
    priority: "low",
    date: "2023-03-29",
    messages: [
      {
        sender: "user",
        content: "Would it be possible to add a feature that allows scheduling of responses?",
        timestamp: "2023-03-29 16:04"
      },
      {
        sender: "admin",
        content: "Thank you for your suggestion! We've added this to our feature request list and will consider it for a future update.",
        timestamp: "2023-03-30 11:17"
      },
      {
        sender: "user",
        content: "Great, thank you for considering it!",
        timestamp: "2023-03-30 14:22"
      },
      {
        sender: "admin",
        content: "You're welcome! We'll mark this as closed for now, but feel free to contact us if you have any other suggestions or questions.",
        timestamp: "2023-03-30 15:01"
      }
    ]
  }
];

const FeedbackSupportPage: React.FC = () => {
  const [activeView, setActiveView] = useState("all");
  const [selectedRequest, setSelectedRequest] = useState(supportRequests[0]);
  const [replyMessage, setReplyMessage] = useState("");
  const [selectedFeedback, setSelectedFeedback] = useState<number | null>(null);
  
  const handleReplySubmit = () => {
    if (!replyMessage.trim()) return;
    
    toast("Reply sent", {
      description: "Your response has been sent to the customer."
    });
    
    setReplyMessage("");
  };

  const handleFeedbackAction = (id: number) => {
    setSelectedFeedback(selectedFeedback === id ? null : id);
  };

  const handleFeedbackReply = () => {
    toast("Response sent", {
      description: "Your response to the feedback has been sent."
    });
    
    setSelectedFeedback(null);
  };
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'open':
        return <Badge className="bg-blue-500">Open</Badge>;
      case 'in-progress':
        return <Badge className="bg-yellow-500">In Progress</Badge>;
      case 'closed':
        return <Badge variant="outline">Closed</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge variant="destructive">High</Badge>;
      case 'medium':
        return <Badge className="bg-yellow-500">Medium</Badge>;
      case 'low':
        return <Badge variant="outline" className="border-green-500 text-green-500">Low</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Feedback & Support</h1>
      </div>
      
      <Tabs defaultValue="support">
        <TabsList className="mb-4">
          <TabsTrigger value="support">Support Requests</TabsTrigger>
          <TabsTrigger value="feedback">User Feedback</TabsTrigger>
          <TabsTrigger value="settings">Feedback Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="support">
          <div className="grid grid-cols-3 gap-6">
            {/* Support Tickets List */}
            <Card className="col-span-1">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center mb-2">
                  <CardTitle>Support Tickets</CardTitle>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Filter size={14} />
                    Filter
                  </Button>
                </div>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search tickets..." className="pl-8" />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex border-b px-4 py-2 text-sm">
                  <button 
                    className={`px-2 py-1 mr-2 rounded-md ${activeView === 'all' ? 'bg-gray-800' : ''}`}
                    onClick={() => setActiveView('all')}
                  >
                    All
                  </button>
                  <button 
                    className={`px-2 py-1 mr-2 rounded-md ${activeView === 'open' ? 'bg-gray-800' : ''}`}
                    onClick={() => setActiveView('open')}
                  >
                    Open
                  </button>
                  <button 
                    className={`px-2 py-1 rounded-md ${activeView === 'closed' ? 'bg-gray-800' : ''}`}
                    onClick={() => setActiveView('closed')}
                  >
                    Closed
                  </button>
                </div>
                <div className="max-h-[calc(100vh-24rem)] overflow-y-auto">
                  {supportRequests.filter(req => 
                    activeView === 'all' || req.status === activeView
                  ).map(request => (
                    <div 
                      key={request.id}
                      className={`flex flex-col p-4 border-b cursor-pointer hover:bg-gray-800 ${selectedRequest.id === request.id ? 'bg-gray-800' : ''}`}
                      onClick={() => setSelectedRequest(request)}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-medium">{request.subject}</h4>
                        {getStatusBadge(request.status)}
                      </div>
                      <div className="flex justify-between items-center text-sm text-gray-400">
                        <span>{request.user}</span>
                        <span>{request.date}</span>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-gray-500">#{request.id}</span>
                        {getPriorityBadge(request.priority)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Support Ticket Details */}
            <Card className="col-span-2">
              {selectedRequest ? (
                <>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{selectedRequest.subject}</CardTitle>
                        <CardDescription>
                          Ticket #{selectedRequest.id} · {selectedRequest.user} · {selectedRequest.date}
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        {getStatusBadge(selectedRequest.status)}
                        {getPriorityBadge(selectedRequest.priority)}
                      </div>
                    </div>
                    <div className="flex gap-2 pt-3">
                      <Select defaultValue={selectedRequest.status}>
                        <SelectTrigger className="w-[140px]">
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="open">Open</SelectItem>
                          <SelectItem value="in-progress">In Progress</SelectItem>
                          <SelectItem value="closed">Closed</SelectItem>
                        </SelectContent>
                      </Select>
                      
                      <Select defaultValue={selectedRequest.priority}>
                        <SelectTrigger className="w-[140px]">
                          <SelectValue placeholder="Priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="low">Low</SelectItem>
                        </SelectContent>
                      </Select>
                      
                      <Button variant="outline" className="ml-auto">Assign</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 max-h-[calc(100vh-32rem)] overflow-y-auto">
                      {selectedRequest.messages.map((message, index) => (
                        <div 
                          key={index}
                          className={`flex gap-3 ${message.sender === 'admin' ? 'justify-end' : ''}`}
                        >
                          {message.sender === 'user' && (
                            <Avatar className="h-8 w-8">
                              <AvatarFallback>{selectedRequest.user.charAt(0)}</AvatarFallback>
                            </Avatar>
                          )}
                          <div 
                            className={`max-w-[70%] rounded-lg p-3 ${
                              message.sender === 'admin' 
                                ? 'bg-blue-500 text-white' 
                                : 'bg-gray-800'
                            }`}
                          >
                            <div className="text-sm">{message.content}</div>
                            <div className="text-xs opacity-70 mt-1 text-right">{message.timestamp}</div>
                          </div>
                          {message.sender === 'admin' && (
                            <Avatar className="h-8 w-8">
                              <AvatarFallback>A</AvatarFallback>
                            </Avatar>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="w-full space-y-2">
                      <Textarea 
                        placeholder="Type your reply..." 
                        value={replyMessage}
                        onChange={(e) => setReplyMessage(e.target.value)}
                        className="min-h-[100px]"
                      />
                      <div className="flex justify-end gap-2">
                        <Button variant="outline">Save Draft</Button>
                        <Button 
                          className="flex items-center gap-2"
                          onClick={handleReplySubmit}
                          disabled={!replyMessage.trim()}
                        >
                          <Send size={16} />
                          Send Reply
                        </Button>
                      </div>
                    </div>
                  </CardFooter>
                </>
              ) : (
                <CardContent className="flex items-center justify-center min-h-[400px]">
                  <p className="text-muted-foreground">Select a ticket to view details</p>
                </CardContent>
              )}
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="feedback">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Customer Feedback</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Filter size={14} />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <BarChart3 size={14} />
                    Analytics
                  </Button>
                </div>
              </div>
              <div className="relative mt-2">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search feedback..." className="pl-8" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {feedbackData.map((feedback) => (
                  <Card key={feedback.id} className="overflow-hidden">
                    <CardHeader className="p-4 pb-0">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback>{feedback.user.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{feedback.user}</div>
                            <div className="text-sm text-gray-400">{feedback.email}</div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                size={16} 
                                className={i < feedback.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-600"} 
                              />
                            ))}
                          </div>
                          <Badge variant="outline">{feedback.source}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-sm mt-2">{feedback.content}</p>
                      <div className="flex justify-between items-center mt-3 text-xs text-gray-400">
                        <span>{feedback.date}</span>
                        {feedback.responded ? (
                          <Badge variant="outline" className="border-green-500 text-green-500 text-xs">
                            <CheckCircle2 size={12} className="mr-1" />
                            Responded
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="border-orange-500 text-orange-500 text-xs">
                            <XCircle size={12} className="mr-1" />
                            Needs Response
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="p-3 pt-0 flex justify-end gap-2">
                      <Button variant="ghost" size="sm" onClick={() => handleFeedbackAction(feedback.id)}>
                        <MessageCircle size={16} className="mr-1" />
                        {feedback.responded ? "View Response" : "Respond"}
                      </Button>
                    </CardFooter>
                    
                    {selectedFeedback === feedback.id && !feedback.responded && (
                      <div className="p-4 pt-0">
                        <div className="border-t pt-3 space-y-2">
                          <Textarea 
                            placeholder="Type your response to this feedback..." 
                            rows={3}
                          />
                          <div className="flex justify-end gap-2">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              onClick={() => setSelectedFeedback(null)}
                            >
                              Cancel
                            </Button>
                            <Button 
                              size="sm" 
                              onClick={handleFeedbackReply}
                            >
                              Send Response
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Feedback Collection Settings</CardTitle>
              <CardDescription>
                Configure how feedback is collected and processed across your platform
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Collection Sources</h3>
                <div className="grid gap-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="font-medium">In-App Feedback Form</div>
                      <div className="text-sm text-muted-foreground">
                        Allow users to submit feedback directly within your application
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="font-medium">Post-Call Survey</div>
                      <div className="text-sm text-muted-foreground">
                        Prompt users to rate their experience after each call with Tom
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="font-medium">Post-Chat Survey</div>
                      <div className="text-sm text-muted-foreground">
                        Ask users to provide feedback after chatting with Mickael
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="font-medium">Email Feedback Requests</div>
                      <div className="text-sm text-muted-foreground">
                        Send periodic emails asking users for platform feedback
                      </div>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Integration Settings</h3>
                <div className="grid gap-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="font-medium">TrustPilot Integration</div>
                      <div className="text-sm text-muted-foreground">
                        Import and respond to reviews from TrustPilot
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="font-medium">Google My Business Integration</div>
                      <div className="text-sm text-muted-foreground">
                        Sync reviews from Google My Business profile
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Automated Responses</h3>
                <div className="grid gap-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="font-medium">Auto-respond to positive reviews</div>
                      <div className="text-sm text-muted-foreground">
                        Automatically send a thank you message to 4-5 star reviews
                      </div>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="font-medium">Auto-respond to negative reviews</div>
                      <div className="text-sm text-muted-foreground">
                        Automatically reach out to users who leave 1-2 star reviews
                      </div>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="negative-review-template">Negative Review Response Template</Label>
                    <Textarea 
                      id="negative-review-template" 
                      placeholder="Enter your template message for negative reviews..."
                      defaultValue="We're sorry to hear about your experience. Our team would like to address your concerns personally. Please contact us at support@nova.ai so we can make things right."
                      className="min-h-[100px]"
                    />
                    <p className="text-xs text-muted-foreground">
                      Use {'{name}'} to include customer name, {'{issue}'} to reference their specific issue
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto">Save Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FeedbackSupportPage;