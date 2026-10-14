# Fi Naezer

Schilderijen voor de huiskamer en kinderkamer. Next.js 15, React 19, Tailwind CSS en een statische export voor GitHub Pages.

## Lokaal draaien

Gebruik Node 24 LTS, zoals in de deployworkflow.

```sh
yarn install --frozen-lockfile
yarn dev
```

## Bouwen en publiceren

```sh
yarn build
```

Dit controleert ook linting en TypeScript, maakt de statische site in `out/` en optimaliseert de afbeeldingen. Een push naar `main` publiceert via `.github/workflows/nextjs.yml`.

Beide CI-jobs gebruiken expliciet Ubuntu 24.04. De checkout-, Node-setup-, cache-, upload- en deployacties gebruiken Node 24; de Pages-uploadactie neemt `upload-artifact` v7 mee. Installatie in CI gebruikt `yarn install --frozen-lockfile`.

## Ontwerp en inhoud

- Basis: `design-explorations/04-ivoorwit-huiskamer-en-kinderkamer.png`.
- Hoofdachtergrond: Pearl `#FBFCF8`. Zachte vlakken: Salt `#F8EEEC`.
- Kleuren en gedeelde stijlen: `tailwind.config.ts` en `app/globals.css`.
- Lettertypen: DM Sans en DM Serif Display, lokaal aangeboden via `next/font`.
- Favicon en app-iconen: de oorspronkelijke roos in zacht oudroze en saliegroen, met transparante achtergrond. Gebruik `public/android-chrome-512x512.png` als basis voor de kleinere PNG- en ICO-formaten. `public/site.webmanifest` gebruikt Pearl als thema- en achtergrondkleur.
- Schilderijen, prijzen en verkochte werken: `data/artworks.ts`. De hero gebruikt dezelfde gegevens als de galerij.
- Kinderkamervoorbeelden en vaste prijs: `app/kinderkamer/page.tsx`; de homepage-intro staat in `sections/kinderkamer.tsx`.
- Houd de Kinderkamerprijs op beide pagina's gelijk vormgegeven: een persoonlijk aanbod in een zin, met formaat en vaste prijs op een aparte regel.
- Aanvragen gebruiken de bestaande EmailJS-koppeling in `hooks/useEmailService.ts`. `/kinderkamer#aanvraag` opent een schilderijaanvraag; `/kinderkamer#cadeaubon` opent de cadeaubon.
- De menulink ‘Huiskamer’ gaat naar de schilderijen op `/#projects`, ook vanaf de Kinderkamer-pagina. Het logo blijft naar de bovenkant van de homepage linken.
- De gedeelde footer in `components/SiteFooter.tsx` bevat de contactlink en een link naar [lefeminin.nl](https://lefeminin.nl).

De woonkamersfeerfoto in `public/assets/woonkamer.jpeg` is van [Aljona Ovtšinnikova op Pexels](https://www.pexels.com/photo/white-sofa-under-white-wall-in-room-17483485/), gebruikt onder de [Pexels-licentie](https://www.pexels.com/license/). Het schilderij is een fotomontage; de lijst is ter illustratie. De schilderijen en overige foto's komen uit het bestaande project.

## Intake en bezorging

- Huiskamer (`sections/customwork.tsx`): idee delen en een gesprek van 30 minuten; samen een prijs afspreken en 50% vooraf betalen; na 2 tot 3 maanden gratis thuisbezorging. Dit staat in drie stappen.
- Kinderkamer (`components/KinderkamerContactSection.tsx`): idee delen en een gesprek van 30 minuten; na 2 tot 3 weken gratis thuisbezorging, met betaling bij bezorging. Dit staat in twee stappen.
- De bevestiging na een schilderijaanvraag kondigt het plannen van het gesprek aan. Het formulier verstuurt een aanvraag, geen betaling.
- Cadeaubonnen houden hun eigen betaalproces: eerst een betaalverzoek per e-mail, daarna de digitale bon. Betaling bij bezorging geldt voor schilderijaanvragen, niet voor de aankoop van een cadeaubon.

## Historische backup vóór het herontwerp

De oorspronkelijke code is gemarkeerd met Git-tag `pre-redesign-2026-10-14`, commit `03618e465b16057aa9ad744743c6b7784fbf1421`.

Het volledige lokale archief staat **buiten deze repository**:

```text
../fi-website-backups/fi-website-2026-10-14-pre-redesign.zip
../fi-website-backups/2026-10-14-pre-redesign/LEESMIJ.md
```

Het bevat de originele broncode, volledige Git-bundle, de rechtstreeks gedownloade gepubliceerde site, screenshots en controlesommen. `Open archive.command` opent de oude site zonder internet; `LEESMIJ.md` beschrijft veilig terugzetten naar een aparte map. De historische webbestanden zijn niet uit de nieuwe `out/`-map afkomstig.

Bewaar dit archief ook op een andere schijf of in eigen cloudopslag. Het archief en de tag zijn niet naar GitHub gepusht.

## Dependency-onderhoud

Next.js en de bijbehorende ESLint-configuratie zijn bijgewerkt naar de gepatchte 15.5.27-lijn. React, de afbeeldingsoptimizer en de overige dependencies zijn binnen hun bestaande major-versies bijgewerkt. Node 24 is de build- en ontwikkelruntime.

De gerichte `resolutions` in `package.json` zijn beveiligingsupdates voor vastgepinde transitieve dependencies:

- `next/postcss`: gebruikt de gepatchte PostCSS 8.5-lijn in plaats van Next's vastgepinde 8.4.31.
- `tailwindcss/**/postcss-selector-parser`: gebruikt de [gepatchte 7.1.6-lijn](https://github.com/advisories/GHSA-rj75-hqrm-r3gf). De gegenereerde CSS van deze site is vóór en na deze override byte-identiek gecontroleerd.

Audit op 14 oktober 2026: geen kritieke, middelhoge of lage meldingen. Eén [hoge kwetsbaarheid in `braces`](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) blijft via drie dependency-paden in Tailwind en ESLint aanwezig; upstream heeft nog geen gepatchte versie. Dit betreft patroonverwerking tijdens build/lint. GitHub Pages serveert alleen de statische export; bezoekersinvoer wordt niet aan deze buildtools doorgegeven. De melding wordt niet onderdrukt.

## Uitgevoerde controle

De productie-export bouwt succesvol. De geëxporteerde site is in Chromium bekeken op desktop en mobiel, inclusief schilderijdetails, verkochte werken, mobiel menu, reserveringen en beide kinderkameraanvragen. Succes- en foutantwoorden van EmailJS zijn tijdens de formuliercontrole lokaal onderschept; er zijn geen echte aanvragen verstuurd. De oude site is apart getest met alle externe netwerktoegang geblokkeerd en de Git-bundle is naar een tijdelijke map teruggezet.
