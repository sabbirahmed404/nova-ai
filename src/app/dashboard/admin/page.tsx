"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";
import { Users, Bot, Activity, MessageCircle } from "lucide-react";

const AdminDashboard = () => {
  const platformStats = [
    { icon: Users, label: "Total Users", value: "1,248", change: "+12%" },
    { icon: Bot, label: "Active Assistants", value: "3,567", change: "+24%" },
    { icon: Activity, label: "Uptime", value: "99.98%", change: "+0.1%" },
    {
      icon: MessageCircle,
      label: "Total Interactions",
      value: "84,291",
      change: "+18%",
    },
  ];

  const usageData = [
    { date: "Jan", users: 850, calls: 15000, messages: 32000 },
    { date: "Feb", users: 940, calls: 17000, messages: 38000 },
    { date: "Mar", users: 1050, calls: 19000, messages: 42000 },
    { date: "Apr", users: 1248, calls: 22000, messages: 49000 },
  ];

  const languageData = [
    { language: "English", value: 65 },
    { language: "French", value: 15 },
    { language: "Spanish", value: 10 },
    { language: "German", value: 5 },
    { language: "Italian", value: 3 },
    { language: "Others", value: 2 },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-gray-400">Platform overview and key metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {platformStats.map((stat, index) => (
          <Card key={index} className="glass-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                {stat.label}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-nova-blue" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p
                className={`text-xs font-medium mt-1 ${
                  stat.change.startsWith("+")
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="glass-card lg:col-span-2">
          <CardHeader>
            <CardTitle>Platform Growth</CardTitle>
            <CardDescription>Users and interactions over time</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ChartContainer
              config={{
                users: {
                  label: "Users",
                  color: "#00F5FF",
                },
                calls: {
                  label: "Calls",
                  color: "#8B5CF6",
                },
                messages: {
                  label: "Messages",
                  color: "#FF00E5",
                },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={usageData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="date" stroke="#666" />
                  {/* Add yAxisId="left" to this YAxis */}
                  <YAxis yAxisId="left" stroke="#666" />
                  {/* Add a second YAxis with yAxisId="right" and orientation="right" */}
                  <YAxis yAxisId="right" orientation="right" stroke="#666" />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="users"
                    stroke="var(--color-users)"
                    strokeWidth={2}
                    yAxisId="left"
                  />
                  <Line
                    type="monotone"
                    dataKey="calls"
                    stroke="var(--color-calls)"
                    strokeWidth={2}
                    yAxisId="right"
                  />
                  <Line
                    type="monotone"
                    dataKey="messages"
                    stroke="var(--color-messages)"
                    strokeWidth={2}
                    yAxisId="right"
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Language Distribution</CardTitle>
            <CardDescription>Usage by language</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ChartContainer
              config={{
                value: {
                  label: "Usage",
                  color: "#8B5CF6",
                },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={languageData}
                  layout="vertical"
                  margin={{
                    top: 20,
                    right: 30,
                    left: 40,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#333"
                    horizontal={false}
                  />
                  <XAxis type="number" stroke="#666" />
                  <YAxis dataKey="language" type="category" stroke="#666" />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Bar
                    dataKey="value"
                    fill="var(--color-value)"
                    radius={[0, 4, 4, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
            <CardDescription>Last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>New Users</span>
                  <span className="font-medium">198</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-nova-blue h-2 rounded-full"
                    style={{ width: "78%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Active Users</span>
                  <span className="font-medium">982</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-green-400 h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Churn Rate</span>
                  <span className="font-medium">2.4%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-red-400 h-2 rounded-full"
                    style={{ width: "24%" }}
                  ></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Assistant Usage</CardTitle>
            <CardDescription>Distribution by type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Tom (Voice AI)</span>
                  <span className="font-medium">42%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-nova-blue h-2 rounded-full"
                    style={{ width: "42%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Mickael (Chat AI)</span>
                  <span className="font-medium">35%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-nova-purple h-2 rounded-full"
                    style={{ width: "35%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>John (Email AI)</span>
                  <span className="font-medium">23%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-pink-400 h-2 rounded-full"
                    style={{ width: "23%" }}
                  ></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>System Health</CardTitle>
            <CardDescription>Current status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                  <span>API Services</span>
                </div>
                <span className="text-green-400">Operational</span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                  <span>Voice Recognition</span>
                </div>
                <span className="text-green-400">Operational</span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                  <span>Chat Services</span>
                </div>
                <span className="text-green-400">Operational</span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                  <span>Database</span>
                </div>
                <span className="text-green-400">Operational</span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 mr-2"></div>
                  <span>Email Integration</span>
                </div>
                <span className="text-yellow-400">Partial Outage</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
