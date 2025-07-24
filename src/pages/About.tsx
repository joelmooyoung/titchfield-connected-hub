import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  GraduationCap, 
  Award, 
  BookOpen,
  Clock,
  MapPin,
  Star,
  Target
} from "lucide-react";

const About = () => {
  const milestones = [
    { year: "1890", event: "School Founded", description: "Titchfield High School established in Port Antonio" },
    { year: "1920", event: "First Graduates", description: "First class of students graduate with distinction" },
    { year: "1950", event: "Campus Expansion", description: "Major expansion of facilities and programs" },
    { year: "1975", event: "Co-Educational", description: "School becomes fully co-educational" },
    { year: "2000", event: "Technology Integration", description: "Modern computer labs and internet connectivity" },
    { year: "2015", event: "STEM Excellence", description: "New science and technology center opens" },
    { year: "2020", event: "Digital Learning", description: "Full digital learning platform implementation" },
    { year: "2024", event: "133 Years Strong", description: "Continuing tradition of academic excellence" },
  ];

  const achievements = [
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Top CSEC and CAPE results in the region for 15 consecutive years",
      stats: "95% Pass Rate"
    },
    {
      icon: Users,
      title: "Global Alumni",
      description: "15,000+ graduates serving in leadership roles worldwide",
      stats: "50+ Countries"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Programs",
      description: "25+ subject areas from Sciences to Arts and Technology",
      stats: "25+ Programs"
    },
    {
      icon: Star,
      title: "Community Impact",
      description: "Leading community service and outreach programs",
      stats: "10,000+ Hours"
    }
  ];

  const leadership = [
    {
      name: "Dr. Patricia Williams",
      position: "Principal",
      credentials: "PhD in Educational Leadership, 25 years experience",
      description: "Leading THS with vision for 21st-century education"
    },
    {
      name: "Mr. Michael Thompson",
      position: "Vice Principal (Academic)",
      credentials: "MSc Mathematics Education, Former Head of Mathematics",
      description: "Overseeing academic excellence and curriculum development"
    },
    {
      name: "Mrs. Jennifer Campbell",
      position: "Vice Principal (Administration)",
      credentials: "MBA in Educational Management, 20 years at THS",
      description: "Managing daily operations and student services"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              About Titchfield High School
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              133 Years of Educational Excellence
            </p>
            <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
              Since 1890, Titchfield High School has been a beacon of academic excellence, 
              character development, and community leadership in Port Antonio, Jamaica.
            </p>
          </div>
        </div>
      </section>

      {/* School Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold text-primary mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To provide quality education that develops students intellectually, morally, 
                socially, and physically, preparing them to be productive citizens and leaders 
                in their communities and the world.
              </p>
              
              <h3 className="font-display text-2xl font-bold text-primary mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To be the premier secondary educational institution in Jamaica, recognized 
                for academic excellence, character development, and innovative teaching 
                that prepares students for success in the global community.
              </p>
              
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">1,200+</div>
                  <div className="text-sm text-muted-foreground">Current Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">85</div>
                  <div className="text-sm text-muted-foreground">Faculty Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">15,000+</div>
                  <div className="text-sm text-muted-foreground">Alumni Worldwide</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Location</h4>
                    <p className="text-muted-foreground">Port Antonio, Portland, Jamaica</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-secondary text-secondary-foreground p-3 rounded-lg">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Founded</h4>
                    <p className="text-muted-foreground">1890 - 133 years of excellence</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-success text-success-foreground p-3 rounded-lg">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Education Level</h4>
                    <p className="text-muted-foreground">Grades 7-13 (Ages 11-18)</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-primary mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A legacy of excellence that continues to grow with each graduating class
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-elegant transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <achievement.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-lg text-primary">{achievement.title}</h3>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                  <Badge variant="secondary" className="font-semibold">
                    {achievement.stats}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* School History Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-primary mb-4">
              Our History
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our journey of educational excellence
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="bg-primary text-primary-foreground rounded-full w-20 h-20 flex items-center justify-center font-bold text-sm text-center shrink-0">
                    {milestone.year}
                  </div>
                  <Card className="flex-1 p-6">
                    <h3 className="font-semibold text-xl text-primary mb-2">
                      {milestone.event}
                    </h3>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-primary mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced educators dedicated to student success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-elegant transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="bg-gradient-primary text-primary-foreground w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                    <Users className="h-10 w-10" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-primary">
                    {leader.name}
                  </h3>
                  <Badge variant="secondary" className="text-sm">
                    {leader.position}
                  </Badge>
                  <p className="text-sm text-muted-foreground font-medium">
                    {leader.credentials}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {leader.description}
                  </p>
                </CardContent>
              </Card>
            ))}
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
              The principles that guide our educational philosophy and daily practice
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center hover:shadow-elegant transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="bg-gradient-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary">Excellence</h3>
                <p className="text-muted-foreground">
                  We pursue the highest standards in academics, character, and personal achievement, 
                  encouraging every student to reach their full potential.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-elegant transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="bg-gradient-secondary text-secondary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary">Integrity</h3>
                <p className="text-muted-foreground">
                  We foster honesty, respect, and moral principles in all our interactions, 
                  building character that lasts a lifetime.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-elegant transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="bg-success text-success-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Star className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary">Achievement</h3>
                <p className="text-muted-foreground">
                  We celebrate success in all its forms and provide the support and 
                  opportunities for every student to achieve their goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;