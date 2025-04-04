"use client"

import AIAssistants from "./ai-assistants";
import Features from "./features";
import Hero from "./hero";
import ParticleBackground from "./particle-background";
import PricingPlans from "./pricing-plans";
import ReadyToTransform from "./ready-to-transform";
import TechStack from "./tech-stack";

const HomePage = () => {
    return (
        <div>
            <ParticleBackground />
            <Hero />
            <Features />
            <AIAssistants />
            <TechStack />
            <PricingPlans />
            <ReadyToTransform />
        </div>
    );
};

export default HomePage;