import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { test } from "node:test";

const requiredFiles = [
  "src/app/(public)/page.tsx",
  "src/app/(public)/projets/page.tsx",
  "src/app/(public)/a-propos/page.tsx",
  "src/app/(public)/contact/page.tsx",
  "src/app/(public)/mentions-legales/page.tsx",
  "src/app/(public)/confidentialite/page.tsx",
  "src/components/visuals/NeuralBackdrop.tsx",
  "src/components/visuals/NeuralBackdrop.module.css",
  "src/components/visuals/SystemCore.tsx",
  "src/components/visuals/SystemCore.module.css",
];

const retiredPaths = [
  "src/app/admin",
  "src/app/api/contact",
  "src/app/api/cron",
  "src/app/(public)/tarifs",
  "src/app/(public)/services",
  "src/app/(public)/blog",
];

function containsFile(path) {
  if (!existsSync(path)) return false;
  return readdirSync(path, { withFileTypes: true }).some((entry) =>
    entry.isFile() || (entry.isDirectory() && containsFile(`${path}/${entry.name}`)),
  );
}

test("le site personnel expose uniquement les routes prévues", () => {
  requiredFiles.forEach((file) => assert.equal(existsSync(file), true, `${file} doit exister`));
  retiredPaths.forEach((path) => assert.equal(containsFile(path), false, `${path} ne doit contenir aucun fichier`));
});

test("les dépendances commerciales et back-office sont absentes", () => {
  const pkg = JSON.parse(readFileSync("package.json", "utf8"));
  const dependencies = { ...pkg.dependencies, ...pkg.devDependencies };
  ["@supabase/ssr", "@supabase/supabase-js", "resend", "@react-pdf/renderer", "gsap"].forEach((name) => {
    assert.equal(dependencies[name], undefined, `${name} ne doit plus être installé`);
  });
});

test("les anciens parcours commerciaux sont redirigés", () => {
  const config = readFileSync("next.config.ts", "utf8");
  ["/tarifs", "/services/:path*", "/blog/:path*", "/admin/:path*", "/cgv"].forEach((route) => {
    assert.equal(config.includes(route), true, `redirection manquante : ${route}`);
  });
});

test("le discours reste personnel et non commercial", () => {
  const contentFiles = [
    ...requiredFiles,
    "src/components/layout/Header.tsx",
    "src/components/layout/Footer.tsx",
    "src/app/layout.tsx",
  ];
  const files = contentFiles.map((file) => readFileSync(file, "utf8")).join("\n");
  [
    "990",
    "1 390",
    "appel découverte",
    "demander un devis",
    "maintenance mensuelle",
    "product builder",
    "client work",
    "pas prestations",
    "aucune mission client",
    "studio de produits",
  ].forEach((phrase) => {
    assert.equal(files.toLowerCase().includes(phrase.toLowerCase()), false, `discours commercial résiduel : ${phrase}`);
  });
  assert.match(files, /site personnel/i);
  assert.match(files, /mon parcours/i);
});

test("le site ne publie plus de portrait et conserve LinkedIn", () => {
  ["public/pierre-laurent-tech-hero.png", "public/pierre-laurent.png"].forEach((file) => {
    assert.equal(existsSync(file), false, `${file} ne doit plus être publié`);
  });

  const sources = [
    "src/app/(public)/page.tsx",
    "src/app/(public)/a-propos/page.tsx",
    "src/app/(public)/layout.tsx",
    "src/components/layout/Footer.tsx",
    "src/app/(public)/contact/page.tsx",
  ].map((file) => readFileSync(file, "utf8")).join("\n");

  assert.equal(sources.includes("pierre-laurent-tech-hero.png"), false);
  assert.equal(sources.includes("pierre-laurent.png"), false);
  assert.match(sources, /https:\/\/www\.linkedin\.com\/in\/pierre-laurent-809410123/);
});

test("la direction minimaliste ne réintroduit pas le chrome système", () => {
  const files = [
    "src/app/(public)/page.tsx",
    "src/app/(public)/a-propos/page.tsx",
    "src/app/(public)/home.module.css",
    "src/app/(public)/content.module.css",
  ].map((file) => readFileSync(file, "utf8")).join("\n");

  ["AI CORE", "NEURAL LAYER", "SCROLL TO DISCOVER", "TELEMETRY"].forEach((phrase) => {
    assert.equal(files.includes(phrase), false, `chrome système résiduel : ${phrase}`);
  });
  assert.equal(existsSync("public/hero-particles.webp"), false, "le visuel IA généré ne doit plus être publié");
});

test("le décor ne masque pas le contenu et ne tourne pas en permanence", () => {
  const component = readFileSync("src/components/visuals/NeuralBackdrop.tsx", "utf8");
  const styles = readFileSync("src/components/visuals/NeuralBackdrop.module.css", "utf8");
  const globals = readFileSync("src/app/globals.css", "utf8");
  assert.match(component, /aria-hidden="true"/);
  assert.match(styles, /pointer-events: none/);
  assert.doesNotMatch(styles, /infinite/);
  assert.match(globals, /prefers-reduced-motion: reduce/);
});

test("la navigation reste native et les exemples fonctionnent sans JavaScript", () => {
  const layout = readFileSync("src/app/(public)/layout.tsx", "utf8");
  const header = readFileSync("src/components/layout/Header.tsx", "utf8");
  const core = readFileSync("src/components/visuals/SystemCore.tsx", "utf8");
  const globals = readFileSync("src/app/globals.css", "utf8");
  assert.doesNotMatch(layout, /CustomCursor/);
  assert.doesNotMatch(globals, /cursor: none/);
  assert.match(header, /href="#contenu"/);
  assert.match(header, /Escape/);
  assert.match(core, /<fieldset/);
  assert.match(core, /type="radio"/);
  assert.doesNotMatch(core, /use client|useEffect|requestAnimationFrame|<canvas/);
});

test("Ro Nutritionniste est présenté comme un prototype web", () => {
  const projects = readFileSync("src/data/projects.ts", "utf8");

  assert.match(projects, /slug: "ro-nutritionniste"/);
  assert.match(projects, /status: "Prototype avancé"/);
  assert.match(projects, /visual: "browser"/);
  assert.match(projects, /href: "https:\/\/ro-nutritionniste\.vercel\.app"/);
  assert.equal(existsSync("public/projects/ro-nutritionniste-site.webp"), true);
});

test("La Parallaxe est présentée comme un site scientifique publié", () => {
  const projects = readFileSync("src/data/projects.ts", "utf8");

  assert.match(projects, /slug: "la-parallaxe"/);
  assert.match(projects, /status: "Site en ligne"/);
  assert.match(projects, /href: "https:\/\/laparallaxe\.fr"/);
  assert.equal(existsSync("public/projects/la-parallaxe-cosmos.webp"), true);
  assert.equal(existsSync("public/projects/la-parallaxe-icon.png"), true);
});

test("Odysio est présenté sans inventer de disponibilité publique", () => {
  const projects = readFileSync("src/data/projects.ts", "utf8");

  assert.match(projects, /slug: "odysio"/);
  assert.match(projects, /status: "Projet en pause"/);
  assert.match(projects, /visual: "identity"/);
  assert.match(projects, /platforms: \["iOS", "TestFlight"\]/);
  assert.equal(existsSync("public/projects/odysio-icon.png"), true);
});
