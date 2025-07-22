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
    footer.innerHTML = `<p>&copy; 2025 MyBnB. All rights reserved.</p>`;
  }

  // Remplir le filtre de prix
  const prices = [50, 100, 150, 200, 250, 300];
  const select = document.getElementById("price-filter");
  if (select) {
    const defaultOption = document.createElement("option");
    defaultOption.textContent = "Select a max price";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    select.appendChild(defaultOption);

    prices.forEach(price => {
      const option = document.createElement("option");
      option.value = price;
      option.textContent = `$${price}`;
      select.appendChild(option);
    });

    // Fonction de filtrage
    select.addEventListener("change", (e) => {
      const maxPrice = parseInt(e.target.value);
      const placeCards = document.querySelectorAll(".place-card");

      placeCards.forEach(card => {
        const priceText = card.querySelector(".price").textContent;
        const price = parseInt(priceText.match(/\$(\d+)/)[1]);
        card.style.display = price <= maxPrice ? "block" : "none";
      });
    });
  }

  // Boutons détails
  const detailButtons = document.querySelectorAll(".details-button");
  detailButtons.forEach(button => {
    button.addEventListener("click", () => {
      window.location.href = "place.html"; // Peut être remplacé selon l'ID
    });
  });

  // Gestion de l’envoi du formulaire d’avis
  const form = document.getElementById("review-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const text = document.getElementById("review").value;
      const rating = document.getElementById("rating").value;
      alert(`Review submitted:\nRating: ${rating} star(s)\nComment: ${text}`);
      form.reset(); // Clear form
    });
  }
});
