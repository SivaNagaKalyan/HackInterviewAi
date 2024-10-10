"use client";

import Image from 'next/image';

const platforms = [
  { name: 'Skype', logo: 'https://logos-world.net/wp-content/uploads/2020/11/Skype-Logo.png' },
  { name: 'Microsoft Teams', logo: 'https://logos-world.net/wp-content/uploads/2021/04/Microsoft-Teams-Logo.png' },
  { name: 'Zoom', logo: 'https://logos-world.net/wp-content/uploads/2021/02/Zoom-Logo.png' },
  { name: 'Google Meet', logo: 'https://logos-world.net/wp-content/uploads/2021/02/Google-Meet-Logo.png' },
  { name: 'GoTo', logo: 'https://logos-world.net/wp-content/uploads/2022/03/GoTo-Logo.png' },
  { name: 'Livestorm', logo: 'https://assets.website-files.com/5e9f0e6c5d5a1d4c5c5c5c5e/5e9f0e6c5d5a1d4c5c5c5c5f_livestorm-logo.svg' },
  { name: 'Zoho', logo: 'https://www.zoho.com/branding/images/zoho-logo-512px.png' },
  { name: 'Webex', logo: 'https://logos-world.net/wp-content/uploads/2021/08/Webex-Logo.png' },
  { name: 'CoScreen', logo: 'https://coscreen.co/wp-content/uploads/2021/03/coscreen-logo.svg' },
];

const RemotePlatforms = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Support for common remote interview platforms
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
          {platforms.map((platform) => (
            <div key={platform.name} className="flex items-center justify-center">
              <Image
                src={platform.logo}
                alt={`${platform.name} logo`}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 dark:text-white mt-8">
          *HackInterview AI captures system audio to identify interview content, theoretically supporting all platforms.
        </p>
      </div>
    </section>
  );
};

export default RemotePlatforms;