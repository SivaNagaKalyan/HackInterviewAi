"use client";

import React from 'react';
import Image from 'next/image';

const companies = [
  { name: 'Google', logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' },
  { name: 'Apple', logo: 'https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg' },
  { name: 'Microsoft', logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31' },
  { name: 'Amazon', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png' },
  { name: 'Meta', logo: 'https://about.fb.com/wp-content/uploads/2021/10/meta-logo.png' },
  { name: 'Netflix', logo: 'https://assets.nflxext.com/ffe/siteui/common/icons/nficon2016.png' },
  { name: 'Tesla', logo: 'https://www.tesla.com/themes/custom/tesla_frontend/assets/images/logo.svg' },
  { name: 'Adobe', logo: 'https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg' },
  { name: 'Salesforce', logo: 'https://c1.sfdcstatic.com/content/dam/sfdc-docs/www/logos/logo-salesforce.svg' },
  { name: 'Oracle', logo: 'https://www.oracle.com/a/ocom/img/rh03-oraclelogo-header-123x74.png' },
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