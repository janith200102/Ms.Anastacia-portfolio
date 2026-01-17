import { PageTransition } from "@/components/PageTransition";
import { motion, useInView } from "framer-motion";
import { Award, Mic2, Users, Calendar } from "lucide-react";
import profileImg from "@assets/FB_IMG_1704645469749_1768654991003.jpg"; // Updated Profile Image
import { useEffect, useState, useRef } from "react";

function Typewriter({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && !isComplete) {
      let i = 0;
      const timer = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i === text.length) {
          clearInterval(timer);
          setIsComplete(true);
        }
      }, 30);
      return () => clearInterval(timer);
    }
  }, [isInView, text, isComplete]);

  return (
    <p ref={ref} className="text-lg text-primary leading-relaxed whitespace-pre-wrap font-medium">
      {displayedText}
      {!isComplete && isInView && (
        <span className="inline-block w-[2px] h-[1.2em] bg-primary ml-1 animate-pulse">|</span>
      )}
    </p>
  );
}

function Counter({ value, duration, icon: Icon }: { value: number; duration: number; icon: any }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalMiliseconds = duration * 1000;
      const incrementTime = totalMiliseconds / end;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="flex-1 bg-secondary/30 backdrop-blur-sm p-8 rounded-2xl border border-white/5 flex flex-col items-center justify-center gap-4 hover:border-primary/30 transition-all group">
      <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
        <Icon className="w-8 h-8" />
      </div>
      <div className="text-center">
        <span className="text-5xl md:text-6xl font-display font-bold text-gradient-gold block">
          {count}+
        </span>
        <span className="text-muted-foreground font-medium tracking-wide uppercase text-sm">
          {value === 5 ? "Years Experience" : "Happy Clients"}
        </span>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <PageTransition className="pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-20">
          
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 aspect-[3/4] lg:aspect-[4/5]">
              <img 
                src={profileImg} 
                alt="Roshani Maheshika" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div>
              <h2 className="text-primary font-medium tracking-widest uppercase mb-2">About Me</h2>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Roshani Maheshika
              </h1>
              <div className="h-1 w-20 bg-primary rounded-full" />
            </div>

            <div className="space-y-6">
              <Typewriter text={"Hello! I'm Roshani, professionally known as Ms. Anastacia. As a passionate Voice Over Artist and Event Host, I specialize in bringing scripts to life and energizing audiences. My voice is my instrument, capable of adapting from warm and welcoming narrations to high-energy commercial reads.\n\nWith professional training and years of experience behind the microphone and on stage, I ensure every project I touch resonates with its intended audience."} />
            </div>

            {/* Certifications */}
            <div className="space-y-6 pt-6">
              <h3 className="text-2xl font-display text-white">Qualifications</h3>
              
              <div className="grid gap-4">
                <div className="bg-secondary/50 p-5 rounded-xl border border-white/5 flex items-start gap-4 hover:border-primary/50 transition-colors">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Mic2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Cert in Dubbing & Voice Over</h4>
                    <p className="text-muted-foreground">AV RASE STUDIO</p>
                  </div>
                </div>

                <div className="bg-secondary/50 p-5 rounded-xl border border-white/5 flex items-start gap-4 hover:border-primary/50 transition-colors">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Cert in TV & Radio Presenting</h4>
                    <p className="text-muted-foreground">Maharaja Institute</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="space-y-6 pt-6">
              <h3 className="text-2xl font-display text-white">Professional Experience</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(212,175,55,0.8)] flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-bold">Former Intern Voice-over Artist</h4>
                    <p className="text-primary/80 font-medium text-sm">LAK FM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(212,175,55,0.8)] flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-bold">Announcer</h4>
                    <p className="text-primary/80 font-medium text-sm">Kiu Media Club</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistics Row */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto"
        >
          <Counter value={5} duration={2} icon={Calendar} />
          <Counter value={300} duration={2} icon={Users} />
        </motion.div>
      </div>
    </PageTransition>
  );
}
