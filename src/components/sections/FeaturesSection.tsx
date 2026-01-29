import { motion } from "framer-motion";
import { 
  Eye, 
  BookOpen, 
  BarChart3, 
  Globe, 
  Shield, 
  Zap,
  CheckCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    icon: Eye,
    title: "AR-Based Simulation",
    description: "Interact with realistic accident scenarios using cutting-edge augmented reality technology.",
    color: "primary",
    highlights: ["Equipment malfunctions", "Chemical spills", "Fire emergencies"],
  },
  {
    icon: BookOpen,
    title: "Step-by-Step Training",
    description: "Guided procedures with visual and interactive instructions for maximum learning retention.",
    color: "accent",
    highlights: ["Visual guidance", "Interactive tutorials", "Real-time feedback"],
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    description: "Detailed analytics track user actions and provide actionable feedback for improvement.",
    color: "success",
    highlights: ["Progress metrics", "Mistake analysis", "Improvement suggestions"],
  },
  {
    icon: Globe,
    title: "Multi-Environment",
    description: "Training scenarios for industrial, office, construction, and laboratory settings.",
    color: "warning",
    highlights: ["Industrial", "Office", "Construction", "Laboratory"],
  },
  {
    icon: Shield,
    title: "Risk-Free Practice",
    description: "Practice critical safety procedures without any real-world consequences or dangers.",
    color: "primary",
    highlights: ["Zero injuries", "Unlimited retries", "Safe learning"],
  },
  {
    icon: Zap,
    title: "Instant Deployment",
    description: "Quick setup and deployment across your organization with minimal technical overhead.",
    color: "accent",
    highlights: ["Easy integration", "Scalable", "Cloud-based"],
  },
];

const colorStyles = {
  primary: "from-primary/20 to-primary/5 border-primary/30 group-hover:border-primary/50",
  accent: "from-accent/20 to-accent/5 border-accent/30 group-hover:border-accent/50",
  success: "from-success/20 to-success/5 border-success/30 group-hover:border-success/50",
  warning: "from-warning/20 to-warning/5 border-warning/30 group-hover:border-warning/50",
};

const iconColorStyles = {
  primary: "bg-primary/20 text-primary",
  accent: "bg-accent/20 text-accent",
  success: "bg-success/20 text-success",
  warning: "bg-warning/20 text-warning",
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need for{" "}
            <span className="bg-gradient-to-r from-primary to-[hsl(35_95%_55%)] bg-clip-text text-transparent">
              Safer Workplaces
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive AR training platform designed to prepare your workforce 
            for any emergency scenario.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                variant="interactive" 
                className={`h-full bg-gradient-to-br ${colorStyles[feature.color as keyof typeof colorStyles]} group`}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${iconColorStyles[feature.color as keyof typeof iconColorStyles]}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-success" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
