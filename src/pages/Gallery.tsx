import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Section } from "@/components/ui/animated-components";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-gradient-gold mb-6 animate-fade-in">
            Event Gallery
          </h1>
          <p className="font-sub text-xl text-muted-foreground animate-fade-in">
            Browse our portfolio of unforgettable celebrations
          </p>
        </div>
      </section>

      <Section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="glass-strong rounded-2xl p-12 text-center">
            <p className="font-sub text-lg text-muted-foreground">
              Gallery section coming soon with stunning event photography
            </p>
          </div>
        </div>
      </Section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Gallery;
