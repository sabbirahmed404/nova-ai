"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, Plus, Edit, Trash } from "lucide-react";
import { toast } from 'sonner';

// Mock subscription plans data
const subscriptionPlans = [
  {
    id: 1,
    name: "Essential",
    price: 49,
    billingCycle: "monthly",
    features: ["1 AI Assistant", "100 calls/month", "Email support", "Basic analytics"],
    active: true
  },
  {
    id: 2,
    name: "Pro",
    price: 99,
    billingCycle: "monthly",
    features: ["3 AI Assistants", "Unlimited calls", "Priority support", "Advanced analytics", "Custom prompts"],
    active: true
  },
  {
    id: 3,
    name: "Enterprise",
    price: 299,
    billingCycle: "monthly",
    features: ["Unlimited AI Assistants", "Unlimited calls", "24/7 support", "Advanced analytics", "Custom prompts", "API access"],
    active: true
  }
];

// Mock subscription users data
const subscriptionUsers = [
  { id: 1, name: "Jean Dupont", email: "jean@example.com", plan: "Pro", status: "active", startDate: "2023-01-15" },
  { id: 2, name: "Marie Lambert", email: "marie@example.com", plan: "Essential", status: "active", startDate: "2023-02-22" },
  { id: 3, name: "Pierre Martin", email: "pierre@example.com", plan: "Enterprise", status: "pending", startDate: "2023-03-10" },
  { id: 4, name: "Sophie Bernard", email: "sophie@example.com", plan: "Pro", status: "suspended", startDate: "2022-11-05" },
  { id: 5, name: "Thomas Roux", email: "thomas@example.com", plan: "Essential", status: "active", startDate: "2023-01-30" }
];

const SubscriptionControlPage: React.FC = () => {
  const [plans, setPlans] = useState(subscriptionPlans);
  const [newPlanDialog, setNewPlanDialog] = useState(false);
  
  const handlePlanStatusToggle = (planId: number) => {
    setPlans(plans.map(plan => 
      plan.id === planId ? { ...plan, active: !plan.active } : plan
    ));
    
    toast("Plan status updated", {
      description: "The subscription plan status has been updated successfully."
    });
  };
  
  const handleCreatePlan = () => {
    setNewPlanDialog(false);
    toast("New plan created", {
      description: "The new subscription plan has been created successfully."
    });
  };

  const getPlanStatusBadge = (status: boolean) => {
    return status ? 
      <Badge className="bg-green-500">Active</Badge> :
      <Badge variant="destructive">Inactive</Badge>;
  };

  const getUserStatusBadge = (status: string) => {
    switch(status) {
      case 'active':
        return <Badge className="bg-green-500">Active</Badge>;
      case 'pending':
        return <Badge variant="outline" className="border-yellow-500 text-yellow-500">Pending</Badge>;
      case 'suspended':
        return <Badge variant="destructive">Suspended</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Subscription Control</h1>
      </div>
      
      <Tabs defaultValue="plans">
        <TabsList className="mb-4">
          <TabsTrigger value="plans">Subscription Plans</TabsTrigger>
          <TabsTrigger value="users">Users & Subscriptions</TabsTrigger>
        </TabsList>
        
        <TabsContent value="plans" className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Available Plans</h2>
            <Dialog open={newPlanDialog} onOpenChange={setNewPlanDialog}>
              <DialogTrigger asChild>
                <Button variant="default" className="flex items-center gap-2">
                  <Plus size={16} />
                  New Plan
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Subscription Plan</DialogTitle>
                  <DialogDescription>
                    Add a new subscription plan to your offerings.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="plan-name">Plan Name</Label>
                    <Input id="plan-name" placeholder="e.g., Premium" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="plan-price">Price</Label>
                    <Input id="plan-price" type="number" placeholder="e.g., 149" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="plan-features">Features (one per line)</Label>
                    <textarea 
                      id="plan-features" 
                      className="flex h-20 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="e.g., Unlimited AI Assistants&#10;24/7 support"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setNewPlanDialog(false)}>Cancel</Button>
                  <Button onClick={handleCreatePlan}>Create Plan</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card key={plan.id}>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>{plan.name}</CardTitle>
                    {getPlanStatusBadge(plan.active)}
                  </div>
                  <CardDescription>${plan.price}/{plan.billingCycle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check size={16} className="text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <Edit size={16} className="mr-2" />
                    Edit
                  </Button>
                  <Button 
                    variant={plan.active ? "destructive" : "default"} 
                    size="sm"
                    onClick={() => handlePlanStatusToggle(plan.id)}
                  >
                    {plan.active ? "Deactivate" : "Activate"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="users" className="space-y-4">
          <h2 className="text-xl font-semibold">Subscribed Users</h2>
          
          <div className="rounded-md border">
            <table className="w-full">
              <thead className="bg-muted text-muted-foreground">
                <tr>
                  <th className="text-left p-3">Name</th>
                  <th className="text-left p-3">Email</th>
                  <th className="text-left p-3">Plan</th>
                  <th className="text-left p-3">Status</th>
                  <th className="text-left p-3">Start Date</th>
                  <th className="text-center p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {subscriptionUsers.map(user => (
                  <tr key={user.id} className="border-t">
                    <td className="p-3">{user.name}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">{user.plan}</td>
                    <td className="p-3">{getUserStatusBadge(user.status)}</td>
                    <td className="p-3">{user.startDate}</td>
                    <td className="p-3 flex justify-center gap-2">
                      <Button variant="outline" size="sm">Change Plan</Button>
                      <Button variant="destructive" size="sm">
                        <Trash size={16} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SubscriptionControlPage;