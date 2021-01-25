import refs from './refs';

export default {
  baseUrl: 'https://pixabay.com/api/',
  API_KEY: '19858059-a00c77d69399edf61aa280af0',
  query: '',
  page: 1,
  perPage: 12,
  
  get queryValue() {
    return this.query;
  },
  set queryValue(val) {
    return (this.query = val);
  }, 
  
  getFetch(val) {
    console.log('getFetch(val)', val);
    // this.queryValue = val; 
    if (val && val.length > 0) {
      this.queryValue = val
    } 
    const params = `?image_type=photo&orientation=horizontal&q=${this.queryValue}&page=${this.page}&per_page=${this.perPage}&key=${this.API_KEY}`;
    const url = `${this.baseUrl}${params}`;
    return fetch(url)
    .then((res) => res.json())
    .then((response) => response)
  },

  // метод добавления стницы
  setPage() {
    return this.page += 1;
  },
  // метод сброса страниц
  resetPage() {
    return this.page = 1;
  },
  setQuery(query) {
    this.query = query;
  }
};  



  // async getFetch() {
    //   // this.queryValue = val;
    //   const URL = `${this.baseUrl}?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=${this.perPage}&key=${this.API_KEY}`;
    //   const response = await fetch(URL);
    //   const fetchResult = await response.json();
    //   const imgs = await fetchResult.hits;
    //   return imgs;
    // },