"use client"

import AIAssistants from "./ai-assistants";
import Features from "./features";
import Hero from "./hero";
import ParticleBackground from "./particle-background";

const HomePage = () => {
    return (
        <div>
            <ParticleBackground />
            <Hero />
            <Features />
            <AIAssistants />
        </div>
    );
};

export default HomePage;