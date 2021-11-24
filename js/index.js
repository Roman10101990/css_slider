const panel_1 = document.querySelector(".panel_1");
const panel_2 = document.querySelector(".panel_2");
const panel_3 = document.querySelector(".panel_3");
const panel_4 = document.querySelector(".panel_4");
const panel_5 = document.querySelector(".panel_5");
const panel_6 = document.querySelector(".panel_6");

const panels = [panel_1, panel_2, panel_3, panel_4, panel_5, panel_6];

const removeActive = () => {
  panels.forEach(panel => {
    panel.classList.remove("active");
  });
};

panels.forEach(panel => {
  panel.addEventListener("click", () => {
    removeActive();
    panel.classList.add("active");
  });
});
