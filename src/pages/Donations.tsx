import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, GraduationCap, Building, Users } from "lucide-react";

const Donations = () => {
  const donationCategories = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Academic Excellence",
      description: "Support scholarships, educational resources, and academic programs",
      examples: ["Student scholarships", "Textbooks and supplies", "Technology upgrades", "Laboratory equipment"]
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Infrastructure Development",
      description: "Help improve and maintain our campus facilities",
      examples: ["Classroom renovations", "Library expansion", "Sports facilities", "Campus maintenance"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Student Activities",
      description: "Fund extracurricular activities and student programs",
      examples: ["Sports teams", "Cultural events", "Student clubs", "Community service projects"]
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Emergency Fund",
      description: "Support students and families in times of need",
      examples: ["Emergency assistance", "Disaster relief", "Medical support", "Crisis intervention"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Support Titchfield High School</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your generous contributions help us continue our mission of providing quality education 
              and building future leaders. Every donation, no matter the size, makes a difference in 
              the lives of our students.
            </p>
          </div>

          {/* Donation Categories */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {donationCategories.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-primary">{category.icon}</div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Donation Methods */}
          <div className="bg-muted rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">How to Donate</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Online Transfer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Make a secure online transfer to our school account
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Bank:</strong> National Commercial Bank</p>
                    <p><strong>Account:</strong> Titchfield High School</p>
                    <p><strong>Account #:</strong> 123-456-789</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Check/Money Order</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Mail your donation to our school address
                  </p>
                  <div className="space-y-1 text-sm">
                    <p><strong>Titchfield High School</strong></p>
                    <p>Attn: Finance Office</p>
                    <p>Port Antonio, Portland</p>
                    <p>Jamaica, West Indies</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">In Person</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Visit our campus during business hours
                  </p>
                  <div className="space-y-1 text-sm">
                    <p><strong>Office Hours:</strong></p>
                    <p>Monday - Friday</p>
                    <p>8:00 AM - 4:00 PM</p>
                    <p>Finance Office</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Recognition */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Donor Recognition</CardTitle>
              <CardDescription className="text-center">
                We deeply appreciate our donors and recognize their contributions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-primary">Benefactor</h3>
                  <p className="text-sm text-muted-foreground">$10,000+</p>
                  <p className="text-xs mt-2">Permanent plaque recognition</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-primary">Patron</h3>
                  <p className="text-sm text-muted-foreground">$5,000+</p>
                  <p className="text-xs mt-2">Annual report recognition</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-primary">Supporter</h3>
                  <p className="text-sm text-muted-foreground">$1,000+</p>
                  <p className="text-xs mt-2">Newsletter recognition</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-primary">Friend</h3>
                  <p className="text-sm text-muted-foreground">$100+</p>
                  <p className="text-xs mt-2">Thank you letter</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center bg-primary/5 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Ready to Make a Difference?</h2>
            <p className="text-muted-foreground mb-6">
              Contact our development office to discuss your donation or learn about planned giving options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Donate Now
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Contact Development Office
              </Button>
            </div>
            <div className="mt-6 text-sm text-muted-foreground">
              <p>For questions about donations, contact us at:</p>
              <p className="font-medium">development@titchfieldhigh.edu.jm | (876) 993-2556</p>
            </div>
          </div>

          {/* Tax Information */}
          <div className="mt-8 text-center text-sm text-muted-foreground bg-muted/50 rounded-lg p-4">
            <p>
              <strong>Tax Information:</strong> Titchfield High School is a registered educational institution. 
              Please consult with your tax advisor regarding the deductibility of charitable contributions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donations;