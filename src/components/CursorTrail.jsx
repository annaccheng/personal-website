import { useEffect, useRef } from 'react';

export default function CursorTrail() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationFrameRef = useRef(null);
  const lastMouseRef = useRef({ x: 0, y: 0 });
  const timeoutRef = useRef(null);
  const themeRef = useRef('dark');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Update theme reference
    const updateTheme = () => {
      themeRef.current = document.documentElement.getAttribute('data-theme') || 'dark';
    };
    updateTheme();
    
    // Watch for theme changes
    const themeObserver = new MutationObserver(updateTheme);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    // Create a new particle (star)
    const createParticle = (x, y) => {
      // Random angle for spreading effect
      const angle = Math.random() * Math.PI * 2;
      // Random velocity for natural movement
      const velocity = Math.random() * 1.5 + 0.3;
      // Random size for variation
      const size = Math.random() * 1.5 + 0.5;
      
      return {
        x,
        y,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        size,
        life: 1.0, // Start at full opacity
        decay: Math.random() * 0.008 + 0.005, // Random decay rate for varied fade
      };
    };

    // Handle mouse movement
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      
      // Check if mouse actually moved (not just hovering)
      const dx = x - lastMouseRef.current.x;
      const dy = y - lastMouseRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance > 1) { // Only create particles if moved enough
        // Create particles based on movement distance for smoother trail
        const particleCount = Math.min(Math.floor(distance / 2) + 1, 6);
        // console.log(particleCount);

        for (let i = 0; i < particleCount; i++) {
          // Add slight offset for trail effect
          const speedFactor = Math.min(distance * 0.5, 40);
          const offsetX = (Math.random() - 0.5) * speedFactor;
          const offsetY = (Math.random() - 0.5) * speedFactor;
          particlesRef.current.push(createParticle(x + offsetX, y + offsetY));
        }
        
        lastMouseRef.current = { x, y };
        
        // Clear existing timeout
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        
        // When movement stops, particles will naturally fade out
        // No need to explicitly stop creation - they just won't be created
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const particle = particlesRef.current[i];
        
        // Update position (stars spread out)
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Gradually slow down (friction effect)
        particle.vx *= 0.98;
        particle.vy *= 0.98;
        
        // Update life (opacity) - fade out over time
        particle.life -= particle.decay;
        
        // Draw particle
        if (particle.life > 0) {
          const opacity = Math.max(0, particle.life);
          
          // Get current theme
          const theme = themeRef.current;
          
          // Draw star with glow effect
          ctx.save();
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          
          if (theme === 'light') {
            ctx.fillStyle = `rgba(255, 191, 243, ${opacity * 0.9})`;
            ctx.shadowBlur = particle.size * 8;
            ctx.shadowColor = 'rgba(255, 191, 243, 0.8)';
          } else {
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.95})`;
            ctx.shadowBlur = particle.size * 8;
            ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
          }
          
          ctx.fill();
          ctx.restore();
        }
        
        // Remove dead particles
        if (particle.life <= 0) {
          particlesRef.current.splice(i, 1);
        }
      }
      
      // Limit particle count for performance (keep trail manageable)
      if (particlesRef.current.length > 120) {
        particlesRef.current = particlesRef.current.slice(-80);
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();
    
    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      themeObserver.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="cursor-trail-canvas" />;
}

