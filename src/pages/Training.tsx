import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { TrainingHeader } from "@/components/training/TrainingHeader";
import { VideoPlayer } from "@/components/training/VideoPlayer";
import { TrainingStep } from "@/components/training/InstructionPanel";
import { ActionControls } from "@/components/training/ActionControls";
import { CompletionModal } from "@/components/training/CompletionModal";

// Mock training scenarios data
const scenariosData: Record<string, {
  title: string;
  difficulty: "low" | "medium" | "high";
  duration: string;
  steps: Omit<TrainingStep, "isCompleted" | "isCurrent">[];
  recommendations: string[];
}> = {
  fire: {
    title: "Fire Emergency Training",
    difficulty: "high",
    duration: "15-20 min",
    steps: [
      {
        id: 1,
        title: "Identify the Hazard",
        description: "Locate the source of smoke or fire. Look for visible flames, smoke patterns, and potential spread areas.",
        tips: [
          "Never touch doors without checking temperature",
          "Stay low to avoid smoke inhalation",
          "Note the closest exit routes"
        ]
      },
      {
        id: 2,
        title: "Activate the Alarm",
        description: "Pull the nearest fire alarm to alert all building occupants. This triggers the emergency response system.",
        tips: [
          "Fire alarms are typically red and located near exits",
          "Don't hesitate - early warning saves lives",
          "Note the time for emergency responders"
        ]
      },
      {
        id: 3,
        title: "Evacuate Safely",
        description: "Guide yourself and others to the nearest safe exit. Use stairs, never elevators.",
        tips: [
          "Help those with mobility issues if safe to do so",
          "Close doors behind you to slow fire spread",
          "Move quickly but don't run"
        ]
      },
      {
        id: 4,
        title: "Assembly Point",
        description: "Proceed to the designated assembly point and await further instructions from emergency personnel.",
        tips: [
          "Stay at the assembly point until cleared",
          "Report anyone unaccounted for",
          "Do not re-enter the building"
        ]
      },
      {
        id: 5,
        title: "Fire Extinguisher Use",
        description: "If trained and safe, use PASS technique: Pull, Aim, Squeeze, Sweep to extinguish small fires.",
        tips: [
          "Only attempt if fire is small and contained",
          "Always keep your back to an exit",
          "Evacuate if fire grows despite efforts"
        ]
      }
    ],
    recommendations: [
      "Review your building's fire evacuation plan regularly",
      "Know the location of all fire extinguishers in your area",
      "Practice the PASS technique with proper training",
      "Ensure emergency exits are never blocked"
    ]
  },
  chemical: {
    title: "Chemical Spill Response",
    difficulty: "high",
    duration: "20-25 min",
    steps: [
      {
        id: 1,
        title: "Assess the Situation",
        description: "Identify the chemical involved using labels or SDS sheets. Determine spill size and potential hazards.",
        tips: [
          "Never touch unknown substances",
          "Check for vapor hazards",
          "Identify nearby drains or waterways"
        ]
      },
      {
        id: 2,
        title: "Alert Personnel",
        description: "Warn nearby workers and contact the safety team. Evacuate non-essential personnel from the area.",
        tips: [
          "Use appropriate alarm signals",
          "Communicate the type of chemical if known",
          "Keep evacuation routes clear"
        ]
      },
      {
        id: 3,
        title: "Don PPE",
        description: "Put on appropriate personal protective equipment including gloves, goggles, and respiratory protection.",
        tips: [
          "Match PPE to chemical hazard level",
          "Check for proper fit and seal",
          "Never skip any protective item"
        ]
      },
      {
        id: 4,
        title: "Contain the Spill",
        description: "Use absorbent materials to prevent spread. Block drains and contain the perimeter.",
        tips: [
          "Work from the outside in",
          "Use appropriate absorbent type",
          "Prevent contamination of water sources"
        ]
      },
      {
        id: 5,
        title: "Clean and Dispose",
        description: "Collect contaminated materials and dispose according to hazardous waste protocols.",
        tips: [
          "Use proper containment vessels",
          "Label all waste clearly",
          "Document the incident thoroughly"
        ]
      }
    ],
    recommendations: [
      "Familiarize yourself with SDS sheets for chemicals in your area",
      "Know where spill kits are located and how to use them",
      "Regular PPE fit testing ensures proper protection",
      "Report all spills, no matter how small"
    ]
  },
  electrical: {
    title: "Electrical Hazard Training",
    difficulty: "medium",
    duration: "12-15 min",
    steps: [
      {
        id: 1,
        title: "Recognize Hazards",
        description: "Identify electrical hazards including exposed wires, damaged equipment, and overloaded circuits.",
        tips: [
          "Look for burn marks or sparking",
          "Check for unusual smells",
          "Note any flickering lights"
        ]
      },
      {
        id: 2,
        title: "De-energize Equipment",
        description: "Follow lockout/tagout procedures to safely de-energize electrical equipment before work.",
        tips: [
          "Use personal locks and tags",
          "Verify zero energy state",
          "Never assume power is off"
        ]
      },
      {
        id: 3,
        title: "Safe Work Practices",
        description: "Use insulated tools and maintain proper clearances from energized equipment.",
        tips: [
          "Keep work areas dry",
          "Use ground fault circuit interrupters",
          "Never work alone on electrical systems"
        ]
      },
      {
        id: 4,
        title: "Emergency Response",
        description: "Know how to respond to electrical shock incidents and arc flash emergencies.",
        tips: [
          "Never touch a shock victim directly",
          "Call for emergency help immediately",
          "Know location of AED devices"
        ]
      }
    ],
    recommendations: [
      "Complete lockout/tagout training before working on equipment",
      "Inspect electrical cords before each use",
      "Report damaged electrical equipment immediately",
      "Use only approved extension cords and power strips"
    ]
  },
  default: {
    title: "Safety Training Simulation",
    difficulty: "medium",
    duration: "10-15 min",
    steps: [
      {
        id: 1,
        title: "Introduction",
        description: "Welcome to the safety training simulation. This module will guide you through essential safety procedures.",
        tips: [
          "Pay close attention to all instructions",
          "Take notes if needed",
          "Ask questions if unsure"
        ]
      },
      {
        id: 2,
        title: "Hazard Recognition",
        description: "Learn to identify potential hazards in your work environment before they cause harm.",
        tips: [
          "Conduct regular safety inspections",
          "Report hazards immediately",
          "Don't ignore warning signs"
        ]
      },
      {
        id: 3,
        title: "Safety Equipment",
        description: "Understand the proper use of safety equipment and personal protective gear.",
        tips: [
          "Know your PPE requirements",
          "Inspect equipment before use",
          "Store equipment properly"
        ]
      },
      {
        id: 4,
        title: "Emergency Response",
        description: "Learn the correct response procedures for various emergency situations.",
        tips: [
          "Know your emergency exits",
          "Practice evacuation routes",
          "Keep emergency numbers accessible"
        ]
      }
    ],
    recommendations: [
      "Review safety procedures regularly",
      "Participate in all scheduled drills",
      "Keep your training certifications current",
      "Share safety knowledge with colleagues"
    ]
  }
};

const Training = () => {
  const [searchParams] = useSearchParams();
  const scenarioType = searchParams.get("scenario") || "default";
  
  const scenario = scenariosData[scenarioType] || scenariosData.default;
  
  const [currentStep, setCurrentStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [steps, setSteps] = useState<TrainingStep[]>([]);
  const [showCompletion, setShowCompletion] = useState(false);
  const [startTime] = useState(Date.now());

  // Initialize steps
  useEffect(() => {
    const initialSteps = scenario.steps.map((step, index) => ({
      ...step,
      isCompleted: false,
      isCurrent: index === 0
    }));
    setSteps(initialSteps);
    setCurrentStep(1);
    setShowCompletion(false);
  }, [scenarioType]);

  const handleNextStep = () => {
    setSteps(prev => prev.map(step => {
      if (step.id === currentStep) {
        return { ...step, isCompleted: true, isCurrent: false };
      }
      if (step.id === currentStep + 1) {
        return { ...step, isCurrent: true };
      }
      return step;
    }));
    setCurrentStep(prev => Math.min(prev + 1, scenario.steps.length));
  };

  const handleRepeatScenario = () => {
    setSteps(prev => prev.map((step, index) => ({
      ...step,
      isCompleted: false,
      isCurrent: index === 0
    })));
    setCurrentStep(1);
    setIsPlaying(true);
  };

  const handleMarkComplete = () => {
    // Mark last step as completed
    setSteps(prev => prev.map(step => ({
      ...step,
      isCompleted: true,
      isCurrent: false
    })));
    setShowCompletion(true);
  };

  const calculateTimeSpent = () => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const completedSteps = steps.filter(s => s.isCompleted).length;
  const score = Math.round((completedSteps / scenario.steps.length) * 100);

  return (
    <div className="min-h-screen bg-background">
      <TrainingHeader
        title={scenario.title}
        difficulty={scenario.difficulty}
        duration={scenario.duration}
        currentStep={currentStep}
        totalSteps={scenario.steps.length}
      />

      <main className="container mx-auto px-4 md:px-6 py-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Video Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <VideoPlayer
              isPlaying={isPlaying}
              currentStep={currentStep}
              highlightZones={[
                { x: 30, y: 40, label: "Focus Area" },
                { x: 70, y: 60, label: "Check Point" }
              ]}
            />

            <ActionControls
              isPlaying={isPlaying}
              isLastStep={currentStep === scenario.steps.length}
              canProceed={isPlaying}
              onTogglePlay={() => setIsPlaying(!isPlaying)}
              onNextStep={handleNextStep}
              onRepeatScenario={handleRepeatScenario}
              onMarkComplete={handleMarkComplete}
            />
          </motion.div>
        </div>
      </main>

      {/* Completion Modal */}
      <CompletionModal
        isOpen={showCompletion}
        scenarioTitle={scenario.title}
        score={score}
        timeSpent={calculateTimeSpent()}
        stepsCompleted={completedSteps}
        totalSteps={scenario.steps.length}
        recommendations={scenario.recommendations}
        onRetry={handleRepeatScenario}
        onClose={() => setShowCompletion(false)}
      />

      {/* Custom scrollbar styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: hsl(222 47% 11%);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: hsl(217 33% 25%);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: hsl(217 33% 35%);
        }
      `}</style>
    </div>
  );
};

export default Training;
