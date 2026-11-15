# Shirly P. Delankawala — portfolio website

A single-page, cinematic portfolio. Plain HTML, CSS and JavaScript: no website builder, no monthly fees, and it runs on any static host.

```
index.html          the page
content.js          ALL the words, works, career, awards and contact details  ← edit this
assets/css/         style.css (colours, layout) + fonts.css (fonts, embedded)
assets/js/app.js    the built script (don't edit by hand)
assets/img/         portrait.webp, og-image.jpg (link preview), works/ (stills)
assets/icons/       browser tab and home-screen icons
assets/fonts/       font files (Imbue, Hanken Grotesk); used online, fonts.css covers opening from a folder
favicon.ico, site.webmanifest, 404.html   icon, home-screen details, "page not found" page
src/                source code for app.js (only for a developer)
scripts/            makes the clean, search-ready folder to publish (only for a developer)
```

The page runs in this order: opening screen, Work, Recognition, About, Career, Television, end credits, Contact.

## Preview it

Double-click `index.html` to open it in Chrome, Safari or Edge. Fonts, 3D and animation all work straight from the folder.
To preview it as it will run online, open a terminal in this folder, run `npm install` once, then `npm start`, and open http://localhost:4173.

## Update the content yourself

Open `content.js` in any text editor (TextEdit in plain-text mode, VS Code or Notepad). Change the words between the quotes, save, and refresh the browser.

- **Website address:** once the domain is live, put it in `siteUrl` at the top, e.g. `siteUrl: "https://shirlydelankawala.com"`. Search engines and link previews use it. On Vercel it can stay empty until then: Vercel's own address is used.
- **Change text:** edit anything inside `"…"`. Keep the quotes and the commas between items.
- **The numbers update themselves.** Years in drama, productions, episodes and awards are counted from `content.js`, so they stay correct as you add work.
- **Add a work:** copy one `{ title: … }` block in `works` and paste it anywhere in the list. Works are put in date order automatically, newest first; a series that ran 2015–2019 counts as 2019. Set `type` ("Feature film" or "Teledrama"), `years` (`[2026]`, or `[2015, 2019]` for a long-running series), `channel` and `episodes`. It appears in the slideshow, on the contact sheet under it and in the award record automatically.
- **Awards:** each work has an `awards` list. Write each award as `["won", "Best Director", "State Television Awards", 2009]`, or use `"nominated"` instead of `"won"`.
- **The laurels (the main awards):** `honours` is the short list of headline awards. All of them show as laurels at the top of Recognition, and the first few also sit on the opening screen (`heroHonours` sets how many: 2 reads best). Put the most important first and keep the list to three to six. The `work` must match a work's title exactly; clicking a laurel opens that work's full record. Set `honours: []` and the site picks every win for direction or for the series itself.
- **The "New in 2026" notice** on the opening screen comes from `latest`. Change the label and title, or set `latest: ""` to hide it.
- **Quiet highlights:** in the About text, wrap a key phrase in stars, e.g. `*Board of Directors of the Independent Television Network*`, and a fine underline draws in beneath it. Use two or three at most.
- **Hanthanata Ahenwada:** add its details (cast, release, where it is screening) to that work's `note`, and a still to `still`, when they're ready.
- **Career film strip:** edit `career`. `end: ""` means "to present". The strip always runs oldest to newest.
- **Acknowledgements:** `acknowledgements` holds jury service, shown in Recognition under the full record. Each line has `years`, `title` and `role`.
- **Television:** edit `television.groups`. Each group has a role, place and years, then its programmes. The titles run on as one line and the small monitor tunes to each in turn. Add `live: true` to show the Live mark.
- **End credits:** `credits` holds memberships and education, shown like film end credits before Contact.
- **Add a real still to a work:** put a landscape image (about 2400 × 1000 px, JPG or WebP) in `assets/img/works/`, then set that work's `still: "assets/img/works/handawa.jpg"`. Without a still, the work shows its illustrated poster.
- **Social links (footer):** paste full URLs into `social` (for example `"https://www.linkedin.com/in/…"`). Empty ones stay hidden. Facebook, Instagram, LinkedIn and YouTube get their own icon.
- **Website credit:** the last line of the page comes from `madeBy` (a label and a link). Remove it to hide the line.
- **Accent colour:** the one accent is copper. To change it, edit the two `--accent` lines near the top of `assets/css/style.css` (one for night, one for day).
- **Portrait:** replace `assets/img/portrait.webp` with a new photo of the same name. The current one is cut out of the ITN ID card, so the site shows it small, in a framed print. A proper studio portrait (plain background, chest-up, at least 1600 px tall) will look much better. A transparent PNG or WebP works best.

## Contact form

The form works without any setup. "Send by email" opens the visitor's email app with the message filled in, and "Send on WhatsApp" opens WhatsApp with the message ready. Each field says what is missing if it is left empty.

To receive messages straight to your inbox instead:
1. Create a free form at https://formspree.io and copy its endpoint (it looks like `https://formspree.io/f/abcdwxyz`).
2. Paste it into `formEndpoint` in `content.js`.

## Launch (target: 21 December)

1. **Publish only the website files.** Run `npm run export`: it makes a clean, search-ready `publish` folder (see *Search engines* below). Upload that folder, never `node_modules`. In a hurry without a terminal, `index.html`, `content.js`, `assets`, `favicon.ico`, `site.webmanifest` and `404.html` in a new folder also work, without the search extras.
2. **Host it for free.** The quickest route is https://app.netlify.com/drop: drag that folder onto the page and you get a live link in seconds. Cloudflare Pages and GitHub Pages also work.
   **On Vercel**, import the whole project (not the `publish` folder). `vercel.json` already tells Vercel to run `npm run export` and serve the `publish` folder, so leave the Build Command and Output Directory in the Vercel project settings empty.
3. **Buy a domain.** For example `shirlydelankawala.com`, or a `.lk` from the LK Domain Registry. Check availability at a registrar such as Cloudflare, Namecheap or GoDaddy.
4. **Connect the domain** in the host's "Domain settings". The host provides the free HTTPS certificate.
5. **Add the address** to `siteUrl` in `content.js` and publish again. The link-preview image, the canonical link and the sitemap all follow from it.
6. **Updating later:** edit `content.js` and publish the folder again, or connect the host to a GitHub repository so every saved change goes live.

### Before launch checklist
- [ ] Name spelling: the site uses **Shirly** (as on the ITN letter and IDs), not "Shirley".
- [ ] WhatsApp number and email are correct.
- [ ] Social links added.
- [ ] Award years and wording checked, including the six laurels in `honours`.
- [ ] Hanthanata Ahenwada details added (note and still).
- [ ] Stills added for the key works (optional, but recommended).
- [ ] Studio portrait (recommended).
- [ ] `siteUrl` in `content.js` set to the live address.
- [ ] After launch: add the site to Google Search Console and submit `sitemap.xml`.

## Search engines
`npm run export` (which Vercel runs on every deploy) prepares the page for search engines and link previews:
- the page address (canonical link), and full addresses for the WhatsApp / Facebook / LinkedIn preview image;
- structured data built from `content.js`: the person, his headline awards, and every production with its awards, so search engines can connect the titles to his name;
- the About text written into the page itself, so it is read even without running scripts;
- `robots.txt` and `sitemap.xml` (the sitemap once `siteUrl` or the Vercel address is known);
- fonts loaded as files and style/script links fingerprinted, so the page paints sooner and visitors never get a stale copy.
The title and description are at the top of `index.html`.

## Features
- Night and day modes: follows the device and remembers the visitor's choice.
- 3D cine lens on the opening screen, placed around the name so it stays readable. Click it to fire the shutter.
- Film-poster laurels for the main awards, on the opening screen and at the top of Recognition. Each one opens that production's record.
- Leader countdown at the start, and iris transitions between sections.
- Links such as `…/#recognition` open straight to that section after the intro.
- Work slideshow with a contact sheet of every work under it; the frame on screen is marked.
- Full award record: all 34 awards and 21 nominations, one line per production. A line opens to show its awards by ceremony.
- Footer with social links and the website credit.
- Rolling counters, a career film strip that wraps over a drum in 3D, and a vintage monitor that scans through the television programmes.
- Autofocus cursor, and a spotlit signature in the footer.
- Optional sound: off by default, synthesised, no audio files.
- Smooth scrolling, usable by keyboard, and respects reduced motion (the film strip becomes a row you scroll sideways).
- Made for phones as well as large screens: the slideshow arrows sit under the picture where a thumb reaches them, the contact sheet and career film strip are rows you swipe (the strip shows how far along you are), buttons answer a tap, every target is finger-sized, no text is smaller than 12px, and nothing hides under the notch when a phone is held sideways.

## For a developer
Only needed if you change files in `src/`:

```
npm install
npm run build      # rebuilds assets/js/app.js
npm run dev        # rebuilds on every save
npm start          # serves the folder at http://localhost:4173
npm run export     # build, then copy the publishable files to publish/
```
Built with three.js, GSAP + ScrollTrigger and Lenis.
