import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";

function Freebook() {
  const filterData = list.filter((data) => data.category === "free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  console.log(filterData);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
        <h1 className="font-semibold text-xl pb-2">Free Offered Books</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, aliquam voluptatem saepe accusantium modi debitis. Pariatur, quos aut fuga, itaque delectus tempore magnam, distinctio ex quo consequuntur eligendi quam nemo.</p>
        </div>
      

      <div>
      <Slider {...settings}>
        {filterData.map((item)=>(
           <Cards item={item} key={item.id}/>
        ))}
      </Slider>
      </div>
      </div>
    </>
  );
}

export default Freebook;
