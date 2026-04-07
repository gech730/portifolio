import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

// ── Code rain characters: mix of binary, hex, and code symbols ──
const CHARS = '01アイウエオカキクケコ{}[]<>/\\;:=+*#@!?ABCDEFabcdef0123456789';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    const isDark = theme === 'dark';

    // ── Theme colours ──────────────────────────────────────────
    const cyan   = isDark ? [6, 182, 212]   : [8, 145, 178];
    const purple = isDark ? [139, 92, 246]  : [124, 58, 237];
    const bgBase = isDark ? '#0B0F19'       : '#f8fafc';

    // ── Canvas size ────────────────────────────────────────────
    let W, H;
    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // ══════════════════════════════════════════════════════════
    // 1. PERSPECTIVE GRID  (receding into horizon)
    // ══════════════════════════════════════════════════════════
    const GRID_LINES = 14;   // lines each direction
    const GRID_SPEED = 0.18; // how fast the grid scrolls toward viewer

    let gridOffset = 0;

    const drawGrid = () => {
      gridOffset = (gridOffset + GRID_SPEED) % (H / GRID_LINES);

      const horizonY = H * 0.42;
      const vanishX  = W / 2;
      const floorAlpha = isDark ? 0.07 : 0.06;

      ctx.save();

      // vertical lines fanning from vanishing point
      for (let i = 0; i <= GRID_LINES; i++) {
        const t = i / GRID_LINES;
        const xBottom = W * t;
        const alpha = floorAlpha * (0.4 + 0.6 * Math.abs(t - 0.5) * 2);
        ctx.beginPath();
        ctx.moveTo(vanishX, horizonY);
        ctx.lineTo(xBottom, H);
        ctx.strokeStyle = `rgba(${cyan.join(',')},${alpha})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }

      // horizontal lines scrolling toward viewer
      for (let i = 0; i <= GRID_LINES; i++) {
        const rawT = (i / GRID_LINES + gridOffset / H) % 1;
        // perspective: lines bunch near horizon, spread near bottom
        const perspT = Math.pow(rawT, 2.2);
        const y = horizonY + perspT * (H - horizonY);
        const alpha = floorAlpha * perspT;
        const xLeft  = vanishX - (vanishX) * perspT;
        const xRight = vanishX + (W - vanishX) * perspT;
        ctx.beginPath();
        ctx.moveTo(xLeft, y);
        ctx.lineTo(xRight, y);
        ctx.strokeStyle = `rgba(${cyan.join(',')},${alpha})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      ctx.restore();
    };

    // ══════════════════════════════════════════════════════════
    // 2. CODE RAIN  (matrix-style falling characters)
    // ══════════════════════════════════════════════════════════
    const FONT_SIZE  = 13;
    const RAIN_ALPHA = isDark ? 0.85 : 0.6;

    let cols;
    const initCols = () => {
      cols = Math.floor(W / FONT_SIZE);
    };
    initCols();
    window.addEventListener('resize', initCols);

    // Each column: y position, speed, color (cyan or purple), opacity
    const drops = Array.from({ length: 0 }, () => null); // filled below
    const initDrops = () => {
      drops.length = 0;
      for (let i = 0; i < cols; i++) {
        drops.push({
          y:      Math.random() * -100,
          speed:  Math.random() * 0.6 + 0.25,
          isPurple: Math.random() > 0.72,
          len:    Math.floor(Math.random() * 18) + 8,
          chars:  Array.from({ length: 30 }, () => CHARS[Math.floor(Math.random() * CHARS.length)]),
          mutate: 0,
        });
      }
    };
    initDrops();
    window.addEventListener('resize', initDrops);

    const drawRain = () => {
      ctx.font = `${FONT_SIZE}px 'Courier New', monospace`;

      drops.forEach((d, i) => {
        const x = i * FONT_SIZE;

        // draw trail
        for (let j = 0; j < d.len; j++) {
          const charY = d.y - j * FONT_SIZE;
          if (charY < 0 || charY > H) continue;

          const progress = j / d.len;
          const alpha = (1 - progress) * RAIN_ALPHA * (isDark ? 0.22 : 0.14);

          const col = d.isPurple ? purple : cyan;
          ctx.fillStyle = `rgba(${col.join(',')},${alpha})`;
          ctx.fillText(d.chars[j % d.chars.length], x, charY);
        }

        // bright head character
        if (d.y > 0 && d.y < H) {
          const col = d.isPurple ? purple : cyan;
          ctx.fillStyle = `rgba(${col.join(',')},${isDark ? 0.9 : 0.7})`;
          ctx.fillText(d.chars[0], x, d.y);
        }

        // advance
        d.y += d.speed * FONT_SIZE * 0.18;

        // mutate chars occasionally
        d.mutate++;
        if (d.mutate > 8) {
          d.mutate = 0;
          const idx = Math.floor(Math.random() * d.chars.length);
          d.chars[idx] = CHARS[Math.floor(Math.random() * CHARS.length)];
        }

        // reset when off screen
        if (d.y - d.len * FONT_SIZE > H) {
          d.y = Math.random() * -200;
          d.speed = Math.random() * 0.6 + 0.25;
          d.isPurple = Math.random() > 0.72;
          d.len = Math.floor(Math.random() * 18) + 8;
        }
      });
    };

    // ══════════════════════════════════════════════════════════
    // 3. AMBIENT GLOW ORBS  (slow-drifting radial gradients)
    // ══════════════════════════════════════════════════════════
    const orbs = [
      { cx: 0.15, cy: 0.25, r: 0.28, col: cyan,   speed: 0.00012, phase: 0 },
      { cx: 0.82, cy: 0.15, r: 0.22, col: purple, speed: 0.00009, phase: 1.5 },
      { cx: 0.50, cy: 0.70, r: 0.20, col: cyan,   speed: 0.00015, phase: 3.0 },
      { cx: 0.88, cy: 0.75, r: 0.18, col: purple, speed: 0.00011, phase: 4.5 },
    ];

    const drawOrbs = (t) => {
      orbs.forEach((o) => {
        const ox = (o.cx + Math.sin(t * o.speed * 1000 + o.phase) * 0.05) * W;
        const oy = (o.cy + Math.cos(t * o.speed * 800  + o.phase) * 0.04) * H;
        const or = o.r * Math.min(W, H);
        const alpha = isDark ? 0.055 : 0.04;
        const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, or);
        grad.addColorStop(0, `rgba(${o.col.join(',')},${alpha})`);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(ox, oy, or, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    // ══════════════════════════════════════════════════════════
    // 4. FLOATING BINARY SNIPPETS  (small drifting code words)
    // ══════════════════════════════════════════════════════════
    const SNIPPETS = [
      'if (AI)', 'while(true)', '0xFF', 'async/await',
      'import *', 'O(n log n)', '∇loss', 'σ(x)',
      'git push', 'npm run', 'docker up', 'kubectl',
      '{ }', '=> {}', 'useState', 'useEffect',
      '10110101', 'FFFF', 'null', 'undefined',
    ];

    const floaters = Array.from({ length: 18 }, (_, i) => ({
      text:  SNIPPETS[i % SNIPPETS.length],
      x:     Math.random() * W,
      y:     Math.random() * H,
      vx:    (Math.random() - 0.5) * 0.18,
      vy:    (Math.random() - 0.5) * 0.12,
      alpha: Math.random() * 0.07 + 0.03,
      size:  Math.random() * 3 + 9,
      isPurple: Math.random() > 0.6,
    }));

    const drawFloaters = () => {
      floaters.forEach((f) => {
        f.x += f.vx;
        f.y += f.vy;
        if (f.x < -100) f.x = W + 50;
        if (f.x > W + 100) f.x = -50;
        if (f.y < -30) f.y = H + 10;
        if (f.y > H + 30) f.y = -10;

        const col = f.isPurple ? purple : cyan;
        ctx.font = `${f.size}px 'Courier New', monospace`;
        ctx.fillStyle = `rgba(${col.join(',')},${f.alpha})`;
        ctx.fillText(f.text, f.x, f.y);
      });
    };

    // ══════════════════════════════════════════════════════════
    // MAIN LOOP
    // ══════════════════════════════════════════════════════════
    let t = 0;
    const draw = () => {
      t++;

      // background fill
      ctx.fillStyle = bgBase;
      ctx.fillRect(0, 0, W, H);

      drawOrbs(t);
      drawGrid();
      drawRain();
      drawFloaters();

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('resize', initCols);
      window.removeEventListener('resize', initDrops);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  );
};

export default AnimatedBackground;
