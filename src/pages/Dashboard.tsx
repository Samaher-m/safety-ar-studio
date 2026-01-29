import { motion } from "framer-motion";
import { 
  BarChart3, 
  Users, 
  Award, 
  Clock, 
  TrendingUp, 
  AlertCircle,
  CheckCircle,
  Play,
  ArrowRight,
  Search,
  Filter
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useNavigate } from "react-router-dom";

// Mock data for dashboard
const stats = [
  { label: "Total Trainees", value: "1,234", change: "+12%", icon: Users, color: "primary" },
  { label: "Scenarios Completed", value: "8,456", change: "+24%", icon: CheckCircle, color: "success" },
  { label: "Avg. Score", value: "87%", change: "+5%", icon: TrendingUp, color: "accent" },
  { label: "Training Hours", value: "2,340", change: "+18%", icon: Clock, color: "warning" },
];

const recentActivity = [
  { user: "John Smith", action: "Completed Fire Emergency", score: 92, time: "2 min ago" },
  { user: "Sarah Johnson", action: "Started Chemical Spill", score: null, time: "5 min ago" },
  { user: "Mike Chen", action: "Completed Electrical Hazard", score: 88, time: "12 min ago" },
  { user: "Emily Davis", action: "Completed Office Emergency", score: 95, time: "25 min ago" },
  { user: "Alex Wilson", action: "Started Equipment Failure", score: null, time: "30 min ago" },
];

const trainingModules = [
  { name: "Fire Emergency", completion: 85, participants: 234, status: "active" },
  { name: "Chemical Spill", completion: 72, participants: 189, status: "active" },
  { name: "Electrical Hazard", completion: 68, participants: 156, status: "active" },
  { name: "Construction Safety", completion: 45, participants: 98, status: "new" },
];

const Dashboard = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Training Dashboard
            </h1>
            <p className="text-muted-foreground">
              Monitor your organization's safety training progress and performance.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="gradient" className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-${stat.color}/20`}>
                        <stat.icon className={`w-5 h-5 text-${stat.color}`} />
                      </div>
                      <Badge variant="success" className="text-xs">
                        {stat.change}
                      </Badge>
                    </div>
                    <div className="font-display text-2xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Training Progress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2"
            >
              <Card variant="elevated" className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Training Modules</CardTitle>
                      <CardDescription>Overview of active training scenarios</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {trainingModules.map((module) => (
                      <div key={module.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="font-medium text-foreground">{module.name}</span>
                            {module.status === "new" && (
                              <Badge variant="accent" className="text-xs">New</Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{module.participants} participants</span>
                            <span className="font-medium text-foreground">{module.completion}%</span>
                          </div>
                        </div>
                        <Progress value={module.completion} className="h-2" />
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <Button variant="hero" className="w-full">
                      View All Modules
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card variant="elevated" className="h-full">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest training sessions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-medium text-foreground">
                            {activity.user.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">
                            {activity.user}
                          </p>
                          <p className="text-xs text-muted-foreground truncate">
                            {activity.action}
                          </p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          {activity.score ? (
                            <Badge variant="success" className="text-xs">{activity.score}%</Badge>
                          ) : (
                            <Badge variant="warning" className="text-xs">In Progress</Badge>
                          )}
                          <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <Card variant="glass">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                      Ready to start training?
                    </h3>
                    <p className="text-muted-foreground">
                      Launch the AR training app and begin a new safety session.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="heroOutline" onClick={() => navigate("/")}>
                      <Search className="w-4 h-4" />
                      Browse Scenarios
                    </Button>
                    <Button variant="hero" onClick={() => navigate("/training?scenario=fire")}>
                      <Play className="w-4 h-4" />
                      Start Training
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
