import { PageTransition } from "@/components/PageTransition";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import performImg from "@assets/image_1768583415850.png"; // Performance
import { useRef } from "react";
import docVideo from "@assets/Download_(1)_1768624283317.mp4";

// New Image imports (11 images)
import img1 from "@assets/482320227_1228867825266430_7361270236166224415_n_1768655638238.jpg";
import img2 from "@assets/1723549920404_1768655646885.jpg";
import img3 from "@assets/1723550077807_1768655652993.jpg";
import img4 from "@assets/481678242_1219896962830183_1516624284328528710_n_1768655660327.jpg";
import img5 from "@assets/1729266067232_1768655671148.jpg";
import img6 from "@assets/496769954_1273471937472685_4680501576550555330_n_1768655691663.jpg";
import img7 from "@assets/480672323_1219524116200801_4699240312045635076_n_1768655722713.jpg";
import img8 from "@assets/WhatsApp_Image_2026-01-17_at_16.45.48_1768656400428.jpeg";
import img9 from "@assets/WhatsApp_Image_2026-01-17_at_16.31.21_1768656506954.jpeg";
import img10 from "@assets/WhatsApp_Image_2026-01-17_at_16.30.19_1768656655209.jpeg";
import img11 from "@assets/1768656300648_1768656705800.jpg";

const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

// Placeholder data - in a real app, this might come from a CMS or API
const portfolioItems = [
  {
    type: "video",
    title: "Live Performance Hosting",
    category: "Event Hosting",
    image: performImg,
    link: "https://drive.google.com/drive/folders/11zwlKkh-KkF6oNcxzeiDO9aESBfq8ws7?usp=sharing"
  },
  {
    type: "audio",
    title: "Corporate Brand Commercial",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80", // Stock Studio Mic
    link: "#"
  },
  {
    type: "video",
    title: "Documentary Narration",
    category: "Narration",
    video: docVideo,
    link: "#"
  },
  {
    type: "video",
    title: "Wedding Emcee Highlights",
    category: "Event Hosting",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80", // Stock Wedding
    link: "#"
  },
];

function ParallaxImage({ src, index }: { src: string; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
      viewport={{ once: true }}
      className="relative rounded-2xl overflow-hidden aspect-[3/4] border border-white/10 shadow-2xl group mb-8 break-inside-avoid"
    >
      <motion.img
        src={src}
        alt={`Moment ${index + 1}`}
        style={ { y } }
        className="absolute inset-0 w-full h-[120%] object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <PageTransition className="pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-medium tracking-widest uppercase mb-2">My Work</h2>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Featured Portfolio
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            A selection of my best voice over and hosting projects.
          </p>
          <a 
            href="https://drive.google.com/drive/folders/11zwlKkh-KkF6oNcxzeiDO9aESBfq8ws7?usp=sharing" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors border-b border-primary pb-1"
          >
            View Full Archive on Drive <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Moments in Action Parallax Grid */}
        <div className="mt-24 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Moments in Action</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
            {galleryImages.map((img, index) => (
              <ParallaxImage key={index} src={img} index={index} />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden aspect-video bg-secondary border border-white/5 cursor-pointer"
            >
              {/* Background Content */}
              {item.video ? (
                <div className="absolute inset-0">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:bg-black/40" />
                </div>
              ) : (
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" 
                />
              )}
              
              {/* Overlay Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-background via-background/50 to-transparent">
                <span className="text-primary text-sm font-medium tracking-wider mb-1 uppercase">
                  {item.category}
                </span>
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-xl scale-0 group-hover:scale-100 transition-transform duration-300 delay-75">
                  <Play className="w-6 h-6 ml-1 fill-current" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
