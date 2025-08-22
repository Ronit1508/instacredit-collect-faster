import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Zap, Shield, BarChart3, Receipt, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Automated Reminders",
    description: "Set it and forget it. Smart reminders sent at optimal times to maximize payment response rates."
  },
  {
    icon: Clock,
    title: "Faster Collection",
    description: "Reduce payment delays by up to 70% with intelligent follow-up sequences and personalized messaging."
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track payment trends, customer behavior, and collection performance with real-time insights."
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "Bank-grade security with full compliance to data protection regulations and industry standards."
  },
  {
    icon: Receipt,
    title: "One Tap GST",
    description: "Generate and manage GST invoices instantly with a single tap. Automated tax calculations and compliance."
  },
  {
    icon: RefreshCw,
    title: "Auto Status Update",
    description: "Real-time invoice status updates automatically sync across all platforms and notify relevant stakeholders."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything you need to
            <span className="text-accent"> collect faster</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to streamline your payment collection process
            and improve your cash flow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-card">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;