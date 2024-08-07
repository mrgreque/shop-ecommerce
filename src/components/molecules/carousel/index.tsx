import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { CarouselProps } from './types';
import CarouselItem from '../../atoms/carouselItem';
import { StyledCustomLeftArrow, StyledCustomRightArrow } from './styled';

const CustomRightArrow = ({ onClick }: any) => {
  return (
    <StyledCustomRightArrow onClick={() => onClick()}>
      <KeyboardArrowRightIcon />
    </StyledCustomRightArrow>
  );
};

const CustomLeftArrow = ({ onClick }: any) => {
  return (
    <StyledCustomLeftArrow onClick={() => onClick()}>
      <KeyboardArrowLeftIcon />
    </StyledCustomLeftArrow>
  );
};

const ThumbnailCarousel: React.FC<CarouselProps> = ({ products }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3.99,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1180 },
      items: 3.99,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1180, min: 464 },
      items: 2.99,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 0.99,
      slidesToSlide: 1,
    },
  };
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={true}
      infinite={true}
      keyBoardControl={true}
      transitionDuration={500}
      containerClass="carousel-container"
      itemClass="carousel-item-padding-40-px"
      customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomLeftArrow />}
    >
      {products.map((product) => (
        <CarouselItem
          image={product.image}
          title={product.title}
          value={product.value}
        />
      ))}
    </Carousel>
  );
};

export default ThumbnailCarousel;
