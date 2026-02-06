import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/15 rounded-full blur-[200px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 4) * 20}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h2
            className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Ready to Go{" "}
            <motion.span
              className="text-gradient inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
            >
              Carbon-Negative
            </motion.span>
            ?
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's discuss how GreenMixes can transform your next project.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button variant="hero" size="xl" className="group">
              Get In Touch
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          <motion.div
            className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="#"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ scale: 1.05, x: 5 }}
            >
              <MapPin className="w-4 h-4 text-primary" />
              Cambridge, UK
            </motion.a>
            <motion.a
              href="mailto:hello@greenmixes.com"
              className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
              whileHover={{ scale: 1.05, x: 5 }}
            >
              <Mail className="w-4 h-4" />
              hello@greenmixes.com
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
