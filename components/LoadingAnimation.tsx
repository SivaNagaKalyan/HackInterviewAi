import React from 'react';
import { Brain } from 'lucide-react';

const LoadingAnimation = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900">
      <div className="relative">
        <div className="w-24 h-24 border-4 border-black dark:border-white rounded-full animate-spin"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Brain className="w-16 h-16 text-black dark:text-white" />
        </div>
      </div>
      <p className="mt-8 text-xl font-semibold text-black dark:text-white">
        Can't wait to help you land a job!
      </p>
    </div>
  );
};

export default LoadingAnimation;