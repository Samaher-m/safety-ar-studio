import { motion } from "framer-motion";
import { ArrowRight, Flame, Zap, Beaker, HardHat, Building, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const scenarios = [
  {
    id: 1,
    title: "Fire Emergency",
    description: "Practice evacuation procedures and fire extinguisher usage in various building types.",
    icon: Flame,
    difficulty: "Intermediate",
    duration: "15 min",
    environment: "Industrial",
    color: "destructive",
  },
  {
    id: 2,
    title: "Electrical Hazard",
    description: "Learn to identify and respond to electrical emergencies and equipment malfunctions.",
    icon: Zap,
    difficulty: "Advanced",
    duration: "20 min",
    environment: "Manufacturing",
    color: "warning",
  },
  {
    id: 3,
    title: "Chemical Spill",
    description: "Handle hazardous material incidents with proper PPE and containment procedures.",
    icon: Beaker,
    difficulty: "Advanced",
    duration: "25 min",
    environment: "Laboratory",
    color: "accent",
  },
  {
    id: 4,
    title: "Construction Site Safety",
    description: "Navigate common construction hazards including falls, struck-by, and caught-in scenarios.",
    icon: HardHat,
    difficulty: "Intermediate",
    duration: "30 min",
    environment: "Construction",
    color: "primary",
  },
  {
    id: 5,
    title: "Office Emergency",
    description: "Office-specific scenarios including earthquake response and medical emergencies.",
    icon: Building,
    difficulty: "Beginner",
    duration: "12 min",
    environment: "Office",
    color: "success",
  },
  {
    id: 6,
    title: "Equipment Failure",
    description: "Respond to machinery breakdowns and implement emergency shutdown procedures.",
    icon: AlertTriangle,
    difficulty: "Expert",
    duration: "35 min",
    environment: "Industrial",
    color: "destructive",
  },
];

const difficultyColors = {
  Beginner: "success",
  Intermediate: "warning",
  Advanced: "accent",
  Expert: "destructive",
} as const;

export function ScenariosSection() {
  return (
    <section id="scenarios" className="py-24 bg-[hsl(222_47%_8%)] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge variant="accent" className="mb-4">Training Modules</Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Real-World{" "}
            <span className="bg-gradient-to-r from-accent to-[hsl(195_80%_55%)] bg-clip-text text-transparent">
              Scenarios
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Immersive training modules covering the most critical workplace safety situations.
          </p>
        </motion.div>

        {/* Scenarios Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={scenario.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="scenario" className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <scenario.icon className="w-6 h-6 text-accent" />
                    </div>
                    <Badge variant={difficultyColors[scenario.difficulty as keyof typeof difficultyColors]}>
                      {scenario.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">
                    {scenario.title}
                  </CardTitle>
                  <CardDescription>{scenario.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span>⏱ {scenario.duration}</span>
                    <span>📍 {scenario.environment}</span>
                  </div>
                  <Button variant="ghost" className="w-full group-hover:bg-accent/10 group-hover:text-accent">
                    Start Training
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="hero" size="xl">
            View All Scenarios
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
