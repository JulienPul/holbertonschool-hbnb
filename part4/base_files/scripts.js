document.addEventListener("DOMContentLoaded", () => {
  // Inject header
  const header = document.getElementById("header");
  if (header) {
    header.innerHTML = `
      <nav class="navbar">
        <div class="nav-left">
          <a href="index.html" class="logo">
            <img src="images/logo.png" alt="MyBnB logo" />
          </a>
        </div>
        <div class="nav-right">
          <a href="login.html" class="login-button">Login</a>
        </div>
      </nav>
    `;
  }

  // Inject footer
  const footer = document.getElementById("footer");
  if (footer) {
    footer.innerHTML = `
      <p>&copy; 2025 MyBnB. All rights reserved.</p>
    `;
  }

  // Handle details buttons redirection
  const detailButtons = document.querySelectorAll(".details-button");
  detailButtons.forEach(button => {
    button.addEventListener("click", () => {
      window.location.href = "place.html";
    });
  });
});
