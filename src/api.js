const API_KEY = '55914722-15bc7f8b19294807aa7335c95'

export const fetchImg = (query,  page=1) => {
    return fetch(`https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(res => res.json())
}