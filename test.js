import rules from "./db-rules.js";
import { verifyRule } from "./utils.js";
import core from "@actions/core";

try {
  if (!verifyRule(rules)) {
    core.setFailed("Invalid rules");
  } else {
    const time = new Date().toTimeString();
    core.setOutput("time", time);
  }
} catch (error) {
  core.setFailed(error.message);
}
