import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface NavItem {
  title: string;
  path: string;
  icon: string;
}

const navItems: NavItem[] = [
  { title: 'Terminal', path: '/', icon: '>' },
  { title: 'Project Showcase', path: '/showcase', icon: '📹' },
  { title: 'Growth Metrics', path: '/metrics', icon: '📊' },
  { title: 'Tech Deep Dives', path: '/tech', icon: '🔧' },
  { title: 'Creative Portfolio', path: '/portfolio', icon: '🎨' },
  { title: 'Web Scraping Demo', path: '/scraping', icon: '🌐' },
];

const MatrixRain = () => {
  return (
    <div className="fixed inset-0 pointer-events-none opacity-20">
      <div className="matrix-rain" />
    </div>
  );
};

export default function MatrixLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-green-500 flex">
      <MatrixRain />
      
      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="w-64 bg-black border-r border-green-500/30 p-4 fixed h-full"
      >
        <div className="flex items-center justify-between mb-8">
          <motion.h1 
            className="text-2xl font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            FireCrawl_
          </motion.h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-green-500 hover:text-green-400"
          >
            {isOpen ? '<<' : '>>'}
          </button>
        </div>

        <nav>
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center space-x-2 p-3 rounded-lg transition-colors duration-200 ${
                router.pathname === item.path
                  ? 'bg-green-500/20 text-green-400'
                  : 'hover:bg-green-500/10'
              }`}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center w-full"
              >
                <span className="mr-3">{item.icon}</span>
                <span className="font-mono">{item.title}</span>
              </motion.div>
            </Link>
          ))}
        </nav>
      </motion.div>

      {/* Main Content */}
      <div className={`flex-1 ${isOpen ? 'ml-64' : 'ml-0'} transition-all duration-300`}>
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
} 