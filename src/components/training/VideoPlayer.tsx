import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Scan, Target, AlertTriangle, Focus, Radio } from "lucide-react";

interface VideoPlayerProps {
  videoUrl?: string;
  isPlaying: boolean;
  currentStep: number;
  highlightZones?: { x: number; y: number; label: string }[];
  showAlert?: boolean;
  alertMessage?: string;
}

export const VideoPlayer = ({
  videoUrl,
  isPlaying,
  currentStep,
  highlightZones = [],
  showAlert = false,
  alertMessage = "",
}: VideoPlayerProps) => {
  const [scanLinePosition, setScanLinePosition] = useState(0);

  // Animate scan line
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setScanLinePosition((prev) => (prev + 1) % 100);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  return (
    <div className="relative w-full aspect-video bg-[hsl(222_47%_8%)] rounded-xl overflow-hidden border border-border">
      {/* Video placeholder - would be replaced with actual video */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(222_47%_15%)] to-[hsl(222_47%_8%)]">
        {/* Simulated video content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
              <Radio className="w-12 h-12 text-primary animate-pulse" />
            </div>
            <p className="text-muted-foreground">Simulation Video Area</p>
            <p className="text-xs text-muted-foreground/60 mt-1">
              AR-style overlays will appear here
            </p>
          </motion.div>
        </div>
      </div>

      {/* AR Overlay Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Corner brackets - AR focus frame */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="cornerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(185 80% 50%)" />
              <stop offset="100%" stopColor="hsl(185 80% 50% / 0.3)" />
            </linearGradient>
          </defs>
          
          {/* Top-left corner */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            d="M 40 20 L 20 20 L 20 40"
            stroke="url(#cornerGradient)"
            strokeWidth="2"
            fill="none"
          />
          
          {/* Top-right corner */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            d="M calc(100% - 40) 20 L calc(100% - 20) 20 L calc(100% - 20) 40"
            stroke="url(#cornerGradient)"
            strokeWidth="2"
            fill="none"
            style={{ transform: "translateX(calc(100% - 60px))" }}
          />
          
          {/* Bottom-left corner */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            d="M 40 calc(100% - 20) L 20 calc(100% - 20) L 20 calc(100% - 40)"
            stroke="url(#cornerGradient)"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        {/* Corner brackets using divs for browser compatibility */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-accent" />
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-accent" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-accent" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-accent" />

        {/* Scanning line */}
        <AnimatePresence>
          {isPlaying && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"
              style={{ top: `${scanLinePosition}%` }}
            />
          )}
        </AnimatePresence>

        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(hsl(185 80% 50% / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(185 80% 50% / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Highlight zones */}
        {highlightZones.map((zone, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="absolute"
            style={{ left: `${zone.x}%`, top: `${zone.y}%` }}
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-full border-2 border-primary animate-ping absolute" />
              <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center bg-primary/20">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-xs text-primary whitespace-nowrap font-medium">
                {zone.label}
              </span>
            </div>
          </motion.div>
        ))}

        {/* HUD Elements */}
        <div className="absolute top-6 left-6 flex items-center gap-2">
          <Scan className="w-5 h-5 text-accent" />
          <span className="text-xs text-accent font-mono">
            SCANNING ENVIRONMENT
          </span>
        </div>

        <div className="absolute top-6 right-6 flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-success animate-pulse' : 'bg-warning'}`} />
          <span className="text-xs text-muted-foreground font-mono">
            {isPlaying ? 'ACTIVE' : 'PAUSED'}
          </span>
        </div>

        {/* Alert overlay */}
        <AnimatePresence>
          {showAlert && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute inset-0 flex items-center justify-center bg-destructive/20 backdrop-blur-sm"
            >
              <div className="bg-[hsl(222_47%_11%/0.95)] border border-destructive rounded-xl p-6 max-w-md mx-4">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                  <span className="font-display text-lg font-bold text-destructive">
                    Warning
                  </span>
                </div>
                <p className="text-foreground">{alertMessage}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step indicator */}
        <div className="absolute bottom-6 left-6 bg-[hsl(222_47%_11%/0.9)] backdrop-blur-sm rounded-lg px-4 py-2 border border-border">
          <span className="text-xs text-muted-foreground">Current Step</span>
          <div className="flex items-center gap-2">
            <Focus className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Step {currentStep}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
