import { CardsMovies } from "../Cards/CardsMovies";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export const CarouselMovies = ({data,children,title}) => {

  if (data.length == 0) {
      return <div>Cargando datos...</div>;
  }

  const settings = {
    centerMode: true,
    centerPadding: "80px",
    infinite: true,
    initialSlide: 0,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <div>
      <h4 className="text-white ml-[90px] font-bold text-xl">{title}</h4>
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  );
};

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <button className="arrow right-0" onClick={onClick}>
        <BsChevronRight />
      </button>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <button className="arrow left-0" onClick={onClick}>
        <BsChevronLeft />
      </button>
    );
  }