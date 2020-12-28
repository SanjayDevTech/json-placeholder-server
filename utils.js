const verifyRule = (jsonData) => {
  if (!("collections" in jsonData && "rules" in jsonData)) {
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
