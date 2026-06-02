// Tooltips para iconos de tecnología (tema editorial claro)
document.addEventListener("DOMContentLoaded", function () {
  const techIcons = document.querySelectorAll(".tech-icon[data-tooltip]");

  techIcons.forEach((icon) => {
    const label = icon.getAttribute("data-tooltip");
    if (!label) return;

    const tooltip = document.createElement("div");
    tooltip.className = "custom-tooltip";
    tooltip.textContent = label;
    document.body.appendChild(tooltip);

    icon.addEventListener("mouseenter", function () {
      const rect = icon.getBoundingClientRect();
      tooltip.style.left = rect.left + rect.width / 2 + "px";
      tooltip.style.top = rect.top - 8 + "px";
      tooltip.style.transform = "translate(-50%, -100%)";
      tooltip.style.opacity = "1";
      tooltip.style.visibility = "visible";
    });

    icon.addEventListener("mouseleave", function () {
      tooltip.style.opacity = "0";
      tooltip.style.visibility = "hidden";
    });
  });
});
