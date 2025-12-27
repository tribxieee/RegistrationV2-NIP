// STEP 2 FORM HANDLER
const client = getCurrentClient();

if (!client) {
  console.warn("Client tidak valid");
} else {
  const backLink = document.getElementById("backLink");
  if (backLink) {
    backLink.href = `register.html?client=${client.id}`;
  }

  const step2Form = document.getElementById("step2Form");

  if (step2Form) {
    step2Form.addEventListener("submit", function (e) {
      e.preventDefault();

      const step1Data = JSON.parse(localStorage.getItem("registerData"));
      if (!step1Data) {
        alert("Data step 1 hilang. Ulangi pendaftaran.");
        window.location.href = `register.html?client=${client.id}`;
        return;
      }

      const phone = document.getElementById("phone").value.trim();
      const address = document.getElementById("address").value.trim();
      const province = document.getElementById("province").value;

      if (!phone || !address || !province) {
        alert("Semua field wajib diisi");
        return;
      }

      const finalData = {
        ...step1Data,
        phone,
        address,
        province,
        clientId: client.id
      };

      // simpan user
      const users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(finalData);
      localStorage.setItem("users", JSON.stringify(users));

      // auto login
      localStorage.setItem("currentUser", JSON.stringify(finalData));

      localStorage.removeItem("registerData");

      window.location.href = `dashboard.html?client=${client.id}`;
    });
  }
}
