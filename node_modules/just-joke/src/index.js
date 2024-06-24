async function getJoke(category) {
  if (category) {
    const targetUrl = category.replace("{category}", category);
    const res = await fetch(targetUrl);
    const { value } = await res.json();
    return value;
  }

  const res = await fetch(_.API_URL.CHUCK_NORRIS);
  const { value } = await res.json();
  return value;
}

module.exports = getJoke;
