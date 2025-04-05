"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Filter, Eye, UserX, Edit } from "lucide-react";

const UserManagementPage = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      plan: "Pro",
      assistants: 4,
      status: "Active",
      lastActive: "2 hours ago",
    },
    {
      id: 2,
      name: "Emily Johnson",
      email: "emily.johnson@example.com",
      plan: "Enterprise",
      assistants: 8,
      status: "Active",
      lastActive: "15 minutes ago",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael.brown@example.com",
      plan: "Essentiel",
      assistants: 2,
      status: "Active",
      lastActive: "1 day ago",
    },
    {
      id: 4,
      name: "Sarah Wilson",
      email: "sarah.wilson@example.com",
      plan: "Pro",
      assistants: 3,
      status: "Suspended",
      lastActive: "5 days ago",
    },
    {
      id: 5,
      name: "James Taylor",
      email: "james.taylor@example.com",
      plan: "Pro",
      assistants: 5,
      status: "Active",
      lastActive: "3 hours ago",
    },
    {
      id: 6,
      name: "Emma Davis",
      email: "emma.davis@example.com",
      plan: "Essentiel",
      assistants: 1,
      status: "Active",
      lastActive: "6 hours ago",
    },
    {
      id: 7,
      name: "Robert Miller",
      email: "robert.miller@example.com",
      plan: "Enterprise",
      assistants: 12,
      status: "Active",
      lastActive: "30 minutes ago",
    },
    {
      id: 8,
      name: "Jennifer Lee",
      email: "jennifer.lee@example.com",
      plan: "Pro",
      assistants: 4,
      status: "Inactive",
      lastActive: "2 weeks ago",
    },
  ]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">User Management</h1>
        <p className="text-gray-400">Manage all users and their access</p>
      </div>

      <Card className="glass-card">
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search users..."
                className="pl-9 pr-4 py-2 w-full sm:w-80 rounded-md bg-card border border-white/10 focus:border-nova-blue focus:outline-none"
              />
            </div>

            <div className="flex space-x-2">
              <Button variant="outline" className="border-white/10">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button className="neon-button">Add User</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Assistants</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        user.plan === "Enterprise"
                          ? "bg-purple-500/20 text-purple-400"
                          : user.plan === "Pro"
                          ? "bg-nova-blue/20 text-nova-blue"
                          : "bg-gray-500/20 text-gray-400"
                      }`}
                    >
                      {user.plan}
                    </span>
                  </TableCell>
                  <TableCell>{user.assistants}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        user.status === "Active"
                          ? "bg-green-500/20 text-green-400"
                          : user.status === "Suspended"
                          ? "bg-red-500/20 text-red-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {user.status}
                    </span>
                  </TableCell>
                  <TableCell>{user.lastActive}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-1">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-400 hover:text-red-500 hover:bg-red-500/10"
                      >
                        <UserX className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-400">
              Showing <span className="font-medium">1</span> to{" "}
              <span className="font-medium">8</span> of{" "}
              <span className="font-medium">32</span> users
            </div>

            <div className="flex space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-nova-blue/10 border-nova-blue"
              >
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                4
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserManagementPage;
