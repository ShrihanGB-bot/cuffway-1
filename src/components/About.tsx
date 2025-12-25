import { CheckCircle, Users } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import teamPhoto from "figma:asset/c5bedde63d061db03dfd4be97cf878e3a24f21ac.png";

export function About() {
  const teamMembers = [
    {
      name: "Shrihan Ganesh Babu!",
      role: "Co-Founder; CEO",
      description: "Second-year biochemistry student at the University of South Carolina",
      image: "https://i.imgur.com/xgqC8GZ.jpeg",
    },
    {
      name: "Hannah Koppel",
      role: "Co-founder; CTO",
      description: "Third-year biomedical engineering student at the Georgia Institute of Technology",
      image: "https://i.imgur.com/7QwPqCE.jpeg",
    },
    {
      name: "Sanjana Tripuraneni",
      role: "Team Member",
      description: "Second-year BARSC-MD student at the University of South Carolina",
      image: "https://i.imgur.com/zKB5rm1.jpeg",
    },
  ];

  const advisors = [
    {
      name: "Dr. Pervez Sultan",
      role: "Advisor",
      description: "Professor of Obstetric Anesthesiology at Stanford University",
      image: "https://i.imgur.com/GY2JYqG.jpeg"
    },
    {
      name: "Dr. Lawrence Boyd",
      role: "Advisor",
      description: "Professor of the Practice in Bioengineering at Clemson University",
      image: "https://i.imgur.com/GKmdVFG.jpeg",
    },
    {
      name: "Eydis Lima",
      role: "Advisor",
      description: "Engineering Project Lead at C3 Medical",
      image: "https://i.imgur.com/8pKnFQ6.jpeg"
    },
    {
      name: "Dr. Jeff Savage",
      role: "Advisor",
      description: "Director of the Faber Entrepreneurship Center, USC",
      image: "https://i.imgur.com/ZIfgnnZ.jpeg"
    },
    {
      name: "Dr. William Owens",
      role: "Advisor",
      description: "Board-certified critical care medicine physician, USC School of Medicine",
      image: "https://i.imgur.com/lBv31wP.jpeg"
    },
  ];

  const achievements = [
    "2025 InnoVision Award Winner in the Technology Development Category",
    "2025 Faber Entrepreneurship Center Proving Ground Competition High Tech Winner",
    "VentureWell Pioneer Program - 2025 Summer E-Team Cohort",
    "Research paper published in the Journal of the South Carolina Academy of Science",
    "1st in the nation in the Department of Defense JSHS competition",
    "Created an experienced advisory board of leading medical device experts",
    "Developed demonstrable prototype",
    "Obtained provisional patent",
    "Obtained limited early-stage funding",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden medical-cross">
      {/* Hero */}
      <section className="relative pt-24 pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <span className="inline-flex items-center rounded-full glass-strong px-6 py-2 text-sm font-medium text-white border border-white/30 mb-6 animate-float">
              <Users className="mr-2 h-4 w-4" />
              About CuffWay
            </span>
            <h1 className="text-4xl tracking-tight sm:text-6xl mb-6 text-white">
              Solving a Critical{" "}
              <span className="text-accent">
                Healthcare Challenge
              </span>
            </h1>
            <p className="text-lg text-white/90">
              CuffWay was founded by a team of pre-medical and biomedical engineering students who witnessed too many preventable airway injuries.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="glass-image rounded-3xl overflow-hidden h-96 relative">
              <img
                src={teamPhoto}
                alt="CuffWay team presentation"
                className="w-full h-full object-cover object-top brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20"></div>
            </div>
            <div className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 medical-grid opacity-20"></div>
              <h2 className="text-3xl mb-6 relative z-10 text-white">Born from Clinical Need</h2>
              <div className="space-y-4 text-white/90 relative z-10">
                <p>
                  CuffWay's journey began in 2023, when high school researcher Shrihan Ganesh Babu realized a critical gap in how hospitals manage cuff pressures, an overlooked but vital factor that can determine a patient's safety and recovery during and after intubation.
                </p>
                <p>
                  What started as a classroom research project grew into something bigger as Shrihan earned his EMT certification and began working in clinical settings, he saw firsthand how this problem affected millions of real patients annually.
                </p>
                <p>
                  In 2025, CuffWay brought together a team and advisory board that shared technical curiosity and a drive to make healthcare safer, including fellow University of South Carolina student Sanjana Tripuraneni, and Hannah Koppel, a Biomedical Engineering student at Georgia Tech.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-4xl glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 medical-grid opacity-20"></div>
            <h3 className="text-2xl mb-6 text-white relative z-10">Progress and Awards</h3>
            <div className="space-y-4 relative z-10">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-4 glass rounded-xl p-4 border border-white/20">
                  <CheckCircle className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-white/90">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl mb-4 text-white">Our Team</h2>
            <p className="text-lg text-white/90">
              A dedicated group of students and entrepreneurs committed to patient safety
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div key={index} className="glass-card rounded-2xl p-8 text-center hover:scale-105 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute inset-0 medical-grid opacity-20"></div>
                <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-2 border-white/30 relative z-10">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 relative z-10 text-white">{member.name}</h3>
                <p className="text-sm text-white/90 mb-3 relative z-10">{member.role}</p>
                <p className="text-sm text-white/80 relative z-10">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl mb-4 text-white">Our Advisors</h2>
            <p className="text-lg text-white/90">
              Guided by leading experts in medical devices, anesthesiology, and entrepreneurship
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advisors.map((advisor, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 medical-grid opacity-20"></div>
                <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-2 border-white/30 relative z-10">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 relative z-10 text-white">{advisor.name}</h3>
                <p className="text-sm text-white/90 mb-3 relative z-10">{advisor.role}</p>
                <p className="text-sm text-white/80 relative z-10">{advisor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="glass-strong rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 medical-grid opacity-30"></div>
            <h2 className="text-3xl mb-4 relative z-10 text-white">
              Ready to Learn More?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto relative z-10">
              Get in touch to discuss how CuffWay can improve patient safety at your institution
            </p>
            <Button size="lg" asChild className="gradient-primary relative z-10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}