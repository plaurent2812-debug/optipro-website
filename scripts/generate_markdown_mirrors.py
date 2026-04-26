#!/usr/bin/env python3
"""
Génère des mirrors Markdown de chaque page publique du site OptiPro.
Scrape le site local Next.js, strip nav/footer/scripts/popups, convertit en Markdown propre.
"""

import requests
from bs4 import BeautifulSoup
from markdownify import markdownify as md
from datetime import datetime, timezone
from pathlib import Path
import sys
import re

BASE_URL = "http://localhost:3000"
PUBLIC_DIR = Path(__file__).parent.parent / "public"

PAGES = [
    {
        "route": "/",
        "slug": "index",
        "title": "Accueil — OptiPro",
        "description": "Conseil en optimisation digitale et développement sur mesure pour artisans et TPE.",
    },
    {
        "route": "/services",
        "slug": "services",
        "title": "Services & Tarifs — OptiPro",
        "description": "Audit, création de sites, automatisation et formation — offres et tarifs pour artisans, TPE et projets structurants.",
    },
    {
        "route": "/realisations",
        "slug": "realisations",
        "title": "Réalisations — OptiPro",
        "description": "Projets réalisés par OptiPro : sites web, web apps et outils sur mesure.",
    },
    {
        "route": "/contact",
        "slug": "contact",
        "title": "Contact — OptiPro",
        "description": "Prendre contact avec Pierre Laurent — premier échange gratuit de 30 minutes.",
    },
]

# Sélecteurs à supprimer (nav, footer, scripts, popups, aria-hidden)
REMOVE_SELECTORS = [
    "nav",
    "footer",
    "header",
    "script",
    "style",
    "noscript",
    "iframe",
    "[aria-hidden='true']",
    "[role='dialog']",
    "[role='alertdialog']",
    ".cookie-banner",
    ".popup",
    ".modal",
    "#__next-build-watcher",
]

def fetch_page(url: str) -> str:
    resp = requests.get(url, timeout=10)
    resp.raise_for_status()
    return resp.text

def clean_html(html: str) -> BeautifulSoup:
    soup = BeautifulSoup(html, "html.parser")
    for selector in REMOVE_SELECTORS:
        for el in soup.select(selector):
            el.decompose()
    # Garder uniquement le contenu principal
    main = soup.find("main") or soup.find(id="main-content") or soup.find("body")
    return main

def html_to_markdown(element) -> str:
    raw = md(str(element), heading_style="ATX", bullets="-", strip=["img"])
    # Nettoyer les lignes vides excessives
    cleaned = re.sub(r"\n{3,}", "\n\n", raw)
    # Supprimer les lignes qui ne contiennent que des espaces
    lines = [line.rstrip() for line in cleaned.splitlines()]
    return "\n".join(lines).strip()

def build_frontmatter(page: dict, url: str) -> str:
    now = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    return f"""---
title: {page['title']}
description: {page['description']}
url: {url}
last_updated: {now}
---

"""

def generate_mirror(page: dict) -> Path:
    url = BASE_URL + page["route"]
    canonical = "https://www.opti-pro.fr" + page["route"]

    print(f"  → Scraping {url} ...", end=" ", flush=True)
    html = fetch_page(url)
    element = clean_html(html)
    content = html_to_markdown(element)
    frontmatter = build_frontmatter(page, canonical)

    output_path = PUBLIC_DIR / f"{page['slug']}.md"
    output_path.write_text(frontmatter + content, encoding="utf-8")
    size_kb = output_path.stat().st_size / 1024
    print(f"OK ({size_kb:.1f} KB) → public/{page['slug']}.md")
    return output_path

def main():
    print(f"\nOptiPro — Génération des Markdown Mirrors")
    print(f"Base URL : {BASE_URL}")
    print(f"Dossier  : {PUBLIC_DIR}\n")

    # Vérifier que le serveur tourne
    try:
        requests.get(BASE_URL, timeout=5)
    except requests.exceptions.ConnectionError:
        print("ERREUR : Le serveur Next.js ne répond pas sur localhost:3000")
        print("Lance d'abord : npm run dev  (ou next start après build)")
        sys.exit(1)

    generated = []
    errors = []

    for page in PAGES:
        try:
            path = generate_mirror(page)
            generated.append(path)
        except Exception as e:
            print(f"ERREUR sur {page['route']} : {e}")
            errors.append(page["route"])

    print(f"\n✓ {len(generated)} fichiers générés, {len(errors)} erreurs")
    if errors:
        print(f"  Pages en erreur : {', '.join(errors)}")

    print("\nURLs des mirrors :")
    for page in PAGES:
        if page["slug"] + ".md" in [p.name for p in generated]:
            print(f"  https://www.opti-pro.fr/{page['slug']}.md")

if __name__ == "__main__":
    main()
