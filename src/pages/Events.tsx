import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users, Star, Info } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "SAVE THE DATE: Homecoming Reunion 2026",
      date: "March 29 - April 5, 2026",
      time: "Multiple Events",
      location: "Port Antonio, Jamaica",
      category: "Homecoming",
      description: "Celebrating 240 Years (1786-2026) - Join us for our historic Homecoming Reunion! A week-long celebration of Titchfield High School's legacy, featuring alumni gatherings, school tours, cultural events, and special ceremonies.",
      image: "/lovable-uploads/ea54f5da-cf1f-4517-b6f9-84562cec2489.png",
      featured: true,
      status: "upcoming"
    },
    {
      title: "Homecoming Activities Schedule 2026",
      date: "March 29 - April 5, 2026",
      time: "Full Week Program",
      location: "Port Antonio & THS Campus",
      category: "Homecoming",
      description: "Complete schedule of Homecoming week activities including Meet & Greet, Titchfield Day Parade, Career Workshops, Grand Gala Dinner, Health Fair, Sports Day, Family Fun Day, and Thanksgiving Service.",
      image: "/lovable-uploads/b797f563-3228-4199-96f1-823abd8c634a.png",
      featured: false,
      status: "upcoming"
    },
    {
      title: "Annual Founder's Day Celebration",
      date: "TBA 2025",
      time: "9:00 AM - 3:00 PM",
      location: "THS Campus",
      category: "School Tradition",
      description: "Celebrating the founding of Titchfield High School with special ceremonies, performances, and recognition of achievements.",
      featured: false,
      status: "planning"
    },
    {
      title: "Sports Day Championships",
      date: "TBA 2025",
      time: "8:00 AM - 4:00 PM", 
      location: "THS Athletic Grounds",
      category: "Sports",
      description: "Annual inter-house sporting competitions featuring track and field, team sports, and athletic excellence.",
      featured: false,
      status: "planning"
    }
  ];

  const pastEvents = [
    {
      title: "Schools' Challenge Quiz Victory Celebration",
      date: "April 2025",
      category: "Academic",
      description: "Celebrated our historic Schools' Challenge Quiz championship victory over Jamaica College."
    },
    {
      title: "Alumni Sports Equipment Donation",
      date: "2024",
      category: "Alumni",
      description: "Andrew O'Geare and TPSSA donated netball equipment to support our athletic programs."
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