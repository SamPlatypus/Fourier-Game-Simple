# Fourier Epicycles Toy

Draw a shape and watch a chain of spinning circles redraw it as a Fourier
series. Pick a preset (heart, star, infinity, spiral) or tap **Draw Custom**
and draw your own with a finger.

It is an installable web app (PWA). Once installed it runs from your home
screen like any other app, with no internet connection needed.

## Put it online (one time)

1. On GitHub, open this repository's **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**,
   pick **main** and **/ (root)**, then **Save**.
3. After a minute or two the app is live at
   **https://samplatypus.github.io/Fourier-Game-Simple/**

## Install it on your phone

Open the link above once, with internet, then:

- **Android (Chrome):** tap **Install** on the banner, or the **⋮** menu →
  **Install app** (on some phones: **Add to Home screen** → **Install**).
- **iPhone / iPad (Safari):** tap **Share** → **Add to Home Screen** → **Add**.

The first visit saves the whole app on the phone, so after that it opens
offline. When you are online it fetches any newer version in the background,
and you see it the next time you open the app.

## Files

| File | What it does |
| --- | --- |
| `index.html` | The whole app in one file (Tailwind CSS and the Inter font are built in) |
| `manifest.webmanifest` | App name, colours, icons and full-screen mode for installing |
| `sw.js` | Service worker that saves the app for offline use |
| `icons/` | App icons: 192 and 512 px, Android "maskable" 512 px, iPhone 180 px, favicon |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are |

You can also just open `index.html` straight from your computer. It works
offline that way too, but browsers only offer to install it once it is served
from GitHub Pages (or another https site).
