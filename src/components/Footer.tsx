import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  Users,
  GraduationCap
} from "lucide-react";
import schoolCrest from "@/assets/ths-crest-new.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Academics", href: "/academics" },
    { name: "Sports", href: "/sports" },
    { name: "News & Events", href: "/news" },
    { name: "Alumni", href: "/alumni" },
    { name: "Contact", href: "/contact" },
  ];

  const alumniAssociations = [
    { name: "THS Alumni Network (Main)", href: "https://titchfieldhigh.edu.jm/alumni", external: true },
    { name: "South Florida Chapter", href: "https://www.facebook.com/p/THE-ALUMNI-ASSOC-OF-TITCHFIELD-HIGH-SCHOOL-INC-100079504813399/", external: true },
    { name: "Ontario Chapter", href: "https://tpsaontario.ca/", external: true },
    { name: "Sports Association (TPSSA)", href: "https://tpssa.org/", external: true },
    { name: "New York Chapter", href: "https://www.facebook.com/p/Titchfield-High-Alumni-NY-100064317774660/", external: true },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/titchfieldhigh/" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/titchfieldhighschool/" },
    { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@titchfieldhighschool" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={schoolCrest} 
                alt="Titchfield High School Crest" 
                className="h-10 w-10"
              />
              <div>
                <h3 className="font-display text-xl font-bold">
                  Titchfield High School
                </h3>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Fifth-oldest high school in Jamaica, building leaders through excellence 
              in education since 1786. Virtute et Eruditione.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>22 Fort George Street, Port Antonio, Portland</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(876) 993-2618</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@titchfieldhigh.edu.jm</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg flex items-center space-x-2">
              <GraduationCap className="h-5 w-5" />
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Alumni Associations */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Alumni Associations</span>
            </h4>
            <ul className="space-y-2">
              {alumniAssociations.map((association) => (
                <li key={association.name}>
                  {association.external ? (
                    <a
                      href={association.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {association.name}
                    </a>
                  ) : (
                    <NavLink
                      to={association.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {association.name}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Stay Connected</h4>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-2 rounded-md transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            
            <div className="space-y-3">
              <p className="text-sm text-primary-foreground/80">
                Subscribe to our newsletter for updates
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-md text-foreground text-sm"
                />
                <Button variant="secondary" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/80">
              © {currentYear} Titchfield High School. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <NavLink to="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </NavLink>
              <NavLink to="/terms" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Terms of Service
              </NavLink>
              <NavLink to="/donate" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Donate
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;