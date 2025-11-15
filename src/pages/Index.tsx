import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Hero3D } from "@/components/Hero3D";
import { Section, Card } from "@/components/ui/animated-components";
import { Heart, Briefcase, Cake, Music, Sparkles, Camera, CheckCircle, Users, Award, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import weddingImg from "@/assets/wedding-service.jpg";
import corporateImg from "@/assets/corporate-service.jpg";
import birthdayImg from "@/assets/birthday-service.jpg";

const services = [
  {
    icon: Heart,
    title: "Weddings",
    description: "Crafting your dream wedding with every detail perfectly orchestrated.",
    image: weddingImg,
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    description: "Professional event management that elevates your brand presence.",
    image: corporateImg,
  },
  {
    icon: Cake,
    title: "Birthday Celebrations",
    description: "Making milestone moments truly spectacular and memorable.",
    image: birthdayImg,
  },
  {
    icon: Music,
    title: "Sound & Lighting",
    description: "Premium audio-visual solutions for immersive event experiences.",
    image: null,
  },
  {
    icon: Sparkles,
    title: "Theme Décor",
    description: "Transforming venues with stunning, bespoke decoration concepts.",
    image: null,
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Capturing every precious moment with cinematic excellence.",
    image: null,
  },
];

const stats = [
  { value: "500+", label: "Events Executed" },
  { value: "10+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Team Members" },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "Share your vision with us during a detailed consultation session",
    icon: Users,
  },
  {
    step: "02",
    title: "Planning",
    description: "Our team crafts a bespoke event plan tailored to your needs",
    icon: Sparkles,
  },
  {
    step: "03",
    title: "Execution",
    description: "Watch your dream event come to life with flawless execution",
    icon: CheckCircle,
  },
  {
    step: "04",
    title: "Celebration",
    description: "Enjoy your perfect event while we handle every detail",
    icon: Award,
  },
];

const testimonials = [
  {
    quote: "Omega transformed our wedding into a fairy tale. Every detail was perfect!",
    author: "Priya & Rahul",
    event: "Wedding Celebration",
    rating: 5,
  },
  {
    quote: "Professional, creative, and absolutely reliable. Our corporate event was a massive success.",
    author: "Tech Innovations Ltd.",
    event: "Corporate Gala",
    rating: 5,
  },
  {
    quote: "They made my daughter's birthday unforgettable. The décor was breathtaking!",
    author: "Mrs. Sharma",
    event: "Birthday Party",
    rating: 5,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* 3D Hero Section */}
      <Hero3D />

      {/* Stats Section */}
      <Section className="py-20 container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <Card className="text-center hover:scale-105 transition-transform duration-300">
                <motion.div 
                  className="font-heading text-4xl md:text-5xl font-bold text-gradient-gold mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                >
                  {stat.value}
                </motion.div>
                <div className="font-sub text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Services Preview */}
      <Section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Premium Services
            </h2>
            <p className="font-sub text-lg text-muted-foreground max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we bring your vision to life with unmatched expertise.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <Card className="group cursor-pointer overflow-hidden h-full">
                  {service.image && (
                    <div className="w-full h-48 mb-4 rounded-xl overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className={`flex items-center justify-center w-14 h-14 rounded-full bg-primary/20 mb-4 glow-gold ${!service.image ? 'mt-4' : ''}`}>
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="bg-primary hover:bg-gold-glow text-primary-foreground font-sub font-semibold px-8 py-6 text-lg glow-gold">
                Explore All Services
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* How It Works Timeline */}
      <Section className="py-20 bg-card/20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="font-sub text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to celebration in four seamless steps
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                className="relative flex flex-col md:flex-row items-center mb-12 md:mb-20 last:mb-0"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.7 }}
              >
                {/* Step number */}
                <motion.div 
                  className="flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-primary to-gold-glow flex items-center justify-center mb-6 md:mb-0 glow-gold-strong"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="font-heading text-3xl font-bold text-background">{step.step}</span>
                </motion.div>

                {/* Connecting line */}
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute left-12 top-24 w-0.5 h-20 bg-gradient-to-b from-primary to-transparent" />
                )}

                {/* Content card */}
                <motion.div 
                  className="md:ml-12 flex-1"
                  whileHover={{ x: 10 }}
                >
                  <Card className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start mb-3">
                      <step.icon className="w-8 h-8 text-primary mr-3" />
                      <h3 className="font-heading text-2xl font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="font-body text-muted-foreground">
                      {step.description}
                    </p>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose Omega
            </h2>
            <p className="font-sub text-lg text-muted-foreground max-w-2xl mx-auto">
              Excellence in every detail, passion in every celebration
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {[
              {
                title: "Experienced Team",
                description: "Industry veterans with a decade of event management excellence",
              },
              {
                title: "Tailored Solutions",
                description: "Every event uniquely designed to match your vision perfectly",
              },
              {
                title: "End-to-End Service",
                description: "Complete event management from concept to flawless execution",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                whileHover={{ y: -15 }}
              >
                <Card className="text-center h-full">
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-gold-glow flex items-center justify-center mx-auto mb-4 glow-gold"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Sparkles className="w-8 h-8 text-background" />
                  </motion.div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Testimonials Carousel */}
      <Section className="py-20 bg-gradient-to-br from-card/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="font-sub text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by hundreds of satisfied clients
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full" />
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="font-body text-foreground mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-auto">
                    <p className="font-sub font-semibold text-foreground">{testimonial.author}</p>
                    <p className="font-body text-sm text-muted-foreground">{testimonial.event}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/testimonials">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-sub font-semibold px-8 py-6 text-lg">
                View All Testimonials
              </Button>
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 bg-gradient-to-br from-background via-card to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="text-center max-w-4xl mx-auto glass-strong overflow-hidden relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div className="relative z-10">
                <motion.h2 
                  className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Ready to Create Something Extraordinary?
                </motion.h2>
                <motion.p 
                  className="font-sub text-lg text-muted-foreground mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  Let's turn your celebration into an unforgettable experience
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <Link to="/book">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button className="bg-primary hover:bg-gold-glow text-primary-foreground font-sub font-semibold px-8 py-6 text-lg glow-gold-strong">
                        Book Your Event
                      </Button>
                    </motion.div>
                  </Link>
                  <Link to="/contact">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-sub font-semibold px-8 py-6 text-lg">
                        Contact Us
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
