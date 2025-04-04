import { Check, X } from "lucide-react";

const comparisonData = [
  {
    feature: "Response Time",
    competitors: "5-10 seconds",
    novaai: "<1 second",
  },
  {
    feature: "Contextual Memory",
    competitors: "Limited",
    novaai: "Extensive",
  },
  { feature: "Languages Supported", competitors: "10-20", novaai: "50+" },
  {
    feature: "Custom Training",
    competitors: <X className="h-5 w-5 text-red-500 mx-auto" />,
    novaai: <Check className="h-5 w-5 text-green-500 mx-auto" />,
  },
  { feature: "API Integration", competitors: "Basic", novaai: "Advanced" },
  {
    feature: "Update Frequency",
    competitors: "Quarterly",
    novaai: "Monthly",
  },
];

const ComparisonTable = () => {
  return (
    <div className="overflow-hidden glass rounded-2xl">
      <div className="py-6 text-center">
        <h3 className="text-2xl font-bold">NovaAI vs. Competitors</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#8B5CF6]/20">
              <th className="py-4 px-6 text-left">Feature</th>
              <th className="py-4 px-6 text-center">Competitors</th>
              <th className="py-4 px-6 text-center bg-gradient-to-r from-[#00F5FF]/20 to-[#8B5CF6]/20">
                NovaAI
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <tr key={index} className="border-t border-white/10">
                <td className="py-4 px-6 font-medium">{row.feature}</td>
                <td className="py-4 px-6 text-center text-gray-400">
                  {row.competitors}
                </td>
                <td className="py-4 px-6 text-center bg-gradient-to-r from-[#00F5FF]/10 to-[#8B5CF6]/10 text-white font-medium">
                  {row.novaai}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;
