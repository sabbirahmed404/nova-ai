import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  delay: number;
}

const ParticleBackground: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set dimensions initially
    updateDimensions();

    // Generate particles
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      const particleCount = Math.min(Math.floor(window.innerWidth / 15), 40);

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 5 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          delay: Math.random() * 5,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();

    // Add event listener
    window.addEventListener('resize', updateDimensions);
    window.addEventListener('resize', generateParticles);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('resize', generateParticles);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Background gradient circles */}
      <div className="gradient-circle w-1/2 h-1/2 top-0 left-0"></div>
      <div className="gradient-circle w-1/3 h-1/3 bottom-0 right-0"></div>
      <div className="gradient-circle w-1/4 h-1/4 bottom-1/4 left-1/4"></div>
      
      {/* Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;