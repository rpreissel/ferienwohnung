# AGENTS.md

## Stack

- **Astro 5** (`output: "static"`) — kein SSR, kein React/Vue
- Einzige Dependency: `astro` — keine UI-Frameworks, kein CSS-Framework
- Deployment: GitHub Pages via `dist/` (wird automatisch deployed)

## Befehle

```bash
npm run dev      # Dev-Server (localhost:4321)
npm run build    # Produktions-Build nach dist/
npm run preview  # Build lokal vorschauen
```

Nach jeder Änderung `npm run build` ausführen und auf Fehler prüfen — es gibt keine separaten Lint- oder Typecheck-Schritte.

## Architektur

```
src/
  content/apartment/apartment.yaml   # ALLE Texte der Seite — hier ändern, nicht in Komponenten
  components/                        # Eine .astro-Datei pro Seitenbereich
  assets/images/                     # Quellbilder (Astro optimiert zu WebP mit Hash-Suffix)
  styles/global.css                  # Alle CSS-Regeln (keine Scoped Styles in Komponenten)
  pages/index.astro                  # Einziger Einstiegspunkt; bindet alle Komponenten ein
```

- `index.html` und `styles.css` im Root sind **veraltete Überreste** — nicht anfassen, nicht als Referenz nutzen.
- `README.md` beschreibt den alten Stand (reine HTML-Seite) — ebenfalls veraltet.

## Inhaltspflege

Alle sichtbaren Texte kommen aus `src/content/apartment/apartment.yaml`. Komponenten erhalten Daten als Props — nie Text direkt in `.astro`-Dateien schreiben.

## Bildnamen / Lightbox

Bilder in `src/assets/images/` werden von Astro mit Hash-Suffix versehen (z. B. `exterior.B660mkyN_Z14hJ5v.webp`). Die Lightbox (`src/components/Lightbox.astro`) matcht Description-Bilder über `data-lightbox-ref="originalname.jpg"` gegen den Hash-Dateinamen per Stem-Prefix-Vergleich.

- Galerie-Bilder (`src/components/Gallery.astro`) sind die einzige Navigationsquelle der Lightbox.
- Description-Bilder (`src/components/Description.astro`) verwenden `data-lightbox-ref` statt `data-lightbox`, um Duplikate in der Navigation zu vermeiden.

## Sprachliche Konventionen

- **Wohn-/Schlafzimmer**: Wohnzimmer und Schlafzimmer sind ein einziger Raum. Immer als „Wohn-/Schlafzimmer" bezeichnen — in Alt-Texten, Labels, YAML-Texten und SEO-Feldern.
- Keine Markennamen in Alt-Texten (z. B. nicht „Philips Senseo").
- Keine baulichen Details in Alt-Texten, die sich ändern könnten (z. B. nicht „Dachschräge").
