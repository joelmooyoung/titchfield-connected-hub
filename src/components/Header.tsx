import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import schoolCrest from "@/assets/ths-crest-new.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Academics", href: "/academics" },
    { name: "Past Principals", href: "/past-principals" },
    { name: "Sports", href: "/sports" },
    { name: "News", href: "/news" },
    { name: "Alumni", href: "/alumni" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      {/* Top Info Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>(876) 993-2618</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@titchfieldhigh.edu.jm</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Excellence in Education Since 1786</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and School Name */}
          <NavLink to="/" className="flex items-center space-x-3">
            <img 
              src={schoolCrest} 
              alt="Titchfield High School Crest" 
              className="h-12 w-12"
            />
            <div>
              <h1 className="font-display text-2xl font-bold text-primary">
                Titchfield High School
              </h1>
              <p className="text-sm text-muted-foreground">
                Virtute Et Eruditione
              </p>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-foreground"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Button variant="cta" size="sm">
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `font-medium transition-colors hover:text-primary px-2 py-1 ${
                      isActive ? "text-primary" : "text-foreground"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <Button variant="cta" size="sm" className="w-full mt-4">
                Apply Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;