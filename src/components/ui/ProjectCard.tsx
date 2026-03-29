'use client';

import { useState } from 'react';
import { Project } from '@/data/projects';
import Image from 'next/image';

interface Props {
  project: Project;
  compact?: boolean;
}

export default function ProjectCard({ project, compact = false }: Props) {
  const images = project.images || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="project-card">
      {images.length > 0 && (
        <div style={{ position: 'relative', width: '100%', height: compact ? '200px' : '300px', borderRadius: '12px', overflow: 'hidden', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.06)' }}>
          <Image src={images[currentIndex]} alt={`Aperçu de ${project.title} - ${currentIndex + 1}`} fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
          
          {images.length > 1 && (
            <>
              {/* Flèches de navigation */}
              <button 
                onClick={prevImage} 
                style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10, backdropFilter: 'blur(4px)' }}
                aria-label="Image précédente"
              >
                ←
              </button>
              <button 
                onClick={nextImage} 
                style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10, backdropFilter: 'blur(4px)' }}
                aria-label="Image suivante"
              >
                →
              </button>

              {/* Indicateurs de progression (dots) */}
              <div style={{ position: 'absolute', bottom: '12px', left: '0', right: '0', display: 'flex', justifyContent: 'center', gap: '6px', zIndex: 10 }}>
                {images.map((_, idx) => (
                  <span 
                    key={idx} 
                    style={{ width: '8px', height: '8px', borderRadius: '50%', background: idx === currentIndex ? 'var(--accent)' : 'rgba(255,255,255,0.5)', transition: 'background 0.3s' }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}
      <div className="project-card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h3>{project.title}</h3>
          <p className="project-card-meta">
            {project.client} · {project.sector}
          </p>
        </div>
        {project.url && (
          <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', color: 'var(--accent)', textDecoration: 'none', padding: '0.4rem 1rem', border: '1px solid rgba(249, 115, 22, 0.4)', borderRadius: '20px', transition: 'all 0.2s', whiteSpace: 'nowrap' }}>
            Voir le site ↗
          </a>
        )}
      </div>

      <div className="project-card-body">
        <div className="project-card-section">
          <h4>Contexte</h4>
          <p>{project.context}</p>
        </div>
        <div className="project-card-section">
          <h4>{compact ? 'Solution' : 'Problème'}</h4>
          <p>{compact ? project.solution : project.problem}</p>
        </div>
        {!compact && (
          <div className="project-card-section">
            <h4>Solution</h4>
            <p>{project.solution}</p>
          </div>
        )}
      </div>

      <div className="project-card-results">
        <h4>Résultats</h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {project.results.map((r) => (
            <li
              key={r}
              style={{
                paddingLeft: '1.5rem',
                position: 'relative',
                color: 'var(--secondary)',
                marginBottom: '0.25rem',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  color: 'var(--accent)',
                  fontWeight: 700,
                }}
              >
                →
              </span>
              {r}
            </li>
          ))}
        </ul>
      </div>

      <div className="project-card-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="project-card-tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
