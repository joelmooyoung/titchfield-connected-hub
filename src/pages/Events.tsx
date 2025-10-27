import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar, MapPin, Clock, Users, Star, Info, CalendarDays } from "lucide-react";

const Events = () => {
  const homecomingSchedule = [
    { time: "Friday 7:00 PM", date: "March 27, 2026", event: "Welcome Reception", location: "School Grounds", description: "Registration and informal meet-and-greet for returning alumni", type: "Social" },
    { time: "Saturday 9:00 AM", date: "March 28, 2026", event: "Campus Tours", location: "School Campus", description: "Guided tours of renovated facilities and historic sites including The Battery", type: "Tour" },
    { time: "Saturday 12:00 PM", date: "March 28, 2026", event: "Alumni Lunch", location: "School Cafeteria", description: "Reunion lunch with class meetups and networking", type: "Meal" },
    { time: "Saturday 3:00 PM", date: "March 28, 2026", event: "Sports Day", location: "Sports Field", description: "Alumni vs Current Students friendly matches", type: "Sports" },
    { time: "Saturday 7:00 PM", date: "March 28, 2026", event: "Homecoming Dance", location: "The Ruins, Port Antonio", description: "Formal evening celebration at historic venue", type: "Social" },
    { time: "Sunday 10:00 AM", date: "March 29, 2026", event: "Church Service", location: "Christ Church, Port Antonio", description: "Traditional thanksgiving service", type: "Religious" },
    { time: "Sunday 1:00 PM", date: "March 29, 2026", event: "Farewell Brunch", location: "School Grounds", description: "Final gathering before departure", type: "Meal" },
  ];

  const getEventTypeBadge = (type: string) => {
    const colorMap: { [key: string]: string } = {
      Social: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      Sports: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      Cultural: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
      Educational: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
      Formal: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
      Health: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
      Family: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
      Religious: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    };
    
    return (
      <Badge className={`${colorMap[type]} text-xs px-2 py-1`}>
        {type}
      </Badge>
    );
  };
  const upcomingEvents = [
    {
      id: 1,
      title: "Homecoming Weekend 2026",
      date: "March 27-29, 2026",
      time: "All Day",
      location: "THS Campus & Port Antonio",
      description: "Annual homecoming celebration bringing alumni and the school community together for a weekend of festivities, including the traditional Homecoming Dance at the Ruins.",
      featured: true,
      category: "Alumni Event",
      status: "In Planning",
      image: "/lovable-uploads/ths-aerial-campus.jpg"
    },
    {
      id: 2,
      title: "CSEC Examinations",
      date: "May-June 2025",
      time: "9:00 AM",
      location: "Examination Hall",
      description: "Caribbean Secondary Education Certificate examinations for Grade 11 students.",
      featured: false,
      category: "Academic",
      status: "Upcoming",
      image: null
    },
    {
      id: 3,
      title: "CAPE Examinations",
      date: "May-June 2025",
      time: "9:00 AM",
      location: "Examination Hall",
      description: "Caribbean Advanced Proficiency Examination for Sixth Form students.",
      featured: false,
      category: "Academic",
      status: "Upcoming",
      image: null
    },
    {
      id: 4,
      title: "Graduation Ceremony 2025",
      date: "July 2025",
      time: "6:00 PM",
      location: "School Grounds",
      description: "Annual graduation ceremony celebrating our newest alumni and their achievements.",
      featured: false,
      category: "Ceremony",
      status: "Upcoming",
      image: null
    }
  ];

  const pastEvents = [
    {
      id: 1,
      title: "Schools' Challenge Quiz Victory Celebration",
      date: "April 2025",
      category: "Academic",
      description: "Port Antonio and school community celebrated THS's historic 2025 Schools' Challenge Quiz championship victory over Jamaica College.",
      attendees: "500+",
      highlights: "Recognition ceremony by Portland Municipal Corporation"
    },
    {
      id: 2,
      title: "238th Anniversary Celebrations",
      date: "2024",
      category: "Milestone",
      description: "Celebrated 238 years of educational excellence with church service at Christ Church and campus events honoring THS's rich history.",
      attendees: "800+",
      highlights: "Historical exhibition, alumni testimonials"
    },
    {
      id: 3,
      title: "2016 Quiz Championship Celebration",
      date: "2016",
      category: "Academic",
      description: "THS celebrated becoming the first rural school in nearly 20 years to win the TVJ Schools' Challenge Quiz.",
      attendees: "600+",
      highlights: "Community parade, school assembly"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "upcoming":
        return <Badge className="bg-success text-success-foreground">Upcoming</Badge>;
      case "planning":
        return <Badge variant="secondary">In Planning</Badge>;
      default:
        return <Badge variant="outline">Event</Badge>;
    }
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl font-bold text-primary mb-6">
            THS Events & Activities
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay connected with upcoming events, celebrations, and important dates in our school calendar
          </p>
        </div>

        {/* Featured Event */}
        <section className="mb-16">
          <div className="flex items-center space-x-2 mb-8">
            <Star className="h-6 w-6 text-primary" />
            <h2 className="font-display text-3xl font-bold text-primary">
              Featured Event
            </h2>
          </div>
          
          {upcomingEvents.filter(event => event.featured).map((event, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-elegant transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-gradient-hero text-primary-foreground">{event.category}</Badge>
                      {getStatusBadge(event.status)}
                    </div>
                    <CardTitle className="text-3xl text-primary mb-4">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span className="text-lg font-semibold">{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-muted-foreground" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-muted-foreground" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      {event.description}
                    </p>
                    <Button size="lg" className="w-full md:w-auto">
                      <Users className="mr-2 h-4 w-4" />
                      Learn More
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </section>

        {/* Detailed Homecoming Schedule */}
        <section className="mb-16">
          <div className="flex items-center space-x-2 mb-8">
            <CalendarDays className="h-6 w-6 text-primary" />
            <h2 className="font-display text-3xl font-bold text-primary">
              Homecoming 2026 - Detailed Schedule
            </h2>
          </div>
          
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">
                Event Schedule & Details
              </CardTitle>
              <p className="text-muted-foreground">
                Complete breakdown of all Homecoming activities with dates, times, and locations
              </p>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-96">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[140px]">Date</TableHead>
                      <TableHead>Event</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Type</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {homecomingSchedule.map((event, index) => (
                      <TableRow key={index} className="hover:bg-muted/50">
                        <TableCell className="font-medium text-sm">
                          {event.date}
                        </TableCell>
                        <TableCell className="font-semibold text-primary">
                          {event.event}
                        </TableCell>
                        <TableCell className="text-sm">
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-3 w-3 text-muted-foreground" />
                            <span>{event.location}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-sm">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3 text-muted-foreground" />
                            <span>{event.time}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          {getEventTypeBadge(event.type)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </CardContent>
          </Card>
        </section>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold text-primary mb-8">
            Upcoming Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.filter(event => !event.featured).map((event, index) => (
              <Card key={index} className="hover:shadow-elegant transition-shadow overflow-hidden">
                {event.image && (
                  <div className="w-full h-48">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline">{event.category}</Badge>
                    {getStatusBadge(event.status)}
                  </div>
                  <CardTitle className="text-xl text-primary">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    {event.description}
                  </p>
                  <Button variant="outline" size="sm">
                    More Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold text-primary mb-8">
            Recent Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index} className="opacity-90">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary">{event.category}</Badge>
                    <span className="text-sm text-muted-foreground">{event.date}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Event Information */}
        <section className="bg-muted p-8 rounded-lg text-center">
          <div className="max-w-2xl mx-auto">
            <Info className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h2 className="font-display text-3xl font-bold text-primary mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Don't miss out on important events and celebrations. Follow our news page 
              and social media for the latest updates on all THS activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                View News & Updates
              </Button>
              <Button variant="outline" size="lg">
                Contact School Office
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;