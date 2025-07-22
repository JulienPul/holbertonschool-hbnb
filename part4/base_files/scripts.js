/* 
  This is a SAMPLE FILE to get you started.
  Please, follow the project instructions to complete the tasks.
*/

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("header").innerHTML = `
    <nav>
      <a href="index.html" class="logo">
        <img src="images/logo.png" alt="MyBnB logo" />
      </a>
      <a href="login.html" class="login-button">Login</a>
    </nav>
  `;
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("footer").innerHTML = `
    <p>&copy; 2025 MyBnB. All rights reserved.</p>
  `;
});
