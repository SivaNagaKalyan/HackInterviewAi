"use client";

import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: "Liam Chen",
    role: "Full Stack Developer",
    content: "HackInterview AI is a game-changer! As a junior developer, I used to struggle with technical interviews. This tool has transformed my interview preparation process. It provides unique insights and techniques I hadn't considered before. The mock interview feature is phenomenal and has boosted my confidence tremendously. It's like having a personal interview coach available 24/7!"
  },
  {
    name: "Priya Sharma",
    role: "UX/UI Designer",
    content: "The interview Q&A generation feature of HackInterview AI is incredibly helpful. It's like it reads my mind, providing questions I hadn't even thought to prepare for. The real-time feedback is a lifesaver - it's helped me refine my responses and present myself more professionally. While the AI sometimes gives responses that need tweaking, overall, it's an invaluable tool for interview prep."
  },
  {
    name: "Jamal Hassan",
    role: "Machine Learning Engineer",
    content: "As a data enthusiast, I'm always on the lookout for tools that can give me an edge. HackInterview AI has been a revelation! It quickly helps me organize my thoughts for complex, open-ended questions, allowing me to showcase my problem-solving skills effectively. The AI's ability to generate industry-specific questions is impressive. I'm excited to see how it evolves to include even more data science scenarios!"
  },
  {
    name: "Sofia Rodriguez",
    role: "DevOps Engineer",
    content: "HackInterview AI has revolutionized my interview prep. The mock interviews are incredibly realistic, especially for high-pressure situations. It's taught me how to articulate my experiences more compellingly. The AI interviewer adapts to my responses, pushing me to think on my feet - a crucial skill in DevOps. Even when faced with curveball questions, I now feel equipped to handle them with poise."
  },
  {
    name: "Akira Tanaka",
    role: "Senior Backend Developer",
    content: "I highly recommend HackInterview AI for all developers. It's not just about answering questions; it's about understanding the 'why' behind each answer. The breadth of technical knowledge in this AI is astounding. It challenges you to explain complex concepts clearly, which is crucial in tech interviews. While it's important to add your personal experiences, HackInterview AI provides an excellent framework to structure your responses."
  },
  {
    name: "Zoe Thompson",
    role: "IT Project Manager",
    content: "From a project management perspective, HackInterview AI is an exceptional tool. It helps candidates prepare thoroughly, resulting in more engaging and productive interviews. The in-depth interview review feature is particularly impressive, offering continuous improvement opportunities. While AI preparation is valuable, I appreciate that it encourages candidates to blend the tool's guidance with their unique experiences, maintaining authenticity in interviews."
  }
];

const UserTestimonials = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
          How do users evaluate HackInterview AI?
        </h2>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:border hover:border-gray-300 dark:hover:border-white hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h3 className="font-semibold dark:text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-white">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserTestimonials;