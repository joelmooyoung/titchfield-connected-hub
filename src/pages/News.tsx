import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Trophy, Users, Award, AlertCircle, Megaphone } from "lucide-react";

const News = () => {
  const featuredNews = [
    {
      title: "SAVE THE DATE: Homecoming Reunion 2026",
      date: "March 29 - April 5, 2026",
      category: "Homecoming Event",
      description: "Celebrating 240 Years (1786-2026) - Join us in Port Antonio, Jamaica for our historic Homecoming Reunion! Mark your calendars for this momentous celebration of Titchfield High School's legacy.",
      source: "THS Administration",
      link: "#",
      image: "/lovable-uploads/ea54f5da-cf1f-4517-b6f9-84562cec2489.png",
      featured: true,
      isImageBanner: true
    },
    {
      title: "Historic Schools' Challenge Quiz Victory",
      date: "April 8, 2025",
      category: "Academic Achievement",
      description: "Titchfield High defeats Jamaica College 26-23 in the 2025 Schools' Challenge Quiz finals, bringing home the championship after years of dedication and hard work.",
      source: "Jamaica Gleaner",
      link: "https://jamaica-gleaner.com/article/news/20250408/titchfield-high-wins-2025-schools-challenge-quiz",
      image: "🏆",
      featured: true
    },
    {
      title: "Big Gifts for SCQ Winners",
      date: "April 15, 2025", 
      category: "Recognition",
      description: "The Schools' Challenge Quiz team receives significant rewards and recognition from various sponsors and supporters following their historic victory.",
      source: "Jamaica Gleaner",
      link: "https://jamaica-gleaner.com/article/news/20250415/big-gifts-titchfields-schools-challenge-quiz-winners",
      image: "🎁"
    },
    {
      title: "School Celebrates SCQ Victory",
      date: "April 14, 2025",
      category: "Celebration",
      description: "Watch as Titchfield High celebrates their momentous Schools' Challenge Quiz championship with the entire school community joining in the festivities.",
      source: "Jamaica Observer",
      link: "https://www.jamaicaobserver.com/2025/04/14/watch-titchfield-high-celebrates-school-challenge-quiz-win/",
      image: "🎉"
    }
  ];

  const recentNews = [
    {
      title: "Shift System for Learning",
      date: "September 4, 2024",
      category: "Infrastructure",
      description: "Titchfield students implement innovative learning schedule to maximize educational opportunities despite space constraints.",
      source: "Jamaica Observer",
      link: "https://www.jamaicaobserver.com/2024/09/04/titchfield-students-will-take-turns-learning/",
      urgency: "info"
    },
    {
      title: "Progress at Titchfield High",
      date: "September 5, 2023",
      category: "Development",
      description: "Significant progress reported at Titchfield High School with ongoing improvements to facilities and academic programs.",
      source: "Jamaica Observer", 
      link: "https://www.jamaicaobserver.com/2023/09/05/progress-made-at-titchfield-high-more-to-do/",
      urgency: "positive"
    },
    {
      title: "Alumni Achievement: BAME Nurse of the Year",
      date: "2024",
      category: "Alumni Success",
      description: "Marsha Jones, THS alumna, honored as BAME Nurse of the Year for outstanding leadership in NHS South West London.",
      source: "School Reports",
      link: "#",
      urgency: "success"
    },
    {
      title: "Young Academic Star Shines",
      date: "2024",
      category: "Academic Excellence",
      description: "14-year-old Shaynel Hines earns distinctions in Mathematics and Additional Mathematics at CSEC level.",
      source: "School Reports",
      link: "#",
      urgency: "success"
    }
  ];

  const categories = [
    { name: "All News", count: featuredNews.length + recentNews.length },
    { name: "Academic Achievement", count: 4 },
    { name: "Sports", count: 2 },
    { name: "Alumni Success", count: 3 },
    { name: "Infrastructure", count: 2 },
    { name: "Recognition", count: 1 }
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