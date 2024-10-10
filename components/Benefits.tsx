"use client";

import { Button } from '@/components/ui/button';
import Image from 'next/image';

const benefits = [
  {
    title: "Crack Your Interview",
    description: "Leverage AI-driven insights to quickly master interview techniques. HackInterview AI fills your knowledge gaps, helping you stay ahead with the latest interview strategies.",
    image: "/images/python-logo.png"
  },
  {
    title: "Crush Your Interview",
    description: "Whether you're new to job hunting or an experienced pro, clear communication is key. HackInterview AI structures your thoughts, making your responses more confident, organized, and persuasive.",
    image: "/images/javascript-logo.png"
  },
  {
    title: "Ace Your Interview",
    description: "From virtual meetings to in-person interviews, HackInterview AI equips you with the tools to confidently navigate every interview scenario.",
    image: "/images/java-logo.png"
  },
  {
    title: "Master Your Interview",
    description: "HackInterview AI continuously adapts to your strengths and areas for improvement, offering personalized suggestions. This ensures ongoing skill enhancement, tailored to your unique needs.",
    image: "/images/csharp-logo.png"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">Benefits of using HackInterview AI</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex items-start space-x-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:border hover:border-gray-300 dark:hover:border-white hover:scale-105"
            >
              <div className="flex-shrink-0">
                <Image src={benefit.image} alt={benefit.title} width={100} height={100} className="rounded-lg" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{benefit.description}</p>
                <Button 
                  variant="outline" 
                  className="dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-black hover:text-white hover:border-black"
                >
                  Try Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;