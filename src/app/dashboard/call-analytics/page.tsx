"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download, Phone, PhoneMissed, Clock } from "lucide-react";
import StatCard from "@/components/dashboard/clients/quick-stat-card";

const CallAnalyticsPage = () => {
  const callData = [
    { date: "03-30", calls: 8, missed: 1, duration: 18 },
    { date: "03-31", calls: 12, missed: 2, duration: 25 },
    { date: "04-01", calls: 15, missed: 3, duration: 22 },
    { date: "04-02", calls: 18, missed: 1, duration: 30 },
    { date: "04-03", calls: 22, missed: 2, duration: 28 },
    { date: "04-04", calls: 19, missed: 0, duration: 26 },
    { date: "04-05", calls: 14, missed: 1, duration: 24 },
  ];

  const pieData = [
    { name: "Answered", value: 108 },
    { name: "Missed", value: 10 },
    { name: "Voicemail", value: 5 },
  ];

  const COLORS = ["#00F5FF", "#FF6384", "#FFCD56"];

  const recentCalls = [
    {
      id: 1,
      phone: "+1 (555) 123-4567",
      time: "10:30 AM",
      duration: "4:20",
      status: "Completed",
    },
    {
      id: 2,
      phone: "+1 (555) 987-6543",
      time: "11:15 AM",
      duration: "2:45",
      status: "Completed",
    },
    {
      id: 3,
      phone: "+1 (555) 456-7890",
      time: "12:00 PM",
      duration: "",
      status: "Missed",
    },
    {
      id: 4,
      phone: "+1 (555) 234-5678",
      time: "2:30 PM",
      duration: "3:15",
      status: "Completed",
    },
    {
      id: 5,
      phone: "+1 (555) 345-6789",
      time: "3:45 PM",
      duration: "",
      status: "Voicemail",
    },
  ];

  const statsCards = [
    { icon: Phone, label: "Total Calls", value: "123" },
    { icon: PhoneMissed, label: "Missed Rate", value: "8.1%" },
    { icon: Clock, label: "Avg Duration", value: "4m 12s" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Call Analytics</h1>
        <p className="text-gray-400">
          Monitor and analyze your AI call assistant performance
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statsCards.map((card, index) => (
          <StatCard key={index} card={card} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="glass-card lg:col-span-2">
          <CardHeader>
            <CardTitle>Call History</CardTitle>
            <CardDescription>Past 7 days</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ChartContainer
              config={{
                calls: {
                  label: "Total Calls",
                  color: "#00F5FF",
                },
                missed: {
                  label: "Missed Calls",
                  color: "#FF6384",
                },
                duration: {
                  label: "Avg Duration (min)",
                  color: "#8B5CF6",
                },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={callData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="date" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="calls"
                    stroke="var(--color-calls)"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="missed"
                    stroke="var(--color-missed)"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="duration"
                    stroke="var(--color-duration)"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Call Distribution</CardTitle>
            <CardDescription>By outcome</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-card">
        <CardHeader className="flex justify-between">
          <div>
            <CardTitle>Recent Calls</CardTitle>
            <CardDescription>
              Latest incoming calls handled by Tom
            </CardDescription>
          </div>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Download Report
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Phone Number</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentCalls.map((call) => (
                <TableRow key={call.id}>
                  <TableCell>{call.phone}</TableCell>
                  <TableCell>{call.time}</TableCell>
                  <TableCell>{call.duration || "-"}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        call.status === "Completed"
                          ? "bg-green-500/20 text-green-400"
                          : call.status === "Missed"
                          ? "bg-red-500/20 text-red-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {call.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default CallAnalyticsPage;
