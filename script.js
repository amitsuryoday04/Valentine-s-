const const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");
const music = document.getElementById("bgMusic");
const heading = document.querySelector("h1");

const messages = [
    "🥺 Please ek baar aur socho...",
    "😢 Dil mat todo...",
    "💖 Mujhe tum bahut pasand ho...",
    "🌹 Are you really sure?",
    "🥹 Please Yes bol do...",
    "❤️ No option available nahi hai 😅"
];

let count = 0;

// YES BUTTON
yesBtn.addEventListener("click", () => {

    music.play().catch(() => {});

    heading.innerHTML = "❤️ Thank You My Love ❤️";

    result.innerHTML = `
    <h2>I Love You Forever ❤️</h2>
    <p>You Made My Day 🥰</p>
    `;

    startHearts();

    alert("💕 Yay! Thank You ❤️");
});

// NO BUTTON
function moveButton() {

    let x = Math.random() * (window.innerWidth - 120);
    let y = Math.random() * (window.innerHeight - 80);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    if (count < messages.length) {
        heading.innerHTML = messages[count];
        count++;
    } else {
        heading.innerHTML = "❤️ Bas YES hi bacha hai ❤️";
        noBtn.style.display = "none";
    }
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

// HEART ANIMATION
function startHearts() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = "-20px";
        heart.style.fontSize = (20 + Math.random() * 20) + "px";
        heart.style.pointerEvents = "none";
        heart.style.animation = "fall 5s linear";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);

    }, 250);
}

// Animation CSS
const style = document.createElement("style");

style.innerHTML = `
@keyframes fall{
0%{
transform:translateY(-20px) rotate(0deg);
opacity:1;
}
100%{
transform:translateY(110vh) rotate(360deg);
opacity:0;
}
}
`;

document.head.appendChild(style);
