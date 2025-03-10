document.addEventListener("DOMContentLoaded", function () {
  const touchBox = document.querySelector(".touchBox");

  // Function to generate a random color
  function getRandomColor() {
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
  }

  // Track touches
  touchBox.addEventListener("touchstart", (event) => {
    event.preventDefault();
    Array.from(event.touches).forEach((touch) => {
      let touchElement = document.createElement("div");
      touchElement.classList.add("touchCircle");
      touchElement.style.backgroundColor = getRandomColor();
      touchElement.style.left = `${touch.clientX - touchBox.offsetLeft}px`;
      touchElement.style.top = `${touch.clientY - touchBox.offsetTop}px`;
      touchElement.dataset.identifier = touch.identifier;
      touchBox.appendChild(touchElement);
    });
  });

  // Move touches
  touchBox.addEventListener("touchmove", (event) => {
    event.preventDefault();
    Array.from(event.touches).forEach((touch) => {
      let touchElement = document.querySelector(
        `[data-identifier='${touch.identifier}']`
      );
      if (touchElement) {
        touchElement.style.left = `${touch.clientX - touchBox.offsetLeft}px`;
        touchElement.style.top = `${touch.clientY - touchBox.offsetTop}px`;
      }
    });
  });

  // Remove touches
  touchBox.addEventListener("touchend", (event) => {
    event.preventDefault();
    Array.from(event.changedTouches).forEach((touch) => {
      let touchElement = document.querySelector(
        `[data-identifier='${touch.identifier}']`
      );
      if (touchElement) {
        touchElement.remove();
      }
    });
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const touchBox = document.querySelector(".touchBox");

//   function getRandomColor() {
//       return `hsl(${Math.random() * 360}, 100%, 50%)`;
//   }

//   function highlightRandomTouch() {
//       const touchElements = document.querySelectorAll(".touchCircle");
//       if (touchElements.length > 0) {
//           touchElements.forEach(el => el.classList.remove("highlight"));
//           const randomTouch = touchElements[Math.floor(Math.random() * touchElements.length)];
//           randomTouch.classList.add("highlight");
//       }
//   }

//   touchBox.addEventListener("touchstart", (event) => {
//       event.preventDefault();
//       Array.from(event.touches).forEach((touch) => {
//           let touchElement = document.createElement("div");
//           touchElement.classList.add("touchCircle");
//           touchElement.style.backgroundColor = getRandomColor();
//           touchElement.style.left = `${touch.clientX - touchBox.offsetLeft}px`;
//           touchElement.style.top = `${touch.clientY - touchBox.offsetTop}px`;
//           touchElement.dataset.identifier = touch.identifier;
//           touchBox.appendChild(touchElement);
//       });
//       highlightRandomTouch();
//   });

//   touchBox.addEventListener("touchmove", (event) => {
//       event.preventDefault();
//       Array.from(event.touches).forEach((touch) => {
//           let touchElement = document.querySelector(
//               `[data-identifier='${touch.identifier}']`
//           );
//           if (touchElement) {
//               touchElement.style.left = `${touch.clientX - touchBox.offsetLeft}px`;
//               touchElement.style.top = `${touch.clientY - touchBox.offsetTop}px`;
//           }
//       });
//   });

//   touchBox.addEventListener("touchend", (event) => {
//       event.preventDefault();
//       Array.from(event.changedTouches).forEach((touch) => {
//           let touchElement = document.querySelector(
//               `[data-identifier='${touch.identifier}']`
//           );
//           if (touchElement) {
//               touchElement.remove();
//           }
//       });
//       highlightRandomTouch();
//   });

//   setInterval(highlightRandomTouch, 2000);
// });
