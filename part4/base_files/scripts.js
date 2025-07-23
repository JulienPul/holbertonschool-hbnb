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

  // Price filter
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

  // Detail buttons
  const detailButtons = document.querySelectorAll(".details-button");
  detailButtons.forEach(button => {
    button.addEventListener("click", () => {
      const placeId = button.getAttribute("data-id");
      window.location.href = `place.html?id=${placeId}`;
    });
  });

  // Title injection
  const placeName = document.getElementById("place-name");
  const urlParams = new URLSearchParams(window.location.search);
  const placeId = urlParams.get("id");

  const placeData = {
    1: "Beautiful Beach House",
    2: "Cozy Cabin",
    3: "Modern Apartment"
  };

  if (placeName && placeId && placeData[placeId]) {
    placeName.innerHTML = `<h2 class="review-title">Reviewing: ${placeData[placeId]}</h2>`;
  }

  // Add review section based on login
  const reviewAction = document.getElementById("review-action");
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  if (reviewAction) {
    if (isLoggedIn) {
      reviewAction.innerHTML = `
        <section class="add-review">
          <h2>Add a Review</h2>
          <form id="review-form" class="form">
            <label for="review">Your Review:</label>
            <textarea id="review" name="review" required></textarea>

            <label for="rating">Rating:</label>
            <select id="rating" name="rating" required>
              <option value="">Select a rating</option>
              <option value="1">★☆☆☆☆</option>
              <option value="2">★★☆☆☆</option>
              <option value="3">★★★☆☆</option>
              <option value="4">★★★★☆</option>
              <option value="5">★★★★★</option>
            </select>

            <button type="submit" class="login-button">Submit</button>
          </form>
        </section>
      `;

      const form = document.getElementById("review-form");
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const text = document.getElementById("review").value;
        const rating = document.getElementById("rating").value;
        alert(`Review submitted:\nRating: ${rating} star(s)\nComment: ${text}`);
        form.reset();
      });

    } else {
      reviewAction.innerHTML = `
        <div style="text-align: center; margin-top: 1rem;">
          <a href="login.html" class="login-button">Login to Add Review</a>
        </div>
      `;
    }
  }
});

