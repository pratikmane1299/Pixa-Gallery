const API_URL = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABY_API}&image_type=photo&safesearch=true`;

export function getImages(query, page) {
  let url = ''
  if (query === '') {
    url = `${API_URL}&page=${page}`;
  } else {
    url = `${API_URL}&q=${query}&page=${page}`;
  }

  return fetch(url)
    .then(res => res.json());
}
