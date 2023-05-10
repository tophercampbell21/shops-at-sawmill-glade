const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const { log } = require("console");
const app = express();

const PORT = process.env.PORT || 5000;

// *** MIDDLEWARE
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.post("/", (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "info@impactrealestateco.com",
      pass: "bljyyvaodhmxefck",
    },
  });

  const mailOptions = {
    from: "info@impactrealestateco.com",
    to: "info@impactrealestateco.com",
    subject: `New Shops at Sawmill Glade Feedback Submission`,
    html: `<html>
      <body>
        <table>
          <tr><th>CATEGORY</th><th>VALUE</th></tr>
          <tr><td>First Name:</td><td>${req.body.firstName}</td></tr>
          <tr><td>Last Name:</td><td>${req.body.lastName}</td></tr>
          <tr><td>Message:</td><td>${req.body.formMessage}</td></tr>
        </table>
        <h3>The Following Items Were Checked in the Survey</h3>
        ${`<p>Fast Food: ` + req.body.fastCasual + `</p>`}
        ${`<p>Bakery: ` + req.body.bakery + `</p>`}
        ${`<p>Coffee: ` + req.body.coffee + `</p>`}
        ${`<p>Fast Food: ` + req.body.fastFood + `</p>`}
        ${`<p>Delivery: ` + req.body.delivery + `</p>`}
        ${`<p>Healthy: ` + req.body.healthy + `</p>`}
        ${`<p>Ethnic: ` + req.body.ethnic + `</p>`}
        ${`<p>Pizza: ` + req.body.pizza + `</p>`}
        ${`<p>Smoothie: ` + req.body.smoothie + `</p>`}
        ${`<p>Dine In: ` + req.body.dineIn + `</p>`}
        ${`<p>General Practice: ` + req.body.genPractice + `</p>`}
        ${`<p>Dental: ` + req.body.dental + `</p>`}
        ${`<p>Family Medicine: ` + req.body.familyMed + `</p>`}
        ${`<p>Testing: ` + req.body.testing + `</p>`}
        ${`<p>Urgent Care: ` + req.body.urgentCare + `</p>`}
        ${`<p>Pediatrics: ` + req.body.pediatrics + `</p>`}
        ${`<p>Orthopedics: ` + req.body.orthopedics + `</p>`}
        ${`<p>Dermatology: ` + req.body.dermatology + `</p>`}
        ${`<p>Physical Therapy: ` + req.body.physicalTher + `</p>`}
        ${`<p>Tutoring: ` + req.body.tuturing + `</p>`}
        ${`<p>Drivers Ed: ` + req.body.driversEd + `</p>`}
        ${`<p>General Store: ` + req.body.genStore + `</p>`}
        ${`<p>Pharmacy: ` + req.body.pharmacy + `</p>`}
        ${`<p>Clothes & Shoes: ` + req.body.clothesAndShoes + `</p>`}
        ${`<p>Banking: ` + req.body.bank + `</p>`}
        ${`<p>Hair and Nails: ` + req.body.salon + `</p>`}
        ${`<p>Home Goods: ` + req.body.homeGoods + `</p>`}
      </body>
    </html>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Email Sent");
      res.send("Success");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
