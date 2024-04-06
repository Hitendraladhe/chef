import React from "react";
import Slider from "react-slick";
export const slider = [
  {
    id:1,
    img: "https://yi-files.yellowimages.com/products/775000/775347/1323205-cover.jpg",
    name: "ONLINE ONLY",
    para: "Get 20% off on your order of $50 OR MORE <br/> Use Code Chef20",
    btnTxt: "Shop Now"
  },
  {
    id:2,
    img: "https://yi-files.yellowimages.com/products/775000/775347/1323205-cover.jpg",
    name: "ONLINE ONLY",
    para: "Get 20% off on your order of $50 OR MORE <br/> Use Code Chef20",
    btnTxt: "Shop Now"
  },
  {
    id:3,
    img: "https://yi-files.yellowimages.com/products/775000/775347/1323205-cover.jpg",
    name: "ONLINE ONLY",
    para: "Get 20% off on your order of $50 OR MORE <br/> Use Code Chef20",
    btnTxt: "Shop Now"
  },
  {
    id:4,
    img: "https://yi-files.yellowimages.com/products/775000/775347/1323205-cover.jpg",
    name: "ONLINE ONLY",
    para: "Get 20% off on your order of $50 OR MORE <br/> Use Code Chef20",
    btnTxt: "Shop Now"
  },
]
export default function SimpleSlider() {
  var setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    
      <div className="codeSectio">
      <Slider {...setting}>
      {slider.map(eachItem=>(
        <>
        <img src={eachItem.img} className="img"/>
        <div className="row">
        <h1 className="codeHeding">{eachItem.name}</h1>
        <hr/>
        <p className="codePara">{eachItem.para}</p>
        <button className="codeBtn">{eachItem.btnTxt}</button>
        </div>
        <img src={eachItem.img} className="img"/>
        </>
      ))}
      
      </Slider>
      </div>
  );
}