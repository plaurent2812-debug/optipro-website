# Hero Animation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the hero timeline card with a premium holographic dashboard + orbital system animation.

**Architecture:** Single new component `HeroAnimation` with CSS Module for all styles/keyframes. Swap it into `page.tsx` replacing the old heroCard block. Clean up removed styles from `HomePage.module.css`.

**Tech Stack:** React 19, CSS Modules, CSS `@keyframes` (no external libraries)

**Spec:** `docs/superpowers/specs/2026-03-29-hero-animation-design.md`

---

## File Structure

| File | Action | Responsibility |
|------|--------|----------------|
| `src/components/visuals/HeroAnimation.tsx` | Create | Component: orbital layer, dashboard, particles, scanline |
| `src/components/visuals/HeroAnimation.module.css` | Create | All styles, keyframes, responsive breakpoints, reduced-motion |
| `src/components/visuals/__tests__/HeroAnimation.test.tsx` | Create | Render test, aria-hidden, structure validation |
| `src/app/page.tsx` | Modify (lines 7, 13, 95-112) | Swap import + JSX |
| `src/app/HomePage.module.css` | Modify (lines 37-41, 42-47, 95-206) | Remove old styles, update heroGrid, update responsive |

---

### Task 1: Create HeroAnimation component with CSS Module

**Files:**
- Create: `src/components/visuals/HeroAnimation.module.css`
- Create: `src/components/visuals/HeroAnimation.tsx`

- [ ] **Step 1: Create the CSS Module with all animations and styles**

Write `src/components/visuals/HeroAnimation.module.css` with the complete styles. This is the largest file — it contains:

```css
/* src/components/visuals/HeroAnimation.module.css */

/* ===== Container ===== */
.heroAnimation {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 560px;
  height: 560px;
}

/* ===== Orbital Layer ===== */
.orbitalLayer {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.orbit {
  position: absolute;
  border-radius: 50%;
  top: 50%;
  left: 50%;
}

.orbit1 {
  composes: orbit;
  width: 340px;
  height: 340px;
  border: 1px solid rgba(249, 115, 22, 0.15);
  animation: spinOrbit 35s linear infinite;
}

.orbit2 {
  composes: orbit;
  width: 440px;
  height: 440px;
  border: 1px solid rgba(249, 115, 22, 0.08);
  animation: spinOrbit 50s linear infinite reverse;
}

.orbit3 {
  composes: orbit;
  width: 530px;
  height: 530px;
  border: 1px solid rgba(249, 115, 22, 0.04);
  animation: spinOrbit 65s linear infinite;
}

@keyframes spinOrbit {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

/* ===== Orbital Nodes ===== */
.node {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  z-index: 5;
  backdrop-filter: blur(8px);
}

.nodeTop {
  composes: node;
  top: 28px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(249, 115, 22, 0.1);
  border: 1px solid rgba(249, 115, 22, 0.3);
  box-shadow: 0 0 24px rgba(249, 115, 22, 0.2);
  animation: floatV 5s ease-in-out infinite;
}

.nodeRight {
  composes: node;
  top: 50%;
  right: 28px;
  transform: translateY(-50%);
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  box-shadow: 0 0 24px rgba(16, 185, 129, 0.2);
  animation: floatV 5s ease-in-out infinite -1.2s;
}

.nodeBottom {
  composes: node;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  box-shadow: 0 0 24px rgba(59, 130, 246, 0.2);
  animation: floatV 5s ease-in-out infinite -2.5s;
}

.nodeLeft {
  composes: node;
  top: 50%;
  left: 28px;
  transform: translateY(-50%);
  background: rgba(168, 85, 247, 0.1);
  border: 1px solid rgba(168, 85, 247, 0.3);
  box-shadow: 0 0 24px rgba(168, 85, 247, 0.2);
  animation: floatV 5s ease-in-out infinite -3.7s;
}

@keyframes floatV {
  0%, 100% { margin-top: 0; }
  50% { margin-top: -10px; }
}

/* Node labels */
.nodeLabel {
  position: absolute;
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  white-space: nowrap;
  opacity: 0.5;
}

.nodeLabelTop {
  composes: nodeLabel;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  color: #f97316;
}

.nodeLabelRight {
  composes: nodeLabel;
  left: -60px;
  top: 50%;
  transform: translateY(-50%);
  color: #10b981;
}

.nodeLabelBottom {
  composes: nodeLabel;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  color: #3b82f6;
}

.nodeLabelLeft {
  composes: nodeLabel;
  right: -68px;
  top: 50%;
  transform: translateY(-50%);
  color: #a855f7;
}

/* ===== Pulse Lines ===== */
.pulseLine {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  height: 1px;
  width: 200px;
  transform-origin: 0 0;
}

.pulseLine::after {
  content: '';
  position: absolute;
  width: 30px;
  height: 1px;
  border-radius: 1px;
  animation: pulseDot 3s ease-in-out infinite;
}

.pulseTop {
  composes: pulseLine;
  transform: rotate(-90deg);
}
.pulseTop::after {
  background: rgba(249, 115, 22, 0.6);
  box-shadow: 0 0 6px rgba(249, 115, 22, 0.4);
}

.pulseRight {
  composes: pulseLine;
  transform: rotate(0deg);
}
.pulseRight::after {
  background: rgba(16, 185, 129, 0.6);
  box-shadow: 0 0 6px rgba(16, 185, 129, 0.4);
  animation-delay: -0.8s;
}

.pulseBottom {
  composes: pulseLine;
  transform: rotate(90deg);
}
.pulseBottom::after {
  background: rgba(59, 130, 246, 0.6);
  box-shadow: 0 0 6px rgba(59, 130, 246, 0.4);
  animation-delay: -1.6s;
}

.pulseLeft {
  composes: pulseLine;
  transform: rotate(180deg);
}
.pulseLeft::after {
  background: rgba(168, 85, 247, 0.6);
  box-shadow: 0 0 6px rgba(168, 85, 247, 0.4);
  animation-delay: -2.4s;
}

@keyframes pulseDot {
  0% { left: 0; opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { left: calc(100% - 30px); opacity: 0; }
}

/* ===== Dashboard ===== */
.dashboard {
  position: relative;
  z-index: 10;
  width: 260px;
  border: 1px solid rgba(249, 115, 22, 0.25);
  border-radius: 16px;
  padding: 1.25rem;
  background: rgba(15, 23, 42, 0.97);
  box-shadow:
    0 0 50px rgba(249, 115, 22, 0.08),
    0 0 100px rgba(249, 115, 22, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.dashHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.dashTitle {
  font-family: var(--font-display), sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.dashLive {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.6rem;
  color: #10b981;
}

.dashLiveDot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.6);
  animation: blink 2s ease-in-out infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

/* ===== Bar Chart ===== */
.chart {
  display: flex;
  gap: 4px;
  align-items: flex-end;
  height: 75px;
  margin-bottom: 1rem;
}

.bar {
  flex: 1;
  border-radius: 3px 3px 0 0;
  transform-origin: bottom;
  animation: growBar 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  will-change: transform;
}

.bar1 { composes: bar; height: 40%; background: linear-gradient(180deg, #f97316, rgba(249, 115, 22, 0.1)); animation-delay: 0.1s; box-shadow: 0 0 8px rgba(249, 115, 22, 0.15); }
.bar2 { composes: bar; height: 65%; background: linear-gradient(180deg, #f97316, rgba(249, 115, 22, 0.1)); animation-delay: 0.2s; box-shadow: 0 0 8px rgba(249, 115, 22, 0.15); }
.bar3 { composes: bar; height: 50%; background: linear-gradient(180deg, #f97316, rgba(249, 115, 22, 0.1)); animation-delay: 0.3s; box-shadow: 0 0 8px rgba(249, 115, 22, 0.15); }
.bar4 { composes: bar; height: 80%; background: linear-gradient(180deg, #f97316, rgba(249, 115, 22, 0.1)); animation-delay: 0.4s; box-shadow: 0 0 10px rgba(249, 115, 22, 0.2); }
.bar5 { composes: bar; height: 55%; background: linear-gradient(180deg, #f97316, rgba(249, 115, 22, 0.1)); animation-delay: 0.5s; box-shadow: 0 0 8px rgba(249, 115, 22, 0.15); }
.bar6 { composes: bar; height: 90%; background: linear-gradient(180deg, #10b981, rgba(16, 185, 129, 0.1)); animation-delay: 0.6s; box-shadow: 0 0 12px rgba(16, 185, 129, 0.25); }
.bar7 { composes: bar; height: 100%; background: linear-gradient(180deg, #10b981, rgba(16, 185, 129, 0.1)); animation-delay: 0.7s; box-shadow: 0 0 12px rgba(16, 185, 129, 0.25); }

@keyframes growBar {
  from { transform: scaleY(0); opacity: 0; }
  to { transform: scaleY(1); opacity: 1; }
}

/* ===== Metrics ===== */
.metrics {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.metric {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: 0;
  animation: fadeInMetric 0.6s ease forwards;
}

.metric:nth-child(1) { animation-delay: 0.9s; }
.metric:nth-child(2) { animation-delay: 1.1s; }
.metric:nth-child(3) { animation-delay: 1.3s; }

@keyframes fadeInMetric {
  from { opacity: 0; transform: translateX(-8px); }
  to { opacity: 1; transform: translateX(0); }
}

.metricIcon {
  width: 24px;
  height: 24px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  flex-shrink: 0;
}

.metricIconOrange { composes: metricIcon; background: rgba(249, 115, 22, 0.1); border: 1px solid rgba(249, 115, 22, 0.2); }
.metricIconGreen { composes: metricIcon; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.2); }
.metricIconBlue { composes: metricIcon; background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.2); }

.metricInfo { flex: 1; }

.metricLabel {
  font-size: 0.6rem;
  color: rgba(255, 255, 255, 0.35);
}

.metricBar {
  height: 3px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.06);
  margin-top: 2px;
  overflow: hidden;
}

.metricFill {
  height: 100%;
  border-radius: 2px;
  width: 0;
  animation: fillBar 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.metricFillOrange { composes: metricFill; background: linear-gradient(90deg, #f97316, #fb923c); box-shadow: 0 0 6px rgba(249, 115, 22, 0.3); }
.metricFillGreen { composes: metricFill; background: linear-gradient(90deg, #10b981, #34d399); box-shadow: 0 0 6px rgba(16, 185, 129, 0.3); }
.metricFillBlue { composes: metricFill; background: linear-gradient(90deg, #3b82f6, #60a5fa); box-shadow: 0 0 6px rgba(59, 130, 246, 0.3); }

@keyframes fillBar {
  to { width: var(--fill); }
}

.metricValue {
  font-family: var(--font-display), sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  min-width: 30px;
  text-align: right;
}

.metricValueOrange { composes: metricValue; color: #f97316; }
.metricValueGreen { composes: metricValue; color: #10b981; }
.metricValueBlue { composes: metricValue; color: #3b82f6; }

/* ===== Score ===== */
.score {
  margin-top: 1rem;
  padding-top: 0.6rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  opacity: 0;
  animation: fadeInMetric 0.6s ease forwards;
  animation-delay: 1.5s;
}

.scoreCircle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #10b981;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display), sans-serif;
  font-size: 13px;
  font-weight: 800;
  color: #10b981;
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.2);
  flex-shrink: 0;
}

.scoreText {
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.45);
  line-height: 1.3;
}

.scoreTextStrong {
  color: rgba(255, 255, 255, 0.75);
  display: block;
  font-weight: 600;
}

/* ===== Particles ===== */
.particle {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  animation: drift linear infinite;
  will-change: transform;
}

.particle1 { composes: particle; width: 3px; height: 3px; background: rgba(249, 115, 22, 0.5); top: 75%; left: 55%; animation-duration: 6s; }
.particle2 { composes: particle; width: 2px; height: 2px; background: rgba(16, 185, 129, 0.5); top: 80%; right: 20%; animation-duration: 8s; animation-delay: -2s; }
.particle3 { composes: particle; width: 3px; height: 3px; background: rgba(249, 115, 22, 0.3); top: 65%; left: 70%; animation-duration: 7s; animation-delay: -4s; }
.particle4 { composes: particle; width: 2px; height: 2px; background: rgba(59, 130, 246, 0.4); top: 70%; right: 35%; animation-duration: 9s; animation-delay: -1s; }

@keyframes drift {
  0% { transform: translateY(0) translateX(0); opacity: 0; }
  10% { opacity: 0.8; }
  90% { opacity: 0.8; }
  100% { transform: translateY(-150px) translateX(40px); opacity: 0; }
}

/* ===== Scanline ===== */
.scanline {
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(249, 115, 22, 0.12), transparent);
  animation: scan 5s ease-in-out infinite;
  pointer-events: none;
  z-index: 4;
}

@keyframes scan {
  0%, 100% { top: 15%; opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  50% { top: 80%; }
}

/* ===== Accessibility ===== */
@media (prefers-reduced-motion: reduce) {
  .orbit1, .orbit2, .orbit3 { animation: none; transform: translate(-50%, -50%); }
  .nodeTop, .nodeRight, .nodeBottom, .nodeLeft { animation: none; }
  .bar { animation: none; transform: scaleY(1); opacity: 1; }
  .metric { animation: none; opacity: 1; transform: translateX(0); }
  .metricFill { animation: none; width: var(--fill); }
  .score { animation: none; opacity: 1; }
  .particle { animation: none; display: none; }
  .scanline { animation: none; display: none; }
  .pulseLine::after { animation: none; display: none; }
  .dashLiveDot { animation: none; }
}

/* ===== Responsive ===== */
@media (max-width: 900px) {
  .heroAnimation {
    width: 400px;
    height: 400px;
  }
  .orbit1 { width: 240px; height: 240px; }
  .orbit2 { width: 320px; height: 320px; }
  .orbit3 { width: 390px; height: 390px; }
  .dashboard { width: 200px; padding: 1rem; }
  .chart { height: 55px; }
  .node { width: 32px; height: 32px; font-size: 13px; }
  .nodeLabel { display: none; }
}

@media (max-width: 480px) {
  .heroAnimation {
    width: 300px;
    height: 300px;
    margin: 0 auto;
  }
  .orbitalLayer { display: none; }
  .scanline { display: none; }
  .particle { display: none; }
  .dashboard { width: 260px; }
  .chart { height: 65px; }
}
```

- [ ] **Step 2: Create the React component**

Write `src/components/visuals/HeroAnimation.tsx`:

```tsx
'use client';

import styles from './HeroAnimation.module.css';

export default function HeroAnimation() {
  return (
    <div className={styles.heroAnimation} aria-hidden="true">
      {/* Orbital layer */}
      <div className={styles.orbitalLayer}>
        <div className={styles.orbit1} />
        <div className={styles.orbit2} />
        <div className={styles.orbit3} />

        {/* Pulse lines */}
        <div className={styles.pulseTop} />
        <div className={styles.pulseRight} />
        <div className={styles.pulseBottom} />
        <div className={styles.pulseLeft} />

        {/* Nodes */}
        <div className={styles.nodeTop}>
          &#9881;
          <span className={styles.nodeLabelTop}>Outils</span>
        </div>
        <div className={styles.nodeRight}>
          &#128202;
          <span className={styles.nodeLabelRight}>Données</span>
        </div>
        <div className={styles.nodeBottom}>
          &#9889;
          <span className={styles.nodeLabelBottom}>Auto</span>
        </div>
        <div className={styles.nodeLeft}>
          &#128274;
          <span className={styles.nodeLabelLeft}>Process</span>
        </div>
      </div>

      {/* Dashboard */}
      <div className={styles.dashboard}>
        <div className={styles.dashHeader}>
          <div className={styles.dashTitle}>Audit OptiPro</div>
          <div className={styles.dashLive}>
            <div className={styles.dashLiveDot} />
            Live
          </div>
        </div>

        <div className={styles.chart}>
          <div className={styles.bar1} />
          <div className={styles.bar2} />
          <div className={styles.bar3} />
          <div className={styles.bar4} />
          <div className={styles.bar5} />
          <div className={styles.bar6} />
          <div className={styles.bar7} />
        </div>

        <div className={styles.metrics}>
          <div className={styles.metric}>
            <div className={styles.metricIconOrange}>&#128295;</div>
            <div className={styles.metricInfo}>
              <div className={styles.metricLabel}>Outils</div>
              <div className={styles.metricBar}>
                <div className={styles.metricFillOrange} style={{ '--fill': '72%' } as React.CSSProperties} />
              </div>
            </div>
            <div className={styles.metricValueOrange}>72%</div>
          </div>
          <div className={styles.metric}>
            <div className={styles.metricIconGreen}>&#128200;</div>
            <div className={styles.metricInfo}>
              <div className={styles.metricLabel}>Processus</div>
              <div className={styles.metricBar}>
                <div className={styles.metricFillGreen} style={{ '--fill': '89%' } as React.CSSProperties} />
              </div>
            </div>
            <div className={styles.metricValueGreen}>89%</div>
          </div>
          <div className={styles.metric}>
            <div className={styles.metricIconBlue}>&#9889;</div>
            <div className={styles.metricInfo}>
              <div className={styles.metricLabel}>Automatisation</div>
              <div className={styles.metricBar}>
                <div className={styles.metricFillBlue} style={{ '--fill': '64%' } as React.CSSProperties} />
              </div>
            </div>
            <div className={styles.metricValueBlue}>64%</div>
          </div>
        </div>

        <div className={styles.score}>
          <div className={styles.scoreCircle}>87</div>
          <div className={styles.scoreText}>
            <span className={styles.scoreTextStrong}>Score Optimisation</span>
            Excellente performance
          </div>
        </div>
      </div>

      {/* Particles */}
      <div className={styles.particle1} />
      <div className={styles.particle2} />
      <div className={styles.particle3} />
      <div className={styles.particle4} />

      {/* Scanline */}
      <div className={styles.scanline} />
    </div>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/visuals/HeroAnimation.tsx src/components/visuals/HeroAnimation.module.css
git commit -m "feat: create HeroAnimation component with orbital dashboard"
```

---

### Task 2: Write test for HeroAnimation

**Files:**
- Create: `src/components/visuals/__tests__/HeroAnimation.test.tsx`

- [ ] **Step 1: Create the test file**

Write `src/components/visuals/__tests__/HeroAnimation.test.tsx`:

```tsx
import { render } from '@testing-library/react';
import HeroAnimation from '@/components/visuals/HeroAnimation';

describe('HeroAnimation component', () => {
  it('renders without crashing', () => {
    const { container } = render(<HeroAnimation />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('has aria-hidden for accessibility', () => {
    const { container } = render(<HeroAnimation />);
    expect(container.firstChild).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders the dashboard with audit title', () => {
    const { container } = render(<HeroAnimation />);
    expect(container.textContent).toContain('Audit OptiPro');
  });

  it('renders the score badge', () => {
    const { container } = render(<HeroAnimation />);
    expect(container.textContent).toContain('87');
    expect(container.textContent).toContain('Score Optimisation');
  });

  it('renders all four orbital nodes', () => {
    const { container } = render(<HeroAnimation />);
    expect(container.textContent).toContain('Outils');
    expect(container.textContent).toContain('Données');
    expect(container.textContent).toContain('Auto');
    expect(container.textContent).toContain('Process');
  });

  it('renders three metric rows', () => {
    const { container } = render(<HeroAnimation />);
    expect(container.textContent).toContain('72%');
    expect(container.textContent).toContain('89%');
    expect(container.textContent).toContain('64%');
  });
});
```

- [ ] **Step 2: Run the test**

Run: `npx jest src/components/visuals/__tests__/HeroAnimation.test.tsx --verbose`

Expected: All 6 tests PASS.

- [ ] **Step 3: Commit**

```bash
git add src/components/visuals/__tests__/HeroAnimation.test.tsx
git commit -m "test: add HeroAnimation render tests"
```

---

### Task 3: Integrate HeroAnimation into homepage

**Files:**
- Modify: `src/app/page.tsx` (lines 7, 13, 95-112)

- [ ] **Step 1: Update imports in page.tsx**

Replace the `services` import (line 13) and add the HeroAnimation import. The `services` import is only used in the hero card — remove it.

In `src/app/page.tsx`, replace:

```tsx
import { services } from '@/data/services';
```

with:

```tsx
import HeroAnimation from '@/components/visuals/HeroAnimation';
```

- [ ] **Step 2: Replace the hero visual JSX**

In `src/app/page.tsx`, replace lines 95-112:

```tsx
            {/* Mini timeline visual */}
            <div className={styles.heroVisual}>
              <div className={styles.heroCard}>
                <div className={styles.heroCardTitle}>
                  <span style={{ color: '#10b981', marginRight: '0.5rem', fontFamily: 'monospace' }}>$</span>
                  La Méthode OptiPro
                </div>
                {services.map((s) => (
                  <div key={s.id} className={styles.heroStep}>
                    <div className={styles.heroStepNum}>{s.number}</div>
                    <div>
                      <strong>{s.title}</strong>
                      <p>{s.shortDescription}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
```

with:

```tsx
            {/* Hero animation */}
            <div className={styles.heroVisual}>
              <HeroAnimation />
            </div>
```

- [ ] **Step 3: Verify the services import is still needed elsewhere**

Search `page.tsx` for other usages of `services`. It is NOT used elsewhere in the file — the service sections use hardcoded text, not the `services` data object. The removal is safe.

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: integrate HeroAnimation into homepage hero section"
```

---

### Task 4: Update HomePage.module.css — grid + cleanup

**Files:**
- Modify: `src/app/HomePage.module.css` (lines 37-47, 95-207)

- [ ] **Step 1: Update heroGrid to accommodate 560px animation**

In `src/app/HomePage.module.css`, replace:

```css
.heroGrid {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 4rem;
  align-items: center;
}
```

with:

```css
.heroGrid {
  display: grid;
  grid-template-columns: 1fr 560px;
  gap: 2rem;
  align-items: center;
}
```

- [ ] **Step 2: Remove old hero card styles**

In `src/app/HomePage.module.css`, delete:

- `@keyframes subtleFloat` (lines 37-40)
- `.heroCard` (lines 100-107)
- `.heroCardTitle` (lines 109-116)
- `.heroStep` (lines 118-126)
- `.heroStep:nth-child` delays (lines 128-131)
- `@keyframes stepReveal` (lines 133-138)
- `.heroStep:last-child` (lines 140-142)
- `.heroStepNum` (lines 144-157)
- `.heroStep strong` (lines 159-164)
- `.heroStep p` (lines 166-171)

Keep `.heroVisual` (lines 96-98) — it's reused as the wrapper.

- [ ] **Step 3: Update responsive — tablet breakpoint**

In `src/app/HomePage.module.css`, replace the 900px media query:

```css
@media (max-width: 900px) {
  .heroGrid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .heroTitle {
    font-size: 2rem;
  }

  .heroCard {
    max-width: 380px;
  }
}
```

with:

```css
@media (max-width: 900px) {
  .heroGrid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .heroTitle {
    font-size: 2rem;
  }

  .heroVisual {
    justify-self: center;
  }
}
```

- [ ] **Step 4: Commit**

```bash
git add src/app/HomePage.module.css
git commit -m "refactor: update hero grid for animation, remove old card styles"
```

---

### Task 5: Build verification + visual check

**Files:** None (verification only)

- [ ] **Step 1: Run all tests**

Run: `npx jest --verbose`

Expected: All tests pass (Button tests + HeroAnimation tests).

- [ ] **Step 2: Run production build**

Run: `npm run build`

Expected: Build completes with no errors. No TypeScript errors, no unused import warnings.

- [ ] **Step 3: Run lint**

Run: `npm run lint`

Expected: No lint errors.

- [ ] **Step 4: Start dev server and visual check**

Run: `npm run dev -- -p 3333`

Open `http://localhost:3333` and verify:
1. Hero shows the orbital animation with dashboard at center
2. Orbits rotate smoothly
3. Nodes float at the 4 cardinal points with labels
4. Dashboard bars grow on load, metrics slide in, score appears
5. Particles float upward, scanline sweeps
6. Responsive: shrink browser to tablet (orbits reduce) and mobile (dashboard only)
7. Rest of the page is unaffected

- [ ] **Step 5: Commit verification pass**

```bash
git add -A
git commit -m "chore: verified hero animation — build, tests, lint pass"
```

Only commit if there are changes from the verification (e.g., lint auto-fixes). Skip if working tree is clean.
