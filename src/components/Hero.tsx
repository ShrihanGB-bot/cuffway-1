import { Button } from "./ui/button";
import { ArrowRight, Activity, Shield, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroImage from "figma:asset/e42ca32939ff4fb88c109642ddf78b0f05d9711d.png";
import clinicianImage from "figma:asset/225d6168cff74a2cd97fff696cceed71f27ab70d.png";

export function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden medical-cross">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="mb-6 animate-float inline-block">
                <span className="inline-flex items-center rounded-full glass-strong px-6 py-2 text-sm font-medium text-white border border-white/30">
                  <Heart className="mr-2 h-4 w-4" />
                  Next-Generation Intubation Safety
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight mb-6">
                Preventing Airway Injuries with
                <br />
                <span className="text-accent">Innovative Technology</span>
              </h1>
              <p className="text-xl text-white/90 max-w-2xl lg:mx-0 mx-auto mb-10">
                CuffWay's innovative medical device provides continuous cuff pressure monitoring to protect patients and support respiratory therapists during endotracheal intubation.
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-4 flex-wrap">
                <Button size="lg" asChild className="gradient-primary group">
                  <Link to="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="glass-strong border-white/20 hover:border-white/40 text-white">
                  <Link to="/technology">Learn More</Link>
                </Button>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="glass-image rounded-3xl p-2 h-[500px] overflow-hidden relative">
              <img
                src={heroImage}
                alt="Healthcare professional performing endotracheal intubation training"
                className="w-full h-full object-cover rounded-2xl brightness-[0.7]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-blue-800/20 to-blue-900/40 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinician Validation Banner */}
      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 medical-grid opacity-30"></div>
            <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
              {/* Stats Side */}
              <div className="space-y-6">
                <h3 className="text-2xl mb-6 text-white">
                  Validated by Healthcare Professionals
                </h3>
                <div className="glass rounded-2xl p-8 border border-white/20">
                  <div className="text-6xl font-semibold text-accent mb-3">
                    73%
                  </div>
                  <p className="text-lg text-white">
                    of surveyed clinicians believe we reduce injury risk
                  </p>
                </div>
                <div className="glass rounded-2xl p-8 border border-white/20">
                  <div className="text-6xl font-semibold text-accent mb-3">
                    91%
                  </div>
                  <p className="text-lg text-white">
                    of surveyed clinicians believe we reduce workload
                  </p>
                </div>
              </div>
              
              {/* Image Side */}
              <div className="glass-image rounded-2xl p-2 h-[400px] overflow-hidden relative">
                <img
                  src={clinicianImage}
                  alt="Medical team performing airway management procedure with monitoring equipment"
                  className="w-full h-full object-cover rounded-xl brightness-[0.65] contrast-105 saturate-90"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-800/25 to-blue-900/50 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl tracking-tight mb-4 text-white">
              The Critical Need
            </h2>
            <p className="text-lg text-white/90">
              Current intubation practices face significant safety challenges that impact patient outcomes and healthcare professional wellbeing
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="glass-stat rounded-2xl p-8 text-center hover:scale-105 transition-all duration-500 relative overflow-hidden">
              <div className="text-5xl font-semibold text-white mb-3 relative z-10">
                $2B+
              </div>
              <div className="text-lg mb-2 relative z-10 text-white">Annual Hospital Costs</div>
              <p className="text-sm text-white/80 relative z-10">
                Spent on cuff-related injuries each year
              </p>
            </div>

            <div className="glass-stat rounded-2xl p-8 text-center hover:scale-105 transition-all duration-500 relative overflow-hidden">
              <div className="text-5xl font-semibold text-white mb-3 relative z-10">
                57%<sup className="text-2xl">1</sup>
              </div>
              <div className="text-lg mb-2 relative z-10 text-white">Airway Complications</div>
              <p className="text-sm text-white/80 relative z-10">
                Patients with tracheal & laryngeal injuries
              </p>
            </div>

            <div className="glass-stat rounded-2xl p-8 text-center hover:scale-105 transition-all duration-500 relative overflow-hidden">
              <div className="text-5xl font-semibold text-white mb-3 relative z-10">
                72%<sup className="text-2xl">2</sup>
              </div>
              <div className="text-lg mb-2 relative z-10 text-white">Unsafe Cuff Pressure</div>
              <p className="text-sm text-white/80 relative z-10">
                Patients experiencing dangerous pressure levels
              </p>
            </div>

            <div className="glass-stat rounded-2xl p-8 text-center hover:scale-105 transition-all duration-500 relative overflow-hidden">
              <div className="text-5xl font-semibold text-white mb-3 relative z-10">
                79%<sup className="text-2xl">3</sup>
              </div>
              <div className="text-lg mb-2 relative z-10 text-white">Therapist Burnout</div>
              <p className="text-sm text-white/80 relative z-10">
                Respiratory therapists facing burnout
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}