const verifyRule = (jsonData) => {
  if (!("collections" in jsonData && "rules" in jsonData)) {
    return false;
  }
  if (!Array.isArray(jsonData["collections"])) {
    return false;
  }
  if (jsonData["collections"].includes("index")) {
    return false;
  }
  for (let collection of jsonData["collections"]) {
    if (!(collection in jsonData["rules"])) {
      return false;
    }
    if (!("key" in jsonData["rules"][collection])) {
      return false;
    }
  }
  return true;
};

export { verifyRule };
