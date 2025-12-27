const client = getCurrentClient();
if (!client) return;

const currentUser = JSON.parse(localStorage.getItem("currentUser"));
if (!currentUser || currentUser.clientId !== client.id) {
  window.location.href = `register.html?client=${client.id}`;
}

document.getElementById("clientName").innerText = client.name;
document.getElementById("welcomeText").innerText =
  `Welcome, ${currentUser.fullname}`;

document.getElementById("debug").innerText =
  JSON.stringify(currentUser, null, 2);

document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  window.location.href = `register.html?client=${client.id}`;
});
