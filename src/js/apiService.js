import refs from "./refs";
import notify from './notification';
import fetchObject from './getFetch';
import cardsTpl from '../template/card_image.hbs';
const {form, input, gallery, loadMoreBtn} = refs;
console.log(input);

form.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore); 
console.log('loadMoreBtn', loadMoreBtn); 

function onSearch(event) {
  event.preventDefault();
  const inputValue = event.target.query.value;
  console.log(typeof inputValue);
  if(inputValue.length === 0) {
    notify.noticeMessage(); 
    console.log('no shit')
    toClearSearch();
    return;
    // return false;
  }
  // fetchObject.queryValue = inputValue;
  // fetchObject.setQuery(inputValue)
  fetchObject.getFetch(inputValue)
  .then(toMakeMarkup)
  .catch(
    err => {
      console.log(err)
      notify.errorMessage
    }); 
  toClearSearch();
};

function toMakeMarkup (result) {
  toShowBtn(result.total);
  console.log(result);
  const markup = cardsTpl(result.hits);
  gallery.insertAdjacentHTML('beforeend', markup);
  return gallery;
};

function onLoadMore(event) {
  event.preventDefault();
  console.log();
  fetchObject.setPage();
  fetchObject.getFetch(undefined).then(toMakeMarkup);
  setTimeout(() => {
    window.scrollTo({top: gallery.scrollHeight, behavior: "smooth"});
  }, 1000);
};

function toClearSearch() {
  input.value = "";
  gallery.innerHTML = '';
};

function toShowBtn(resultLength) {
  if (resultLength > fetchObject.perPage) {
    loadMoreBtn.classList.remove('hidden');
  } else{
    loadMoreBtn.classList.add('hidden');
  }; 
};