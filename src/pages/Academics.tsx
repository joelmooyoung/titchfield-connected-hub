import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Calculator, 
  Microscope, 
  Globe, 
  Palette, 
  Music, 
  Trophy, 
  Award,
  Target,
  Users,
  Star
} from "lucide-react";

const Academics = () => {
  const coreSubjects = [
    { name: "Mathematics", icon: Calculator, description: "Advanced mathematical concepts and problem-solving" },
    { name: "English Language", icon: BookOpen, description: "Communication skills and literary analysis" },
    { name: "Sciences", icon: Microscope, description: "Biology, Chemistry, and Physics" },
    { name: "Social Studies", icon: Globe, description: "History, Geography, and Social Sciences" },
  ];

  const electiveSubjects = [
    "Additional Mathematics",
    "Information Technology", 
    "Visual Arts",
    "Music",
    "Technical Drawing",
    "Spanish",
    "French",
    "Physical Education"
  ];

  const achievements = [
    {
      title: "2025 Schools' Challenge Quiz Victory",
      description: "Historic triumph over Jamaica College with a score of 26-23 points, making us the first rural school to win in nearly twenty years.",
      year: "2025",
      icon: Trophy
    },
    {
      title: "Back-to-Back Championships",
      description: "First and only school to win consecutive Inter-Secondary Schools Girls' Championships in 1963 and 1964.",
      year: "1963-64",
      icon: Award
    },
    {
      title: "Academic Excellence",
      description: "14-year-old Shaynel Hines earned distinctions in both Mathematics and Additional Mathematics at CSEC level.",
      year: "Recent",
      icon: Star
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl font-bold text-primary mb-6">
            Academic Excellence
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Titchfield High School offers a comprehensive curriculum for grades 7–13, aligned with CSEC and CAPE 
            examinations, fostering academic achievement and intellectual growth.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary mb-2">85%</h3>
              <p className="text-muted-foreground">Average CSEC Pass Rate</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-secondary text-secondary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary mb-2">88%</h3>
              <p className="text-muted-foreground">Average CAPE Pass Rate</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary mb-2">99</h3>
              <p className="text-muted-foreground">Dedicated Teachers</p>
            </CardContent>
          </Card>
        </div>

        {/* Core Subjects */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold text-primary mb-8 text-center">
            Core Curriculum
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreSubjects.map((subject, index) => (
              <Card key={index} className="hover:shadow-elegant transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <subject.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{subject.name}</h3>
                  <p className="text-muted-foreground text-sm">{subject.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Elective Subjects */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold text-primary mb-8 text-center">
            Elective Subjects
          </h2>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-3 justify-center">
                {electiveSubjects.map((subject, index) => (
                  <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                    {subject}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Academic Achievements */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold text-primary mb-8 text-center">
            Academic Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-elegant transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center">
                      <achievement.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                      <Badge variant="outline">{achievement.year}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* STEM Programs */}
        <section className="mb-16 bg-muted p-8 rounded-lg">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl font-bold text-primary mb-4">
              Special Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enhancing learning through innovative programs and initiatives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Microscope className="h-5 w-5" />
                  <span>STEM Initiatives</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive Science, Technology, Engineering, and Mathematics programs 
                  preparing students for careers in emerging fields.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5" />
                  <span>Academic Support</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tutoring programs, career counseling, and preparation for regional 
                  and international competitions.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-primary mb-4">
            Ready to Excel?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of learners and discover your potential at Titchfield High School.
          </p>
          <Button size="lg" className="text-lg px-8 py-3">
            Learn About Admissions
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Academics;