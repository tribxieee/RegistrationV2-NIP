(function () {
  const form = document.getElementById("loginForm");
  if (!form) return; // guard: bukan halaman login

  const params = new URLSearchParams(window.location.search);
  const type = params.get("type");

  if (type !== "client") {
    window.location.href = "404.html";
    return;
  }

  const client = getCurrentClient();
  if (!client) {
    window.location.href = "404.html";
    return;
  }

  form.addEventListener("submit", e => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const admin = CLIENT_ADMINS[client.id];

    if (!admin || admin.email !== email || admin.password !== password) {
      alert("Email atau password salah");
      return;
    }

    localStorage.setItem(
      "currentClient",
      JSON.stringify({ id: client.id })
    );

    window.location.href = `dashboard.html?client=${client.id}`;
  });
})();
