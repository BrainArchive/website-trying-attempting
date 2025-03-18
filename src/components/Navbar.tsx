
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-6 px-8 md:px-12 lg:px-16',
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold tracking-tight">
          <span className="text-primary">Portfolio</span>
        </Link>

        <ul className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary relative py-2',
                  location.pathname === link.path
                    ? 'text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary'
                    : 'text-muted-foreground'
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        
        <div className="md:hidden">
          {/* Mobile menu button would go here */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
