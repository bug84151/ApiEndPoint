const express = require("express");
const api = express();

api.use(express.json());
api.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || "8888";

const user = [
  {
    message: "Submission Recieved",
    name: "John Doe",
    email: "john@gmail.com",
  },
];

api.post("/api/submit", (req, res) => {
  if (!req.body.name) {
    res.send("name field is required");
  } else if (!req.body.email) {
    res.send("email field is required");
  } else {
    res.send(user);
  }
});

api.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
