/*
  DB rules
  collections: It has a array of collections
  Each collection must be declared inside rules
  each collection must have a key [Check db.js]
*/

const rules = {
  collections: ["posts", "users"],
  rules: {
    posts: {
      key: "id",
    },
    users: {
      key: "user_id",
    },
  },
};
export default rules;
