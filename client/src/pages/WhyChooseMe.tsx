import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Clock, DollarSign, Mic2, Sliders } from "lucide-react";
import bgVideo from "@assets/My_New_Work_Space_1768622219065.mp4";

const benefits = [
  {
    icon: <Mic2 className="w-10 h-10" />,
    title: "Professional Voice",
    description: "Trained voice with versatile range and impeccable diction."
  },
  {
    icon: <Clock className="w-10 h-10" />,
    title: "Quick Turnaround",
    description: "Respecting your deadlines with prompt and efficient delivery."
  },
  {
    icon: <DollarSign className="w-10 h-10" />,
    title: "Affordable Rates",
    description: "Premium quality services at competitive and transparent prices."
  },
  {
    icon: <Sliders className="w-10 h-10" />,
    title: "Customizable",
    description: "Tailored tone, style, and pacing to fit your exact brand needs."
  }
];

export default function WhyChooseMe() {
  return (
    <PageTransition className="pt-32 pb-20 relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary font-medium tracking-widest uppercase mb-2">WHY CHOOSE ME</h2>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white">
            My Guarantee
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary/10 backdrop-blur-md border border-white/5 p-8 rounded-2xl hover:bg-secondary/30 hover:border-primary/30 transition-all text-center group"
            >
              <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
