import { useEffect, useRef } from 'react';

export default function CursorTrail() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationFrameRef = useRef(null);
  const lastMouseRef = useRef({ x: 0, y: 0 });
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

    // Draw a star shape
    const drawStar = (ctx, x, y, size, points, rotation) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      
      const outerRadius = size;
      const innerRadius = size * 0.4;
      
      for (let i = 0; i < points * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const angle = (i * Math.PI) / points;
        const px = Math.cos(angle) * radius;
        const py = Math.sin(angle) * radius;
        
        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }
      
      ctx.closePath();
      ctx.restore();
    };

    // Draw a cross/sparkle shape
    const drawCross = (ctx, x, y, size, rotation) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      
      const halfSize = size * 0.5;
      ctx.moveTo(-halfSize, 0);
      ctx.lineTo(halfSize, 0);
      ctx.moveTo(0, -halfSize);
      ctx.lineTo(0, halfSize);
      
      ctx.restore();
    };

    // Create a new particle (sparkle)
    const createParticle = (x, y) => {
      // Random angle for spreading effect
      const angle = Math.random() * Math.PI * 1;
      // Random velocity for natural movement
      const velocity = Math.random() * 1.5 + 0.3;
      // Random size for variation (smaller for more sparkle)
      const size = Math.random() * 2.5 + 1;
      // Random rotation speed for twinkling
      const rotationSpeed = (Math.random() - 0.5) * 0.15;
      // Random twinkle phase
      const twinklePhase = Math.random() * Math.PI * 2;
      // Random twinkle speed
      const twinkleSpeed = Math.random() * 0.12 + 0.06;
      // Random shape type (0 = star, 1 = cross, 2 = circle)
      const shapeType = Math.floor(Math.random() * 3);
      // Star points (4 or 6)
      const points = Math.random() < 0.5 ? 4 : 6;
      
      return {
        x,
        y,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        size,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed,
        twinklePhase,
        twinkleSpeed,
        shapeType,
        points,
        life: 1.0, // Start at full opacity
        decay: Math.random() * 0.008 + 0.005, // Random decay rate for varied fade
      };
    };

    // Throttle mouse movement for better performance
    let throttleTimeout = null;
    const handleMouseMove = (e) => {
      if (throttleTimeout) return;
      
      throttleTimeout = setTimeout(() => {
        throttleTimeout = null;
      }, 16); // ~60fps throttle
      
      const x = e.clientX;
      const y = e.clientY;
      
      // Check if mouse actually moved (not just hovering)
      const dx = x - lastMouseRef.current.x;
      const dy = y - lastMouseRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance > 3) { 
        const particleCount = Math.min(Math.floor(distance / 3) + 1, 8);

        for (let i = 0; i < particleCount; i++) {
          // Add slight offset for trail effect
          const speedFactor = Math.min(distance * 0.4, 30);
          const offsetX = (Math.random() - 0.5) * speedFactor;
          const offsetY = (Math.random() - 0.5) * speedFactor;
          particlesRef.current.push(createParticle(x + offsetX, y + offsetY));
        }
        
        lastMouseRef.current = { x, y };
      }
    };

    // Animation loop 
    let isAnimating = true;
    const animate = () => {
      if (!isAnimating) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Skip frame if no particles to improve performance
      if (particlesRef.current.length === 0) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }
      
      // Update and draw particles
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const particle = particlesRef.current[i];
        
        // Update position (sparkles spread out)
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Gradually slow down (friction effect)
        particle.vx *= 0.98;
        particle.vy *= 0.98;
        
        // Update rotation for twinkling effect
        particle.rotation += particle.rotationSpeed;
        
        // Update twinkle phase
        particle.twinklePhase += particle.twinkleSpeed;
        
        // Update life (opacity) - fade out over time
        particle.life -= particle.decay;
        
        // Draw particle
        if (particle.life > 0) {
          const baseOpacity = Math.max(0, particle.life);
          // Add twinkling effect (pulsing opacity)
          const twinkle = Math.sin(particle.twinklePhase) * 0.3 + 0.7; // Oscillate between 0.4 and 1.0
          const opacity = baseOpacity * twinkle;
          
          // Get current theme
          const theme = themeRef.current;
          
          ctx.save();
          
          // Set glow/shadow properties (reduced blur for better performance)
          const glowIntensity = particle.size * 3;
          if (theme === 'light') {
            ctx.shadowBlur = glowIntensity;
            ctx.shadowColor = 'rgba(255, 191, 243, 0.7)';
            ctx.strokeStyle = `rgba(255, 191, 243, ${opacity * 0.9})`;
            ctx.fillStyle = `rgba(255, 191, 243, ${opacity * 0.7})`;
          } else {
            ctx.shadowBlur = glowIntensity;
            ctx.shadowColor = 'rgba(255, 255, 255, 0.9)';
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.95})`;
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.8})`;
          }
          
          ctx.lineWidth = Math.max(1, particle.size * 0.3);
          
          // Draw different shapes for variety
          if (particle.shapeType === 0) {
            // Draw star
            drawStar(ctx, particle.x, particle.y, particle.size, particle.points, particle.rotation);
            ctx.fill();
            ctx.stroke();
          } else if (particle.shapeType === 1) {
            // Draw cross/sparkle
            drawCross(ctx, particle.x, particle.y, particle.size, particle.rotation);
            ctx.lineCap = 'round';
            ctx.stroke();
            // Add small circle in center
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size * 0.2, 0, Math.PI * 2);
            ctx.fill();
          } else {
            // Draw circle with sparkle lines
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size * 0.6, 0, Math.PI * 2);
            ctx.fill();
            // Add small cross on top
            ctx.beginPath();
            ctx.moveTo(particle.x - particle.size * 0.3, particle.y);
            ctx.lineTo(particle.x + particle.size * 0.3, particle.y);
            ctx.moveTo(particle.x, particle.y - particle.size * 0.3);
            ctx.lineTo(particle.x, particle.y + particle.size * 0.3);
            ctx.stroke();
          }
          
          ctx.restore();
        }
        
        // Remove dead particles
        if (particle.life <= 0) {
          particlesRef.current.splice(i, 1);
        }
      }
      
      if (particlesRef.current.length > 80) {
        particlesRef.current = particlesRef.current.slice(-60);
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();
    
    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    
    // Cleanup
    return () => {
      isAnimating = false;
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      themeObserver.disconnect();
      if (throttleTimeout) {
        clearTimeout(throttleTimeout);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="cursor-trail-canvas" />;
}

