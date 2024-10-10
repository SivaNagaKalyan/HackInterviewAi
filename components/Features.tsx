"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, TrendingUp, Users, ArrowUpRight } from 'lucide-react';

const features = [
  {
    icon: <Brain className="h-8 w-8 mb-4 text-primary" />,
    title: 'AI-Powered Practice',
    description: 'Engage in realistic interview simulations powered by advanced AI technology.',
  },
  {
    icon: <TrendingUp className="h-8 w-8 mb-4 text-emerald-500" />,
    title: 'Higher Success Rate',
    description: 'HackInterview AI\'s interview pass rate exceeds 60%, far higher than the societal average of 5% - 20%, an increase of about 1000%.',
    highlight: '1000%+',
  },
  {
    icon: <Users className="h-8 w-8 mb-4 text-blue-500" />,
    title: 'Offers Received',
    description: 'HackInterview AI users have accumulated offers from over 6,000 companies worldwide, with a total of 35,000+ offers.',
    highlight: '35,000+',
  },
  {
    icon: <ArrowUpRight className="h-8 w-8 mb-4 text-purple-500" />,
    title: 'Salary Increase',
    description: 'Users who used HackInterview AI for job switching interviews have achieved salary increases of over 200%, far surpassing the social average salary increase of 10%-20%.',
    highlight: '200%+',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose HackInterview AI?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Card 
            key={index} 
            className="text-center relative overflow-hidden transition-all duration-200 ease-in-out hover:shadow-xl hover:scale-110 hover:-translate-y-1 border-2"
          >
            <CardHeader>
              <CardTitle className="flex flex-col items-center">
                {feature.icon}
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
            {feature.highlight && (
              <div className="absolute top-4 right-4 text-2xl font-bold" style={{ color: feature.icon.props.className.split(' ').find(c => c.startsWith('text-')) }}>
                {feature.highlight}
              </div>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;