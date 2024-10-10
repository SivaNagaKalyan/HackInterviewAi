import Link from 'next/link';
import { Twitter, Instagram, Youtube, MessageCircle, Music } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-background mt-12 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="text-2xl font-bold dark:text-white">HackInterview AI</Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-white">
              Your trusted platform to ace any job interviews, craft the perfect resumes, and land your dream jobs.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-gray-400 hover:text-gray-500 dark:text-white dark:hover:text-gray-300 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-500 dark:text-white dark:hover:text-gray-300 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-500 dark:text-white dark:hover:text-gray-300 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <Youtube size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-500 dark:text-white dark:hover:text-gray-300 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <MessageCircle size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-500 dark:text-white dark:hover:text-gray-300 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <Music size={20} />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider dark:text-white">Products</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors block">Interview Copilot</Link></li>
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors block">AI Mock Interview</Link></li>
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors block">AI Resume Builder</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider dark:text-white">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors block">Tutorials</Link></li>
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors block">Blog</Link></li>
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors block">Special Discount</Link></li>
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors block">How HackInterview AI works</Link></li>
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors block">About</Link></li>
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors block">Careers</Link></li>
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors block">Referral Program</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider dark:text-white">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors block">FAQ</Link></li>
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors block">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider dark:text-white">Interview Questions</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors block">Common Career Ambition</Link></li>
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors block">Collaborative Leadership</Link></li>
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors block">Product Manager</Link></li>
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors block">Coding</Link></li>
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors block">Technical</Link></li>
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors block">Generative AI Engineer</Link></li>
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors block">Swift Developer</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-wrap justify-between items-center">
            <p className="text-base text-gray-400 dark:text-white">
              © {currentYear} HackInterview AI, 456 University Ave, Palo Alto, CA 94301
            </p>
            <div className="flex space-x-6 mt-2 sm:mt-0">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;