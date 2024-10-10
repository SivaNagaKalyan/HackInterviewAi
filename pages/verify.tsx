import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Verify = () => {
  const router = useRouter();
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputs.current[0]?.focus();
  }, []);

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.value !== '') {
      if (index < 3) {
        inputs.current[index + 1]?.focus();
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const verificationCode = otp.join('');
    console.log('Verification code:', verificationCode);
    // Here you would typically send the verification code to your backend
    // If verification is successful, redirect to the home page or dashboard
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Verify Your Email
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          We've sent a code to your email. Please enter it below.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex justify-between">
              {otp.map((data, index) => (
                <Input
                  key={index}
                  type="text"
                  maxLength={1}
                  ref={(input) => (inputs.current[index] = input)}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  className="w-16 h-16 text-center text-2xl"
                />
              ))}
            </div>

            <div>
              <Button type="submit" className="w-full">
                Verify
              </Button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Didn't receive the code?{' '}
            <button className="font-medium text-indigo-600 hover:text-indigo-500">
              Resend
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Verify;