// const sliderEl = document.querySelector(".hero-list");
const nextEl = document.querySelector('.next');
const prevEl = document.querySelector('.prev');

const mySiema = new Siema({
  selector: '.hero-list',
  loop: true,
  
});

function onNextClick() {
  mySiema.next();
}

function onPrevClick() {
  mySiema.next();
}

nextEl.addEventListener('click', onNextClick);
prevEl.addEventListener('click', onPrevClick);

const lightbox = new SimpleLightbox('.gallery a', {});

const lightboxTest = new SimpleLightbox('.gallery-test a', {
  loop: true
});
