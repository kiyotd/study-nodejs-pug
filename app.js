const express = require("express");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  let articles = [
    {
      id: 1,
      title: "Article One",
      author: "Kiyotd",
      body: "This is article one"
    },
    {
      id: 2,
      title: "Article Two",
      author: "Kiyotd",
      body: "This is article two"
    },
    {
      id: 3,
      title: "Article Three",
      author: "Kiyotd",
      body: "This is article three"
    }
  ];
  res.render("index", {
    title: "Articles",
    articles: articles
  });
});

app.get("/articles/add", (req, res) => {
  res.render("add_article", {
    title: "Add Article"
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000...");
});
