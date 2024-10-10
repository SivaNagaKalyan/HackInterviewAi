"use client";

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Is interview transcription available?",
    answer: "In adherence to data privacy protection standards, HackInterview AI does not retain interview transcriptions. However, users have the option to access an Interview Report immediately following each session. It is important to note that if the 'View Interview Report' option is not selected upon session completion, retrieval of the report will not be possible at a later time."
  },
  {
    question: "What is the policy for the free trial?",
    answer: "Our free trial offers users limited access to select product features, including AI resume revision and cover letter generation, among others. For the Interview Copilot feature, users are entitled to unlimited access to 5-minute free trial sessions. This means users can initiate the Interview Copilot as often as they wish, with each session being valid for up to 5 minutes."
  },
  {
    question: "What payment methods are available?",
    answer: "Our goal is to ensure a smooth and convenient experience for our customers. We offer a wide range of payment options through our payment processing partner, Stripe. Accepted payment methods include major credit cards such as Visa, MasterCard, American Express, and Discover, as well as ACH transfers. For those interested in using cryptocurrencies, we kindly ask you to reach out to our customer support for further assistance."
  },
  {
    question: "What is the cancellation and refund policy?",
    answer: "We offer a Satisfaction Guarantee. You can cancel your subscription anytime via your account or by contacting support. If you cancel, you'll retain access until the end of your billing cycle. Refunds are available, provided the service hasn't been substantially used. To request a refund, contact support with your details. Refunds will be processed within 7-10 business days. Certain exclusions apply, such as for services that have been heavily used."
  },
  {
    question: "Which domains/industries are supported by HackInterview AI?",
    answer: "Our services offer extensive coverage across a variety of domains and industries. We are actively developing domain-specific knowledge bases to supercharge domain knowledges, encompassing areas such as Finance, Consulting, Marketing, Customer Success, Sales, Product Management, IT, Cyber Security, Data Analytics, Software Engineering, among others. For additional details or inquiries about specific domains, please reach out to our customer support."
  },
  {
    question: "What specific positions and industries is HackInterview AI suitable for?",
    answer: "HackInterview AI is a comprehensive career development platform designed specifically for recent graduates and professionals at various career stages. We understand the challenges you may face when entering or advancing in the workforce, so we offer a range of professional support to help you transition smoothly into your career or next role. Whether you are a software engineer or a newcomer in any other field, HackInterview AI provides professional interview guidance and industry knowledge training. We continuously optimize and expand industry-specific modules to meet the needs of various career paths."
  },
  {
    question: "Is HackInterview AI suitable for highly technical positions, such as software engineers?",
    answer: "Absolutely. Based on AI technology from large language models, HackInterview AI naturally possesses a breadth of knowledge that ordinary engineers cannot match, especially in coding knowledge. During the interview process, HackInterview AI can provide technical concepts, frameworks, and example code to help users compensate for their lack of technical breadth, while also offering technical questions in simulated interviews to give users a more comprehensive preparation."
  },
  {
    question: "Can HackInterview AI's AI truly understand and answer complex interview questions?",
    answer: "Yes, the AI of HackInterview AI is very powerful. Our system is tailored to provide customized responses based on the user's resume and personal experiences. Through multiple mock interviews, the AI can gain a deep understanding of the user's situation and provide specific and personalized answers. Moreover, as usage increases, the AI's responses become more aligned with the user's actual circumstances, integrating their experiences to offer in-depth and relevant answers."
  },
  {
    question: "How does HackInterview AI affect candidates' performance in actual interviews?",
    answer: "HackInterview AI helps job seekers prepare comprehensively, reducing their anxiety during interviews. Our AI provides instant feedback and guidance, enhancing the quality of users' responses and boosting their confidence, which in turn improves their interview performance. Ultimately, AI assistance helps them better showcase their true selves and abilities. HackInterview AI is especially suitable for users with limited interview experience who are prone to nervousness. Our AI mock interview feature allows users to practice in a familiar environment, helping them gradually adapt to and overcome interview anxiety. At the same time, real-time response reminders and in-depth review features help users continuously improve their interview skills."
  },
  {
    question: "What scenarios is HackInterview AI suitable for? Can it still be used for in-person interviews?",
    answer: "HackInterview AI is suitable for various scenarios, including online defenses, mock interviews, and preparation for formal interviews, supporting mainstream remote video and interview platforms. Even for in-person interviews, users can utilize our product for thorough preparation. For technical and detailed questions, AI can provide technical concepts and frameworks, allowing users to combine their own knowledge to answer, thereby showcasing a more comprehensive ability."
  },
  {
    question: "Will using HackInterview AI for interview practice affect my actual job performance, such as not passing the probation period?",
    answer: "Our goal is to help users improve their practical skills through AI tools, not just through interviews. The multiple mock interviews and in-depth reviews we provide can help users better understand and enhance their abilities. We also encourage users to continuously learn and improve themselves to excel in real work situations."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">FAQ</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="transition-all duration-300 ease-in-out hover:shadow-md">
              <AccordionTrigger className="text-left hover:no-underline px-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 py-2">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;