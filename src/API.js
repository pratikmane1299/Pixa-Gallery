const API_URL = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABY_API}&image_type=photo&safesearch=true`;

export function getImages(query) {
  let url = ''
  if (query === '') {
    url = API_URL;
  } else {
    url = `${API_URL}&q=${query}`
  }

  return fetch(url)
    .then(res => res.json());
}
