import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from './ui/button';
import { Brain, Menu, X, Moon, Sun, ChevronDown, ChevronUp } from 'lucide-react';
import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary dark:text-white" />
              <span className="text-xl font-bold dark:text-white">HackInterview AI</span>
            </a>
          </Link>
          <div className="hidden xl:flex items-center space-x-4">
            <Link href="#"><a className="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300">Interview Copilot</a></Link>
            <Link href="#"><a className="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300">AI Resume Builder</a></Link>
            <Link href="#"><a className="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300">AI Mock Interview</a></Link>
            <Link href="#"><a className="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300">Question Bank</a></Link>
            <DropdownMenu onOpenChange={(open) => setIsResourcesOpen(open)}>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300">
                Resources
                {isResourcesOpen ? <ChevronUp className="ml-1" /> : <ChevronDown className="ml-1" />}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>
                  <Link href="#"><a className="w-full">Support</a></Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#"><a className="w-full">Guides</a></Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#"><a className="w-full">Blog</a></Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#"><a className="w-full">Influencer Program</a></Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#"><a className="w-full">Referral Program</a></Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#"><a className="w-full">Special Discount</a></Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#"><a className="w-full">About</a></Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#"><a className="w-full">Careers</a></Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#"><a className="w-full">Chat with Recruiter</a></Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/signin">
              <Button variant="outline" className="dark:text-white dark:border-white">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">Sign Up</Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              className="w-9 px-0"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
          </div>
          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              className="mr-2"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open Menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="xl:hidden mt-4 space-y-2">
            <Link href="#"><a className="block text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300">Interview Copilot</a></Link>
            <Link href="#"><a className="block text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300">AI Resume Builder</a></Link>
            <Link href="#"><a className="block text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300">AI Mock Interview</a></Link>
            <Link href="#"><a className="block text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300">Question Bank</a></Link>
            <DropdownMenu onOpenChange={(open) => setIsResourcesOpen(open)}>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300">
                Resources
                {isResourcesOpen ? <ChevronUp className="ml-1" /> : <ChevronDown className="ml-1" />}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>
                  <Link href="#"><a className="w-full">Support</a></Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#"><a className="w-full">Guides</a></Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#"><a className="w-full">Blog</a></Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#"><a className="w-full">Influencer Program</a></Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#"><a className="w-full">Referral Program</a></Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#"><a className="w-full">Special Discount</a></Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#"><a className="w-full">About</a></Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#"><a className="w-full">Careers</a></Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#"><a className="w-full">Chat with Recruiter</a></Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/signin">
              <Button variant="outline" className="w-full mt-2 dark:text-white dark:border-white">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button className="w-full mt-2 bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">Sign Up</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;