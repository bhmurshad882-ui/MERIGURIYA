// Tabs (top nav)
document.querySelectorAll("#tabNav button").forEach((btn) => {
  btn.addEventListener("click", () => {
    goToPage(btn.dataset.tab);
  });
});

function goToPage(pageName) {
  document.querySelectorAll("#tabNav button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === pageName);
  });
  document
    .querySelectorAll(".page")
    .forEach((page) => page.classList.remove("active"));
  const page = document.getElementById("page-" + pageName);
  if (page) {
    page.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// Next buttons (page-to-page flow)
document
  .getElementById("albumReasonsBtn")
  ?.addEventListener("click", () => goToPage("reasons"));
document
  .getElementById("reasonsQuizBtn")
  ?.addEventListener("click", () => goToPage("quiz"));
document
  .getElementById("quizWishesBtn")
  ?.addEventListener("click", () => goToPage("wishes"));
document
  .getElementById("wishesToCakeBtn")
  ?.addEventListener("click", () => goToPage("cake"));
document
  .getElementById("cakeToThanksBtn")
  ?.addEventListener("click", () => goToPage("thanks"));

// Typed message
const fullText =
  "Happy birthday MERI GURIYA! hamesha khsuh raho aur hasta muskurata raho hamesha kamyab raho 🌟";
const typedEl = document.getElementById("typedText");
let i = 0;
function typeStep() {
  if (i < fullText.length) {
    typedEl.textContent += fullText.charAt(i);
    i++;
    setTimeout(typeStep, 35);
  }
}
setTimeout(typeStep, 500);

// Balloons
const balloonsContainer = document.getElementById("balloons");
function spawnBalloon() {
  const b = document.createElement("div");
  b.className = "balloon";
  b.textContent = "🎈";
  b.style.left = Math.random() * 90 + "vw";
  b.style.animationDuration = 8 + Math.random() * 6 + "s";
  balloonsContainer.appendChild(b);
  setTimeout(() => b.remove(), 15000);
}
setInterval(spawnBalloon, 1200);
for (let k = 0; k < 4; k++) setTimeout(spawnBalloon, k * 400);

// Confetti
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
addEventListener("resize", resize);
let particles = [];
function burstConfetti() {
  const colors = ["#9b5de5", "#ffd166", "#c9a0ff", "#ff8fb3", "#ffffff"];
  for (let n = 0; n < 100; n++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 12,
      vy: (Math.random() - 1.2) * 12,
      size: Math.random() * 6 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 100,
    });
  }
}
function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p) => {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.25;
    p.life -= 1;
    ctx.globalAlpha = Math.max(p.life / 100, 0);
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.size, p.size);
  });
  particles = particles.filter((p) => p.life > 0);
  ctx.globalAlpha = 1;
  requestAnimationFrame(animateParticles);
}
animateParticles();
setTimeout(burstConfetti, 900);

// Live clock + midnight surprise
let midnightCelebrated = false;
function pad(n) {
  return n.toString().padStart(2, "0");
}
function renderMidnight() {
  const now = new Date();
  const h = now.getHours(),
    m = now.getMinutes(),
    s = now.getSeconds();
  const titleEl = document.getElementById("midnightTitle");
  const clockEl = document.getElementById("liveClock");
  const msgEl = document.getElementById("midnightMsg");
  if (h === 0 && m === 0) {
    titleEl.textContent = "🎉 Happy Birthday KAKKA! 🎂";
    clockEl.textContent = pad(h) + ":" + pad(m) + ":" + pad(s);
    msgEl.textContent = "12 baja gaye — Yayieeeee🎉! 💗";
    if (!midnightCelebrated) {
      midnightCelebrated = true;
      burstConfetti();
    }
  } else {
    titleEl.textContent = "💗";
    clockEl.textContent = pad(h) + ":" + pad(m) + ":" + pad(s);
    msgEl.textContent = "Aaj ka din tumhare naam hai.";
  }
}
renderMidnight();
setInterval(renderMidnight, 1000);

// Envelope
document.getElementById("envelope").addEventListener("click", function () {
  this.classList.add("open");
  document.getElementById("fullLetter").classList.add("show");
  burstConfetti();
});

// Quotes
const quotes = [
  "Tumse baat karke lagta hai din thoda acha ho gaya.",
  "Kuch log bas special hote hain — aur tum bht specail ho mere liya.",
  "Tumhara hona hi kaafi hai meri zindagi kaa liyaa.",
  "Har pal ke saath tum aur bhi pyaari lagne lagti ho.",
];
let qi = 0;
const quoteEl = document.getElementById("quoteText");
function showQuote() {
  quoteEl.textContent = '"' + quotes[qi] + '"';
}
showQuote();
document.getElementById("nextQuote").addEventListener("click", () => {
  qi = (qi + 1) % quotes.length;
  showQuote();
});

// Cake
document.querySelectorAll(".candle").forEach((c) => {
  c.style.cursor = "pointer";
  c.addEventListener("click", () => {
    c.classList.add("out");
    const allOut = [...document.querySelectorAll(".candle")].every((x) =>
      x.classList.contains("out"),
    );
    if (allOut) {
      burstConfetti();
      const fin = document.getElementById("cakeFinal");
      if (fin) fin.style.display = "block";
      const bdaySong = document.getElementById("bdaySong");
      const musicBtn = document.getElementById("musicBtn");
      if (bdaySong && bdaySong.paused) {
        bdaySong.play().catch(() => {});
        if (musicBtn) musicBtn.textContent = "🔊";
      }
    }
  });
});

// Welcome Overlay & Guaranteed Autoplay
const welcomeOverlay = document.getElementById("welcomeOverlay");
const enterBtn = document.getElementById("enterBtn");
const bdaySong = document.getElementById("bdaySong");
const musicBtn = document.getElementById("musicBtn");

function startMusicAndEnter() {
  if (welcomeOverlay) {
    welcomeOverlay.classList.add("hidden");
    setTimeout(() => {
      try { welcomeOverlay.remove(); } catch(e) {}
    }, 600);
  }
  if (bdaySong) {
    bdaySong.play().then(() => {
      if (musicBtn) musicBtn.textContent = "🔊";
    }).catch((err) => {
      console.log("Audio play error:", err);
    });
  }
  burstConfetti();
}

if (enterBtn) {
  enterBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    startMusicAndEnter();
  });
}

if (welcomeOverlay) {
  welcomeOverlay.addEventListener("click", () => {
    startMusicAndEnter();
  });
}

// Try autoplay immediately if permitted
if (bdaySong) {
  bdaySong.play().then(() => {
    if (musicBtn) musicBtn.textContent = "🔊";
    if (welcomeOverlay) {
      welcomeOverlay.classList.add("hidden");
    }
  }).catch(() => {
    // Autoplay blocked by browser until user gesture
  });
}

// Fallback: Global interaction listener
const startOnFirstInteraction = () => {
  if (bdaySong && bdaySong.paused) {
    bdaySong.play().then(() => {
      if (musicBtn) musicBtn.textContent = "🔊";
    }).catch(() => {});
  }
  if (welcomeOverlay) {
    welcomeOverlay.classList.add("hidden");
  }
  window.removeEventListener("click", startOnFirstInteraction);
  window.removeEventListener("touchstart", startOnFirstInteraction);
  window.removeEventListener("pointerdown", startOnFirstInteraction);
  window.removeEventListener("keydown", startOnFirstInteraction);
};
window.addEventListener("click", startOnFirstInteraction);
window.addEventListener("touchstart", startOnFirstInteraction);
window.addEventListener("pointerdown", startOnFirstInteraction);
window.addEventListener("keydown", startOnFirstInteraction);

if (musicBtn && bdaySong) {
  musicBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    if (bdaySong.paused) {
      bdaySong.play().then(() => {
        musicBtn.textContent = "🔊";
      }).catch(() => {});
    } else {
      bdaySong.pause();
      musicBtn.textContent = "🔇";
    }
  });
}

// Gallery
try { localStorage.removeItem("shilpa_bday_photos"); } catch(e) {}
const gallery = document.getElementById("gallery");
const SLOT_COUNT = 8;
const STORAGE_KEY = "meriguriya_bday_photos";
const defaultPhotos = {
  0: "img1.jpeg",
  1: "img2.jpeg",
  2: "img3.jpeg",
  3: "img4.jpeg",
  4: "img5.jpeg",
  5: "img6.jpeg",
  6: "img7.jpeg",
  7: "img8.jpeg",
};
function loadPhotos() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}
function savePhotos(d) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(d));
  } catch (e) {}
}
function renderGallery() {
  const photos = loadPhotos();
  gallery.innerHTML = "";
  for (let idx = 0; idx < SLOT_COUNT; idx++) {
    const slot = document.createElement("label");
    slot.className = "photo-slot";
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function (ev) {
        const d = loadPhotos();
        d[idx] = ev.target.result;
        savePhotos(d);
        renderGallery();
      };
      reader.readAsDataURL(file);
    });
    slot.appendChild(input);
    const src = photos[idx] || defaultPhotos[idx];
    if (src) {
      const img = document.createElement("img");
      img.src = src;
      slot.appendChild(img);
    } else {
      slot.innerHTML +=
        '<div style="font-size:1.6rem;">💗</div><div>Add photo</div>';
      slot.appendChild(input);
    }
    gallery.appendChild(slot);
  }
}
renderGallery();

// Quiz
let quizScore = 0,
  quizAnswered = 0;
document.querySelectorAll(".quiz-opts").forEach((group) => {
  const btns = group.querySelectorAll("button");
  btns.forEach((b) =>
    b.addEventListener("click", () => {
      if (group.dataset.done) return;
      group.dataset.done = "true";
      quizAnswered++;
      btns.forEach((x) => (x.disabled = true));
      if (b.dataset.correct) {
        b.classList.add("correct");
        quizScore++;
      } else {
        b.classList.add("wrong");
        group.querySelector("[data-correct]").classList.add("correct");
      }
      if (quizAnswered === document.querySelectorAll(".quiz-opts").length) {
        document.getElementById("quizResult").textContent =
          `Score: ${quizScore}/${quizAnswered} — tum toh sab jaanti ho! 💗`;
      }
    }),
  );
});
