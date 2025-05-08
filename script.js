document.addEventListener("DOMContentLoaded", () => {
  const carImages = document.querySelectorAll(".car-info");
  carImages.forEach(img => {
    img.addEventListener("click", () => {
      let infoBox = document.getElementById("infoBox");
      infoBox.textContent = img.getAttribute("data-info");
      infoBox.style.display = "block";
    });
  });

  const themeToggle = document.getElementById("themeToggle");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
  });

  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const message = form.elements["message"].value.trim();
    const paymentType = form.elements["paymentType"].value;
    const paymentMethod = form.elements["paymentMethod"].value;

    if (name && email && message && paymentType && paymentMethod) {
      formMessage.textContent = `Thank you, ${name}! Your reservation has been submitted.`;
      formMessage.style.display = "block";
      form.reset();
    } else {
      formMessage.textContent = "Please fill in all fields.";
      formMessage.style.display = "block";
    }
  });
});