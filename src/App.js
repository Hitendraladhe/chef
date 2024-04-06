import React,{ Component } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { FaHeart } from "react-icons/fa";
import './App.css';

import 'react-awesome-slider/dist/styles.css';

import SliderProduct from './components/Slider'
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const sliderProducts = [
  {
    id: 1,
    img: "https://storage.googleapis.com/pai-images/20a470e31ec644aea6318d9b08cc0c7f.jpeg",
    name: "CHINNAMON HONEY",
    price: 400,
    Orprice: 100
  },
  {
    id: 2,
    img: "https://storage.googleapis.com/pai-images/20a470e31ec644aea6318d9b08cc0c7f.jpeg",
    name: "CHINNAMON HONEY",
    price: 400,
    Orprice: 100
  },
  {
    id: 3,
    img: "https://storage.googleapis.com/pai-images/20a470e31ec644aea6318d9b08cc0c7f.jpeg",
    name: "CHINNAMON HONEY",
    price: 400,
    Orprice: 100
  },
  {
    id: 3,
    img: "https://storage.googleapis.com/pai-images/20a470e31ec644aea6318d9b08cc0c7f.jpeg",
    name: "CHINNAMON HONEY",
    price: 400,
    Orprice: 100
  },{
    id: 4,
    img: "https://storage.googleapis.com/pai-images/20a470e31ec644aea6318d9b08cc0c7f.jpeg",
    name: "CHINNAMON HONEY",
    price: 400,
    Orprice: 100
  },
  {
    id: 5,
    img: "https://storage.googleapis.com/pai-images/20a470e31ec644aea6318d9b08cc0c7f.jpeg",
    name: "CHINNAMON HONEY",
    price: 400,
    Orprice: 100
  },
  {
    id: 6,
    img: "https://storage.googleapis.com/pai-images/20a470e31ec644aea6318d9b08cc0c7f.jpeg",
    name: "CHINNAMON HONEY",
    price: 400,
    Orprice: 100
  },{
    id: 7,
    img: "https://storage.googleapis.com/pai-images/20a470e31ec644aea6318d9b08cc0c7f.jpeg",
    name: "CHINNAMON HONEY",
    price: 400,
    Orprice: 100
  },
]
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


class App extends Component {
  constructor(){
    super();
    this.state = {
      isShowMenu: false,
    }
  }
  
  

  menuBtn=()=>{
    const {isShowMenu} = this.state
    this.setState({isShowMenu: !isShowMenu})
    console.log(isShowMenu);
  }

  render(){
    const {isShowMenu} = this.state
    const menuIcons = isShowMenu ? "ulVisible" : "ulInvisible"
    const menubarFooter = isShowMenu ? "menuBarFooter" : "invisible"
    const app = isShowMenu ? "App" : "apps"
    console.log(menuIcons);
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true
    };
    const setting = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };

  return (
    <div className="bgContainer">
      
    <div className={`${app}`} >
      <div className="menuBar">
        <button className="menuBtn" onClick={this.menuBtn}>
        {isShowMenu ? 
        <RxCross1 className="menuIcon"/>: <AiOutlineMenu className="menuIcon"/>
      }
        </button>
       <h1>Chef Matt</h1>
       <ul className={`${menuIcons}`}>
        <li><a href="#home">HOME</a></li>
        <li><a href="#products">PRODUCTS</a></li>
        <li><a href="#meet">MEET CHEF MATT</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#conn">CONNECT WITH US</a></li>
       </ul>
       <div className={`${menubarFooter}`}>
         <p className="numberPara">TEXT SUPPORTS 24/7<span className="number">070 7782 9137</span></p>
         <hr className="numberLine"/>
         <p className="iconShop">CART<FaCartShopping className="iconShop"/>WISHLIST<FaHeart className="iconShop"/></p>
       </div>
      </div>
      <section id="home">
     <div className='heroSection'>
      <button className='meetBtn'>Meet Chef</button>
     </div>
     </section>
    </div>
    <section id="products">
    <div className="productsSection">
      <img src="https://images.pngnice.com/download/2007/Real-Leaves-PNG-Image.png" className="leafs"/>
      <h1 className="headingProduct">CHEF MATT PRODUCTS</h1>
      <hr className="gold"/>
      <p className="para">Shop gaurment sefty products from the chef matt brand.<br/> chef it yourself and thank us later.</p>
      
      <Slider {...settings}>
        {sliderProducts.map(each=>(
          <div className="slidingCon">
            <img src={each.img} className="img"/>
            <h6>{each.name}</h6>
            <p className="paraPrice">{each.price} {each.Orprice}</p>
          </div>
        ))}
      </Slider>
    </div>
    </section>
    {/* <div className="codeContaier"> */}
      
      
        <div className="codeSectio">
        <img src={slider[0].img} className="pouchImg"/>
        <div className="codeSection">
        <h1 className="codeHeding">{slider[0].name}</h1>
        <hr/>
        <p className="codePara">{slider[0].para}</p>
        <button className="codeBtn">{slider[0].btnTxt}</button>
        </div>
        <img src={slider[0].img} className="pouchImg"/>
        </div>
      
      
      
      {/* </div> */}
      <section id="meet">
    <div className="detailSection">
      <div className="detailsColumn">
      <div className="detailsRow">
        <div>
          <h1 className="detRowHeading">Subscribe and Save </h1>
          <p className="detRowPara">Join the chef matt monthly Subscribtion<br/> and bring the world class chef quality <br/> meet to your home </p>
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TB11e1Eqn57ksWiIeB3_P4D5IWbGuhdSUsPr-4YFzg&s" className="productImg"/>
        </div>
      </div>
      <div className="detailsRow recip">
        <h2 className="reciHeading">RECIPIES</h2>
      </div>
      </div>
      <div className="detailsColumn">
      <div className="detailsRow chef">
       <h1 className="cheffHeading detRowHeading " style={{color: "white"}} >Meet The Chef</h1>
       <p className="cheffPara">Chef Matt</p>
      </div>
      <div className="detailsRow live">
      <h1 className="reciHeading livehed">chef matt</h1>
      <img src="https://pnghq.com/wp-content/uploads/live-streaming-png-995-download-81955.png" className="liveImg"/>
      </div>
      </div>
    </div>
    </section>
    <section id="conn">
    <div className="signupSection">
      <div className="signuptext">
       <h1>SIGN UP SPECIAL PROMOTION</h1>
       <hr className="rowLine white"/>
       <p>Get exclusive deals you wont find anywhere else straight to your inbox!</p>
       <div>
        <input placeholder="Enter your email here...."/>
        <button className="subscribeBtn">Subscribe</button>
       </div>
       </div>
    </div>
    </section>
    <section id="faq">
    <div className="footerRow">
      <div>
        <h1 className="rowHeading">FREE SHIPPING WORLDWIDE </h1>
        <p className="rowPara">Guaranted delivery</p>
      </div>
      <div>
        <h1 className="rowHeading">24/7 CUSTOMER SERVICES</h1>
        <p className="rowPara">text us 24/7 070 7782 9137</p>
      </div>
      <div>
        <h1 className="rowHeading">QUALITY Guaranted! </h1>
        <p className="rowPara">send within 30days </p>
       
      </div>
    </div>
    </section>
    <hr className="rowLine"/>
    <h1 className="headingChef">Chef Matt</h1>
    </div>
  );
  }
}

export default App;
