"use client"

import Features from "./features";
import Hero from "./hero";
import ParticleBackground from "./particle-background";

const HomePage = () => {
    return (
        <div>
            <ParticleBackground />
            <Hero />
            <Features />
        </div>
    );
};

export default HomePage;