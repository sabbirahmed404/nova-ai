import FAQ from "./faq";
import ComparisonTable from "./comparison-table";

const TechStack: React.FC = () => {


  const technologies = [
    {
      title: "GPT-4o Integration",
      description:
        "Access the most advanced language model with enhanced reasoning capabilities and contextual understanding.",
      icon: "🧠",
    },
    {
      title: "Cloud-Based SaaS",
      description:
        "Scalable infrastructure that grows with your business, ensuring high availability and performance.",
      icon: "☁️",
    },
    {
      title: "End-to-End Encryption",
      description:
        "Enterprise-grade security protocols protecting your data at rest and in transit.",
      icon: "🔒",
    },
    {
      title: "Real-time Processing",
      description:
        "Instant data analysis and response generation for time-sensitive applications.",
      icon: "⚡",
    },
  ];

  return (
    <section id="technology" className="py-20 md:py-32 px-4 relative">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Technology Stack</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Built on cutting-edge AI research and enterprise-grade
            infrastructure for unparalleled performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`glass-card p-6 cursor-pointer transition-all duration-300`}
              
            >
              <div className="text-4xl mb-4">{tech.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
              <p
                className={`text-gray-300 text-sm transition-all duration-300 `}
              >
                {tech.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tech FAQ Accordion */}
        <FAQ />

        {/* Comparison Table */}
        <ComparisonTable />
      </div>
    </section>
  );
};

export default TechStack;
