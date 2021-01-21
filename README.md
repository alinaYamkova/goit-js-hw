# goit-js-hw-13

Pixabay API поддерживает пагинацию, пусть в ответе приходит по 12 объектов, установлено в параметре per_page. По умолчанию параметр page равен 1. При каждом последующем запросе page увеличивается на 1, а при поиске по новому ключевому слову необходимо сбрасывать его значение в 1.

Каждое изобаржение описывается объектом.

{
  "comments": 78,
  "downloads": 63296,
  "favorites": 558,
  "id": 1508613,
  "imageHeight": 2135,
  "imageSize": 1630104,
  "imageWidth": 2894,
  "largeImageURL": "https://pixabay.com/get/57e5d54b4c53af14f6da8c7dda793376173cd8e7524c704c702873dc9f44c551_1280.jpg",
  "likes": 575,
  "pageURL": "https://pixabay.com/photos/cat-animal-cat-portrait-cat-s-eyes-1508613/",
  "previewHeight": 110,
  "previewURL": "https://cdn.pixabay.com/photo/2016/07/10/21/47/cat-1508613_150.jpg",
  "previewWidth": 150,
  "tags": "cat, animal, cat portrait",
  "type": "photo",
  "user": "cocoparisienne",
  "userImageURL": "https://cdn.pixabay.com/user/2018/11/26/11-06-29-714_250x250.jpg",
  "user_id": 127419,
  "views": 127450,
  "webformatHeight": 472,
  "webformatURL": "https://pixabay.com/get/57e5d54b4c53af14f6da8c7dda793376173cd8e7524c704c702873dc9f44c551_640.jpg",
  "webformatWidth": 640
}

/*//////////////////////////////////////////////////////////////////////////
import axios from 'axios'

export default {
  name: 'hello',
  data: () => ({
    hits: [],
    errors: []
  }),

  created () {
    axios.get('https://pixabay.com/api/?key=2980920-46f1aa264b036ffc6e45ebad0&orientation=vertical&q=robot&min_height=500https://pixabay.com/api/?key=2980920-46f1aa264b036ffc6e45ebad0&orientation=vertical&q=robot&min_height=500')
    .then(responce => {
      this.hits = responce.data
      console.log(responce)
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
/////////////////////////////////////////////////////////////////

import { searchImages } from 'pixabay-api';

searchImages(api_key, 'kitty').then((r) => console.log(r));
searchImages()

/////////////////////////////////////////////////////////////////