import { Newspaper, ExternalLink, Calendar, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import innovisionPhoto from "figma:asset/5ed0ccca8375d97c688f088d5f29a9fcc06046b9.png";
import innovisionAwardsPhoto from "figma:asset/e3ef72854d428cacbfe4b324ad2939e803ffe22a.png";
import venturewellPhoto from "figma:asset/d5f8c34d055b604de49d7ae506158d22e713b8c0.png";
import provingGroundPhoto from "figma:asset/cf3cf4c19f5a940c181de46d3d44f67022e6abfc.png";
import uscFreshmanPhoto from "figma:asset/8287f703b613e7f9ee9da2d67d2c16060bdf9370.png";
import njshsPhoto from "figma:asset/2a49d4eb6ebceda481e2ff528f652422257c4cf9.png";

export function News() {
  const pressArticles = [
    {
      title: "2025 InnoVision Awards Winners Announced",
      publication: "InnoVision",
      date: "November 14, 2025",
      description: "Winners of the 2025 InnoVision Awards were announced Thursday, November 13, at the organization's annual ceremony at The Palmetto Club in Columbia. Business and ecosystem leaders from across South Carolina gathered in the sold out ballroom to celebrate and advance the state's emerging businesses.",
      url: "https://innovisionawards.org/2025-innovision-awards-winners-announced/",
      image: innovisionAwardsPhoto,
    },
    {
      title: "USC students and alumni win South Carolina InnoVision Awards",
      publication: "The University of South Carolina",
      date: "November 14, 2025",
      description: "On Nov.13, the South Carolina InnoVision Awards announced the 2025 winners at its annual awards ceremony, held at the Palmetto Club in Columbia. Six finalists with ties to the University of South Carolina were recognized at the celebration, with three winning top honors in their categories...Technology Development: CuffWay, a medical device startup developing a real-time, automated system to reduce intubation-related injuries, improve patient outcomes and set a new standard in airway safety. Led by Honors College students Shrihan Ganesh Babu and Sanjana Tripuraneni",
      url: "https://www.sc.edu/uofsc/posts/2025/11/south-carolina-innovision-award-winners25.php",
      image: innovisionPhoto,
    },
    {
      title: "VentureWell 2025 Summer E-Team Cohort",
      publication: "VentureWell",
      date: "July 2025",
      description: "We're excited to introduce the 2025 Summer E-Team cohort! We selected 24 student venture teams with innovative solutions addressing challenges in energy, healthcare, transportation, and more. Through the E-Team program, these teams will receive funding, training, and expert mentorship to bring their world-changing ideas to life.",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7350584204851572739/",
      image: venturewellPhoto,
    },
    {
      title: "🎉 The 2025 Proving Ground Winners Have Been Announced! 🎉",
      publication: "Faber Entrepreneurship Center",
      date: "April 11, 2025",
      description: "On Friday, 4/11, our finalists presented their innovative ideas to a panel of seasoned entrepreneurs during an exciting in-person event. High Tech Winner: Shrihan Ganesh Babu, CuffWay",
      url: "https://www.linkedin.com/posts/faber-entrepreneurship-center_entrepreneurship-innovation-provingground2025-activity-7317509430957264899-CG1E?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFhO9-0BNGJDMVC10PtutXLkKP5iRwRkgOY",
      image: provingGroundPhoto,
    },
    {
      title: "USC freshman's medical invention could reduce breathing tube injuries",
      publication: "University of South Carolina McCausland College of Arts and Sciences",
      date: "September 6, 2024",
      description: "Breath of Relief -- Premedical student designs possible solution to common medical injury",
      url: "https://www.sc.edu/study/colleges_schools/artsandsciences/about/news/2024/shrihan_ganesh_babu_medical_research.php",
      youtubeUrl: "https://www.youtube.com/watch?v=yVhDO21D3Lc",
      image: uscFreshmanPhoto,
    },
    {
      title: "Top U.S. STEM Students Win Scholarships and Awards at the 62nd Annual National Junior Science and Humanities Symposium",
      publication: "National Science Teaching Association",
      date: "May 6, 2024",
      description: "Engineering and Technology - Shrihan Ganesh Babu, South Carolina, Spring Valley High School - Reducing Tracheal Complications in Endotracheal Intubation Patients Using Automated Cuff Pressure Modulation",
      url: "https://www.nsta.org/press-release/top-us-stem-students-win-scholarships-and-awards-62nd-annual-national-junior-science",
      image: njshsPhoto,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden medical-cross">
      {/* Hero */}
      <section className="relative pt-24 pb-12 z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <span className="inline-flex items-center rounded-full glass-strong px-6 py-2 text-sm font-medium text-white border border-white/30 mb-6 animate-float">
              <Newspaper className="mr-2 h-4 w-4" />
              Press & Media
            </span>
            <h1 className="text-4xl tracking-tight sm:text-6xl mb-6 text-white">
              CuffWay in the{" "}
              <span className="text-accent">
                News
              </span>
            </h1>
            <p className="text-lg text-white/90">
              Our journey and achievements covered by leading publications
            </p>
          </div>
        </div>
      </section>

      {/* Press Articles */}
      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {pressArticles.map((article, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 relative group"
              >
                <div className="absolute inset-0 medical-grid opacity-20"></div>
                
                {article.image && (
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover brightness-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40"></div>
                  </div>
                )}
                
                <div className="relative z-10 p-8">
                  <div className="flex items-center gap-2 text-sm text-white/70 mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm text-white/90 font-medium mb-4">
                    {article.publication}
                  </p>
                  
                  <p className="text-white/80 mb-6 line-clamp-4">
                    {article.description}
                  </p>
                  
                  <div className="flex gap-3">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                    >
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        Read Article
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    
                    {article.youtubeUrl && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                      >
                        <a
                          href={article.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2"
                        >
                          Watch Video
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect with Us */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="glass-strong rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 medical-grid opacity-30"></div>
            <div className="text-center mb-8">
              <h2 className="text-3xl mb-4 relative z-10 text-white">
                Follow Our Journey
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto relative z-10">
                Stay updated on our latest achievements, partnerships, and mission to improve patient safety
              </p>
            </div>
            
            <div className="flex justify-center relative z-10">
              <a
                href="https://www.linkedin.com/company/cuffway-llc"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-500 flex items-center gap-4 border border-white/20 hover:border-accent/50">
                  <div className="bg-accent p-4 rounded-xl group-hover:shadow-lg group-hover:shadow-accent/50 transition-all duration-500">
                    <Linkedin className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-accent transition-colors duration-300">
                      Connect on LinkedIn
                    </h3>
                    <p className="text-white/70 text-sm">
                      Follow CuffWay for updates and insights
                    </p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-white/70 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 ml-4" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}