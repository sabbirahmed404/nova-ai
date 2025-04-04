import { Button } from "../ui/button";

const AITransformationCallout = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container max-w-7xl mx-auto text-center">
        <div className="glass-card py-16 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00F5FF] via-[#8B5CF6] to-[#FF00E5]"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to{" "}
            <span className="gradient-text">Transform Your Business</span> with
            AI?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Join thousands of businesses already leveraging NovaAI&apos;s
            cutting-edge technology to automate workflows and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="neon-button text-white font-medium px-8 py-6">
              Get Started Today
            </Button>
            <Button
              variant="outline"
              className="border-[#00F5FF] text-white hover:bg-[#00F5FF]/20 px-8 py-6"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITransformationCallout;
