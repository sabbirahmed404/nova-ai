"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

// Mock data for charts
const monthlyUsageData = [
  { month: "Jan", calls: 1200, chats: 2400, total: 3600 },
  { month: "Feb", calls: 1800, chats: 3200, total: 5000 },
  { month: "Mar", calls: 2400, chats: 3800, total: 6200 },
  { month: "Apr", calls: 3200, chats: 4200, total: 7400 },
  { month: "May", calls: 4000, chats: 4800, total: 8800 },
  { month: "Jun", calls: 3800, chats: 5200, total: 9000 },
];

const assistantUsageData = [
  { name: "Tom (Voice)", value: 55 },
  { name: "Mickael (Chat)", value: 30 },
  { name: "John (Email)", value: 15 },
];

const languageUsageData = [
  { language: "French", count: 4500 },
  { language: "English", count: 2300 },
  { language: "Spanish", count: 1200 },
  { language: "German", count: 800 },
  { language: "Italian", count: 650 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A569BD"];

const PlatformAnalyticsPage: React.FC = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Platform Analytics</h1>
        <div className="flex gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <CalendarIcon size={16} />
                {date ? format(date, "PPP") : "Select date range"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          <Button variant="outline" className="flex items-center gap-2">
            <Download size={16} />
            Export Data
          </Button>
        </div>
      </div>

      {/* Platform Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Total Interactions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">152,489</div>
            <p className="text-xs text-muted-foreground">
              +14.2% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8,942</div>
            <p className="text-xs text-muted-foreground">
              +7.8% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Avg. Response Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.4s</div>
            <p className="text-xs text-muted-foreground">
              -0.2s from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">AI Uptime</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.98%</div>
            <p className="text-xs text-muted-foreground">
              +0.04% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="usage">
        <TabsList className="mb-4">
          <TabsTrigger value="usage">Usage Metrics</TabsTrigger>
          <TabsTrigger value="assistants">Assistant Performance</TabsTrigger>
          <TabsTrigger value="languages">Language Distribution</TabsTrigger>
        </TabsList>

        <TabsContent value="usage">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Monthly Interactions</CardTitle>
                <Select defaultValue="6m">
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1m">Last Month</SelectItem>
                    <SelectItem value="3m">3 Months</SelectItem>
                    <SelectItem value="6m">6 Months</SelectItem>
                    <SelectItem value="1y">1 Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <CardDescription>
                Overview of all platform interactions over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={monthlyUsageData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="calls"
                      name="Voice Calls"
                      stroke="#0088FE"
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="chats"
                      name="Chat Messages"
                      stroke="#00C49F"
                    />
                    <Line
                      type="monotone"
                      dataKey="total"
                      name="Total Interactions"
                      stroke="#FF8042"
                      strokeDasharray="5 5"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assistants">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Assistant Usage Distribution</CardTitle>
                <CardDescription>
                  Breakdown of interactions by assistant type
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={assistantUsageData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) =>
                          `${name}: ${(percent * 100).toFixed(0)}%`
                        }
                      >
                        {assistantUsageData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Assistant Performance Metrics</CardTitle>
                <CardDescription>
                  Key performance indicators by assistant type
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">Tom (Voice)</span>
                      <span className="text-sm font-medium">98.2%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: "98.2%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">
                        Mickael (Chat)
                      </span>
                      <span className="text-sm font-medium">99.5%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: "99.5%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">John (Email)</span>
                      <span className="text-sm font-medium">97.8%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-yellow-500 rounded-full"
                        style={{ width: "97.8%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <h4 className="font-medium mb-2">Average Response Time</h4>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2 bg-gray-800 rounded-md">
                        <p className="text-sm text-gray-400">Tom</p>
                        <p className="font-bold">1.2s</p>
                      </div>
                      <div className="p-2 bg-gray-800 rounded-md">
                        <p className="text-sm text-gray-400">Mickael</p>
                        <p className="font-bold">0.8s</p>
                      </div>
                      <div className="p-2 bg-gray-800 rounded-md">
                        <p className="text-sm text-gray-400">John</p>
                        <p className="font-bold">2.5s</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="languages">
          <Card>
            <CardHeader>
              <CardTitle>Language Distribution</CardTitle>
              <CardDescription>
                Breakdown of interactions by language
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={languageUsageData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="language" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" name="Interactions" fill="#8884d8">
                      {languageUsageData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PlatformAnalyticsPage;
