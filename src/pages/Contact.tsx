import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Facebook, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Get in touch with Titchfield High School. We're here to help and answer any questions you may have.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-primary" />
                    School Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed">
                    Titchfield High School<br />
                    Fort George, Port Antonio<br />
                    Portland, Jamaica
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Phone className="h-6 w-6 text-primary" />
                    Phone Numbers
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p><strong>Main Office:</strong> (876) 993-2308</p>
                  <p><strong>Administration:</strong> (876) 993-2685</p>
                  <p><strong>Fax:</strong> (876) 993-2685</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Mail className="h-6 w-6 text-primary" />
                    Email Addresses
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p><strong>General Inquiries:</strong> info@titchfieldhigh.edu.jm</p>
                  <p><strong>Admissions:</strong> admissions@titchfieldhigh.edu.jm</p>
                  <p><strong>Principal's Office:</strong> principal@titchfieldhigh.edu.jm</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-primary" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p><strong>Monday - Friday:</strong> 8:00 AM - 4:00 PM</p>
                  <p><strong>Saturday:</strong> 8:00 AM - 12:00 PM (Term time only)</p>
                  <p><strong>Sunday:</strong> Closed</p>
                  <Badge variant="outline" className="mt-2">
                    Hours may vary during holidays
                  </Badge>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle>Connect With Us</CardTitle>
                  <CardDescription>
                    Follow us on social media for the latest updates and news
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-4">
                    <Button variant="outline" asChild>
                      <a 
                        href="https://www.facebook.com/TitchfieldHighSchoolJamaica/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Facebook className="h-4 w-4" />
                        Facebook
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a 
                        href="https://jm.linkedin.com/school/titchfield-high-school/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Your first name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Your last name" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number (Optional)</Label>
                      <Input id="phone" type="tel" placeholder="(876) 000-0000" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="What is this regarding?" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Please provide details about your inquiry..." 
                        className="min-h-[120px]"
                        required 
                      />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Button variant="ghost" asChild>
                      <a href="/academics">Academics</a>
                    </Button>
                    <Button variant="ghost" asChild>
                      <a href="/student-life">Student Life</a>
                    </Button>
                    <Button variant="ghost" asChild>
                      <a href="/alumni">Alumni</a>
                    </Button>
                    <Button variant="ghost" asChild>
                      <a href="/about">About Us</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="border-destructive/20">
            <CardHeader>
              <CardTitle className="text-destructive">Emergency Contact</CardTitle>
              <CardDescription>
                For urgent matters outside of office hours, please contact:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">
                Principal's Emergency Line: (876) 993-2308 ext. 100
              </p>
              <p className="text-muted-foreground mt-2">
                Available for genuine emergencies only
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;