import React, { useEffect, useState } from 'react';
import { SliderList } from './slider-list.js';

const NewPromo = (props) => {
  let currentIndex = 0;
  const sliderPictures = props.promo.sliderPictures;

  const fetchImageUrl = async (newImage) => {
    const image = await fetch(newImage);
    return image.url;
  }

  const [promoSeen, promoSeenUpdater] = useState(props.data.seen);
  const [imageSrc, imageSrcUpdater] = useState(sliderPictures[0]);
  const [controlPromo, controlPromoUpdater] = useState(props.data.seen ? {'like': true, 'compare': true} : props.promo.controlState);
  const [currentSlider, currentSliderUpdater] = useState(currentIndex);
  const [toggleSlider, toggleSliderUpdater] = useState(null);

  useEffect(() => {
    fetchImageUrl('https://source.unsplash.com/random').then(result => imageSrcUpdater(result));
  }, [])

  const controlsOnClick = (element) => {
    return (e) => {
      e.preventDefault();
      controlPromoUpdater({ ...controlPromo, [element]: !controlPromo[element] });
    };
  }

  const onClick = (e) => {
    if (promoSeen || e.defaultPrevented) {
      return;
    }
    promoSeenUpdater(!promoSeen);
    controlPromoUpdater({'like': true, 'compare': true});
  }

  const changeSlider = (index) => {
    return (e) => {
      e.preventDefault();
      clearTimeout(toggleSlider);
      toggleSliderUpdater(null);
      fetchImageUrl(sliderPictures[index]).then((result) => {
        imageSrcUpdater(result);
        currentSliderUpdater(index);
        currentIndex = index - 2;
      });
    }
  }

  const setSliderUpdate = () => {
    clearTimeout(toggleSlider);
    const timer = setTimeout(changeCurrentSlide, 1000);
    toggleSliderUpdater(timer);
  }

  const changeCurrentSlide = () => {
    if (currentIndex++ === sliderPictures.length - 1) {
      currentIndex = 0;
    }

    fetchImageUrl(sliderPictures[currentIndex]).then(res => {
      imageSrcUpdater(res);
      currentSliderUpdater(currentIndex);
      setSliderUpdate();
    });
  }

  const onMouseOver = (e) => {
    setSliderUpdate();
  }

  const onMouseOut = (e) => {
    clearTimeout(toggleSlider);
    toggleSliderUpdater(null);
  }

  const likeIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_3305:303)">
        <path d="M21.4321 12.2122C20.5975 14.5152 14.8243 19.697 12.0421 22C9.60767 19.8889 4.42577 15.206 3.17377 13.3636C1.60876 11.0606 1.60874 7.60649 3.17375 5.3033C4.30214 3.64268 6.3037 3.00028 7.86878 3C9.64009 2.99968 12.0421 5.30302 12.0421 5.30302C12.0421 5.30302 15.6938 1.84866 19.3455 4.15179C22.2456 5.98093 22.4755 9.3334 21.4321 12.2122Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
      </g>
      <defs>
        <filter id="filter0_d_3305:303" x="-19" y="-18" width="61.9965" height="61" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="10" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3305:303" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3305:303" result="shape" />
        </filter>
      </defs>
    </svg>
  );

  const compareIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_3305:304)">
        <g filter="url(#filter0_d_3305:304)">
          <path d="M10 21.2632V2.73684C10 2.15789 10.3 1 11.5 1C12.7 1 13 2.15789 13 2.73684V21.2632C13 21.4561 13 23 11.5 23C10 23 10 21.4561 10 21.2632Z" stroke="white" strokeWidth="2" />
        </g>
        <g filter="url(#filter1_d_3305:304)">
          <path d="M17 21.6579V7.34211C17 6.89474 17.3 6 18.5 6C19.7 6 20 6.89474 20 7.34211V21.6579C20 21.807 20 23 18.5 23C17 23 17 21.807 17 21.6579Z" stroke="white" strokeWidth="2" />
        </g>
        <g filter="url(#filter2_d_3305:304)">
          <path d="M3 21.8947V10.1053C3 9.73684 3.3 9 4.5 9C5.7 9 6 9.73684 6 10.1053V21.8947C6 22.0175 6 23 4.5 23C3 23 3 22.0175 3 21.8947Z" stroke="white" strokeWidth="2" />
        </g>
      </g>
      <defs>
        <filter id="filter0_d_3305:304" x="-11" y="-20" width="45" height="64" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="10" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3305:304" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3305:304" result="shape" />
        </filter>
        <filter id="filter1_d_3305:304" x="-4" y="-15" width="45" height="59" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="10" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3305:304" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3305:304" result="shape" />
        </filter>
        <filter id="filter2_d_3305:304" x="-18" y="-12" width="45" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="10" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3305:304" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3305:304" result="shape" />
        </filter>
        <clipPath id="clip0_3305:304">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <div
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={onClick}
      className={promoSeen ? 'promo-list__promo promo-list__promo--seen' : 'promo-list__promo'}>
      <div className='promo-list__image-wrapper'>
        <img className='promo-list__promo-photo' alt='Изображение товарной единицы' src={imageSrc} />
        <SliderList
          sliderInfo={props.promo.sliderInfo}
          slidersAmount={sliderPictures}
          currentSlider={currentSlider}
          changeSlider={changeSlider}
        />
        <button
          className={controlPromo.like ? 'promo-list__button promo-list__button--like promo-list__button--like-enabled' : 'promo-list__button promo-list__button--like'}
          type='button'
          onClick={controlsOnClick('like')}>
          {!controlPromo.like && likeIcon}
          <span className='visually-hidden'>
            {props.promo.like}
          </span>
        </button>
        <button
          className={controlPromo.compare ? 'promo-list__button promo-list__button--compare promo-list__button--compare-enabled' : 'promo-list__button promo-list__button--compare'}
          type='button'
          onClick={controlsOnClick('compare')}>
          {!controlPromo.compare && compareIcon}
          <span className='visually-hidden'>
            {props.promo.compare}
          </span>
        </button>
      </div>
      <div className='promo-list__promo-main-info'>
        <div className='promo-list__price-wrapper'>
          <p className='promo-list__text promo-list__text--old-price'>
            {`${props.data.oldPrice}\u00A0${props.promo.currency}`}
          </p>
          <p className='promo-list__text promo-list__text--actual-price'>
            {`${props.data.price}\u00A0${props.promo.currency}`}
          </p>
        </div>
        <div className='promo-list__service-wrapper'>
          <button className='promo-list__button promo-list__button--delivery'>
            <span className='visually-hidden'>
              {props.promo.delivery}
            </span>
          </button>
          <button className='promo-list__button promo-list__button--protection'>
            <span className='visually-hidden'>
              {props.promo.protection}
            </span>
          </button>
        </div>
      </div>
      <h3 className='promo-list__text promo-list__text--title'>
        {props.data.title}
      </h3>
      <div className='promo-list__promo-info'>
        <p className='promo-list__text promo-list__text--city'>
          {promoSeen ? props.data.locality.slice(0, 15) : props.data.locality.slice(0, 35)}
        </p>
        <p className='promo-list__text promo-list__text--date'>
          {new Date(props.data.date * 1000).toLocaleDateString(['ru'], {hour: '2-digit', minute:'2-digit'})}
        </p>
      </div>
    </div>
  );
}

export { NewPromo }
