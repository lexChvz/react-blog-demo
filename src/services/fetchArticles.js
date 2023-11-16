export function fetchArticles(url, setState) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => setState(data.articles))
    .catch((e) => console.error(e));
}
