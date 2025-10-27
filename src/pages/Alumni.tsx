import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";
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

// Alumni photos - only use actual photos we have
import edwardBaughPhoto from "@/assets/alumni/edward-baugh.jpg";
import deverOrgillPhoto from "@/assets/alumni/dever-orgill.jpg";
import hopeAndersonPhoto from "@/assets/alumni/hope-anderson.jpg";

const donaldHarrisPhoto = "/lovable-uploads/4a57a7bb-13d9-4202-b047-f199056bc876.png";
const michaelLeeChinPhoto = "/lovable-uploads/60c11692-1bdf-43c6-bd35-0944caf1de83.png";
const bryanSykesPhoto = "/lovable-uploads/19001559-740d-461e-995b-34fd5453b138.png";
const schoolLogo = "/titchfield-crest.png"; // Use school logo for alumni without photos

const Alumni = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      established: "2000",
      members: "1,000+",
      president: "Paul 'Paca' Perry",
      description: "Vibrant chapter serving the South Florida Caribbean community. Led $43K donation (2025) for scholarships and library, plus $5K Neville Beharie awards.",
      contact: "president@thsalumni-fl.org",
      website: "https://thsalumni-fl.org",
      activities: ["Hurricane Relief Efforts", "Student Support", "Scholarship Fundraising", "Cultural Programs"]
    }
  ];

  const notableAlumni = [
    {
      name: "Prof. Edward Baugh",
      class: "1936-2023",
      achievement: "Jamaica's Poet Laureate & Literary Scholar",
      field: "Literature & Academia",
      description: "UWI English professor, Jamaica's Poet Laureate (2019), and prolific scholar/poet (It Takes a Mighty Fire). Mentored Caribbean lit icons, leading authority on Derek Walcott's work",
      photo: edwardBaughPhoto
    },
    {
      name: "Donald J. Harris",
      class: "Born 1938",
      achievement: "Stanford Economist",
      field: "Economics",
      description: "Distinguished Stanford University economist and father of U.S. Vice President Kamala Harris, specializing in development economics",
      photo: donaldHarrisPhoto
    },
    {
      name: "Michael Lee-Chin",
      class: "Born 1951",
      achievement: "Billionaire Philanthropist & Investor",
      field: "Business & Philanthropy",
      description: "Self-made billionaire (net worth ~$2B), founder of Portland Holdings. Chairs Caribbean Investment Fund, major donor to UWI arts center and Jamaican education",
      photo: michaelLeeChinPhoto
    },
    {
      name: "Hon. Bryan Sykes",
      class: "Appointed 2019",
      achievement: "Chief Justice of Jamaica",
      field: "Law & Justice",
      description: "Chief Justice of Jamaica since 2019, leading the nation's judiciary with distinction and integrity",
      photo: bryanSykesPhoto
    },
    {
      name: "Prof. Manley West, OM",
      class: "1929-2012",
      achievement: "Pharmacologist & Research Pioneer",
      field: "Medical Research",
      description: "UWI pharmacology professor who pioneered Canasol (marijuana-derived glaucoma drug). Order of Jamaica recipient; bridged academia and medicine with cannabinoid breakthroughs",
      photo: schoolLogo
    },
    {
      name: "Ishion Hutchinson",
      class: "Titchfield Alumnus",
      achievement: "Award-Winning Poet & Academic",
      field: "Literature & Poetry",
      description: "Acclaimed Jamaican poet and academic, author of multiple poetry collections and professor at Cornell University",
      photo: schoolLogo
    },
    {
      name: "Dr. Jimmy J. Brown",
      class: "Titchfield Alumnus",
      achievement: "Otolaryngologist & Academic",
      field: "Medicine & Academia",
      description: "U.S.-based otolaryngologist and academic physician, noted for contributions to medical education and ENT specialty",
      photo: schoolLogo
    },
    {
      name: "Dr. Kingsley Chin",
      class: "Class of 1970s",
      achievement: "Orthopedic Spine Surgeon",
      field: "Medicine & Business",
      description: "Harvard-educated orthopedic surgeon, CEO, and philanthropist who attended Titchfield before earning a football scholarship to Columbia University",
      photo: schoolLogo
    },
    {
      name: "Dr. Answorth Allen",
      class: "Titchfield Alumnus",
      achievement: "Sports Medicine Surgeon",
      field: "Orthopedic Surgery",
      description: "Associate Surgeon-in-Chief at Hospital for Special Surgery in New York, renowned sports medicine specialist",
      photo: schoolLogo
    },
    {
      name: "Konya Plummer",
      class: "Born 1997",
      achievement: "Reggae Girlz Captain",
      field: "Women's Football",
      description: "Captain of Jamaica's Reggae Girlz, first Jamaican-born player drafted by NWSL, plays for Orlando Pride",
      photo: schoolLogo
    },
    {
      name: "Dever Orgill",
      class: "Born 1990",
      achievement: "International Footballer",
      field: "Athletics & Sports",
      description: "Jamaica national team footballer who represented the country at international level and captained youth teams",
      photo: deverOrgillPhoto
    },
    {
      name: "Dr. Hope Anderson",
      class: "1950-2016",
      achievement: "Physician & Chess Champion",
      field: "Medicine & Sports",
      description: "Pioneering physician, former Jamaican women's chess champion, and dedicated educator who broke barriers in multiple fields",
      photo: hopeAndersonPhoto
    },
    {
      name: "Peter Moo-Young",
      class: "Titchfield Alumnus",
      achievement: "National Table Tennis Champion",
      field: "Athletics & Sports",
      description: "Multiple-time Jamaica national table tennis champion and prominent athlete representing Titchfield's sporting excellence",
      photo: schoolLogo
    },
    {
      name: "Hon. Fred M. Jones, OBE",
      class: "1890-1971",
      achievement: "Custos of Portland",
      field: "Public Service & Agriculture",
      description: "Distinguished planter and Custos Rotulorum of Portland from 1965-1971, served under Queen Elizabeth II",
      photo: schoolLogo
    },
    {
      name: "Stevel Marc",
      class: "Class of 2000",
      achievement: "International Model & Actor",
      field: "Entertainment",
      description: "Mr. Titchfield 2000 who launched successful international modeling and acting career based in South Africa",
      photo: schoolLogo
    },
    {
      name: "Kayleah Shelton",
      class: "Class of 2020s",
      achievement: "White House HBCU Scholar",
      field: "Academia & Public Service",
      description: "2024 HBCU White House Scholar studying at University of the District of Columbia, recognized for academic excellence",
      photo: schoolLogo
    },
    {
      name: "Dr. Omar Newell",
      class: "Titchfield Transfer Student",
      achievement: "Entrepreneur & Attorney",
      field: "Law & Business",
      description: "Northwestern University Law graduate, entrepreneur, and public figure who transferred to Titchfield during youth",
      photo: schoolLogo
    },
    {
      name: "Zedan Martin",
      class: "Class of 2016",
      achievement: "Schools' Challenge Quiz Captain",
      field: "Academia",
      description: "Captain of Titchfield's victorious 2016 Schools' Challenge Quiz team, leading the school to championship glory",
      photo: schoolLogo
    },
    {
      name: "Dr. André Gordon",
      class: "Titchfield Alumnus",
      achievement: "2022 National Medallist for Science & Technology",
      field: "Technology & Innovation",
      description: "Founder and Managing Director of Technological Solutions Limited, recognized with Jamaica's National Medal for Science and Technology for contributions to land surveying and geospatial technology",
      photo: schoolLogo
    },
    {
      name: "Brittnie-Lee Duffus",
      class: "Class of 2017 Head Girl",
      achievement: "Emerging Higher Education Scholar",
      field: "Academia & Research",
      description: "Earned degrees from Tougaloo College, now pursuing PhD at Indiana University (started 2021). Emerging leader in higher education research",
      photo: schoolLogo
    },
    {
      name: "Marsha Jones",
      class: "Titchfield Alumna",
      achievement: "BAME Nurse of the Year 2023",
      field: "Healthcare Leadership",
      description: "NHS South West London Director of Quality Governance. Named BAME Nurse of the Year (2023) for leadership in empowering minority healthcare professionals",
      photo: schoolLogo
    },
    {
      name: "Andrew O'Geare",
      class: "Class of 1983",
      achievement: "Alumni Sports Association Leader",
      field: "Sports Administration & Philanthropy",
      description: "Secretary of Titchfield Past Students Sports Association (TPSSA) and VP of Alumni Association. Donated netball gear (2023) and drives funding for track/netball teams",
      photo: schoolLogo
    },
    {
      name: "Paul 'Paca' Perry",
      class: "Titchfield Alumnus",
      achievement: "South Florida Alumni Chapter President",
      field: "Community Leadership & Philanthropy",
      description: "President of South Florida Alumni Chapter since 2000. Grew chapter to 1,000+ members; led $43K donation (2025) for scholarships/library, plus $5K Neville Beharie awards (2022). Fundraising powerhouse",
      photo: schoolLogo
    },
    {
      name: "Grace Martin",
      class: "Titchfield Alumna",
      achievement: "Alumni Chapter Leader",
      field: "Community Service & Philanthropy",
      description: "Active South Florida chapter member who co-led 2025 $43K handover for student well-being and school support initiatives",
      photo: schoolLogo
    },
    {
      name: "Calvin Reece",
      class: "Titchfield Alumnus",
      achievement: "Alumni Chapter Leader",
      field: "Community Service & Philanthropy",
      description: "Active South Florida chapter member who co-led 2025 $43K handover for student well-being and school support initiatives",
      photo: schoolLogo
    }
  ];

  const upcomingEvents = [
    {
      title: "Annual Alumni Homecoming 2025",
      date: "November 21-23, 2025",
      location: "THS Campus, Port Antonio",
      description: "Three-day celebration with gala dinner, campus tours, class reunions, and sports activities. Celebrating 239 years of excellence!",
      organizer: "Main Alumni Association"
    },
    {
      title: "North America Chapter Annual Reunion",
      date: "July 12, 2025",
      location: "Toronto, Canada",
      description: "Annual networking event, scholarship fundraiser, and recognition of distinguished alumni achievers",
      organizer: "THS Alumni North America"
    },
    {
      title: "UK Chapter Professional Development Summit",
      date: "September 20, 2025",
      location: "London, England",
      description: "Career development workshops, mentorship conference, and networking opportunities for Caribbean professionals",
      organizer: "THS Alumni UK Chapter"
    },
    {
      title: "South Florida Caribbean Heritage Festival",
      date: "August 16, 2025",
      location: "Miami, Florida",
      description: "Cultural celebration, community outreach, and student scholarship drive featuring Caribbean cuisine and entertainment",
      organizer: "THS Alumni South Florida"
    },
    {
      title: "Virtual Alumni Networking Session",
      date: "Monthly - First Saturday",
      location: "Online (Zoom)",
      description: "Monthly virtual meetups connecting THS alumni worldwide for professional networking and community building",
      organizer: "THS Alumni Association"
    }
  ];

  const achievements = [
    { icon: Users, label: "Total Alumni", value: "15,000+", description: "Since 1786" },
    { icon: Globe, label: "Countries", value: "50+", description: "Global Presence" },
    { icon: Heart, label: "Scholarships", value: "$2M+", description: "Given Annually" },
    { icon: Award, label: "Distinguished Leaders", value: "1,000+", description: "Across Fields" }
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
              239 Years of Excellence • 15,000+ Graduates Worldwide
            </p>
            <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto mb-8">
              From Port Antonio to the world stage - our alumni community spans the globe, 
              featuring distinguished leaders in government, business, academia, sports, and the arts. 
              United by the motto "Virtute et Eruditione" (By Virtue and Learning), THS graduates 
              continue to make their mark across every field of human endeavor.
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
              Distinguished leaders, innovators, and achievers proudly representing Titchfield High School across the globe
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notableAlumni.map((alumnus, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300">
                <CardContent className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto mb-4">
                    <img 
                      src={alumnus.photo} 
                      alt={`${alumnus.name} portrait`}
                      className="w-full h-full object-cover rounded-full border-2 border-primary/20"
                    />
                  </div>
                  
                  <div>
                    <h3 className="font-display text-xl font-bold text-primary">
                      {alumnus.name}
                    </h3>
                    <Badge variant="secondary" className="mt-2">
                      {alumnus.class}
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