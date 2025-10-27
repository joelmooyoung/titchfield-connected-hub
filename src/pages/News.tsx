import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Trophy, Users, Award, AlertCircle, Megaphone } from "lucide-react";

const News = () => {
const featuredNews = [
  {
    id: 1,
    title: "Schools' Challenge Quiz Champions 2025",
    date: "April 9, 2025",
    category: "Academic Achievement",
    description: "Titchfield High School has won the 2025 TVJ Schools' Challenge Quiz, defeating Jamaica College 26-23 in a thrilling finale. This marks the second triumph for the Port Antonio-based school in the 55-year history of the competition, with their first win in 2016 when they became the first rural school to win in nearly 20 years.",
    imageUrl: "🏆",
    link: "https://radiojamaicanewsonline.com/local/titchfield-high-wins-tvjs-schools-challenge-quiz-2025",
    source: "Radio Jamaica News",
    featured: true,
    isImageBanner: false,
    image: "🏆"
  },
  {
    id: 2,
    title: "Celebrating 239 Years of Excellence",
    date: "2025",
    category: "Milestone",
    description: "Since its founding in 1786, Titchfield High School continues to be a beacon of academic excellence in Jamaica. As the fifth-oldest high school in the country, THS maintains impressive pass rates of 85% in CSEC and 88% in CAPE examinations.",
    imageUrl: "🎓",
    link: null,
    source: "School Records",
    featured: false,
    isImageBanner: false,
    image: "🎓"
  },
  {
    id: 3,
    title: "Academic Excellence Continues",
    date: "2024-2025",
    category: "Academics",
    description: "Titchfield High School maintains its reputation for academic excellence with consistent CSEC pass rates of 85% and CAPE pass rates of 88%. Our dedicated faculty and motivated students continue to set high standards in education.",
    imageUrl: "📚",
    link: null,
    source: "Academic Affairs Office",
    featured: false,
    isImageBanner: false,
    image: "📚"
  },
  {
    id: 4,
    title: "Historic Fort George Campus",
    date: "Ongoing",
    category: "Heritage",
    description: "Located at 22 Fort George Street, our historic campus sits on the site of the former Fort George barracks, acquired by the Jamaica School Commission in 1883. The Battery wall and cannons overlooking the sea remain iconic features of our campus.",
    imageUrl: "🏰",
    link: null,
    source: "School History",
    featured: false,
    isImageBanner: false,
    image: "🏰"
  }
];

const categories = [
  { name: "Academic", count: 12 },
  { name: "Sports", count: 8 },
  { name: "Alumni", count: 6 },
  { name: "Events", count: 15 },
  { name: "Awards", count: 9 },
  { name: "Community", count: 5 }
];

const recentNews = [
  {
    title: "CSEC & CAPE Excellence",
    category: "Academics",
    description: "THS students continue to excel with 85% CSEC and 88% CAPE pass rates, demonstrating our commitment to academic excellence and quality education.",
    date: "2024-2025 Academic Year",
    urgency: "success",
    source: "Academic Affairs",
    link: "#"
  },
  {
    title: "Fort George Heritage Site",
    category: "Heritage",
    description: "Our historic campus at 22 Fort George Street remains a testament to Jamaica's colonial history, with the Battery wall and cannons still standing as iconic landmarks.",
    date: "Ongoing",
    urgency: "info",
    source: "School Heritage",
    link: "#"
  },
  {
    title: "2016 Quiz Victory",
    category: "Historic Achievement",
    description: "THS became the first rural school in nearly 20 years to win the TVJ Schools' Challenge Quiz, setting the stage for our 2025 victory.",
    date: "2016",
    urgency: "positive",
    source: "School Archives",
    link: "#"
  },
  {
    title: "Fifth-Oldest High School",
    category: "Heritage",
    description: "Established in 1786, Titchfield High School proudly holds the distinction of being Jamaica's fifth-oldest high school, serving generations of students.",
    date: "Since 1786",
    urgency: "info",
    source: "School History",
    link: "#"
  }
];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "success": return "bg-success text-success-foreground";
      case "positive": return "bg-primary text-primary-foreground";
      case "info": return "bg-secondary text-secondary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl font-bold text-primary mb-6">
            THS News & Updates
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest news, achievements, and developments at Titchfield High School
          </p>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">News Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                  <p className="text-muted-foreground text-xs">{category.count} articles</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured News */}
        <section className="mb-16">
          <div className="flex items-center space-x-2 mb-8">
            <Megaphone className="h-6 w-6 text-primary" />
            <h2 className="font-display text-3xl font-bold text-primary">
              Featured News
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredNews.map((news, index) => (
              <Card key={index} className={`hover:shadow-elegant transition-shadow ${news.featured ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{news.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {news.date}
                    </div>
                  </div>
                  {news.isImageBanner ? (
                    <div className="mb-4">
                      <img 
                        src={news.image} 
                        alt={news.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                  ) : (
                    <div className="text-4xl mb-4">{news.image}</div>
                  )}
                  <CardTitle className={`${news.featured ? 'text-2xl' : 'text-xl'} text-primary`}>
                    {news.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`text-muted-foreground mb-6 ${news.featured ? 'text-base' : 'text-sm'}`}>
                    {news.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-secondary">
                      {news.source}
                    </span>
                    {news.link !== "#" && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={news.link} target="_blank" rel="noopener noreferrer">
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

        {/* Recent News */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold text-primary mb-8">
            Recent Updates
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentNews.map((news, index) => (
              <Card key={index} className="hover:shadow-elegant transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">{news.category}</Badge>
                    <div className={`px-2 py-1 rounded-full text-xs ${getUrgencyColor(news.urgency || '')}`}>
                      <div className="flex items-center space-x-1">
                        {news.urgency === 'success' && <Trophy className="h-3 w-3" />}
                        {news.urgency === 'positive' && <Award className="h-3 w-3" />}
                        {news.urgency === 'info' && <AlertCircle className="h-3 w-3" />}
                        <span className="capitalize">{news.urgency || 'news'}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-3 text-primary">
                    {news.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {news.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {news.date}
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-medium text-secondary">
                        {news.source}
                      </span>
                      {news.link !== "#" && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={news.link} target="_blank" rel="noopener noreferrer">
                            Read
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-hero text-primary-foreground p-8 rounded-lg text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-xl mb-6 text-primary-foreground/90">
            Get the latest THS news delivered directly to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button variant="secondary" size="lg">
              Subscribe to Updates
            </Button>
            <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Follow Social Media
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default News;