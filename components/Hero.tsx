"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-20 text-center">
      <h1 className="text-5xl font-bold mb-6 dark:text-white">Ace Your Interviews with AI</h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto dark:text-white">
        HackInterview AI is your personal Interview Copilot. Prepare, practice, and perfect your interview skills with cutting-edge AI technology.
      </p>
      <Button size="lg" className="text-lg px-8 py-6 bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
        Start Practicing Now <ArrowRight className="ml-2" />
      </Button>
    </section>
  );
};

export default Hero;