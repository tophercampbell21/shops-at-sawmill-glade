const form = document.getElementById("mainForm");

const formInputs = [
  { id: "form-fname", key: "firstName" },
  { id: "form-lname", key: "lastName" },
  { id: "feedback-specific", key: "formMessage" },
  { id: "fast-casual", key: "fastCasual" },
  { id: "bakery", key: "bakery" },
  { id: "coffee", key: "coffee" },
  { id: "fast-food", key: "fastFood" },
  { id: "delivery", key: "delivery" },
  { id: "healthy", key: "healthy" },
  { id: "ethnic", key: "ethnic" },
  { id: "pizza", key: "pizza" },
  { id: "smoothie", key: "smoothie" },
  { id: "dine-in", key: "dineIn" },
  { id: "general-practice", key: "genPractice" },
  { id: "dental", key: "dental" },
  { id: "family-medicine", key: "familyMed" },
  { id: "testing", key: "testing" },
  { id: "urgent-care", key: "urgentCare" },
  { id: "pediatrics", key: "pediatrics" },
  { id: "orthopedics", key: "orthopedics" },
  { id: "dermatology", key: "dermatology" },
  { id: "physical-therapy", key: "physicalTher" },
  { id: "tutoring", key: "tutoring" },
  { id: "driving", key: "driversEd" },
  { id: "general-store", key: "genStore" },
  { id: "pharmacy", key: "pharmacy" },
  { id: "clothes-shoes", key: "clothesAndShoes" },
  { id: "banking", key: "bank" },
  { id: "salon", key: "salon" },
  { id: "home-goods", key: "homeGoods" },
];

const formData = {};

for (let i = 0; i < formInputs.length; i++) {
  const input = document.getElementById(formInputs[i].id);
  formData[formInputs[i].key] = "";

  if (input.type === "checkbox") {
    input.addEventListener("change", (e) => {
      formData[formInputs[i].key] = e.target.checked ? "&#9989;" : "";
    });
  } else {
    input.addEventListener("input", (e) => {
      formData[formInputs[i].key] = e.target.value;
    });
  }
}

form.addEventListener("submit", (e) => {
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
