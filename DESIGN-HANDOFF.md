# Handoff: Migo Health pre-launch landing page

## Overview
A one-page pre-launch site for Migo Health, a community health provider for Medicaid members. Tagline: "A friend in your corner." Sections: Hero, Who we are, What we do, Contact. English and Spanish, chosen automatically from the visitor's browser language. Target: a static site on GitHub Pages at migohealth.co.

## About the design files
`design/Migo Landing Page v6.dc.html` is a **design reference built in HTML**. It shows the intended look and behavior, and is not production code to ship. Rebuild it as a clean static site: plain HTML and CSS plus a few lines of JS, with no framework. Don't ship the reference file or its runtime (`support.js`, `image-slot.js`). To view the reference, open it in a browser from the `design/` folder.

## Fidelity
**High fidelity.** Colors, type, spacing, copy and motion are final. Match them exactly.

## Target build
```
index.html            semantic markup, all copy in EN with data-es attributes (or two copy blocks)
styles.css            tokens as CSS custom properties, layout below
main.js               language detection only (~15 lines)
assets/               logos, favicon, photo (this folder)
CNAME                 migohealth.co
```
Fonts (Google Fonts):
`https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&family=Atkinson+Hyperlegible+Next:wght@400;700&display=swap`

Add `<title>Migo Health · A friend in your corner.</title>`, a meta description, Open Graph tags (share image: `assets/migohealth-logo-primary.png` until a real one exists), and the favicon set: `favicon.svg`, `favicon-32.png`, `favicon-16.png`, `apple-touch-icon.png`.

## Design tokens
| Token | Hex | Use |
|---|---|---|
| --ink | #0B1F32 | Header, hero, contact backgrounds; text on light |
| --ocean | #1F4E79 | Eyebrows, links, icons. Hover #163A5B |
| --coral | #F2704E | The person in the mark, dots, accent circle. Never text on light |
| --sun | #F4B942 | Primary button, the word "corner.", eyebrow on dark. Hover #F7C969 |
| --mist | #F3F6FA | Who we are background, message bubble |
| --mist-hover | #E6ECF2 | Light button hover |
| --line | #DDE4EB | Hairlines between list rows |
| --body | #515F6E | Body text on light (6.0:1 on mist) |
| --soft | #D6E4F0 | Body text on dark (12.9:1 on ink) |
| white | #FFFFFF | |

An alternate "green ink" palette was explored and is not the default: ink #1C2A2A, mist #F3F5F4, mist-hover #E6EAE9, line #E2E6E5, body #4A5757, soft #C9D3D1.

Type:
- Display: Nunito 800. Body: Atkinson Hyperlegible Next 400/700, falling back to Atkinson Hyperlegible, then sans-serif.
- Body font smoothing: `-webkit-font-smoothing: antialiased`.

Radii: pills 999px. Photo 32px. Message card 20px. Bubble 14px 14px 14px 4px. Section sheets 40px 40px 0 0.
Shadows: card `0 18px 44px rgba(11,31,50,.18)`, badge `0 14px 32px rgba(11,31,50,.18)`.
Focus: `:focus-visible { outline: 3px solid #F2704E; outline-offset: 3px }`.

## Layout system
- Container: `max-width: 1440px; margin: 0 auto; box-sizing: border-box; padding-inline: clamp(20px, 5vw, 80px)`. Content is at most 1280px wide. The header, hero and every section share this edge.
- Two-column sections use `grid-template-columns: repeat(auto-fit, minmax(min(100%, 400px), 1fr)); column-gap: clamp(48px, 9vw, 160px); row-gap: 40px`. They stack on narrow screens.
- Section vertical padding: `clamp(64px, 9vw, 120px)`.
- Fluid widths only. No fixed heights on text boxes.

## Screens / views

### Header (sticky)
- `position: sticky; top: 0; z-index: 10`, background --ink, `border-bottom: 1px solid rgba(255,255,255,.08)`, padding 14px.
- Left: the reversed lockup `assets/migohealth-logo-reversed-small.svg`, 177×32, linking to `#top`. Use this small-size file below 48px tall. Its mark is the heavier small-size cut.
- Right, `display: flex; gap: 8px`:
  - Nav links "Who we are" (#who) and "What we do" (#what): Atkinson 700 15px/1, white, padding 10px 14px, radius 999px, hover background rgba(255,255,255,.08), `white-space: nowrap`.
  - CTA "Contact" (#contact): white pill with --ink text, Nunito 800 15px/1, padding 13px 20px (about 43px tall), hover background --soft.
  - Below 640px, hide the nav links. The header is then just the logo and the Contact pill on one row.
- No language toggle. See Interactions.

### 01 Hero (#top)
- Full-bleed --ink background, white text, `overflow: hidden`.
- Inner container: `min-height: min(calc(100vh - 60px), 900px)`. Padding is `clamp(48px,7vw,104px)` on top and the sides use `clamp(24px,5vw,80px)`. Bottom padding is `calc(clamp(48px,7vw,104px) + 40px)`, leaving room for the next section's overlap.
- Grid: `repeat(auto-fit, minmax(min(100%, 340px), 1fr))`, gap `clamp(36px, 8vw, 160px)`, `align-items: center`.
- **Left column** (flex column, gap 26px, align start):
  - H1: Nunito 800, `clamp(52px, 6.6vw, 108px)/0.94`, letter-spacing -0.045em, `text-wrap: balance`, max-width 12ch. Text: "A friend in your **corner.**", with "corner." in --sun.
  - Paragraph: Atkinson 400, `clamp(19px, 1.6vw, 22px)/1.5`, --soft, max-width 46ch. Text: "Someone from your community who helps you find care, understand your benefits, and get what you need to stay healthy."
  - Buttons (flex, gap 12px, margin-top 4px). Both are pills with padding 17px 28px and Nunito 800 17px/1:
    - Primary: "Get in touch" with a trailing 17px arrow → `#contact`. Background --sun, text --ink. Hover background #F7C969 and `translateY(-2px)`.
    - Secondary: "What we do" → `#what`. Background rgba(255,255,255,.12), white text. Hover rgba(255,255,255,.22) and `translateY(-2px)`.
- **Right column**: photo composition, `position: relative; width: 100%; max-width: 560px; justify-self: end; padding: 28px 0 clamp(36px, calc(140px - 10vw), 110px) 28px`. The bottom padding grows on small screens, so the card hangs below the photo instead of covering faces. The padding leaves room for the overhanging pieces.
  - Photo frame: `aspect-ratio: 5/4; border-radius: 32px; overflow: hidden`, with an `<img>` set to `object-fit: cover; object-position: 10% 50%`. That position centers both people. The current image is a placeholder (see Assets).
  - Coral circle: 104px, `position: absolute; right: -26px; top: 0`, `pointer-events: none`, decorative.
  - Badge, top-left (`position: absolute; left: 0; top: 0`): white pill, padding 10px 18px 10px 10px, gap 10px, badge shadow, Nunito 800 15px/1.1, --ink text. It starts with a 30px --ink circle holding a --sun check icon (stroke 3.2). Text: "Appointment booked".
  - Message card, bottom-left (`position: absolute; left: 0; bottom: 0; width: min(260px, 72%)`): white, radius 20px, card shadow, padding 16px 18px 18px, flex column with gap 12px, text color --ink.
    - Row: a 36px --ocean circle containing `assets/migohealth-mark-small-reversed.svg` at 26px. Next to it: "Luz · Migo Health" (Nunito 800 15px/1.2), and under that "Text message" (12px/1.2, --body).
    - Bubble: --mist background, radius 14px 14px 14px 4px, padding 12px 14px, 15px/1.45. Text: "Hi Mr. Johnson! Your ride is set for Tuesday at 9:00. I’ll call you after your visit."
  - At narrow widths the grid stacks and the photo block sits under the text.

### 02 Who we are (#who)
- Background --mist. `position: relative; z-index: 1; margin-top: -40px; border-radius: 40px 40px 0 0`, so it slides over the hero like a sheet.
- Two-column grid, `align-items: start`.
- Left: eyebrow "Who we are" (Nunito 800 18px/1.2, letter-spacing .01em, --ocean). Below it, gap 18px, the H2 "Real people from your community." (Nunito 800 `clamp(36px, 4.6vw, 64px)/1.02`, letter-spacing -0.035em, balance).
- Right (flex column, gap 24px, align start):
  - Paragraph `clamp(18px, 1.6vw, 20px)/1.55`, --body: "Migo Health is a community health provider that helps people get the care, resources, and ongoing support they need to live healthier lives. Our team of community health workers, peer support specialists, care coordinators, and case managers is supported by licensed clinical oversight."
  - Text link "Get in touch" with a 16px arrow → `#contact`. Nunito 800 18px/1.2, --ocean, `border-bottom: 2px solid currentColor; padding-bottom: 4px`. Hover color --ink.

### 03 What we do (#what)
- White background, two-column grid.
- Left: eyebrow "What we do". H2 "Getting healthy often takes more than a doctor’s appointment.", same style as the Who we are H2. Paragraph, same style as above: "One person from our team stays with you from the first conversation to the follow-up call. In person, by phone or by text, in English or Spanish."
- Right: four rows. Each row is a grid of `32px 1fr` with gap 18px and padding 22px 0. The first row has a top border of 1px --ink, the middle dividers are 1px --line, and the last row also has a bottom border of 1px --ink.
  - Icon: 30px, on a 24 grid, `fill: none; stroke: #1F4E79; stroke-width: 2.4; stroke-linecap: round; stroke-linejoin: round`, plus one solid --coral dot.
  - Title: Nunito 800 22px/1.2, letter-spacing -0.01em. Description: 17px/1.5, --body.

| Icon SVG (24×24) | Title | Description |
|---|---|---|
| `<path d="M12 21.5s-7-6-7-11.8a7 7 0 0 1 14 0c0 5.8-7 11.8-7 11.8Z"/><circle cx="12" cy="9.7" r="2.6" fill="#F2704E" stroke="none"/>` | Find care and get there | A doctor who fits, appointments booked, rides arranged, prescriptions understood. |
| `<path d="M7 3h7l5 5v11.5a1.5 1.5 0 0 1-1.5 1.5H7a1.5 1.5 0 0 1-1.5-1.5v-15A1.5 1.5 0 0 1 7 3Z"/><path d="M9 12.5h6M9 16.5h3"/><circle cx="15.5" cy="16.5" r="1.9" fill="#F2704E" stroke="none"/>` | Make sense of your benefits | What Medicaid covers, what the letters mean, and the forms filled out together. |
| `<path d="M3.5 11 12 4l8.5 7v8.5a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 0 1-1.5-1.5Z"/><circle cx="12" cy="15.5" r="2.4" fill="#F2704E" stroke="none"/>` | Food, housing, rides and bills | Connections to trusted local help, and we confirm it actually landed. |
| `<path d="M4 5.5h16v10H9l-5 4Z"/><circle cx="12" cy="10.5" r="2" fill="#F2704E" stroke="none"/>` | Someone to talk to | Check-ins that keep going, and support when things feel heavy. |

### 04 Contact (#contact), with the footer folded in
- Background --ink, white text, `border-radius: 40px 40px 0 0`. It fills the rest of the page: the body is a flex column with min-height 100vh, and this section has `flex: 1`.
- Two-column grid, `align-items: center`.
- Left: eyebrow "Contact" in --sun. H2 "Let’s talk." (Nunito 800 `clamp(48px, 7.4vw, 104px)/0.96`, letter-spacing -0.04em). Paragraph in --soft: "Members, health plans, providers, community organizations, or anyone who wants to work with us: write to us and a person will write back."
- Right: a full-width `mailto:contact@migohealth.co` row with 1px white top and bottom borders, padding 28px 0, space-between. Text "contact@migohealth.co" (Nunito 800 `clamp(22px, 2.6vw, 34px)/1.15`, `overflow-wrap: anywhere`) with a 28px arrow. Hover color --sun.
- Footer row in the same container, below, with bottom padding 36px: the reversed lockup at 144×26 on the left, and "© 2026 Migo Health" (14px, --soft) on the right. It wraps on small screens.

## Responsive behavior
- Include `<meta name="viewport" content="width=device-width, initial-scale=1">`.
- Every two-column grid stacks to one column when it can't fit two columns of 400px (340px in the hero). Type scales with `clamp()`.
- Mobile header: logo plus Contact pill. Nav links are hidden below 640px.
- Mobile hero: text, then the photo at full width. The coral circle is clipped by the hero's `overflow: hidden`.
- Tap targets are at least about 43px tall. Body text is at least 17px.

## Interactions and behavior
- Anchor links scroll smoothly (`html { scroll-behavior: smooth }`). Account for the sticky header with `scroll-margin-top: 64px` on sections.
- **Language:** on load, read `navigator.languages[0] || navigator.language`. If it matches `/^es\b/i`, show the Spanish copy and set `<html lang="es">`. Otherwise use English. There's no visible toggle. Spanish copy is below.
- **Entrance motion**, hero only. Keyframes `rise`: from `opacity: 0; transform: translateY(22px)` to `opacity: 1; transform: none`. Easing `cubic-bezier(.2,.7,.2,1)`. Use **`animation-fill-mode: backwards`**, not `both`: with `both`, finished elements stay on a compositor layer and the card text renders soft.
  - H1: .9s, starts at .1s
  - Paragraph: .9s at .25s
  - Buttons: .9s at .4s
  - Photo block: 1s at .3s
  - Message card: .8s at 1s
  - Badge: .8s at 1.3s
- `@media (prefers-reduced-motion: reduce)`: turn all animation off.
- Button and link transitions: background, color and transform at .2s.

## Spanish copy (es)
| Element | Text |
|---|---|
| Nav | Quiénes somos · Qué hacemos · Contacto |
| H1 | Alguien que está en tu **esquina.** ("esquina." in --sun) |
| Hero paragraph | Una persona de tu comunidad que te ayuda a encontrar atención, entender tus beneficios y conseguir lo que necesitas para estar sano. |
| Buttons | Escríbenos · Qué hacemos |
| Badge | Cita confirmada |
| Card label | Mensaje de texto |
| Card bubble | ¡Hola, Sr. Johnson! Su transporte está listo para el martes a las 9:00. Lo llamo después de su cita. |
| Who eyebrow / H2 | Quiénes somos / Personas reales de tu comunidad. |
| Who paragraph | Migo Health es un proveedor de salud comunitaria que ayuda a las personas a conseguir la atención, los recursos y el apoyo continuo que necesitan para vivir de forma más saludable. Nuestro equipo de promotores de salud, especialistas de apoyo entre pares, coordinadores de atención y administradores de casos cuenta con supervisión clínica con licencia. |
| Who link | Escríbenos |
| What eyebrow / H2 | Qué hacemos / Estar sano muchas veces requiere más que una cita con el doctor. |
| What paragraph | Una persona de nuestro equipo te acompaña desde la primera conversación hasta la llamada de seguimiento. En persona, por teléfono o por texto, en inglés o en español. |
| Rows | Encontrar atención y llegar a ella: Un doctor adecuado, citas hechas, transporte organizado y recetas explicadas. · Entender tus beneficios: Qué cubre Medicaid, qué significan las cartas y los formularios llenados juntos. · Comida, vivienda, transporte y cuentas: Conexiones con ayuda local de confianza, y confirmamos que de verdad llegó. · Alguien con quien hablar: Seguimiento que no se detiene, y apoyo cuando todo pesa. |
| Contact | Contacto / Hablemos. / Miembros, planes de salud, proveedores, organizaciones comunitarias o cualquier persona que quiera trabajar con nosotros: escríbenos y una persona te responderá. |

Have a native speaker review the Spanish before launch.

## Assets
- `assets/migohealth-logo-reversed-small.svg`: header and footer lockup. It's outlined vector art with no font dependency. "migo" is white, "health" is #F4B942, and the mark uses the small-size cut.
- `assets/migohealth-logo-reversed.svg`: full-size reversed lockup, for large uses.
- `assets/migohealth-mark-small-reversed.svg`: message-card avatar.
- `assets/favicon.svg`, `favicon-32.png`, `favicon-16.png`, `apple-touch-icon.png`: the icon set.
- `assets/migohealth-logo-primary.png`: placeholder Open Graph image.
- Hero photo: a **placeholder** from Pexels (free license): https://images.pexels.com/photos/7551610/pexels-photo-7551610.jpeg. Download it into `assets/hero.jpg`, or replace it with Migo's own photo, at a width of about 1600px. Keep `object-position` set so both people are centered.
- Brand rules and full logo set: `MIGO-BRAND.md`, plus `brand/logo/` in the design project.

## Deploy (GitHub Pages)
1. Create the repo, for example `migohealth/site`, and commit `index.html`, `styles.css`, `main.js`, `assets/`, and a `CNAME` file containing `migohealth.co`.
2. In the repo, go to Settings → Pages → Build and deployment → Deploy from a branch → `main` / root.
3. Set the custom domain to `migohealth.co`. At the DNS provider, add A records for the root domain: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153. Add a `www` CNAME pointing to `migohealth.github.io`.
4. Once the certificate is issued, turn on Enforce HTTPS.

## Files
- `design/Migo Landing Page v6.dc.html`: the reference design, with `support.js` and `image-slot.js` so it opens locally.
- `assets/`: production assets listed above.
- `MIGO-BRAND.md`: brand guide.
