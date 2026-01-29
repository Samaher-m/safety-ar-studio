import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-ar-safety.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-[hsl(222_47%_8%)]">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      
      {/* Glowing orb effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge variant="glow" className="mb-6">
                <Zap className="w-3 h-3 mr-1" />
                Next-Gen AR Safety Training
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
            >
              Train for Safety.{" "}
              <span className="bg-gradient-to-r from-primary to-[hsl(35_95%_55%)] bg-clip-text text-transparent">
                Zero Risk.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Immersive AR simulations that prepare your workforce for real emergencies. 
              Practice critical safety procedures without any real-world risk.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="xl" className="group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="xl" className="group">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border"
            >
              <div>
                <div className="font-display text-2xl md:text-3xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Safety Improvement</div>
              </div>
              <div>
                <div className="font-display text-2xl md:text-3xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Trained Workers</div>
              </div>
              <div>
                <div className="font-display text-2xl md:text-3xl font-bold text-foreground">200+</div>
                <div className="text-sm text-muted-foreground">Enterprises</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative"
          >
            <div className="relative ar-corners p-2">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl" />
              
              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden border border-accent/30">
                <img
                  src={heroImage}
                  alt="AR Safety Training Visualization"
                  className="w-full h-auto"
                />
                
                {/* Scan line overlay */}
                <div className="absolute inset-0 scan-line pointer-events-none" />
                
                {/* Floating UI elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute top-4 left-4 bg-[hsl(222_47%_14%/0.9)] backdrop-blur-xl border border-accent/30 rounded-lg px-4 py-2 flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-foreground">Live AR Session</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute bottom-4 right-4 bg-[hsl(222_47%_14%/0.9)] backdrop-blur-xl border border-primary/30 rounded-lg px-4 py-2"
                >
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">Hazard Detected</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
