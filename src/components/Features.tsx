import { Shield, Zap, Heart, Users, Award, TrendingUp, Stethoscope } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import intubationDiagram from "figma:asset/75c5dbad25453fffe325eceb627743e3fdc819c0.png";

export function Features() {
  const features = [
    {
      icon: Shield,
      title: "Patient Safety First",
      description: "Decreases tracheal and laryngeal injuries from excessive cuff pressure, while preventing ventilator-associated pneumonia and micro-aspirations from under-inflation.",
    },
    {
      icon: Zap,
      title: "Constant Monitoring",
      description: "Provides continuous cuff pressure monitoring that dynamically adjusts to ensure safe pressure ranges are maintained.",
    },
    {
      icon: Heart,
      title: "Customizable Alerts",
      description: "Notifications trigger when pressure values exceed or fall below thresholds set by clinicians for each patient.",
    },
    {
      icon: Users,
      title: "Universal Compatibility",
      description: "Universally adaptable to current endotracheal tubes without disrupting existing OR workflows or requiring special equipment.",
    },
    {
      icon: Award,
      title: "Clinical Validation",
      description: "Developed alongside respiratory therapists and clinicians to meet real-world clinical needs.",
    },
    {
      icon: TrendingUp,
      title: "Better Outcomes",
      description: "Reduces post-operative complications and improves patient outcomes by maintaining optimal cuff pressure throughout procedures.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden medical-cross">
      {/* Hero */}
      <section className="relative pt-24 pb-12 z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <span className="inline-flex items-center rounded-full glass-strong px-6 py-2 text-sm font-medium text-white border border-white/30 mb-6 animate-float">
              <Stethoscope className="mr-2 h-4 w-4" />
              Our Technology
            </span>
            <h1 className="text-4xl tracking-tight sm:text-6xl mb-6 text-white">
              Revolutionizing{" "}
              <span className="text-accent">
                Airway Safety
              </span>
            </h1>
            <p className="text-lg text-white/90">
              CuffWay's innovative pressure monitoring system provides real-time feedback during endotracheal intubation, significantly reducing the risk of airway injuries.
            </p>
          </div>

          {/* Main Product Feature */}
          <div className="glass-strong rounded-3xl p-8 md:p-12 mb-20 relative overflow-hidden">
            <div className="absolute inset-0 medical-grid opacity-30"></div>
            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <span className="inline-flex items-center rounded-full glass px-4 py-1.5 text-sm font-medium text-white border border-white/30 mb-4">
                  In Development
                </span>
                <h2 className="text-3xl mb-4 text-white">
                  Smart Cuff Pressure Monitoring System
                </h2>
                <p className="text-white/90 mb-6">
                  CuffWay provides constant pressure monitoring that adjusts based on patient data. The system provides notifications if values set by clinicians are exceeded or fall below safe thresholds.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-white animate-pulse-glow" />
                    <span className="text-sm text-white/90">Ensures Patient Safety</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-white animate-pulse-glow" />
                    <span className="text-sm text-white/90">Constant Pressure Monitoring</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-white animate-pulse-glow" />
                    <span className="text-sm text-white/90">Real-Time Adjustments</span>
                  </div>
                </div>
              </div>
              <div className="glass-image rounded-2xl overflow-hidden h-80 relative mt-8">
                <img
                  src={intubationDiagram}
                  alt="Endotracheal intubation anatomy and procedure diagram"
                  className="w-full h-full object-cover object-top brightness-90 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-blue-800/25"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Validation Stats */}
      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="glass-strong rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 medical-grid opacity-30"></div>
            <div className="mx-auto max-w-2xl text-center mb-12 relative z-10">
              <h2 className="text-3xl tracking-tight mb-4 text-white">
                Clinician Feedback
              </h2>
              <p className="text-lg text-white/90">
                Real insights from healthcare professionals on CuffWay's impact
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              <div className="glass-card rounded-2xl p-8 text-center hover:scale-105 transition-all duration-500 relative overflow-hidden group">
                <div className="absolute inset-0 medical-grid opacity-20"></div>
                <div className="relative z-10">
                  <div className="text-6xl font-semibold text-accent mb-4 group-hover:scale-110 transition-transform">
                    73%
                  </div>
                  <p className="text-lg text-white/90">
                    of clinicians believe CuffWay's <span className="text-white font-medium">adaptive feature</span> would reduce the chance of injuries
                  </p>
                </div>
              </div>
              
              <div className="glass-card rounded-2xl p-8 text-center hover:scale-105 transition-all duration-500 relative overflow-hidden group">
                <div className="absolute inset-0 medical-grid opacity-20"></div>
                <div className="relative z-10">
                  <div className="text-6xl font-semibold text-accent mb-4 group-hover:scale-110 transition-transform">
                    91%
                  </div>
                  <p className="text-lg text-white/90">
                    of clinicians believe the <span className="text-white font-medium">automated feature</span> could reduce workload in hospital settings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl tracking-tight mb-4 text-white">
              Key Features
            </h2>
            <p className="text-lg text-white/90">
              Our device is designed to address critical gaps in current intubation practices
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-500 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <div className="absolute inset-0 medical-grid opacity-20"></div>
                  <Icon className="h-12 w-12 text-accent mb-4 group-hover:scale-110 transition-transform relative z-10" />
                  <h3 className="text-xl mb-2 relative z-10 text-white">{feature.title}</h3>
                  <p className="text-white/90 text-sm relative z-10">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl tracking-tight mb-4 text-white">
              How It Works
            </h2>
            <p className="text-lg text-white/90">
              Simple integration into existing workflows
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 medical-grid opacity-20"></div>
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full gradient-primary text-white text-3xl font-bold relative z-10">
                1
              </div>
              <h3 className="text-xl mb-3 relative z-10 text-white">Attach to ET Tube</h3>
              <p className="text-white/90 text-sm relative z-10">
                Connect the CuffWay device to any standard endotracheal tube
              </p>
            </div>

            <div className="text-center glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 medical-grid opacity-20"></div>
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full gradient-primary text-white text-3xl font-bold relative z-10 ecg-line">
                2
              </div>
              <h3 className="text-xl mb-3 relative z-10 text-white">Monitor in Real-Time</h3>
              <p className="text-white/90 text-sm relative z-10">
                The system continuously tracks cuff pressure during the entire procedure
              </p>
            </div>

            <div className="text-center glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 medical-grid opacity-20"></div>
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full gradient-primary text-white text-3xl font-bold relative z-10">
                3
              </div>
              <h3 className="text-xl mb-3 relative z-10 text-white">Receive Alerts</h3>
              <p className="text-white/90 text-sm relative z-10">
                Get notified immediately if pressure falls outside safe thresholds
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
