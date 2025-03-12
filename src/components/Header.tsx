import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Menu, 
  X, 
  Home,
  GraduationCap,
  Info,
  Phone,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/images/logo.svg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { 
      name: "Home", 
      href: "/",
      icon: <Home className="h-4 w-4" />
    },
    { 
      name: "Training Solutions", 
      href: "/courses",
      icon: <GraduationCap className="h-4 w-4" />
    },
    { 
      name: "About", 
      href: "/about",
      icon: <Info className="h-4 w-4" />
    },
    { 
      name: "Contact", 
      href: "/contact",
      icon: <Phone className="h-4 w-4" />
    }
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "py-2 bg-white/80 backdrop-blur-lg shadow-sm" 
          : "py-4 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="AMP Training Solutions" 
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-medium ml-2">Training</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "nav-link hover:text-foreground transition-colors flex items-center gap-2 group",
                  location.pathname === link.href 
                    ? "text-primary font-medium" 
                    : "text-foreground/80"
                )}
              >
                <span className={cn(
                  "transition-colors",
                  location.pathname === link.href 
                    ? "text-primary" 
                    : "text-foreground/60 group-hover:text-foreground/80"
                )}>
                  {link.icon}
                </span>
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link to="/contact">
              <Button className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background shadow-lg rounded-b-lg mx-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10 flex items-center gap-3",
                  location.pathname === link.href 
                    ? "text-primary" 
                    : "text-foreground"
                )}
              >
                <span className={cn(
                  "transition-colors",
                  location.pathname === link.href 
                    ? "text-primary" 
                    : "text-foreground/60"
                )}>
                  {link.icon}
                </span>
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link to="/contact">
                <Button className="w-full group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
