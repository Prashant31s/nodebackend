const API_URL = {
  CHUCK_NORRIS: "https://api.chucknorris.io/jokes/random",
  CHUCK_NORRIS_CATEGORY:
    "https://api.chucknorris.io/jokes/random?category={category}",
};
const CATEGORIES = [
  "animal",
  "career",
  "celebrity",
  "dev",
  "explicit",
  "fashion",
  "food",
  "history",
  "money",
  "movie",
  "music",
  "political",
  "religion",
  "science",
  "sport",
  "travel",
];

module.exports = { API_URL, CATEGORIES };
