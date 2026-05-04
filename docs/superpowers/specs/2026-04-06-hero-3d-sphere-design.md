# Hero 3D Sphere — Spec Design

## Objectif

Remplacer l'animation hero actuelle (`HeroAnimation.tsx` — orbites CSS + dashboard card) par une sphère wireframe 3D interactive en Canvas 2D. Le reste du site ne change pas.

## Scope

### Ce qui change
- `src/components/visuals/HeroAnimation.tsx` — réécriture complète
- `src/components/visuals/HeroAnimation.module.css` — simplification (le canvas prend toute la zone)

### Ce qui ne change pas
- Layout du hero (`HomePage.module.css`) — la grille text/visual reste identique
- Les 4 mockups de services (AuditMockup, AnalyseMockup, etc.)
- Toutes les animations CSS existantes (reveal, scroll, etc.)
- Le reste du site

## Architecture technique

### Technologie : Canvas 2D pur (pas Three.js)
- La démo de brainstorming a prouvé que le rendu Canvas 2D avec projection perspective manuelle donne un résultat visuellement équivalent à Three.js pour cette géométrie
- Avantages : zéro dépendance externe, bundle léger, pas de WebGL fallback à gérer
- Le composant reste un React component avec un `<canvas>` et un `useEffect` pour l'animation

### Composant `HeroAnimation.tsx`

**Structure :**
```
<div className={styles.container}>
  <canvas ref={canvasRef} className={styles.canvas} />
</div>
```

**Éléments visuels de la sphère :**

1. **Points (200-220)** — distribués uniformément sur une sphère (algorithme Fibonacci ou random acos)
   - Tailles variables (0.8–2.3px) avec facteur de profondeur (z)
   - Couleurs : orange (#f97316) dominant ~70%, bleu (#3b82f6) ~15%, vert (#10b981) ~15%
   - Chaque point a un glow radial (rayon 5× le core) avec opacité réduite
   - Pulse individuel (sin wave) pour variation de luminosité

2. **Anneaux de latitude (5-6)** — cercles wireframe horizontaux
   - Stroke très fin (0.7px), opacité faible (0.04–0.08)
   - Couleur orange uniquement
   - Tournent avec la sphère

3. **Connexions entre points proches** — lignes entre points dont la distance projetée < 55px
   - Opacité proportionnelle à la proximité et à la profondeur (z)
   - Stroke fin (0.5px), couleur orange
   - Crée l'effet "constellation"

4. **Pulses de connexions (8 simultanés)** — connexions aléatoires qui s'illuminent brièvement
   - Durée : 80–200 frames chacun
   - Phase d'illumination : premiers 30% de la durée
   - Stroke plus épais (1.5px), opacité montante puis descendante (sin)
   - Simule la "transmission d'information"

5. **Fond subtil** — grille de micro-points (0.8px, espacement 40px, opacité 1.5%) + glow radial central orange très léger (4%)

### Interaction

- **Rotation auto** : `rotY = t * 0.0002` — lente, ~1 tour toutes les 30 secondes
- **Tilt souris** : le mouvement horizontal de la souris ajoute un offset à `rotY` (facteur 0.8), le vertical à `rotX` (facteur 0.4)
- **mouseleave** : retour progressif à la position neutre (lerp)
- **Pas de click, pas de zoom, pas de raycasting**

### Projection 3D

Projection perspective manuelle :
```
perspective = 3
f = perspective / (perspective + z)
screenX = centerX + x * scale * f
screenY = centerY + y * scale * f
```

Scale = `min(containerWidth * 0.22, containerHeight * 0.38)` pour s'adapter au conteneur.

Tri des points par Z (back-to-front) avant rendu pour l'effet de profondeur.

### Performance

- **Canvas retina** : dimensions × 2 du conteneur CSS (`devicePixelRatio` ou facteur fixe 2)
- **requestAnimationFrame** pour la boucle d'animation
- **IntersectionObserver** : pause l'animation quand le hero n'est pas visible (scroll down)
- **prefers-reduced-motion** : si activé, afficher un rendu statique (une seule frame, pas d'animation)
- **Cleanup** : le `useEffect` retourne un cleanup qui cancel le RAF et déconnecte l'observer

### Responsive

- La sphère occupe la même zone que l'animation actuelle (colonne droite du hero grid, 560px max)
- Sur mobile (<900px) : la sphère passe en dessous du texte, taille réduite
- Sur très petit écran (<480px) : sphère encore plus petite ou masquée

## Palette de couleurs (identique au site)

| Élément | Couleur | Usage |
|---------|---------|-------|
| Points dominants | `#f97316` (orange) | 70% des points |
| Points secondaires | `#3b82f6` (bleu) | 15% |
| Points tertiaires | `#10b981` (vert) | 15% |
| Anneaux | `#f97316` à très basse opacité | Structure wireframe |
| Connexions | `#f97316` à basse opacité | Maillage |
| Pulses | `#f97316` à haute opacité | Effet "data" |
| Fond grille | `#ffffff` à 1.5% | Texture subtile |

## Critères de validation

1. Le composant remplace `HeroAnimation.tsx` sans modifier le layout du hero
2. L'animation est fluide (60fps sur desktop, 30+ sur mobile)
3. Le tilt souris est subtil et naturel
4. Les pulses de connexions donnent un effet "données qui circulent"
5. `prefers-reduced-motion` est respecté
6. L'animation se pause hors viewport
7. Le build Next.js passe sans erreur
8. Pas de dépendance externe ajoutée
