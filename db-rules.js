/*
  DB rules
  collections: It has a array of collections
  Each collection must be declared inside rules
  each collection must have a key [Check db.js]

  Note: Do not add "index" collection in collections array
*/

const rules = {
  collections: ["posts", "users", "foods"],
  rules: {
    posts: {
      key: "id",
    },
    users: {
      key: "user_id",
    },
    foods: {
      key: "id",
    },
  },
};
export default rules;
