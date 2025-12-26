import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Phone, MapPin, MessageSquare, Linkedin } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw-St0LJ4Q5xncC0__PuygjyiQbp3VwFFp8QkVg3TfXNHf9wTZfKn3qoxKszWrNsWDR/exec";

    try {
      if (!GOOGLE_SCRIPT_URL) throw new Error('Contact form endpoint not configured');

      // send as form-encoded data to be compatible with Google Apps Script
      const body = new URLSearchParams();
      body.append('timestamp', new Date().toISOString());
      Object.entries(formData).forEach(([key, value]) => body.append(key, value || ''));

      // Google Apps Script often requires mode: 'no-cors' from client side. We still POST and rely on GAS to record the submission.
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: body.toString(),
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        organization: "",
        message: "",
      });

      alert("Thank you for your message. We'll get back to you soon!");
    } catch (err: any) {
      console.error('Contact submit failed', err);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden medical-cross">
      {/* Hero */}
      <section className="relative pt-24 pb-12 z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full glass-strong px-6 py-2 text-sm font-medium text-white border border-white/30 mb-6 animate-float">
              <MessageSquare className="mr-2 h-4 w-4" />
              Contact Us
            </span>
            <h1 className="text-4xl tracking-tight sm:text-6xl mb-6 text-white">
              Get in{" "}
              <span className="text-accent">
                Touch
              </span>
            </h1>
            <p className="text-lg text-white/90">
              Have questions about CuffWay? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 medical-grid opacity-20"></div>
              <h2 className="text-2xl mb-6 relative z-10 text-white">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="firstName" className="text-white">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="mt-2 glass border-white/20 bg-white/5 text-white placeholder:text-white/50"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-white">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="mt-2 glass border-white/20 bg-white/5 text-white placeholder:text-white/50"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-white">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2 glass border-white/20 bg-white/5 text-white placeholder:text-white/50"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-white">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 glass border-white/20 bg-white/5 text-white placeholder:text-white/50"
                  />
                </div>

                <div>
                  <Label htmlFor="organization" className="text-white">Organization</Label>
                  <Input
                    id="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="mt-2 glass border-white/20 bg-white/5 text-white placeholder:text-white/50"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-white">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="mt-2 glass border-white/20 bg-white/5 text-white placeholder:text-white/50"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gradient-primary">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass-image rounded-3xl overflow-hidden h-64 mb-6">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1666886573681-a8fbe983a3fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwZG9jdG9yfGVufDF8fHx8MTc2NDEyODU1NHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Healthcare professional"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute inset-0 medical-grid opacity-20"></div>
                <h2 className="text-2xl mb-8 relative z-10 text-white">Contact Information</h2>
                <div className="space-y-8 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full gradient-primary flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-white">Email</h3>
                      <p className="text-white/90">contact@cuffway.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full gradient-primary flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-white">Phone</h3>
                      <p className="text-white/90">(803) 420-7486</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full gradient-primary flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-white">Location</h3>
                      <p className="text-white/90">
                        Columbia, South Carolina
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <a 
                href="https://www.linkedin.com/company/cuffway-llc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-500 relative overflow-hidden block group"
              >
                <div className="absolute inset-0 medical-grid opacity-20"></div>
                <div className="flex items-start gap-3 mb-4 relative z-10">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-500">
                    <Linkedin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-white group-hover:text-accent transition-colors duration-500">Connect on LinkedIn</h3>
                    <p className="text-sm text-white/90">
                      Follow us for company updates, industry insights, and team news.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
