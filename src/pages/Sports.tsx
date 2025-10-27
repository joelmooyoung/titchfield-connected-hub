import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredAchievements = [
    {
      title: "Schools' Challenge Quiz Champions 2025",
      description: "THS wins the 2025 TVJ Schools' Challenge Quiz, defeating Jamaica College 26-23 in a thrilling finale - our second championship in the competition's 55-year history.",
      year: "2025",
      date: "April 2025",
      icon: Trophy,
      category: "Academic Competition",
      sport: "Academic Quiz",
      featured: true,
      source: "TVJ / Radio Jamaica News",
      link: "https://radiojamaicanewsonline.com/local/titchfield-high-wins-tvjs-schools-challenge-quiz-2025"
    },
    {
      title: "Schools' Challenge Quiz Victory 2016",
      description: "First rural school to win the TVJ Schools' Challenge Quiz in nearly 20 years, establishing THS as an academic powerhouse.",
      year: "2016",
      date: "2016",
      icon: Award,
      category: "Academic Competition",
      sport: "Academic Quiz",
      featured: false,
      source: "TVJ Archives",
      link: "#"
    },
    {
      title: "Back-to-Back Girls' Champs Winners",
      description: "First and only school to win consecutive girls' Inter-Secondary Championships in 1963 and 1964 - a historic achievement that stands to this day.",
      year: "1963-64",
      date: "1963-1964",
      icon: Trophy,
      category: "Track & Field",
      sport: "Athletics",
      featured: false,
      source: "School Archives",
      link: "#"
    },
    {
      title: "DaCosta Cup Finals Appearances",
      description: "Qualified for three DaCosta Cup finals - 1964 (lost 2-1 to Munro College), showcasing consistent football excellence over the decades.",
      year: "1964",
      date: "1964",
      icon: Trophy,
      category: "Football",
      sport: "Football",
      featured: false,
      source: "School Archives",
      link: "#"
    }
  ];

  const currentSports = [
    {
      name: "Football",
      sport: "Football",
      season: "DaCosta Cup Competition",
      status: "Active",
      achievement: "3 Finals Appearances - Historic competitor since 1950",
      description: "One of four founding schools to contest the first DaCosta Cup campaign in 1950. Qualified for three finals, demonstrating consistent competitive excellence.",
      icon: Trophy,
      color: "bg-primary",
      achievements: [
        "3 DaCosta Cup Finals appearances",
        "Founding member (1950)",
        "Consistent eastern parish competitor"
      ]
    },
    {
      name: "Track & Field",
      sport: "Track & Field",
      season: "Inter-Secondary Championships",
      status: "Active",
      achievement: "Only school with back-to-back girls' championships (1963-64)",
      description: "Historic achievement as the first and only school to win consecutive girls' Inter-Secondary Championships.",
      icon: Award,
      color: "bg-success",
      achievements: [
        "Back-to-back Girls' Champions (1963-64)",
        "First and only school with this record",
        "Regular Champs competitors"
      ]
    },
    {
      name: "Academic Quiz",
      sport: "Academic Quiz",
      season: "TVJ Schools' Challenge Quiz",
      status: "Champions",
      achievement: "2-time Champions (2016, 2025)",
      description: "Two-time champions of Jamaica's premier academic competition, defeating Jamaica College 26-23 in 2025.",
      icon: Trophy,
      color: "bg-secondary",
      achievements: [
        "2025 Champions (defeated JC 26-23)",
        "2016 Champions (first rural school in 20 years)",
        "Multiple top-4 finishes"
      ]
    },
    {
      name: "Netball",
      sport: "Netball",
      season: "Parish & Eastern Championships",
      status: "Active",
      achievement: "Consistent parish-level competitors",
      description: "Regular participants in eastern parish and regional netball competitions.",
      icon: Users,
      color: "bg-accent",
      achievements: [
        "Parish-level competitions",
        "Eastern championship participation",
        "School league champions"
      ]
    },
    {
      name: "Cricket",
      sport: "Cricket",
      season: "Inter-School Matches",
      status: "Active",
      achievement: "Regular Eastern parish competitors",
      description: "Active participation in inter-school cricket matches and eastern parish competitions.",
      icon: Trophy,
      color: "bg-primary",
      achievements: [
        "Inter-school match participation",
        "Eastern parish competitions",
        "School league involvement"
      ]
    }
  ];

  const upcomingSports = [
    {
      name: "Inter-School Athletics",
      date: "March 2025",
      location: "Stadium East",
      description: "Annual athletics competition"
    },
    {
      name: "DaCosta Cup Season",
      date: "September 2025",
      location: "Various Venues",
      description: "Football championship competition"
    },
    {
      name: "Parish Netball Finals",
      date: "May 2025",
      location: "Portland Sports Complex",
      description: "Parish netball championship"
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
                      <h3 className="font-semibold text-lg text-primary">{event.name}</h3>
                      <Badge variant="secondary">Sports Event</Badge>
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