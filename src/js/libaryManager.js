import { theMovieAPI } from './movieAPI';
import { modalPopup } from './modalPopup';
import { render } from './renderMarkup';
import { refs } from './refs';
import { savedFilms } from './serialize'

const movieAPI = new theMovieAPI();

const removeMovieFromLibary = id => {
  localStorage.clear();
  savedFilms.queueFilms = savedFilms.queueFilms.filter(
    element => element != id
  );
  savedFilms.watchedFilms = savedFilms.watchedFilms.filter(
    element => element != id
  );
  const galleryCardsLibEl = document.querySelectorAll(`.gallery__card-libary`);
  console.log(galleryCardsLibEl);
  galleryCardsLibEl.forEach(element => {
    console.log(element.dataset.movieId);
    if (element.dataset.movieId === id) {
      element.remove();
    }
  });
  if (savedFilms.watchedFilms.length != 0);
  localStorage.setItem(`watched-movie-list`, savedFilms.watchedFilms);
  if (savedFilms.queueFilms.length != 0)
    localStorage.setItem(`queue-movie-list`, savedFilms.queueFilms);
};

const libaryActive = () => {
  if (document.location.href.includes(`libary`)) {
    refs.libaryWatchedBtn.addEventListener(`click`, savedFilms.filterMovieList);
    refs.libaryQueueBtn.addEventListener(`click`, savedFilms.filterMovieList);
    refs.libaryAllBtn.addEventListener(`click`, savedFilms.filterMovieList);
    // refs.libaryGalleryEl.addEventListener(`dblclick`, removeMovie);
    refs.libaryGalleryEl.addEventListener(`click`, openTrailerPopup);
    loadLibaryFilms();
  }
};


const loadTrailer = async id => {
  const { results } = await movieAPI.fetchTreiler(id);
  let offTrailerKey = null;
  results.map(element => {
    if (element.name.toLowerCase().includes(`official trailer`)) {
      offTrailerKey = element.key;
    }
  });
  if (offTrailerKey === null) offTrailerKey = results[0].key;
  render.trailerPopup(offTrailerKey);
};

const openTrailerPopup = event => {
  const { target, ctrlKey } = event;
  const id = target.dataset.movieId;
  if (id && ctrlKey) {
    removeMovieFromLibary(id);
    return;
  }
  if (id != undefined) loadTrailer(id);
  modalPopup.toggleHide();
  modalPopup.addAnimattion();
  modalPopup.addModalListeners();
};

const loadLibaryFilms = async () => {
  refs.libaryGalleryEl.innerHTML = '';
  const films = savedFilms.getAllFilms();
  try {
    if (films.length === 0) return;
    for (let i = 0; i < films.length; i++) {
      const result = await movieAPI.fetchMovieById(films[i]);
      render.libaryCard(result);
    }
  } catch (err) {
    console.log(err);
  }
};

window.addEventListener(`load`, libaryActive);
