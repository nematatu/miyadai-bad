import React, { useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

type EmblaCarouselProps = {
  slides: number[];
  options?: any;
};

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({ slides, options }) => {
  const autoplayOptions = { delay: 3000 }; // 自動スクロールの遅延時間（ミリ秒）
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay(autoplayOptions)]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((index) => (
          <div className="embla__slide" key={index}>
            <div className="embla__slide__inner">
              <img
                className="embla__slide__img"
                src={`https://via.placeholder.com/800x400?text=Slide+${index + 1}`}
                alt={`Slide ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;