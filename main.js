const numberOfSlides = document.querySelectorAll('.swiper-slide').length

const slideTitles = [
  'Inicio',
  'ian bernardo klein',
  'Jeferson Ruan dos s. Pereira',
  'Juliana Ipolito de Mello',
  'Rayan Majzoub',
  'Vitória Alves de oliveira',
]

const swiper = new Swiper('.main-slider', {
  direction: 'vertical',
  speed: 2200,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: (index, className) => {
      const isFirstSlide = index === 0
      const isFirstOrLastSlide = isFirstSlide || index === numberOfSlides - 1

      return `
        <div class="main-container-navigation-bullets" data-active="${isFirstSlide}">
          <div class="container-navigation-bullets">
            <span class="${className} ${
        isFirstOrLastSlide && 'rounded-none'
      } "></span>
            <div class="navigation-trace-bullet"></div>
          </div>

          <span class="swiper-bullet-title-label" data-active="${isFirstSlide}" data-direction="down">${
        slideTitles[index]
      }</span>
        </div>
      `
    },
  },
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
  a11y: {
    prevSlideMessage: 'Slide anterior',
    nextSlideMessage: 'Próximo slide',
  },
  allowTouchMove: false,
})

const swiperBullets = document.querySelectorAll(
  '.main-container-navigation-bullets'
)

const swiperBulletLabels = document.querySelectorAll(
  '.swiper-bullet-title-label'
)

const cardsContainer = document.querySelectorAll('.card-container')

const backgroundElement = document.querySelector('.background')

swiper.on('slideChange', () => {
  swiperBullets.forEach((bullet, index) => {
    updateToCurrentElement(bullet, index)
  })

  backgroundElement.className = `background slide-${swiper.activeIndex + 1}`

  const prevSwiperBulletLabel = swiperBulletLabels[swiper.previousIndex]
  if (prevSwiperBulletLabel) {
    prevSwiperBulletLabel.setAttribute('data-direction', 'up')
  }

  const nextSwiperBulletLabel = swiperBulletLabels[swiper.activeIndex + 1]
  if (nextSwiperBulletLabel) {
    nextSwiperBulletLabel.setAttribute('data-direction', 'down')
  }

  const previousSlideCard = cardsContainer[swiper.previousIndex - 1]
  if (previousSlideCard) {
    previousSlideCard.setAttribute('data-direction', 'up')
  }

  const nextSlideCard = cardsContainer[swiper.activeIndex]
  if (nextSlideCard) {
    nextSlideCard.setAttribute('data-direction', 'down')
  }
})

function updateToCurrentElement(element, currentIndex) {
  if (swiper.activeIndex === currentIndex) {
    element.setAttribute('data-active', 'true')
  } else {
    element.setAttribute('data-active', 'false')
  }
}

const mainSlider = document.querySelector('.main-slider')

const cardsMainContainer = document.querySelectorAll('.card-main-container')

function openCard() {
  const currentCard = cardsMainContainer[swiper.activeIndex - 1]

  currentCard.setAttribute('data-card-active', 'true')
  mainSlider.setAttribute('data-card-active', 'true')
}

function closeCard() {
  const currentCard = cardsMainContainer[swiper.activeIndex - 1]

  currentCard.setAttribute('data-card-active', 'false')
  mainSlider.setAttribute('data-card-active', 'false')
}
