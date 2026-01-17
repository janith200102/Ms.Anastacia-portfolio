import { Link } from "wouter";
import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { ArrowRight, Mic, Play } from "lucide-react";
import heroImg from "@assets/512488713_122174993414328455_3946175644077111890_n_1768624726928.jpg"; // Updated Hero Image

export default function Home() {
  return (
    <PageTransition className="min-h-screen flex flex-col relative pt-20">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-900/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-6 flex-1 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 py-12 lg:py-0">
        
        {/* Text Side */}
        <div className="flex-1 space-y-8 text-center lg:text-left z-10">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5,
                ease: "easeOut"
              }}
              className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold tracking-wider mb-2"
            >
              VOICE OVER ARTIST & EVENT HOST
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.1]">
                The Voice <br />
                <span className="text-gradient-gold">Your Brand Needs</span>
              </h1>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              delay: 0.4,
              ease: "easeOut"
            }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed"
          >
            Professional, engaging, and versatile. I bring stories to life through the power of voice and stage presence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <Link href="/portfolio">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-yellow-400 hover:scale-105 transition-all shadow-xl shadow-primary/25 flex items-center justify-center gap-2 group">
                <Play className="w-5 h-5 fill-current" />
                View Portfolio
              </button>
            </Link>
            <Link href="/contact">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-white/10 text-white font-semibold text-lg hover:bg-white/5 hover:border-white/30 transition-all flex items-center justify-center gap-2">
                Book Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative max-w-md lg:max-w-xl"
        >
          {/* Decorative Elements */}
          <div className="absolute -inset-4 border border-primary/20 rounded-2xl scale-105 animate-pulse-slow" />
          <div className="absolute -inset-8 border border-white/5 rounded-3xl" />
          
          <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-[0_0_50px_rgba(212,175,55,0.15)] aspect-[4/5] bg-secondary/50">
             <img 
               src={heroImg} 
               alt="Roshani Maheshika - Ms. Anastacia" 
               className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
             />
             {/* Gradient Overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
             
             {/* Floating Badge */}
             <div className="absolute bottom-6 right-6">
                <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-xl px-5 py-2.5 rounded-xl border border-primary/30">
                  <Mic className="text-primary w-4 h-4" />
                  <span className="text-white text-sm font-semibold tracking-wide uppercase">Ms. Anastacia</span>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
