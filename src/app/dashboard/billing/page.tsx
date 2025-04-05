
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Download, Calendar, CheckCircle } from 'lucide-react';

const BillingPage = () => {
  const currentPlan = {
    name: 'Pro',
    price: '$29.99',
    billingCycle: 'monthly',
    nextBilling: 'May 5, 2024',
    features: [
      'Up to 5 AI assistants',
      '2,000 calls/month',
      '10,000 messages/month',
      'Email support',
      'API access'
    ]
  };

  const availablePlans = [
    {
      name: 'Essentiel',
      price: '$9.99',
      features: [
        'Up to 2 AI assistants',
        '500 calls/month',
        '2,000 messages/month',
        'Email support',
      ]
    },
    {
      name: 'Pro',
      price: '$29.99',
      features: [
        'Up to 5 AI assistants',
        '2,000 calls/month',
        '10,000 messages/month',
        'Email support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99.99',
      features: [
        'Unlimited AI assistants',
        'Unlimited calls',
        'Unlimited messages',
        'Priority support',
        'API access',
        'Custom integrations',
        'Dedicated account manager'
      ]
    }
  ];

  const billingHistory = [
    { id: 1, date: '04/05/2023', amount: '$29.99', description: 'Pro Plan - Monthly', status: 'Paid' },
    { id: 2, date: '03/05/2023', amount: '$29.99', description: 'Pro Plan - Monthly', status: 'Paid' },
    { id: 3, date: '02/05/2023', amount: '$29.99', description: 'Pro Plan - Monthly', status: 'Paid' },
    { id: 4, date: '01/05/2023', amount: '$19.99', description: 'Essentiel Plan - Monthly', status: 'Paid' },
    { id: 5, date: '12/05/2022', amount: '$19.99', description: 'Essentiel Plan - Monthly', status: 'Paid' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Billing & Subscription</h1>
        <p className="text-gray-400">Manage your plan and view payment history</p>
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Current Subscription</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h3 className="text-2xl font-bold">{currentPlan.name} Plan</h3>
              <p className="text-xl text-nova-blue">{currentPlan.price} / month</p>
              <div className="flex items-center gap-2 mt-2">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-400">Next billing on {currentPlan.nextBilling}</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="neon-button">
                Change Plan
              </Button>
            </div>
          </div>
          
          <div className="mt-6">
            <h4 className="font-medium mb-2">What&apos;s included:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {currentPlan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-bold mb-4">Available Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {availablePlans.map((plan) => (
            <Card key={plan.name} className={`glass-card relative ${plan.name === currentPlan.name ? 'border-nova-blue' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-nova-purple text-white text-xs py-1 px-3 rounded-full">
                  Popular
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription className="text-2xl font-bold">{plan.price}<span className="text-sm font-normal text-gray-400"> / month</span></CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  variant={plan.name === currentPlan.name ? "outline" : "default"}
                  className={plan.name === currentPlan.name ? "w-full border-nova-blue" : "w-full neon-button"}
                >
                  {plan.name === currentPlan.name ? 'Current Plan' : 'Select Plan'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <Card className="glass-card">
        <CardHeader className="flex justify-between">
          <div>
            <CardTitle>Billing History</CardTitle>
            <CardDescription>View your past payments</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Download All
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {billingHistory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>{item.amount}</TableCell>
                  <TableCell>
                    <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs">
                      {item.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
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

export default BillingPage;