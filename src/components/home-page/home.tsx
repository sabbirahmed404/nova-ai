"use client";

import AIAssistants from "./ai-assistants";
import Contact from "./contact";
import Features from "./features";
import Hero from "./hero";
import PricingPlans from "./pricing-plans";
import AITransformationCallout from "./ai-transformation-callout";
import TechStack from "./tech-stack";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <AIAssistants />
      <TechStack />
      <PricingPlans />
      <Contact />
      <AITransformationCallout />
    </div>
  );
};

export default HomePage;
