"use client";

import React from 'react';
import Image from 'next/image';

const companies = [
  { name: 'Google', logo: '/images/google.jpg' },
  { name: 'Apple', logo: '/images/apple.jpg' },
  { name: 'Microsoft', logo: '/images/microsoft.webp' },
  { name: 'Amazon', logo: '/images/Amazon logo.png' },
  { name: 'Meta', logo: '/images/Meta-Logo.png' },
  { name: 'Netflix', logo: '/images/netflix.jpg' },
  { name: 'Tesla', logo: '/images/tesla.jpg' },
  { name: 'Adobe', logo: '/images/Adobe-logo-vector-01.svg' },
  { name: 'Salesforce', logo: '/images/Salesforce.com_logo.svg.png' },
  { name: 'Oracle', logo: '/images/Oracle_logo.svg.png' },
];

const CompanyLogoCarousel = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-black via-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          300,000+ offers from the most exciting companies and organizations
        </h2>
        <div className="overflow-hidden">
          <div className="flex animate-carousel">
            {[...companies, ...companies].map((company, index) => (
              <div key={index} className="flex-shrink-0 w-40 mx-6">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={120}
                  height={60}
                  className="object-contain w-full h-16 filter brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogoCarousel;