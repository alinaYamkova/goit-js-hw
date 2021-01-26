import refs from "./refs";
import notify from './notification';
import apiObject from './apiService';
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
  apiObject.resetPage();
  apiObject.getFetch(inputValue).then(toMakeMarkup).catch(notify.errorMessage); 
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
  window.scrollTo({top: gallery.scrollHeight, behavior: "smooth"});
  toShowBtn(result);
};

function onLoadMore(event) {
  event.preventDefault();
  apiObject.setPage();
  apiObject.getFetch(null).then(toMakeMarkup);
};

function toShowBtn(result) {
  if (result.hits.length === 12) {
    return loadMoreBtn.classList.remove('hidden');
  } 
  return loadMoreBtn.classList.add('hidden'); 
};