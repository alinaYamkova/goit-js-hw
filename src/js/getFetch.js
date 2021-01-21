
// import { data } from 'autoprefixer';
// import axios from 'axios';

export default {
  baseUrl: 'https://pixabay.com/api/',
  API_KEY: '19858059-a00c77d69399edf61aa280af0',   
  // query: "moon",
  page: 1,
  perPage: 12,
  // query: '',

  get queryValue() {
    return this.query;
  },
  set queryValue(val) {
    return (this.query = val);
  },

  // async getFetch() {
  //   // this.queryValue = val;
  //   const URL = `${this.baseUrl}?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=${this.perPage}&key=${this.API_KEY}`;
  //   const response = await fetch(URL);
  //   const fetchResult = await response.json();
  //   const imgs = await fetchResult.hits;
  //   return imgs;
  // },

  getFetch(val) {
    return fetch (`${this.baseUrl}?image_type=photo&orientation=horizontal&q=${val}&page=${this.page}&per_page=${this.perPage}&key=${this.API_KEY}`)
    .then((response) => response.json())
    .then(({ hits }) => {
      // this.totalPages = Math.ceil(totalHits / this.perPage);
      return hits;
  });
},

  setPage() {
    return this.page += 1;
  },
  resetPage() {
    return this.page = 1;
  },
  // метод добавления страницы
  setPage() {
    this.page += 1;
    console.log("page: ", this.page);
    return this.page;
  },
  // метод сброса страниц
  resetPage() {
    this.page = 1;
    console.log("reset page", this.page);
    return this.page;
  },
};  





// getFetch() {
//   return fetch (`${this.baseUrl}?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=${this.perPage}&key=${this.API_KEY}`,
//   )
//   .then((response) => response.json())
//   .then(({ hits, totalHits }) => {
//     this.totalPages = Math.ceil(totalHits / this.perPage);
//     return hits;
//   });
// },