import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Users, Mail, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
// Supabase client will be imported once properly configured

const ChapterDetail = () => {
  const { chapterSlug } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Mock chapter data - in real app, this would be fetched from database
  const chapters = [
    {
      id: 1,
      slug: 'university-of-nairobi',
      university: 'University of Nairobi',
      location: 'Nairobi, Kenya',
      lead: 'Sarah Mwangi',
      members: 45,
      established: '2020',
      email: 'unon@kmun.org',
      description: 'The flagship chapter of KMUN, representing the premier university in Kenya. Our members are passionate about international relations and diplomacy.',
      bannerImage: '/images/chapters/uonbanner2.jpg',
      logo: '/images/chapters/uon-logo.jpg', // expected: uon-logo.jpg
      gallery: [
        '/images/chapters/uon1.jpg',
        '/images/chapters/uon2.jpg',
        '/images/chapters/uon3.jpg',
        '/images/chapters/uon4.jpg',
        '/images/chapters/uon5.jpg',
        '/images/chapters/uonbanner.jpg',
        '/images/chapters/uon.jpg'
        
      ],
      achievements: [
        'Best Delegation Award 2023',
        'Outstanding Research Paper 2022',
        'Most Active Chapter 2021-2023'
      ],
      upcomingEvents: [
        { date: '2025-09-15', event: 'Chapter Meeting', location: 'Main Campus' },
        { date: '2025-10-01', event: 'Mock UN Session', location: 'Assembly Hall' }
      ]
    },
    {
      id: 3,
      slug: 'rongo-university',
      university: 'Rongo University',
      location: 'Rongo, Kenya',
      lead: 'Olodi Arnold Maurice',
      members: 25,
      established: '2024',
      email: 'rongo@kenyamodelun.or.ke',
      description: 'A legacy of shaping leaders and voices. Founded on 4 Aug 2024 during SG Moses Mumo\'s tenure.',
      bannerImage: '/images/chapters/rongo-banner.jpg', // expected: rongo-banner.jpg
      logo: '/images/chapters/rongo-logo.jpg', // expected: rongo-logo.jpg
      gallery: [],
      achievements: [
        'Active GA and ILC simulations',
        'Community clean-ups and debates',
        'Growing membership and digital presence'
      ],
      upcomingEvents: []
    },
    {
      id: 4,
      slug: 'africa-nazarene-university',
      university: 'Africa Nazarene University',
      location: 'Nairobi, Kenya',
      lead: 'Victor Mwangolo',
      members: 43,
      established: '2004',
      email: 'anu@kenyamodelun.or.ke',
      description: 'Founded in 2004 by Muthoni Mahinda; transformative inaugural participation in 2005; sustained leadership legacy.',
      bannerImage: '/images/chapters/anu-banner.jpg', // expected: anu-banner.jpg
      logo: '/images/chapters/anu-logo.jpg', // expected: anu-logo.jpg
      gallery: [],
      achievements: [
        'Transport-supported participation in early years',
        'Strong skill-building in diplomacy and debate'
      ],
      upcomingEvents: []
    },
    {
      id: 5,
      slug: 'jkuat-main-campus',
      university: 'JKUAT Main Campus',
      location: 'Juja, Kenya',
      lead: 'Meek Amani',
      members: 80,
      established: '2019',
      email: 'jkuatmain@kenyamodelun.or.ke',
      description: 'Started in 2019; attained legitimacy in 2022; award-winning and structurally strong chapter.',
      bannerImage: '/images/chapters/jkuat-banner.jpg', // expected: jkuat-banner.jpg
      logo: '/images/chapters/jkuat-logo.jpg', // expected: jkuat-logo.jpg
      gallery: [],
      achievements: [
        'Best in-town chapter (24th Session)',
        'Most improved chapter (24th Session)',
        'Best ILC takeover (25th Session)'
      ],
      upcomingEvents: []
    },
    {
      id: 6,
      slug: 'kca-university',
      university: 'KCA University',
      location: 'Nairobi, Kenya',
      lead: 'Annette Sebby',
      members: 60,
      established: '2024',
      email: 'kca@kenyamodelun.or.ke',
      description: 'Conceived Dec 2023, established Jan 2024. Culture of informed, intentional, impactful youth leadership.',
      bannerImage: '/images/chapters/kca-banner.jpg', // expected: kca-banner.jpg
      logo: '/images/chapters/kca-logo.jpg', // expected: kca-logo.jpg
      gallery: [],
      achievements: [
        'First KCA member in national secretariat at 25th Session',
        'Inaugural local elections and award-winning delegates'
      ],
      upcomingEvents: []
    },
    {
      id: 7,
      slug: 'multimedia-university',
      university: 'Multimedia University',
      location: 'Nairobi, Kenya',
      lead: 'Eugene Gusmao',
      members: 70,
      established: '2018',
      email: 'mmu@kenyamodelun.or.ke',
      description: 'In existence since the 18th Session; consistent performance and structured leadership.',
      bannerImage: '/images/chapters/mmu-banner.jpg', // expected: mmu-banner.jpg
      logo: '/images/chapters/mmu-logo.jpg', // expected: mmu-logo.jpg
      gallery: [],
      achievements: [
        'Sustained growth across 21st-25th sessions',
        'Robust committees and leadership pipeline'
      ],
      upcomingEvents: []
    },
    {
      id: 8,
      slug: 'cuea',
      university: 'Catholic University of Eastern Africa (CUEA)',
      location: 'Nairobi, Kenya',
      lead: 'Kyle Joseph',
      members: 85,
      established: '2017',
      email: 'cuea@kenyamodelun.or.ke',
      description: 'Founded in 2017; multiple best chapter awards; strong digital engagement legacy.',
      bannerImage: '/images/chapters/cuea-banner.jpg', // expected: cuea-banner.jpg
      logo: '/images/chapters/cuea-logo.jpg', // expected: cuea-logo.jpg
      gallery: [],
      achievements: [
        'Best Chapter: 17th, 23rd, 24th Sessions',
        'Best Digital Engagement: 23rd Session'
      ],
      upcomingEvents: []
    },
    {
      id: 9,
      slug: 'maseno-university',
      university: 'Maseno University',
      location: 'Kisumu, Kenya',
      lead: 'Milcah Chepkoech',
      members: 50,
      established: '2022',
      email: 'maseno@kenyamodelun.or.ke',
      description: 'Formed in 2022; GA and ILC focus with chapter and individual accolades.',
      bannerImage: '/images/chapters/maseno-banner.jpg', // expected: maseno-banner.jpg
      logo: '/images/chapters/maseno-logo.jpg', // expected: maseno-logo.jpg
      gallery: [],
      achievements: [
        'Best out-of-town chapter: 23rd Session',
        'UN Women recognition: 24th Session'
      ],
      upcomingEvents: []
    },
    {
      id: 2,
      slug: 'kenyatta-university',
      university: 'Kenyatta University',
      location: 'Nairobi, Kenya',
      lead: 'James Kiprotich',
      members: 32,
      established: '2021',
      email: 'ku@kmun.org',
      description: 'A vibrant chapter focused on youth leadership and international cooperation.',
      bannerImage: '/images/chapters/kenyatta-university-banner.jpg',
      logo: '/images/chapters/kenyatta-university-logo.png',
      gallery: [
        '/images/chapters/kenyatta-university-meeting.jpg',
        '/images/chapters/kenyatta-university-orientation.jpg',
        '/images/chapters/kenyatta-university-team.jpg'
      ],
      achievements: [
        'Best New Chapter 2021',
        'Community Service Award 2022'
      ],
      upcomingEvents: [
        { date: '2024-09-20', event: 'Orientation Session', location: 'Student Center' }
      ]
    }
  ];

  const chapter = chapters.find(c => c.slug === chapterSlug);

  if (!chapter) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Chapter Not Found</h1>
          <p className="text-muted-foreground mb-4">The chapter you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/chapters')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Chapters
          </Button>
        </div>
      </div>
    );
  }

  const handleJoinChapter = async () => {
    try {
      // Simulate API call - replace with actual Supabase function call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Application Sent!",
        description: `Your request to join ${chapter.university} has been sent. You'll hear back soon!`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send application. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" onClick={() => navigate('/chapters')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Chapters
          </Button>
        </div>

        {/* Hero Section */}
        <Card className="mb-8 overflow-hidden">
          <div className="h-64 bg-gradient-to-r from-primary/20 to-primary-foreground/10 flex items-center justify-center relative">
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <img 
                  src={chapter.logo}
                  alt={`${chapter.university} Logo`}
                  className="w-16 h-16 rounded-full object-cover border-4 border-primary/30 shadow-lg"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
                <h1 className="text-4xl font-bold">{chapter.university}</h1>
              </div>
              <p className="text-xl text-muted-foreground flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" />
                {chapter.location}
              </p>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle>About This Chapter</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {chapter.description}
                </p>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  {chapter.achievements.map((achievement, index) => (
                    <Badge key={index} variant="secondary" className="justify-start">
                      {achievement}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Chapter Photos */}
            <Card>
              <CardHeader>
                <CardTitle>Chapter Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {chapter.gallery.map((photo, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-lg">
                      <img 
                        src={photo}
                        alt={`${chapter.university} photo ${index + 1}`}
                        className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder.svg';
                        }}
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-sm font-medium">View Photo</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {chapter.upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div className="flex-1">
                        <h4 className="font-semibold">{event.event}</h4>
                        <p className="text-sm text-muted-foreground">{event.location}</p>
                      </div>
                      <Badge variant="outline">{event.date}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Chapter Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold">{chapter.members} Members</p>
                    <p className="text-sm text-muted-foreground">Active participants</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold">Est. {chapter.established}</p>
                    <p className="text-sm text-muted-foreground">Year established</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold">{chapter.lead}</p>
                    <p className="text-sm text-muted-foreground">Chapter Lead</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Join Chapter */}
            <Card>
              <CardHeader>
                <CardTitle>Join This Chapter</CardTitle>
                <CardDescription>
                  Interested in joining {chapter.university}? Send them a message!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  onClick={handleJoinChapter}
                  className="w-full"
                  size="lg"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Register for Chapter
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href={`mailto:${chapter.email}`}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Contact Directly
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterDetail;