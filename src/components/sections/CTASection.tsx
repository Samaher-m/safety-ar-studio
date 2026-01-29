// import { motion } from "framer-motion";
// import { ArrowRight, Check } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

// const plans = [
//   {
//     name: "Starter",
//     description: "Perfect for small teams getting started with safety training.",
//     price: 49,
//     period: "per user/month",
//     features: [
//       "Up to 10 users",
//       "5 training scenarios",
//       "Basic analytics",
//       "Email support",
//       "Mobile app access",
//     ],
//     highlighted: false,
//     cta: "Start Free Trial",
//   },
//   {
//     name: "Professional",
//     description: "For growing organizations with comprehensive training needs.",
//     price: 99,
//     period: "per user/month",
//     features: [
//       "Up to 100 users",
//       "All training scenarios",
//       "Advanced analytics & reporting",
//       "Priority support",
//       "Custom branding",
//       "Admin dashboard",
//       "API access",
//     ],
//     highlighted: true,
//     cta: "Get Started",
//   },
//   {
//     name: "Enterprise",
//     description: "Full-featured solution for large organizations.",
//     price: null,
//     period: "Custom pricing",
//     features: [
//       "Unlimited users",
//       "Custom scenarios",
//       "White-label solution",
//       "Dedicated support",
//       "On-premise deployment",
//       "SSO integration",
//       "SLA guarantee",
//     ],
//     highlighted: false,
//     cta: "Contact Sales",
//   },
// ];

// export function CTASection() {
//   return (
//     <section id="pricing" className="py-24 bg-background relative overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 grid-pattern opacity-20" />
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

//       <div className="container mx-auto px-6 relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-3xl mx-auto mb-16"
//         >
//           <Badge variant="glow" className="mb-4">Pricing</Badge>
//           <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
//             Simple, Transparent{" "}
//             <span className="bg-gradient-to-r from-primary to-[hsl(35_95%_55%)] bg-clip-text text-transparent">
//               Pricing
//             </span>
//           </h2>
//           <p className="text-lg text-muted-foreground">
//             Choose the plan that fits your organization's safety training needs.
//           </p>
//         </motion.div>

//         {/* Pricing Grid */}
//         <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//           {plans.map((plan, index) => (
//             <motion.div
//               key={plan.name}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <Card 
//                 variant={plan.highlighted ? "gradient" : "elevated"} 
//                 className={`h-full relative ${plan.highlighted ? "border-primary/50 shadow-[0_0_40px_hsl(25_95%_53%/0.2)]" : ""}`}
//               >
//                 {plan.highlighted && (
//                   <div className="absolute -top-3 left-1/2 -translate-x-1/2">
//                     <Badge variant="glow">Most Popular</Badge>
//                   </div>
//                 )}
//                 <CardHeader className="pb-4">
//                   <CardTitle className="text-2xl">{plan.name}</CardTitle>
//                   <CardDescription>{plan.description}</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="mb-6">
//                     {plan.price ? (
//                       <div className="flex items-baseline gap-1">
//                         <span className="font-display text-4xl font-bold text-foreground">${plan.price}</span>
//                         <span className="text-muted-foreground text-sm">{plan.period}</span>
//                       </div>
//                     ) : (
//                       <div className="font-display text-4xl font-bold text-foreground">Custom</div>
//                     )}
//                   </div>

//                   <ul className="space-y-3 mb-8">
//                     {plan.features.map((feature) => (
//                       <li key={feature} className="flex items-center gap-3 text-sm">
//                         <Check className="w-4 h-4 text-success flex-shrink-0" />
//                         <span className="text-muted-foreground">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   <Button 
//                     variant={plan.highlighted ? "hero" : "outline"} 
//                     className="w-full"
//                   >
//                     {plan.cta}
//                     <ArrowRight className="w-4 h-4" />
//                   </Button>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
