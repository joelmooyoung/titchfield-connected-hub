import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap,
  Calendar,
  Award,
  Users,
  BookOpen,
  Trophy
} from "lucide-react";

// Principal photos
import williamPlantPhoto from "@/assets/principals/william-plant.jpg";
import samBrownPhoto from "@/assets/principals/sam-brown.jpg";
import capThomasPhoto from "@/assets/principals/cap-thomas.jpg";
const mortimerGeddesPhoto = "/lovable-uploads/8a4a4ac9-5271-4b21-8b6e-2d43f7313cf5.png";
const lloydChinPhoto = "/lovable-uploads/ec7b25bb-7589-48cb-a45a-814d92b044b6.png";
const lincolnThaxterPhoto = "/lovable-uploads/1ec55079-55ae-4314-9b92-1db394b37ee0.png";
import ivyMckenziePhoto from "@/assets/principals/ivy-mckenzie.jpg";
const richardThompsonPhoto = "/lovable-uploads/18b2f10c-269b-4f67-aa0f-c6861b1a86a6.png";

const PastPrincipals = () => {
  const principals = [
    {
      name: "Major William Henry Plant",
      tenure: "1885–1927",
      duration: "42 years",
      achievements: [
        "First headmaster when school relocated to Fort George in 1886",
        "Established day school for both boys and girls",
        "Oversaw transition from 'Free School' to formal secondary institution",
        "Created infant, elementary, and secondary departments"
      ],
      legacy: "Plant House named in his honor",
      description: "Major Plant laid the foundation for the school's academic and administrative structure during his transformative 42-year tenure.",
      photo: williamPlantPhoto
    },
    {
      name: "Sam Brown",
      tenure: "1927–1951",
      duration: "24 years",
      achievements: [
        "Guided Titchfield through significant growth period",
        "Solidified school's reputation as leading educational institution",
        "Contributed to early academic and extracurricular achievements"
      ],
      legacy: "Brown House named in his honor",
      description: "Sam Brown's leadership contributed to establishing Titchfield as a premier institution in Portland.",
      photo: samBrownPhoto
    },
    {
      name: "C.A.P. Thomas",
      tenure: "Dates Unspecified",
      duration: "Unknown",
      achievements: [
        "Significant contributions to the institution",
        "Impact recognized through house naming"
      ],
      legacy: "One of the school houses named after him",
      description: "Though specific dates are not documented, C.A.P. Thomas made lasting contributions to Titchfield High School.",
      photo: capThomasPhoto
    },
    {
      name: "Mortimer Geddes",
      tenure: "1962–1974",
      duration: "12 years",
      achievements: [
        "Led school during transformative period",
        "Oversaw academic and extracurricular advancements",
        "Strengthened school's competitive spirit in sports",
        "Guided back-to-back Girls Championships wins (1963-1964)"
      ],
      legacy: "Geddes House and Mortimer Geddes Trophy (Boys' Championship)",
      description: "Mortimer Geddes strengthened Titchfield's competitive spirit and academic excellence during a transformative era.",
      photo: mortimerGeddesPhoto
    },
    {
      name: "Lloyd O. Chin",
      tenure: "1976–1993",
      duration: "17 years",
      achievements: [
        "Guided school through late 20th century challenges",
        "Maintained academic rigor and standards",
        "Fostered comprehensive student development",
        "Strengthened community connections"
      ],
      legacy: "Chin House named in his honor",
      description: "Lloyd Chin's 17-year leadership focused on maintaining academic excellence while fostering holistic student development.",
      photo: lloydChinPhoto
    },
    {
      name: "Lincoln Thaxter",
      tenure: "1993–2003",
      duration: "10 years",
      achievements: [
        "Emphasized academic excellence and community engagement",
        "Continued growth in school's reputation",
        "Strengthened Portland community connections"
      ],
      legacy: "Continued legacy of educational excellence",
      description: "Lincoln Thaxter led Titchfield with emphasis on academic excellence and strong community engagement.",
      photo: lincolnThaxterPhoto
    },
    {
      name: "Ivy McKenzie",
      tenure: "2003–2008",
      duration: "5 years",
      achievements: [
        "Oversaw period of modernization",
        "Ensured relevance in changing educational landscape",
        "Nurtured student potential",
        "Maintained proud school traditions"
      ],
      legacy: "Modernization and tradition balance",
      description: "Ivy McKenzie successfully balanced modernization with maintaining Titchfield's cherished traditions.",
      photo: ivyMckenziePhoto
    },
    {
      name: "Richard A. Thompson",
      tenure: "2008–Present",
      duration: "16+ years",
      achievements: [
        "Oversaw 230th anniversary celebrations (2016)",
        "Led 2016 Schools' Challenge Quiz victory",
        "First rural school SCQ win in nearly two decades",
        "Emphasized academic excellence and co-curricular achievements",
        "Strengthened community involvement"
      ],
      legacy: "Current principal continuing legacy of Virtute et Eruditione",
      description: "Richard Thompson has overseen significant milestones while continuing Titchfield's legacy of academic excellence and community engagement.",
      photo: richardThompsonPhoto
    }
  ];

  const houses = [
    { name: "Brown House", principal: "Sam Brown" },
    { name: "Chin House", principal: "Lloyd O. Chin" },
    { name: "Geddes House", principal: "Mortimer Geddes" },
    { name: "Plant House", principal: "Major William Henry Plant" },
    { name: "Grossett House", principal: "Notable benefactor" },
    { name: "Sherlock House", principal: "Notable benefactor" }
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Past Principals
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Honoring the Leaders Who Shaped Our Legacy
            </p>
            <p className="text-lg text-primary-foreground/80">
              Since 1786, Titchfield High School has been guided by distinguished principals 
              who have shaped our legacy of academic excellence and community impact.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-primary text-primary-foreground w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="h-10 w-10" />
            </div>
            <h2 className="font-display text-3xl font-bold text-primary mb-6">
              Leadership Legacy
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our six extracurricular houses—Brown, Chin, Geddes, Grossett, Plant, and Sherlock—are 
              named after past principals and notable benefactors, reflecting their enduring influence 
              on our school community.
            </p>
          </div>
        </div>
      </section>

      {/* Principals Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-primary mb-4">
              Our Distinguished Leaders
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each principal has contributed uniquely to our school's growth and excellence
            </p>
          </div>

          <div className="space-y-8">
            {principals.map((principal, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Principal Photo */}
                    <div className="lg:col-span-1">
                      <div className="text-center">
                        <div className="w-32 h-32 mx-auto mb-4">
                          <img 
                            src={principal.photo} 
                            alt={`${principal.name} portrait`}
                            className="w-full h-full object-cover rounded-full border-4 border-primary/20 shadow-md"
                          />
                        </div>
                        <h3 className="font-display text-xl font-bold text-primary mb-2">
                          {principal.name}
                        </h3>
                        <div className="flex items-center justify-center space-x-2 mb-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground text-sm">{principal.tenure}</span>
                        </div>
                        <Badge variant="secondary" className="mb-4">
                          {principal.duration}
                        </Badge>
                      </div>
                    </div>

                    {/* Principal Description */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center mb-4">
                        <GraduationCap className="h-5 w-5 text-primary mr-2" />
                        <h4 className="font-semibold text-primary">About</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {principal.description}
                      </p>
                    </div>

                    {/* Achievements */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center mb-4">
                        <Trophy className="h-5 w-5 text-primary mr-2" />
                        <h4 className="font-semibold text-primary">Key Achievements</h4>
                      </div>
                      <ul className="space-y-2">
                        {principal.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Legacy */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center mb-4">
                        <Award className="h-5 w-5 text-primary mr-2" />
                        <h4 className="font-semibold text-primary">Legacy</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {principal.legacy}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* School Houses */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-primary mb-4">
              School Houses
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our extracurricular houses honor the memory of past principals and benefactors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {houses.map((house, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-lg text-primary mb-2">
                    {house.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Named after {house.principal}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-secondary-foreground/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="h-10 w-10" />
          </div>
          <h2 className="font-display text-4xl font-bold mb-4">
            Continuing the Legacy
          </h2>
          <p className="text-xl mb-8 text-secondary-foreground/90 max-w-2xl mx-auto">
            Each generation builds upon the foundation laid by these distinguished leaders, 
            maintaining our commitment to <em>Virtute et Eruditione</em>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastPrincipals;