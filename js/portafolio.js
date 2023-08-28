function show() {
    var box = document.getElementById("box");
    box.style.display = "block";
    box.addEventListener("click", hidden);
  }
  
  function hidden() {
    var box = document.getElementById("box");
    box.style.display = "none";
    box.removeEventListener("click", hidden);
  }
  const scrollButton = document.getElementById('scrollButton');
  const section1 = document.querySelector('.section-1')
  const section2 = document.querySelector('.hidden-section-2');

  scrollButton.addEventListener('click', () => {
  section1.style.transform = 'translateY(-100%)'; // Cambia la propiedad transform
  if (section2.classList.contains("hidden-section-2")) {
    section2.classList.remove("hidden-section-2");
    section2.classList.add("section-2");
  }
});

// const scrollButton2 = document.getElementById('scrollButton2');
// const section22 = document.querySelector('.section-2')
// const section11 = document.querySelector('.hidden-section-1');


//   scrollButton2.addEventListener('click', () => {
//     section22.style.transform = 'translateY(0)';
//     if (section2.classList.contains(".section-2")){
//       section11.classList.remove(".section-2");
//       section11.classList.add(".hidden-section-1");
//     }
// });

const scrollLeftButton = document.querySelector(".scroll-left");
const scrollRightButton = document.querySelector(".scroll-right");
const projets = document.querySelector(".projets");

scrollLeftButton.addEventListener("click", () => {
  projets.scrollBy({
    left: -200,
    behavior: "smooth",
  });
});

scrollRightButton.addEventListener("click", () => {
  projets.scrollBy({
    left: 200,
    behavior: "smooth",
  });
});

