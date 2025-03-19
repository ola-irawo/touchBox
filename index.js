document.addEventListener("DOMContentLoaded", function () {
  const touchBox = document.querySelector(".touchBox");
  const sliderContainer = document.querySelector(".sliderContainer");
  const btn = document.querySelector(".btn");

  const slideContents = ["1", "2", "3", "4", "5"];
  let currentSlide = 0;

  // slideContents.forEach((content) => {
  //   const slide = document.createElement("div");
  //   slide.classList.add("slide");
  //   slide.textContent = content;
  //   sliderContainer.appendChild(slide);
  // });

  btn.addEventListener("click", () => {
    if (currentSlide < slideContents.length) {
      sliderContainer.removeChild(sliderContainer.firstChild);
      const slide = document.createElement("h1");
      slide.classList.add("slide");
      slide.textContent = slideContents[currentSlide];
      sliderContainer.appendChild(slide);
      currentSlide++;
    }
    if (currentSlide >= slideContents.length) {
      currentSlide = 0;
    }
  });

  // Function to generate a random color
  function getRandomColor() {
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
  }

  const pickTouchElement = () => {
    // const touch = document.querySelectorAll(".touchCircle");
    // const randomTouch = touch[Math.floor(Math.random() * touch.length)];
    // console.log({ randomTouch });
    // if (randomTouch) {
    //   setTimeout(() => {
    //     randomTouch.classList.add("picked");
    //   }, 3000);
    // }

    const touchElements = document.querySelectorAll(".touchCircle");
    if (touchElements.length > 0) {
      touchElements.forEach((el) => el.classList.remove("highlight"));
      const randomTouch =
        touchElements[Math.floor(Math.random() * touchElements.length)];
      randomTouch.classList.add("picked");
    }
  };

  // Track touches
  // touchBox.addEventListener("touchstart", (e) => {
  //   e.preventDefault();
  //   console.log(e);
  //   Array.from(e.touches).forEach((touch) => {
  //     let touchElement = document.createElement("div");
  //     touchElement.classList.add("touchCircle");
  //     touchElement.style.backgroundColor = getRandomColor();
  //     touchElement.style.left = `${touch.clientX - touchBox.offsetLeft}px`;
  //     touchElement.style.top = `${touch.clientY - touchBox.offsetTop}px`;
  //     touchElement.dataset.identifier = touch.identifier;
  //     touchBox.appendChild(touchElement);
  //   });
  // });

  // Move touches

  touchBox.addEventListener("touchstart", (e) => {
    e.preventDefault();
    Array.from(e.touches).forEach((touch) => {
      const touchElement = document.createElement("div");
      const highlight = document.createElement("div");
      touchElement.classList.add("touchCircle");
      highlight.classList.add("highlight");
      touchElement.style.backgroundColor = getRandomColor();
      highlight.style.left = `${touch.clientX - touchBox.offsetLeft}px`;
      highlight.style.top = `${touch.clientY - touchBox.offsetTop}px`;
      touchElement.style.left = `${touch.clientX - touchBox.offsetLeft}px`;
      touchElement.style.top = `${touch.clientY - touchBox.offsetTop}px`;
      touchElement.dataset.identifier = touch.identifier;
      touchBox.appendChild(touchElement);
      touchBox.appendChild(highlight);
    });
    pickTouchElement();
  });

  touchBox.addEventListener("touchmove", (e) => {
    e.preventDefault();
    Array.from(e.touches).forEach((touch) => {
      const touchElement = document.querySelector(
        `[data-identifier='${touch.identifier}']`
      );
      const highlight = document.querySelector(".highlight");

      if (touchElement) {
        touchElement.style.left = `${touch.clientX - touchBox.offsetLeft}px`;
        touchElement.style.top = `${touch.clientY - touchBox.offsetTop}px`;
        highlight.style.left = `${touch.clientX - touchBox.offsetLeft}px`;
        highlight.style.top = `${touch.clientY - touchBox.offsetTop}px`;
      }
    });
  });

  // Remove touches
  touchBox.addEventListener("touchend", (e) => {
    e.preventDefault();
    Array.from(e.changedTouches).forEach((touch) => {
      let touchElement = document.querySelector(
        `[data-identifier='${touch.identifier}']`
      );
      const highlight = document.querySelector(".highlight");
      const picked = document.querySelector(".picked");
      if (touchElement) {
        touchElement.remove();
        highlight.remove();
        picked.remove();
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
