import refs from "./refs";
import notify from './notification';
import fetchObject from './apiService';
import cardsTpl from '../template/card_image.hbs';


const {form, input, gallery, loadMoreBtn} = refs;

form.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore); 

function onSearch(event) {
  event.preventDefault();
  loadMoreBtn.classList.add('hidden');
  const inputValue = event.target.query.value;
  if(input.value === '') {
    notify.noticeMessage();
    return;
  }; 
  fetchObject.getFetch(inputValue).then(toMakeMarkup).catch(notify.errorMessage); 
  input.value = "";
  gallery.innerHTML = '';
};

function toMakeMarkup (result) {
  if(result.hits === 0) {
    notify.noticeMessage();
    return;
  }; 
  const markup = cardsTpl(result.hits);
  gallery.insertAdjacentHTML('beforeend', markup);
  toShowBtn(result.total);
  return gallery;
};

function onLoadMore(event) {
  event.preventDefault();
  fetchObject.setPage();
  fetchObject.getFetch(undefined).then(toMakeMarkup);
  setTimeout(() => {
    window.scrollTo({top: gallery.scrollHeight, behavior: "smooth"});
  }, 1000);
};

function toShowBtn(resultLength) {
  if (resultLength > fetchObject.perPage) {
    loadMoreBtn.classList.remove('hidden');
  } return;
};