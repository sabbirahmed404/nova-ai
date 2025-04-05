"use client"

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import { Bot, Phone, Clock, Calendar } from 'lucide-react';
import StatCard from '@/components/dashboard/clients/quick-stat-card';

const UserDashboard = () => {
  const userData = {
    name: 'John Doe',
    plan: 'Pro',
    lastLogin: '2023-04-05',
  };

  const usageData = [
    { day: 'Mon', calls: 12, messages: 45 },
    { day: 'Tue', calls: 19, messages: 52 },
    { day: 'Wed', calls: 15, messages: 38 },
    { day: 'Thu', calls: 22, messages: 67 },
    { day: 'Fri', calls: 18, messages: 45 },
    { day: 'Sat', calls: 8, messages: 23 },
    { day: 'Sun', calls: 5, messages: 19 },
  ];

  const statsCards = [
    { icon: Bot, label: 'Active Assistants', value: '3/5' },
    { icon: Phone, label: 'Total Calls', value: '127' },
    { icon: Clock, label: 'Avg. Response Time', value: '1.2s' },
    { icon: Calendar, label: 'Days Active', value: '32' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Welcome back, {userData.name}</h1>
        <p className="text-gray-400">Here&apos;s an overview of your AI assistants and usage</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((card, index) => (
         <StatCard key={index} card={card} />
        ))}
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle>AI Usage History</CardTitle>
          <CardDescription>Weekly activity for calls and messages</CardDescription>
        </CardHeader>
        <CardContent className="h-80">
          <ChartContainer
            config={{
              calls: {
                label: "Calls",
                color: "#00F5FF",
              },
              messages: {
                label: "Messages",
                color: "#8B5CF6",
              },
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={usageData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="day" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip
                  cursor={{ fill: "rgba(0, 0, 0, 0.1)" }}
                  content={<ChartTooltipContent />}
                />
                <Bar dataKey="calls" fill="var(--color-calls)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="messages" fill="var(--color-messages)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Current Subscription</CardTitle>
          <CardDescription>Your active plan details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xl font-bold">{userData.plan} Plan</p>
              <p className="text-sm text-gray-400">Renews on May 5, 2024</p>
            </div>
            <button className="text-nova-blue hover:underline">Upgrade Plan</button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDashboard;