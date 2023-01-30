import { template } from 'lodash';
import { genreArray } from '..';
import { refs } from './refs';

const templates = {
  galleryCard(data) {
    return data
      .map(({ id, title, poster_path, release_date, genre_ids }) => {
        const date = release_date.slice(0, 4);
        const genre = render.findGenre(genre_ids);
        return `<div class="gallery__card" >
                <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="" width="395" height="574">
                <div class="gallery__card-info">
                <p>${title}</p>
                <p class="gallery__card-subtitle">${genre} | ${date}</p>
                <div class="target" data-movie-id="${id}"></div>
                </div>
            </div>`;
      })
      .join('');
  },

  trailerPopup(key) {
    return `<div class="popup__trailer-wrapper"><iframe width="840" height="472" src="https://www.youtube.com/embed/${key}" 
    title="YouTube video player" frameborder="0" allow="accelerometer; 
    autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen></iframe></div>`;
  },

  popup(data) {
    const {
      id,
      title,
      poster_path,
      overview,
      original_title,
      popularity,
      vote_average,
      vote_count,
      genres,
    } = data;
    const genre = genres.map(({ name }) => name);
    return ` 
      <div class="popup__image-wrapper">
      <img class="popup__image" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="" >
      </div>
        <div class="popup__info-wrapper" >
          <h1 class="popup__info-title">${title}</h1>
          <div class="popup__info-list-wrapper">
            <ul class="popup__info-list">
              <li>Vote / Votes</li>
              <li>Popularity</li>
              <li>Original Title</li>
              <li>Genre</li>
            </ul>
            <ul class="popup__info-list">
              <li><span class="popup__info-rate">${vote_average.toFixed(
                1
              )}</span> / ${vote_count}</li>
              <li>${popularity}</li>
              <li>${original_title}</li>
              <li>${genre.join(', ')}</li>
              </ul>
            </div>
            <p class="popup__info-title-about">About</p>
            <p class="popup__info-about"><q>${overview}</q></p>
            <div class="popup__info-buttons">
              <button class="popup__addWatchedBtn" data-serialize-id="${id}" data-type="watched">ADD TO WATCHED</button>
              <button class="popup__addQueueBtn" data-serialize-id="${id}" data-type="queue">ADD TO QUEUE</button>
            </div>
          </div>`;
  },

  libaryCard(data) {
    const { id, poster_path, tagline } = data;
    return `<div class="gallery__card-libary" data-movie-id="${id}">
    <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="" width="395" height="574">
      <div class="gallery__card-info">
       <p><q>${tagline}</q></p>
       </div>
    <div class="target-libary" data-movie-id="${id}"></div>
  </div>`;
  },

  loadMoreBtn() {
    return `<div class="gallery__card load-more__card" >
                <img src="http://cdn.onlinewebfonts.com/svg/img_260976.png">
               
            </div>`;
  },
};

export const render = {
  // Render gallery markup

  galleryMarkup(data, save) {
    console.log(data);
    if (save) {
      templates.trend = templates.galleryCard(data);
    }
    refs.galleryEl.insertAdjacentHTML(`beforeend`, templates.galleryCard(data));
  },

  // Render popup markup

  popupMarkup(data) {
    refs.popupContent.innerHTML = templates.popup(data);
  },

  // Render trend-list

  trend() {
    refs.galleryEl.innerHTML = templates.trend;
  },

  trailerPopup(key) {
    refs.popupContent.innerHTML = templates.trailerPopup(key);
  },

  // Render markup for Libary

  libaryCard(data) {
    refs.libaryGalleryEl.insertAdjacentHTML(
      `beforeend`,
      templates.libaryCard(data)
    );
  },

  // Get genres

  findGenre(array) {
    let genre = '';
    for (const iterator of array) {
      genreArray.map(element => {
        if (element.id === iterator) {
          genre === ''
            ? (genre = `${element.name}`)
            : (genre += `, ${element.name}`);
        }
      });
    }
    return genre;
  },
};
