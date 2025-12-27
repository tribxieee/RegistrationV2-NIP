const client = getCurrentClient();
if (!client) return;

const form = document.getElementById("loginForm");

form.addEventListener("submit", e => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const found = users.find(
    u =>
      u.email === email &&
      u.password === password &&
      u.clientId === client.id
  );

  if (!found) {
    alert("Email atau password salah");
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify(found));
  window.location.href = `dashboard.html?client=${client.id}`;
});
