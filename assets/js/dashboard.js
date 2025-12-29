// dashboard.js

// ambil client dari URL
const client = getCurrentClient();
if (!client) {
  // kalau URL client invalid, lempar ke login GENERIC
  window.location.href = "login.html?type=client";
  return;
}

// ambil session client login
const currentClient = JSON.parse(localStorage.getItem("currentClient"));

// belum login
if (!currentClient) {
  window.location.href = `login.html?type=client&client=${client.id}`;
  return;
}

// proteksi cross-client
if (currentClient.id !== client.id) {
  localStorage.removeItem("currentClient");
  window.location.href = `login.html?type=client&client=${client.id}`;
  return;
}

// ====== RENDER DASHBOARD ======
document.getElementById("clientName").innerText = client.name;
document.getElementById("welcomeText").innerText =
  `Welcome, ${client.name}`;

// logout
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("currentClient");
  window.location.href = `login.html?type=client&client=${client.id}`;
});
