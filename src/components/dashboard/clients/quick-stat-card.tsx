import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

// Define the cardType interface for type safety
interface CardType {
  label: string; // The title or label of the card
  icon: React.ComponentType; // A React component for the icon
  value: string | number; // The value displayed in the card
}

interface StatCardProps {
  card: CardType; // Pass a single card of CardType
}

const StatCard: React.FC<StatCardProps> = ({ card }) => {
  return (
    <Card className="glass-card p-6 transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-md font-medium text-gray-400">{card.label}</CardTitle>
        <card.icon className="h-6 w-6 text-nova-blue" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{card.value}</div>
      </CardContent>
    </Card>
  );
};

export default StatCard;