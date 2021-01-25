import refs from "./refs";
import notify from './notification';
import fetchObject from './getFetch';
import cardsTpl from '../template/card_image.hbs';

const {form, input, gallery, loadMoreBtn} = refs;


form.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore); 

function onSearch(event) {
  event.preventDefault();
  toHideBtn();
  noticeErr();
  const inputValue = event.target.query.value;
  fetchObject.getFetch(inputValue).then(toMakeMarkup).catch(notify.errorMessage); 
  toClearSearch();
};

function toMakeMarkup (result) {
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

function noticeErr(event) {
  if(input.value.length === 0) {
    notify.noticeMessage(); 
    event.target.query.value = "";
  }
}

function toClearSearch() {
  input.value = "";
  gallery.innerHTML = '';
};

function toShowBtn(resultLength) {
  if (resultLength > fetchObject.perPage) {
    loadMoreBtn.classList.remove('hidden');
  } return;
};

function toHideBtn() {
  loadMoreBtn.classList.add('hidden');
}