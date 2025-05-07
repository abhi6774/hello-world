import express from "express";

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Deployment successfull",
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server is running...");
});
