"use client"

import AIAssistants from "./ai-assistants";
import Features from "./features";
import Hero from "./hero";
import ParticleBackground from "./particle-background";
import TechStack from "./tech-stack";

const HomePage = () => {
    return (
        <div>
            <ParticleBackground />
            <Hero />
            <Features />
            <AIAssistants />
            <TechStack />
        </div>
    );
};

export default HomePage;