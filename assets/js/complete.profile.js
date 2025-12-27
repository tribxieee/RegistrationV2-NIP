// STEP 2 FORM HANDLER
const step2Form = document.getElementById("step2Form");

if (step2Form) {
  step2Form.addEventListener("submit", function (e) {
    e.preventDefault();

    const step1Data = JSON.parse(localStorage.getItem("registerData"));
    if (!step1Data) {
      alert("Data step 1 hilang. Ulangi pendaftaran.");
      window.location.href = "regist-individu.html";
      return;
    }

    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const province = document.getElementById("province").value;

    if (!phone || !address || !province) {
      alert("Semua field wajib diisi");
      return;
    }

    const finalData = { ...step1Data, phone, address, province };
    console.log("FINAL REGISTER DATA:", finalData);

    localStorage.removeItem("registerData");
    window.location.href = "success.html";
  });
}