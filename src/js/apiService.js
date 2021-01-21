import refs from "./refs";
import notify from './notification';
import fetchObject from './getFetch';
import cardsTpl from '../template/card_image.hbs';

console.dir(refs.gallery);

refs.form.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();
  const inputValue = event.target.query.value;
  // fetchObject.queryValue = inputValue;
  // console.log(inputValue);
  refs.gallery.innerHTML = "";
  fetchObject.getFetch(inputValue).then(toMakeMarkup).catch(notify.errorMessage); 
};

function toMakeMarkup (result) {
  const markup = cardsTpl(result);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
  setTimeout(() => {
    window.scrollTo({top: refs.gallery.scrollHeight, behavior: "smooth"});
  }, 0);
  return refs.gallery;
};

