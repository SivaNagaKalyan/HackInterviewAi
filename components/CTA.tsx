"use client";

import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const CTA = () => {
  return (
    <section className="bg-black text-white py-20 text-center rounded-lg">
      <h2 className="text-3xl font-bold mb-6">Ready to Ace Your Next Interview?</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Join thousands of job seekers who have improved their interview skills with HackInterview AI.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Button 
          size="lg" 
          className="text-lg px-8 py-6 w-64 sm:w-auto bg-white text-black hover:bg-gray-200 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors duration-300"
        >
          Try it now - it's free
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="text-lg px-8 py-6 w-64 sm:w-auto border-white text-white bg-transparent hover:bg-white hover:text-black dark:border-white dark:text-white dark:bg-transparent dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
        >
          Watch the demo <Play className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default CTA;