import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Trophy, 
  Target, 
  Activity, 
  Users, 
  Calendar,
  ExternalLink,
  Award,
  Star,
  Volleyball,
  Medal
} from "lucide-react";

const Sports = () => {
  const featuredAchievements = [
    {
      title: "Eastern Athletics Championship Victory",
      date: "May 15, 2025",
      sport: "Track & Field",
      description: "THS boys capture the Eastern Athletics Championship with outstanding performances, led by high jumper Roje Williams.",
      source: "Our Today",
      link: "https://our.today/st-marys-high-girls-and-titchfield-boys-take-eastern-athletics-championship-title/",
      icon: Activity,
      featured: true
    },
    {
      title: "Table Tennis Rural Championships",
      date: "2024",
      sport: "Table Tennis", 
      description: "Boys U19 Champions and Girls U19 Second Place in the rural finals, showcasing our ping pong excellence.",
      source: "School Records",
      link: "#",
      icon: Target
    },
    {
      title: "Historic Girls Championships",
      date: "1963-1964",
      sport: "Athletics",
      description: "First and only school to win back-to-back Inter-Secondary Schools Girls Championships, a record that still stands today.",
      source: "Historical Records",
      link: "#",
      icon: Trophy
    }
  ];

  const currentSports = [
    {
      name: "Track & Field",
      status: "Champions",
      description: "2025 Eastern Athletics Champions with strong participation in Inter-Secondary Schools competitions",
      achievements: ["Eastern Champions 2025", "Roje Williams - High Jump Star"],
      icon: Activity,
      color: "bg-success"
    },
    {
      name: "Table Tennis",
      status: "Excellent",
      description: "Boys U19 Champions and Girls U19 Second Place in recent rural finals",
      achievements: ["Boys U19 Champions", "Girls U19 Second Place"],
      icon: Target,
      color: "bg-primary"
    },
    {
      name: "Netball",
      status: "Supported",
      description: "Championship teams with strong alumni equipment support through TPSSA",
      achievements: ["Alumni Equipment Support", "Active Championship Teams"],
      icon: Volleyball,
      color: "bg-secondary"
    },
    {
      name: "Basketball",
      status: "Active",
      description: "Developing basketball program with growing participation",
      achievements: ["Growing Program", "Youth Development"],
      icon: Users,
      color: "bg-accent"
    },
    {
      name: "Football",
      status: "Active", 
      description: "Traditional football program fostering teamwork and athletic development",
      achievements: ["Team Building", "Athletic Development"],
      icon: Users,
      color: "bg-muted"
    },
    {
      name: "Cricket",
      status: "Active",
      description: "Cricket program maintaining sporting traditions and skills development",
      achievements: ["Traditional Sport", "Skills Development"],
      icon: Users,
      color: "bg-gradient-primary"
    }
  ];

  const upcomingSports = [
    {
      event: "Inter-Secondary Schools Championships",
      date: "March 2025",
      sport: "Track & Field",
      location: "National Stadium",
      description: "Annual championships featuring the best high school athletes across Jamaica"
    },
    {
      event: "Rural Table Tennis Championships",
      date: "April 2025", 
      sport: "Table Tennis",
      location: "Various Venues",
      description: "Defending our boys championship and improving girls standing"
    },
    {
      event: "Schools Netball Competition",
      date: "February 2025",
      sport: "Netball",
      location: "Parish Courts",
      description: "Utilizing new equipment donated by alumni association"
    }
  ];

  const alumniSupport = [
    {
      supporter: "Andrew O'Geare",
      contribution: "Netball Equipment Donation",
      impact: "Enhanced netball program capabilities and team performance",
      year: "2024"
    },
    {
      supporter: "TPSSA (Titchfield Past Students Sports Association)",
      contribution: "Ongoing Sports Equipment & Sponsorship",
      impact: "Comprehensive support across multiple sporting disciplines",
      year: "Ongoing"
    },
    {
      supporter: "Various Alumni",
      contribution: "Equipment and Facility Support",
      impact: "Improved training facilities and competition readiness",
      year: "Continuous"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl font-bold text-primary mb-6">
            THS Sports Excellence
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Celebrating athletic achievement, competitive spirit, and sporting traditions since 1786
          </p>
        </div>

        {/* Featured Achievement */}
        <section className="mb-16">
          <Card className="bg-gradient-hero text-primary-foreground">
            <CardContent className="p-8">
              <div className="text-center">
                <Activity className="h-16 w-16 mx-auto mb-4" />
                <h2 className="font-display text-3xl font-bold mb-4">
                  2025 Eastern Athletics Champions
                </h2>
                <p className="text-xl mb-4">
                  THS Boys Dominate Eastern Athletics Championship
                </p>
                <p className="text-primary-foreground/90 mb-6">
                  Led by high jumper Roje Williams, our athletics team showcased exceptional talent and 
                  determination to capture the Eastern Athletics Championship title.
                </p>
                <Button variant="secondary" size="lg" asChild>
                  <a href="https://our.today/st-marys-high-girls-and-titchfield-boys-take-eastern-athletics-championship-title/" target="_blank" rel="noopener noreferrer">
                    Read Full Story
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Current Sports Programs */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold text-primary mb-8 text-center">
            Our Sports Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentSports.map((sport, index) => (
              <Card key={index} className="hover:shadow-elegant transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className={`${sport.color} text-white w-12 h-12 rounded-full flex items-center justify-center`}>
                      <sport.icon className="h-6 w-6" />
                    </div>
                    <Badge variant={sport.status === 'Champions' ? 'default' : 'secondary'}>
                      {sport.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-primary">{sport.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    {sport.description}
                  </p>
                  <div className="space-y-2">
                    {sport.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-success" />
                        <span className="text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent Achievements */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold text-primary mb-8 text-center">
            Recent Achievements
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredAchievements.map((achievement, index) => (
              <Card key={index} className={`hover:shadow-elegant transition-shadow ${achievement.featured ? 'lg:col-span-2' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline">{achievement.sport}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {achievement.date}
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-success text-success-foreground w-12 h-12 rounded-full flex items-center justify-center">
                      <achievement.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className={`${achievement.featured ? 'text-2xl' : 'text-xl'} text-primary`}>
                      {achievement.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className={`text-muted-foreground mb-6 ${achievement.featured ? 'text-base' : 'text-sm'}`}>
                    {achievement.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-secondary">
                      {achievement.source}
                    </span>
                    {achievement.link !== "#" && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                          Read More
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold text-primary mb-8 text-center">
            Upcoming Sports Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingSports.map((event, index) => (
              <Card key={index} className="hover:shadow-elegant transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-primary">{event.event}</h3>
                      <Badge variant="secondary">{event.sport}</Badge>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong>Date:</strong> {event.date}</p>
                    <p><strong>Location:</strong> {event.location}</p>
                    <p>{event.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Alumni Support */}
        <section className="mb-16 bg-muted p-8 rounded-lg">
          <h2 className="font-display text-3xl font-bold text-primary mb-8 text-center">
            Alumni Sports Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {alumniSupport.map((support, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Medal className="h-5 w-5 text-success" />
                    <CardTitle className="text-lg">{support.supporter}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-sm text-primary">Contribution:</p>
                      <p className="text-sm text-muted-foreground">{support.contribution}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-primary">Impact:</p>
                      <p className="text-sm text-muted-foreground">{support.impact}</p>
                    </div>
                    <Badge variant="outline">{support.year}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Interested in supporting THS sports programs? 
            </p>
            <Button variant="default" size="lg">
              Contact TPSSA
            </Button>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="font-display text-3xl font-bold text-primary mb-4">
            Join Our Athletic Legacy
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're a current student, parent, or alumnus, there are many ways to get involved 
            in THS sports and help maintain our tradition of excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              Student Sports Registration
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              Support Our Teams
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sports;