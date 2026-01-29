import { motion } from "framer-motion";
import { ChevronRight, RotateCcw, CheckCircle, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ActionControlsProps {
  isPlaying: boolean;
  isLastStep: boolean;
  canProceed: boolean;
  onTogglePlay: () => void;
  onNextStep: () => void;
  onRepeatScenario: () => void;
  onMarkComplete: () => void;
}

export const ActionControls = ({
  isPlaying,
  isLastStep,
  canProceed,
  onTogglePlay,
  onNextStep,
  onRepeatScenario,
  onMarkComplete,
}: ActionControlsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-[hsl(222_47%_13%)] rounded-xl border border-border p-4"
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Playback controls */}
        <div className="flex items-center gap-3">
          <Button
            variant="glass"
            size="icon"
            onClick={onTogglePlay}
            className="w-12 h-12"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5 ml-0.5" />
            )}
          </Button>
          <div>
            <div className="text-sm font-medium text-foreground">
              {isPlaying ? "Training Active" : "Training Paused"}
            </div>
            <div className="text-xs text-muted-foreground">
              {isPlaying ? "Follow the instructions" : "Press play to continue"}
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            onClick={onRepeatScenario}
            className="hidden sm:flex"
          >
            <RotateCcw className="w-4 h-4" />
            Repeat Scenario
          </Button>

          {isLastStep ? (
            <Button
              variant="hero"
              onClick={onMarkComplete}
              disabled={!canProceed}
            >
              <CheckCircle className="w-4 h-4" />
              Mark as Completed
            </Button>
          ) : (
            <Button
              variant="hero"
              onClick={onNextStep}
              disabled={!canProceed}
            >
              Next Step
              <ChevronRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Mobile repeat button */}
      <Button
        variant="outline"
        onClick={onRepeatScenario}
        className="w-full mt-3 sm:hidden"
      >
        <RotateCcw className="w-4 h-4" />
        Repeat Scenario
      </Button>
    </motion.div>
  );
};
