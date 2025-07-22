document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  if (header) {
    header.innerHTML = `
      <nav>
        <a href="index.html" class="logo">
          <img src="images/logo.png" alt="MyBnB logo" />
        </a>
        <a href="login.html" class="login-button">Login</a>
      </nav>
    `;
  }

  const footer = document.getElementById("footer");
  if (footer) {
    footer.innerHTML = `
      <p>&copy; 2025 MyBnB. All rights reserved.</p>
    `;
  }

  const detailButtons = document.querySelectorAll(".details-button");
  detailButtons.forEach(button => {
    button.addEventListener("click", () => {
       window.location.href = "place.html";
    });
  });
});
