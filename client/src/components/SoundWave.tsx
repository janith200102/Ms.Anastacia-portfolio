import { motion } from "framer-motion";

export function SoundWave({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-1 ${className}`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          className="w-1 bg-primary/40 rounded-full"
          animate={{
            height: [10, 24, 10],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
          style={{ height: 16 }}
        />
      ))}
    </div>
  );
}
