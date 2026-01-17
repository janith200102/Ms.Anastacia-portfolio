import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Mic, Radio, Video, Youtube, Clapperboard, Film } from "lucide-react";
import eventImg from "@assets/image_1768583365128.png"; // Mic/Red banner

const services = [
  {
    icon: <Mic className="w-8 h-8" />,
    title: "Event Host",
    description: "Professional emceeing for corporate events, weddings, and parties. Engaging the audience with charm and energy.",
    bgImage: eventImg
  },
  {
    icon: <Radio className="w-8 h-8" />,
    title: "Commercials",
    description: "Persuasive and catchy voice overs for radio and TV commercials that sell your product effectively.",
    bgImage: null
  },
  {
    icon: <Film className="w-8 h-8" />,
    title: "Script Narration",
    description: "Clear and expressive narration for documentaries, audiobooks, and e-learning modules.",
    bgImage: null
  },
  {
    icon: <Youtube className="w-8 h-8" />,
    title: "YouTube Content",
    description: "High-quality voice overs for YouTube videos, enhancing viewer retention and engagement.",
    bgImage: null
  },
  {
    icon: <Clapperboard className="w-8 h-8" />,
    title: "Trailers",
    description: "Dramatic and impactful voice acting for movie and game trailers that create anticipation.",
    bgImage: null
  }
];

export default function Services() {
  return (
    <PageTransition className="pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-primary font-medium tracking-widest uppercase">My Expertise</h2>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white">
            Professional Services
          </h1>
          <p className="text-muted-foreground text-lg">
            Delivering top-tier audio and hosting solutions tailored to your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-secondary/30 border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col"
            >
              {/* Optional Background Image for visual variety */}
              {service.bgImage && (
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                  <img src={service.bgImage} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-secondary/80" />
                </div>
              )}

              <div className="p-8 relative z-10 flex flex-col h-full">
                <div className="mb-6 p-4 rounded-full bg-primary/10 text-primary w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
