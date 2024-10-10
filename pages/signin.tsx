import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FaGoogle, FaFacebook, FaLinkedin } from 'react-icons/fa';

const SignIn = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add sign-in logic here
    console.log('Sign in submitted');
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
          Sign in to HackInterview AI
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">
          Welcome back! Please sign in to continue
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email address
              </label>
              <div className="mt-1">
                <Input id="email" name="email" type="email" autoComplete="email" required className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>
              <div className="mt-1">
                <Input id="password" name="password" type="password" autoComplete="current-password" required className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
              </div>
            </div>

            <div>
              <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                Sign in
              </Button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div>
                <Button variant="outline" className="w-full dark:bg-gray-700 dark:text-white dark:border-gray-600">
                  <FaGoogle className="w-5 h-5" />
                </Button>
              </div>
              <div>
                <Button variant="outline" className="w-full dark:bg-gray-700 dark:text-white dark:border-gray-600">
                  <FaFacebook className="w-5 h-5" />
                </Button>
              </div>
              <div>
                <Button variant="outline" className="w-full dark:bg-gray-700 dark:text-white dark:border-gray-600">
                  <FaLinkedin className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?{' '}
            <Link href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;