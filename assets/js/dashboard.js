// ambil client dari URL
const client = getCurrentClient();
if (!client) {
  window.location.href = "404.html";
}

// ambil user login
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser) {
  window.location.href = `login.html?type=user&client=${client.id}`;
}

// proteksi cross-client
if (currentUser.clientId !== client.id) {
  alert("Unauthorized access");
  localStorage.removeItem("currentUser");
  window.location.href = `login.html?type=user&client=${client.id}`;
}

// render dashboard
document.getElementById("clientName").innerText = client.name;
document.getElementById("welcomeText").innerText =
  `Welcome, ${currentUser.fullname}`;

document.getElementById("debug").innerText =
  JSON.stringify(currentUser, null, 2);

// logout
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  window.location.href = `login.html?type=user&client=${client.id}`;
});
