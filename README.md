# Ferienwohnung Webseite (GitHub Pages)

Statische Landingpage fuer `ferienwohnung.preissel-hh.de`.

## Inhalt

- `index.html` - Startseite
- `styles.css` - Design und Layout
- `CNAME` - Custom Domain fuer GitHub Pages

## Veroeffentlichen mit GitHub Pages

1. Neues GitHub-Repository erstellen (z. B. `ferienwohnung`).
2. Diese Dateien in das Repo legen und committen.
3. In GitHub: `Settings` -> `Pages`.
4. Unter `Build and deployment`:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main` und Ordner `/ (root)`
5. Speichern und 1-3 Minuten warten.

## Domain mit Goneo verbinden

In der DNS-Zone von `preissel-hh.de` fuer die Subdomain `ferienwohnung` einen `CNAME` setzen:

- Name/Host: `ferienwohnung`
- Typ: `CNAME`
- Ziel: `<dein-github-user>.github.io`

Hinweise:
- Der Zielwert muss exakt auf deinen GitHub-User oder Org zeigen, nicht auf das Repo.
- Die Datei `CNAME` ist bereits korrekt auf `ferienwohnung.preissel-hh.de` gesetzt.
- DNS-Aenderungen koennen je nach TTL bis zu 24h brauchen.

## Danach pruefen

- `https://ferienwohnung.preissel-hh.de` aufrufen
- In GitHub Pages checken, ob `Custom domain` als `Verified` erscheint

## Offene Platzhalter

- E-Mail und Telefonnummer in `index.html` auf echte Kontaktdaten anpassen.
- Optional: Eigene Fotos/Galerie statt Kartenplatzhalter einbauen.
