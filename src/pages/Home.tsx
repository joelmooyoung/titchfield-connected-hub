import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar,
  Trophy,
  Users,
  BookOpen,
  Star,
  ArrowRight,
  GraduationCap,
  Award,
  Target,
  Heart
} from "lucide-react";
import schoolHero from "@/assets/school-hero.jpg";

const Home = () => {
  const stats = [
    { label: "Students Enrolled", value: "1,200+", icon: Users },
    { label: "Years of Excellence", value: "133", icon: Star },
    { label: "Alumni Worldwide", value: "15,000+", icon: GraduationCap },
    { label: "Academic Programs", value: "25+", icon: BookOpen },
  ];

  const quickLinks = [
    {
      title: "Academic Excellence",
      description: "Comprehensive curriculum preparing students for success",
      icon: BookOpen,
      href: "/academics",
      color: "bg-primary"
    },
    {
      title: "Sports & Athletics", 
      description: "Championship teams and athletic development programs",
      icon: Trophy,
      href: "/sports",
      color: "bg-success"
    },
    {
      title: "Alumni Network",
      description: "Connect with our global community of graduates",
      icon: Users,
      href: "/alumni", 
      color: "bg-secondary"
    },
    {
      title: "School Events",
      description: "Stay updated with upcoming school activities",
      icon: Calendar,
      href: "/events",
      color: "bg-accent"
    }
  ];

  const recentNews = [
    {
      title: "THS Wins Regional Science Fair",
      date: "March 15, 2024",
      category: "Academics",
      excerpt: "Our students excel in regional science competition with innovative projects."
    },
    {
      title: "New STEM Laboratory Opens",
      date: "March 10, 2024", 
      category: "Infrastructure",
      excerpt: "State-of-the-art science facility enhances learning opportunities."
    },
    {
      title: "Basketball Team Advances to Finals",
      date: "March 8, 2024",
      category: "Sports",
      excerpt: "THS basketball team secures spot in championship game."
    }
  ];

  const upcomingEvents = [
    {
      title: "Founders Day Celebration",
      date: "April 12, 2024",
      time: "9:00 AM",
      location: "School Auditorium"
    },
    {
      title: "Parent-Teacher Conference",
      date: "April 18, 2024", 
      time: "2:00 PM",
      location: "Various Classrooms"
    },
    {
      title: "Alumni Homecoming",
      date: "April 25, 2024",
      time: "6:00 PM", 
      location: "School Grounds"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${schoolHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
            Welcome to
            <span className="block text-secondary">Titchfield High School</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
            Excellence • Integrity • Achievement
          </p>
          <p className="text-lg mb-10 text-primary-foreground/80 max-w-2xl mx-auto">
            Building tomorrow's leaders through academic excellence, character development, 
            and community engagement since 1890.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-3">
              Explore Our School
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Virtual Tour
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="font-display text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-primary mb-4">
              Discover THS
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive programs and vibrant school community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className={`${link.color} text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <link.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{link.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{link.description}</p>
                  <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News and Events */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Recent News */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-display text-3xl font-bold text-primary">
                  Latest News
                </h2>
                <Button variant="link" className="text-primary">
                  View All News
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-6">
                {recentNews.map((news, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <Badge variant="secondary">{news.category}</Badge>
                        <span className="text-sm text-muted-foreground">{news.date}</span>
                      </div>
                      <h3 className="font-semibold text-lg mb-2 text-primary">
                        {news.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {news.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-display text-3xl font-bold text-primary">
                  Upcoming Events
                </h2>
                <Button variant="link" className="text-primary">
                  View Calendar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary text-primary-foreground rounded-lg p-3 text-center min-w-[60px]">
                          <div className="font-bold text-lg">
                            {new Date(event.date).getDate()}
                          </div>
                          <div className="text-xs uppercase">
                            {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-primary">
                            {event.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-1">
                            {event.time} • {event.location}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Titchfield High School
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-primary text-primary-foreground w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Award className="h-10 w-10" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for the highest standards in academics, character, and achievement.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-secondary text-secondary-foreground w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Target className="h-10 w-10" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                Honesty, respect, and moral principles guide our actions and decisions.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-success text-success-foreground w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Heart className="h-10 w-10" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary mb-3">Achievement</h3>
              <p className="text-muted-foreground">
                We celebrate success and encourage every student to reach their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold mb-4">
            Join the THS Family
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Be part of our legacy of excellence. Apply now for admission or explore opportunities 
            to support our school community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-3">
              Apply for Admission
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Support THS
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;