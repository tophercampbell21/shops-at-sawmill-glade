const subscribeForm = document.getElementById("subscribeForm");

const email = document.getElementById("form-email");

subscribeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText == "Success") {
      const mainForm = document.getElementById("mainForm");
      const formSuccess = document.getElementById("formSuccess");
      mainForm.classList.add("hidden");
      formSuccess.classList.remove("hidden");
      mainForm.reset();
    } else {
      alert("Something went wrong, please try again. ");
    }
  };

  xhr.send(JSON.stringify(formData));
});
