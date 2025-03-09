const touchBox = document.querySelector(".touchBox");
const touchCountDisplay = document.getElementById("touchCount");

document.addEventListener("touchstart", (event) => {
  touchCountDisplay.textContent = `Touches: ${event.touches.length}`;
});

document.addEventListener("touchend", (event) => {
  touchCountDisplay.textContent = `Touches: ${event.touches.length}`;
});

touchBox.addEventListener("pointerdown", () => {
  console.log("Touch box clicked");
});

document.addEventListener("touchstart", (event) => {
  console.log("All touches:", event.touches.length);
  for (let i = 0; i < event.touches.length; i++) {
    console.log(
      `Touch ${i + 1}: X=${event.touches[i].clientX}, Y=${
        event.touches[i].clientY
      }`
    );
  }
});

document.addEventListener("touchmove", (event) => {
  console.log("Touches moving:", event.touches.length);
});

document.addEventListener("touchend", (event) => {
  console.log("Touch ended. Remaining touches:", event.touches.length);
});
