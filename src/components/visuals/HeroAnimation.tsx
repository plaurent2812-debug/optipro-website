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
