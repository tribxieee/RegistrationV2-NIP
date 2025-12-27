// STEP 1 FORM HANDLER
const client = getCurrentClient();

if (!client) {
  console.warn("Client tidak valid");
} else {
  const step1Form = document.getElementById("step1Form");

  if (step1Form) {
    const savedData = JSON.parse(localStorage.getItem("registerData"));

    if (savedData) {
      fullname.value = savedData.fullname || "";
      email.value = savedData.email || "";
      password.value = savedData.password || "";
      checkbox.checked = true;
    }

    step1Form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!fullname.value || !email.value || !password.value) {
        alert("Semua field wajib diisi");
        return;
      }

      if (!checkbox.checked) {
        alert("Kamu harus setuju terms & conditions");
        return;
      }

      localStorage.setItem(
        "registerData",
        JSON.stringify({
          fullname: fullname.value,
          email: email.value,
          password: password.value,
          clientId: client.id
        })
      );

      window.location.href =
        `complete-profile.html?client=${client.id}`;
    });
  }
}

// PASSWORD TOGGLE VISIBILITY
const passwordInput = document.getElementById("password");
const toggleBtn = document.getElementById("togglePassword");
const eyeIcon = document.getElementById("eyeIcon");

if (passwordInput && toggleBtn && eyeIcon) {
  toggleBtn.addEventListener("click", () => {
    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";
    eyeIcon.className = isPassword ? "bi bi-eye-slash" : "bi bi-eye";
  });
}
