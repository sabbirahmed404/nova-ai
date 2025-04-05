"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, MessageSquare, ThumbsUp, ThumbsDown } from 'lucide-react';

const FeedbackPage = () => {
  const [automatedResponses, setAutomatedResponses] = useState(true);
  
  const feedbacks = [
    { 
      id: 1, 
      platform: 'Google',
      reviewer: 'Emma Thompson',
      date: '04/01/2023',
      rating: 5,
      comment: 'The AI assistant is incredibly responsive and helpful. It saved us so much time handling customer inquiries!' 
    },
    { 
      id: 2, 
      platform: 'Trustpilot',
      reviewer: 'Michael Brown',
      date: '03/28/2023',
      rating: 4,
      comment: 'Great service overall, the voice AI occasionally misunderstands complex requests but handles standard inquiries perfectly.' 
    },
    { 
      id: 3, 
      platform: 'Google',
      reviewer: 'Sarah Johnson',
      date: '03/25/2023',
      rating: 5,
      comment: 'We implemented the AI assistant for our small business and have seen a huge improvement in customer satisfaction!' 
    },
    { 
      id: 4, 
      platform: 'Trustpilot',
      reviewer: 'David Wilson',
      date: '03/20/2023',
      rating: 3,
      comment: 'The AI works well but took some time to set up correctly. Support team was helpful though.' 
    },
    { 
      id: 5, 
      platform: 'Google',
      reviewer: 'Jennifer Lee',
      date: '03/15/2023',
      rating: 5,
      comment: 'Exceptional service! The AI has learned our business so well that customers often don\'t realize they\'re not talking to a human.' 
    },
  ];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <Star key={index} className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`} />
    ));
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Feedback & Reputation</h1>
        <p className="text-gray-400">Monitor and manage your online reputation</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Overall Rating</CardTitle>
              <div className="flex">
                {renderStars(4.5)}
              </div>
            </div>
            <CardDescription>Based on 27 reviews</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-center">4.5</div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Google My Business</CardTitle>
            <CardDescription>Last updated: Today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex">
                {renderStars(4.7)}
              </div>
              <span className="font-bold">4.7</span>
            </div>
            <p className="text-sm text-gray-400 mt-2">15 reviews</p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Trustpilot</CardTitle>
            <CardDescription>Last updated: Yesterday</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex">
                {renderStars(4.2)}
              </div>
              <span className="font-bold">4.2</span>
            </div>
            <p className="text-sm text-gray-400 mt-2">12 reviews</p>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-card">
        <CardHeader>
          <div className="flex justify-between">
            <div>
              <CardTitle>Automated Responses</CardTitle>
              <CardDescription>Automatically respond to new reviews</CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm">{automatedResponses ? 'Enabled' : 'Disabled'}</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={automatedResponses}
                  onChange={() => setAutomatedResponses(!automatedResponses)}
                />
                <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-nova-blue"></div>
              </label>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm">When enabled, our AI will automatically respond to new reviews on connected platforms with personalized responses based on the review content.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="flex items-center space-x-3">
              <ThumbsUp className="h-5 w-5 text-green-400" />
              <div>
                <p className="font-medium">Positive Reviews</p>
                <p className="text-sm text-gray-400">Thank customers and reinforce positive points</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <ThumbsDown className="h-5 w-5 text-yellow-400" />
              <div>
                <p className="font-medium">Negative Reviews</p>
                <p className="text-sm text-gray-400">Express concern and offer to resolve issues</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Configure Response Templates
          </Button>
        </CardFooter>
      </Card>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Recent Reviews</CardTitle>
          <CardDescription>Latest feedback across platforms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {feedbacks.map((feedback) => (
              <div key={feedback.id} className="border-b border-gray-800 pb-4 last:border-0">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">{feedback.reviewer}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                      <span>{feedback.platform}</span>
                      <span>•</span>
                      <span>{feedback.date}</span>
                    </div>
                  </div>
                  <div className="flex">
                    {renderStars(feedback.rating)}
                  </div>
                </div>
                <p className="text-sm mt-2">{feedback.comment}</p>
                <div className="mt-3 flex justify-end">
                  <Button variant="ghost" size="sm" className="text-xs">
                    <MessageSquare className="h-3 w-3 mr-1" />
                    Respond
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            View All Reviews
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default FeedbackPage;