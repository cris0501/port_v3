import { useEffect, useRef } from "react";

export function TronBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const gridSize = 50;
    let offset = 0;

    const verticalDeviations: number[][] = [];
    const horizontalDeviations: number[][] = [];

    const generateDeviations = () => {
      verticalDeviations.length = 0;
      horizontalDeviations.length = 0;

      for (let x = 0; x < canvas.width; x += gridSize) {
        const deviations = [];
        for (let y = 0; y < canvas.height; y += 20) {
          deviations.push(Math.sin(y * 0.01 + x * 0.005) * 8 + Math.random() * 4 - 2);
        }
        verticalDeviations.push(deviations);
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        const deviations = [];
        for (let x = 0; x < canvas.width; x += 20) {
          deviations.push(Math.sin(x * 0.01 + y * 0.005) * 5 + Math.random() * 3 - 1.5);
        }
        horizontalDeviations.push(deviations);
      }
    };

    generateDeviations();

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "rgba(0, 200, 255, 0.15)";
      ctx.lineWidth = 1;

      let vIndex = 0;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        const deviations = verticalDeviations[vIndex] || [];
        let devIndex = 0;

        for (let y = 0; y < canvas.height; y += 20) {
          const deviation = deviations[devIndex] || 0;
          if (y === 0) {
            ctx.moveTo(x + deviation, y);
          } else {
            ctx.lineTo(x + deviation, y);
          }
          devIndex++;
        }
        ctx.stroke();
        vIndex++;
      }

      let hIndex = 0;
      for (let y = offset; y < canvas.height; y += gridSize) {
        const alpha = Math.max(0.05, 0.2 * (1 - y / canvas.height));
        ctx.strokeStyle = `rgba(0, 200, 255, ${alpha})`;
        ctx.beginPath();

        const deviations = horizontalDeviations[hIndex] || [];
        let devIndex = 0;

        for (let x = 0; x < canvas.width; x += 20) {
          const deviation = deviations[devIndex] || 0;
          if (x === 0) {
            ctx.moveTo(x, y + deviation);
          } else {
            ctx.lineTo(x, y + deviation);
          }
          devIndex++;
        }
        ctx.stroke();
        hIndex++;
      }

      const time = Date.now() * 0.001;
      const glowLines = [
        { x: canvas.width * 0.2, color: "rgba(0, 200, 255, 0.4)" },
        { x: canvas.width * 0.5, color: "rgba(255, 0, 200, 0.3)" },
        { x: canvas.width * 0.8, color: "rgba(0, 200, 255, 0.4)" },
      ];

      glowLines.forEach((line, idx) => {
        ctx.strokeStyle = line.color;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 10;
        ctx.shadowColor = line.color;
        ctx.beginPath();

        for (let y = 0; y < canvas.height; y += 15) {
          const deviation = Math.sin(y * 0.02 + time + idx) * 12;
          if (y === 0) {
            ctx.moveTo(line.x + deviation, y);
          } else {
            ctx.lineTo(line.x + deviation, y);
          }
        }
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      offset = (offset + 0.5) % gridSize;
    };

    const animate = () => {
      drawGrid();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.6 }} />;
}
