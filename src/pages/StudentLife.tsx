import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Trophy, 
  Music, 
  Palette, 
  Users, 
  Heart, 
  Award,
  Target,
  Calendar,
  BookOpen,
  Volleyball,
  Activity
} from "lucide-react";

const StudentLife = () => {
  const sportsPrograms = [
    {
      name: "Table Tennis",
      achievements: "Boys U19 Champions & Girls U19 Second Place",
      icon: Trophy
    },
    {
      name: "Netball", 
      achievements: "Championship teams with alumni equipment support",
      icon: Target
    },
    {
      name: "Track & Field",
      achievements: "Inter-Secondary Schools participation",
      icon: Activity
    },
    {
      name: "Other Sports",
      achievements: "Basketball, Football, Cricket programs",
      icon: Volleyball
    }
  ];

  const clubs = [
    { name: "Debate Club", description: "Developing critical thinking and public speaking skills", icon: Users },
    { name: "Drama Society", description: "Creative expression through theatrical performances", icon: Palette },
    { name: "Music Club", description: "Celebrating musical talents and cultural heritage", icon: Music },
    { name: "Environmental Club", description: "Promoting sustainability and environmental awareness", icon: Heart },
    { name: "STEM Club", description: "Exploring science, technology, and innovation", icon: BookOpen },
    { name: "Student Council", description: "Leadership development and student representation", icon: Award }
  ];

  const traditions = [
    "Morning devotions led by dedicated staff",
    "Founders Day celebrations",
    "Annual talent shows and cultural events",
    "Heritage week celebrations",
    "Community service projects",
    "Sports day competitions"
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl font-bold text-primary mb-6">
            Student Life at THS
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience a vibrant campus community where academic excellence meets personal growth, 
            cultural celebration, and lifelong friendships.
          </p>
        </div>

        {/* Featured Achievement */}
        <div className="mb-16">
          <Card className="bg-gradient-hero text-primary-foreground">
            <CardContent className="p-8 text-center">
              <Trophy className="h-16 w-16 mx-auto mb-4" />
              <h2 className="font-display text-3xl font-bold mb-4">
                Recent Student Achievement
              </h2>
              <p className="text-xl mb-4">
                Marsha Jones (THS Alumna) - BAME Nurse of the Year
              </p>
              <p className="text-primary-foreground/90">
                Recognized for outstanding leadership in the NHS South West London, 
                exemplifying the values and excellence fostered at Titchfield High School.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Sports & Athletics */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold text-primary mb-8 text-center">
            Sports & Athletics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {sportsPrograms.map((sport, index) => (
              <Card key={index} className="hover:shadow-elegant transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="bg-success text-success-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <sport.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{sport.name}</h3>
                  <p className="text-muted-foreground text-sm">{sport.achievements}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="bg-muted">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4 text-center">Alumni Sports Support</h3>
              <p className="text-muted-foreground text-center">
                The Titchfield Past Students Sports Association (TPSSA) actively supports our athletic programs 
                through equipment donations and sponsorship, including recent contributions of netball equipment 
                by Andrew O'Geare and other alumni.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Clubs & Societies */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold text-primary mb-8 text-center">
            Clubs & Societies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map((club, index) => (
              <Card key={index} className="hover:shadow-elegant transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="bg-gradient-secondary text-secondary-foreground w-10 h-10 rounded-full flex items-center justify-center">
                      <club.icon className="h-5 w-5" />
                    </div>
                    <span>{club.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{club.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* School Traditions */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold text-primary mb-8 text-center">
            School Traditions & Culture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Annual Traditions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {traditions.map((tradition, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{tradition}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5" />
                  <span>Campus Culture</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">School Nicknames</h4>
                  <div className="flex space-x-2">
                    <Badge variant="secondary">"Titch"</Badge>
                    <Badge variant="secondary">"1Titch"</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">School Cheers</h4>
                  <p className="text-muted-foreground text-sm">
                    "Titchfield is the Greatest" • "Star of the East"
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Campus Highlights</h4>
                  <p className="text-muted-foreground text-sm">
                    Historic Fort George setting with coastal views, "The Battery" wall, 
                    and unique student areas that create lasting memories.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Student Support */}
        <section className="mb-16 bg-muted p-8 rounded-lg">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl font-bold text-primary mb-4">
              Student Support Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support systems to ensure every student's success and well-being
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Academic Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary" />
                <p className="text-muted-foreground">
                  Tutoring programs, study groups, and academic counseling to help students excel.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Peer Mentorship</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <p className="text-muted-foreground">
                  Senior students guide younger ones, fostering leadership and community bonds.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Wellness Programs</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <Heart className="h-12 w-12 mx-auto mb-4 text-primary" />
                <p className="text-muted-foreground">
                  Mental health support and wellness initiatives for holistic student development.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-primary mb-4">
            Join Our Community
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Become part of the Titchfield family and experience a rich, supportive environment 
            where you can grow, learn, and thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              Explore Admissions
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLife;