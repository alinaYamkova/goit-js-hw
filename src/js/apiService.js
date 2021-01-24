import refs from "./refs";
import notify from './notification';
import fetchObject from './getFetch';
import cardsTpl from '../template/card_image.hbs';
const {form, input, gallery, loadMoreBtn} = refs;


form.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);  

function onSearch(event) {
  event.preventDefault();
  const inputValue = event.target.query.value;
  fetchObject.getFetch(inputValue)
  .then(toMakeMarkup)
  .catch(notify.errorMessage); 
  toClearSearch();
  input.value = "";
};

function toMakeMarkup (result) {
  // if (result.length === 0) {
  //   console.dir(result.length);
  //   notify.noticeMessage(); 
  //   toClearSearch();
    // return;
  // } toShowBtn();
    const markup = cardsTpl(result);
    gallery.insertAdjacentHTML('beforeend', markup);
    return refs.gallery;
};

function onLoadMore() {
  fetchObject.setPage();
  fetchObject.getFetch(undefined)
  .then(toMakeMarkup)
  .catch(notify.errorMessage);
  setTimeout(() => {
    window.scrollTo({top: refs.gallery.scrollHeight, 
      behavior: "smooth"});
  }, 1000);
  //   window.scrollTo({
    //     top: 1000,
    //     behavior: "smooth"   // });
};

function toClearSearch() {
  input.value = "";
  gallery.innerHTML = '';
};

function toShowBtn() {
  if (inputValue.length > fetchObject.perPage) {
    loadMoreBtn.classList.remove('hidden');
  } return; 
};