document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  function closeMenu() {
    menuToggle.checked = false;
    document.body.style.overflow = "";
  }

  menuToggle.addEventListener("change", function () {
    if (this.checked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      closeMenu();
    });
  });

  document.addEventListener("click", function (event) {
    const isClickInsideMenu = navMenu.contains(event.target);
    const isClickOnToggle = event.target.closest(".menu-toggle");

    if (!isClickInsideMenu && !isClickOnToggle && menuToggle.checked) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menuToggle.checked) {
      closeMenu();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768 && menuToggle.checked) {
      closeMenu();
    }
  });

  //form input and validation
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(this);
      const name = formData.get("name").trim();
      const email = formData.get("email").trim();
      const message = formData.get("message").trim();

      let isValid = true;
      let errors = [];

      if (!name) {
        errors.push("Name is required");
        isValid = false;
      }

      if (!email) {
        errors.push("Email is required");
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push("Please enter a valid email address");
        isValid = false;
      }

      if (!message) {
        errors.push("Message is required");
        isValid = false;
      }

      if (isValid) {
        // Here you would typically send the data to your server
        // For now, we'll just show a success message
        alert("Thank you for your message! We'll get back to you soon.");
        this.reset();
      } else {
        alert("Please fix the following errors:\n" + errors.join("\n"));
      }
    });
  }
});
