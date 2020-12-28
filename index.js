import express from "express";
import rules from "./db-rules.js";
import { verifyRule } from "./utils.js";
import { db } from "./db.js";
import config from "./config.js";

// Verify the rule
if (!verifyRule(rules)) {
  throw new Error("Json parsing error on db-rules.js");
}

const app = express();
const port = process.env.PORT || config.port;

app.get("/", (req, res) => {
  if (config.showStatus) {
    res.json({ status: "OK", code: 200, data: db });
  } else {
    res.json(db);
  }
});

for (let collection of rules["collections"]) {
  app.get(`/${collection}`, (req, res) => {
    const data = db[collection];
    if (config.showStatus) {
      res.json({ status: "OK", code: 200, data: data });
    } else {
      res.json(data);
    }
  });
  app.get(`/${collection}/:key`, (req, res) => {
    const key = req.params.key;
    const dataKey = rules["rules"][collection]["key"];
    const data = db[collection].find((item) => item[dataKey] === key);
    if (data === undefined) {
      res.status(404);
      if (config.showStatus) {
        res.json({ status: "NOT_FOUND", code: 404, data: null });
      } else {
        res.json({});
      }
    } else {
      if (config.showStatus) {
        res.json({ status: "OK", code: 200, data: data });
      } else {
        res.json(data);
      }
    }
  });
}

app.listen(port, () => {
  console.log(`Server started at port => ${port}`);
});
