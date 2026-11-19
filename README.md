<div align="center">

# 🎂 Birthday Best Wishes 💗

### A pure HTML, CSS & JavaScript animated birthday website — no frameworks, no build step.

[![Made with HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![Made with CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![Made with JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
[![Deploy with Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](#-deploying-to-vercel)

</div>

---

## 📖 About

**Birthday Best Wishes** is a multi-page, fully animated birthday website. Just open `index.html` in a browser, or deploy it anywhere as a static site — no dependencies, no build tools, no frameworks.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎈 | Floating balloons & confetti animations |
| ⏰ | Live clock with an automatic midnight surprise message |
| 💌 | Interactive envelope that opens to reveal a letter |
| 💭 | Rotating quotes carousel |
| 🎵 | Background music with a play/pause button |
| 🕯️ | Interactive cake — click each candle to blow it out |
| 💍 | Proposal page with a dodging "No" button and a clickable rose |
| 📸 | Photo gallery — fixed photos plus empty slots visitors can fill in |
| 📱 | Fully responsive, mobile-friendly, light/dark theme aware |

---

## 📁 Project Structure

```
Birthday-Best-Wishes/
├── index.html            # Page structure & content
├── style.css              # All styling
├── script.js               # All interactivity/logic
├── song.mp3                 # Background music file
├── firstMeet.png             # Gallery photos
├── instagramMeet.png
├── clony.jpg
├── durgapuja.png
├── park.jpg
├── noida.png
├── proposal.png
├── we.png
├── wishes.jpg
└── README.md
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/suman9834/Birthday-Best-Wishes.git
cd Birthday-Best-Wishes
```

Then simply open `index.html` in your browser — or deploy it (see below).

---

## 🖼️ Adding / Changing Photos

Open **`script.js`** and find:

```js
const defaultPhotos = {0:'firstMeet.png', 1:'instagramMeet.png', 2:'clony.jpg', 3:'durgapuja.png', 4:'park.jpg', 5:'noida.png', 6:'proposal.png'};
```

- Add a new entry with the next number and filename, e.g. `7:'newphoto.jpg'`
- Make sure `SLOT_COUNT` (just above) is at least the number of photos you have
- Drop the actual image file into the project folder

> Visitors can also fill any empty **"Add photo"** slot themselves by tapping it — those uploads are saved only in their own browser.

---

## 🎵 Adding Music

**1.** Place your audio file (e.g. `song.mp3`) in the project folder.

**2.** Add this near the top of `index.html`:
```html
<audio id="bdaySong" src="song.mp3" preload="auto"></audio>
```

**3.** Wire up the music button in `script.js` to play/pause `bdaySong`.

---

## ☁️ Deploying to Vercel

1. Push this repo to GitHub *(already done ✅)*
2. Go to [vercel.com](https://vercel.com) → **Import Project** → select this repo
3. No build settings needed — it's a static site
4. Deploy 🎉 — your site goes live at a `*.vercel.app` URL

Or via CLI:
```bash
npx vercel
```

---

## 📝 Notes

- Pure JavaScript — no external libraries required
- Automatically respects the visitor's light/dark system theme
- Personalize the text in `index.html` (messages, reasons, quotes, wishes) to make it your own

---

<div align="center">

## 👤 Author

**Suman Kumar**

Made with 💗

</div>