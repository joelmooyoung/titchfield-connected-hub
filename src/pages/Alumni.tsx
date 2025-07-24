import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Globe, 
  Heart, 
  Award,
  ExternalLink,
  Mail,
  Calendar,
  MapPin,
  Star,
  GraduationCap,
  Briefcase,
  Trophy
} from "lucide-react";

const Alumni = () => {
  const alumniChapters = [
    {
      name: "THS Alumni Association (Main)",
      location: "Jamaica",
      established: "1920",
      members: "5,000+",
      president: "Dr. Marcus Brown",
      description: "The founding alumni association supporting current students and school development.",
      contact: "president@thsalumni.org.jm",
      website: "https://thsalumni.org.jm",
      activities: ["Annual Scholarship Fund", "School Infrastructure Projects", "Mentorship Programs"]
    },
    {
      name: "THS Alumni North America",
      location: "USA & Canada",
      established: "1975",
      members: "3,500+",
      president: "Mrs. Angela Thompson",
      description: "Connecting THS graduates across the United States and Canada.",
      contact: "president@thsalumni-na.org",
      website: "https://thsalumni-na.org",
      activities: ["Student Exchange Programs", "Annual Reunion", "Scholarship Fund"]
    },
    {
      name: "THS Alumni UK Chapter",
      location: "United Kingdom",
      established: "1985",
      members: "2,200+",
      president: "Dr. Winston Clarke",
      description: "Supporting THS graduates and promoting Caribbean education in the UK.",
      contact: "president@thsalumni-uk.org",
      website: "https://thsalumni-uk.org",
      activities: ["Professional Networking", "Educational Partnerships", "Cultural Events"]
    },
    {
      name: "THS Alumni Toronto",
      location: "Toronto, Canada",
      established: "1990",
      members: "1,800+",
      president: "Prof. Sandra Williams",
      description: "The largest Canadian chapter with strong community ties.",
      contact: "president@thsalumni-toronto.ca",
      website: "https://thsalumni-toronto.ca",
      activities: ["Community Outreach", "Youth Mentorship", "Annual Gala"]
    },
    {
      name: "THS Alumni South Florida",
      location: "Miami, Florida",
      established: "1995",
      members: "1,500+",
      president: "Mr. Robert Campbell",
      description: "Vibrant chapter serving the South Florida Caribbean community.",
      contact: "president@thsalumni-fl.org",
      website: "https://thsalumni-fl.org",
      activities: ["Hurricane Relief Efforts", "Student Support", "Cultural Programs"]
    }
  ];

  const notableAlumni = [
    {
      name: "Dr. Patricia Morgan",
      class: "1980",
      achievement: "Nobel Prize Laureate in Medicine",
      field: "Medical Research",
      description: "Groundbreaking research in tropical disease prevention"
    },
    {
      name: "Hon. Michael Davis",
      class: "1975",
      achievement: "Supreme Court Justice",
      field: "Law & Justice",
      description: "First THS graduate appointed to the Supreme Court"
    },
    {
      name: "Prof. Jennifer Thompson",
      class: "1985",
      achievement: "Oxford University Professor",
      field: "Education",
      description: "Leading researcher in Caribbean educational development"
    },
    {
      name: "Dr. Kevin Brown",
      class: "1990",
      achievement: "NASA Engineer",
      field: "Space Technology",
      description: "Lead engineer on Mars exploration missions"
    },
    {
      name: "Ms. Sarah Williams",
      class: "1995",
      achievement: "Olympic Gold Medalist",
      field: "Athletics",
      description: "Track and field champion representing Jamaica"
    },
    {
      name: "Mr. David Clarke",
      class: "2000",
      achievement: "Fortune 500 CEO",
      field: "Business",
      description: "Leading international technology company"
    }
  ];

  const upcomingEvents = [
    {
      title: "Annual Alumni Homecoming",
      date: "April 25-27, 2024",
      location: "THS Campus, Port Antonio",
      description: "Three-day celebration with gala dinner, campus tours, and class reunions",
      organizer: "Main Alumni Association"
    },
    {
      title: "North America Chapter Reunion",
      date: "June 15, 2024",
      location: "Toronto, Canada",
      description: "Annual networking event and scholarship fundraiser",
      organizer: "THS Alumni North America"
    },
    {
      title: "UK Chapter Professional Summit",
      date: "July 20, 2024",
      location: "London, England",
      description: "Career development and mentorship conference",
      organizer: "THS Alumni UK Chapter"
    },
    {
      title: "Caribbean Heritage Festival",
      date: "August 10, 2024",
      location: "Miami, Florida",
      description: "Cultural celebration and community outreach",
      organizer: "THS Alumni South Florida"
    }
  ];

  const achievements = [
    { icon: Users, label: "Total Alumni", value: "15,000+", description: "Worldwide" },
    { icon: Globe, label: "Countries", value: "50+", description: "Global Reach" },
    { icon: Heart, label: "Scholarships", value: "$2M+", description: "Annually" },
    { icon: Award, label: "Notable Achievers", value: "1,000+", description: "Leaders" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              THS Alumni Network
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              15,000+ Graduates Making a Difference Worldwide
            </p>
            <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto mb-8">
              Our alumni community spans the globe, united by shared values and 
              commitment to excellence. Connect with fellow graduates and support 
              the next generation of THS leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Join Alumni Network
              </Button>
              <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Update Your Info
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Stats */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8" />
                </div>
                <div className="font-display text-3xl font-bold text-primary mb-2">
                  {achievement.value}
                </div>
                <div className="font-semibold text-foreground mb-1">
                  {achievement.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Associations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-primary mb-4">
              Alumni Associations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with your local alumni chapter and join a community of THS graduates
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {alumniChapters.map((chapter, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary mb-2">
                        {chapter.name}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{chapter.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>Est. {chapter.established}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="ml-4">
                      {chapter.members} Members
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground text-sm">
                    {chapter.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="font-medium">President:</span>
                      <span className="text-muted-foreground">{chapter.president}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <a href={`mailto:${chapter.contact}`} className="text-primary hover:underline">
                        {chapter.contact}
                      </a>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Activities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {chapter.activities.map((activity, actIndex) => (
                        <Badge key={actIndex} variant="outline" className="text-xs">
                          {activity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Mail className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                    <Button variant="default" size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Website
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Alumni */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-primary mb-4">
              Notable Alumni
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              THS graduates making their mark in various fields around the world
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notableAlumni.map((alumnus, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300">
                <CardContent className="text-center space-y-4">
                  <div className="bg-gradient-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    {alumnus.field === "Medical Research" && <Star className="h-8 w-8" />}
                    {alumnus.field === "Law & Justice" && <Award className="h-8 w-8" />}
                    {alumnus.field === "Education" && <GraduationCap className="h-8 w-8" />}
                    {alumnus.field === "Space Technology" && <Star className="h-8 w-8" />}
                    {alumnus.field === "Athletics" && <Trophy className="h-8 w-8" />}
                    {alumnus.field === "Business" && <Briefcase className="h-8 w-8" />}
                  </div>
                  
                  <div>
                    <h3 className="font-display text-xl font-bold text-primary">
                      {alumnus.name}
                    </h3>
                    <Badge variant="secondary" className="mt-2">
                      Class of {alumnus.class}
                    </Badge>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">
                      {alumnus.achievement}
                    </h4>
                    <p className="text-sm text-muted-foreground font-medium">
                      {alumnus.field}
                    </p>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {alumnus.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-primary mb-4">
              Upcoming Alumni Events
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join fellow alumni at events around the world
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-display text-xl font-bold text-primary mb-2">
                        {event.title}
                      </h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline">
                      {event.organizer}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground text-sm">
                    {event.description}
                  </p>
                  
                  <div className="flex space-x-3">
                    <Button variant="default" size="sm" className="flex-1">
                      Register
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold mb-4">
            Stay Connected with THS
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our alumni network, share your achievements, and help support 
            the next generation of THS students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Join Alumni Directory
            </Button>
            <Button variant="outline" size="lg" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
              Make a Donation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Alumni;