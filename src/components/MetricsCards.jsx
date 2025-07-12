import { Card, CardContent } from "@/components/ui/card";
import { FileText, Users, TrendingUp, IndianRupee } from "lucide-react";

const metrics = [
  {
    title: "Purchase",
    value: "₹0.00",
    icon: FileText,
    bgColor: "bg-blue-600"
  },
  {
    title: "Purchase",
    value: "₹0.00", 
    icon: Users,
    bgColor: "bg-blue-600"
  },
  {
    title: "Purchase",
    value: "₹0.00",
    icon: TrendingUp,
    bgColor: "bg-blue-600"
  },
  {
    title: "Earning",
    value: "₹0.00",
    icon: IndianRupee,
    bgColor: "bg-blue-600"
  }
];

export function MetricsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <Card key={index} className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                <metric.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}