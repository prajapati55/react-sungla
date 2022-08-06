import React from "react";
import bannerImage from '../assets/images/banner_img.png'
import aboutImage from '../assets/images/about_img.png'
import glassImage1 from '../assets/images/glass1.png'
import glassImage2 from '../assets/images/glass2.png'
import glassImage3 from '../assets/images/glass3.png'
import glassImage4 from '../assets/images/glass4.png'
import glassImage5 from '../assets/images/glass5.png'
import glassImage6 from '../assets/images/glass6.png'
import glassImage7 from '../assets/images/glass7.png'
import glassImage8 from '../assets/images/glass8.png'
import shopImage from '../assets/images/shop_img.png'
import ourImage from '../assets/images/our.png'
const homePage = () => {
   return <>
      <section className="banner_main">
         <div id="banner1" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
               <li data-target="#banner1" data-slide-to="0" className="active"></li>
               <li data-target="#banner1" data-slide-to="1"></li>
               <li data-target="#banner1" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="container">
                     <div className="carousel-caption">
                        <div className="text-bg">
                           <h1> <span className="blu">Welcome <br /></span>To Our Sunglasses</h1>
                           <figure><img src={bannerImage} alt="#"/></figure>
                           <a className="read_more" href="#">Shop Now</a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <div className="carousel-caption">
                        <div className="text-bg">
                           <h1> <span className="blu">Welcome <br/></span>To Our Sunglasses</h1>
                           <figure><img src={bannerImage} alt="#"/></figure>
                           <a className="read_more" href="#">Shop Now</a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <div className="carousel-caption">
                        <div className="text-bg">
                           <h1> <span className="blu">Welcome <br/></span>To Our Sunglasses</h1>
                           <figure><img src={bannerImage} alt="#"/></figure>
                           <a className="read_more" href="#">Shop Now</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <a className="carousel-control-prev" href="#banner1" role="button" data-slide="prev">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </a>
            <a className="carousel-control-next" href="#banner1" role="button" data-slide="next">
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
         </div>
      </section>
      <div className="about">
         <div className="container">
            <div className="row d_flex">
               <div className="col-md-5">
                  <div className="about_img">
                     <figure><img src={aboutImage} alt="#"/></figure>
                  </div>
               </div>
               <div className="col-md-7">
                  <div className="titlepage">
                     <h2>About Our Shop</h2>
                     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                  </div>
                  <a className="read_more" href="#">Read More</a>
               </div>
            </div>
         </div>
      </div>

      <div className="glasses">
         <div className="container">
            <div className="row">
               <div className="col-md-10 offset-md-1">
                  <div className="titlepage">
                     <h2>Our Glasses</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor
                        e et dolore magna aliqua. Ut enim ad minim veniam, qui
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div className="container-fluid">
            <div className="row">
               <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="glasses_box">
                     <figure><img src={glassImage1} alt="#"/></figure>
                     <h3><span className="blu">$</span>50</h3>
                     <p>Sunglasses</p>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="glasses_box">
                     <figure><img src={glassImage2} alt="#"/></figure>
                     <h3><span className="blu">$</span>50</h3>
                     <p>Sunglasses</p>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="glasses_box">
                     <figure><img src={glassImage3} alt="#"/></figure>
                     <h3><span className="blu">$</span>50</h3>
                     <p>Sunglasses</p>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="glasses_box">
                     <figure><img src={glassImage4} alt="#"/></figure>
                     <h3><span className="blu">$</span>50</h3>
                     <p>Sunglasses</p>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="glasses_box">
                     <figure><img src={glassImage5} alt="#"/></figure>
                     <h3><span className="blu">$</span>50</h3>
                     <p>Sunglasses</p>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="glasses_box">
                     <figure><img src={glassImage6} alt="#"/></figure>
                     <h3><span className="blu">$</span>50</h3>
                     <p>Sunglasses</p>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="glasses_box">
                     <figure><img src={glassImage7} alt="#"/></figure>
                     <h3><span className="blu">$</span>50</h3>
                     <p>Sunglasses</p>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="glasses_box">
                     <figure><img src={glassImage8} alt="#"/></figure>
                     <h3><span className="blu">$</span>50</h3>
                     <p>Sunglasses</p>
                  </div>
               </div>
               <div className="col-md-12">
                  <a className="read_more" href="#">Read More</a>
               </div>
            </div>
         </div>
      </div>

      <div id="about" className="shop">
         <div className="container-fluid">
            <div className="row">
               <div className="col-md-5">
                  <div  className="shop_img">
                     <figure><img src={shopImage} alt="#"/></figure>
                  </div>
               </div>
               <div className="col-md-7 padding_right0">
                  <div className="max_width">
                     <div className="titlepage">
                        <h2>Best SunGlasses  At Our shop</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                        <a className="read_more" href="#">Shop Now</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="clients">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>What say our clients</h2>
                     <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la</p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-12">
                  <div id="myCarousel" className="carousel slide clients_Carousel " data-ride="carousel">
                     <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                     </ol>
                     <div className="carousel-inner">
                        <div className="carousel-item active">
                           <div className="container">
                              <div className="carousel-caption ">
                                 <div className="row">
                                    <div className="col-md-12">
                                       <div className="clients_box">
                                          <figure><img src={ourImage} alt="#"/></figure>
                                          <h3>Sandy Mark</h3>
                                          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact  a more-or-less normal distribution of letters,</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="carousel-item">
                           <div className="container">
                              <div className="carousel-caption">
                                 <div className="row">
                                    <div className="col-md-12">
                                       <div className="clients_box">
                                          <figure><img src={ourImage} alt="#"/></figure>
                                          <h3>Sandy Mark</h3>
                                          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact  a more-or-less normal distribution of letters,</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="carousel-item">
                           <div className="container">
                              <div className="carousel-caption">
                                 <div className="row">
                                    <div className="col-md-12">
                                       <div className="clients_box">
                                          <figure><img src={ourImage} alt="#"/></figure>
                                          <h3>Sandy Mark</h3>
                                          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact  a more-or-less normal distribution of letters,</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                     <i className='fa fa-angle-left'></i>
                     </a>
                     <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                     <i className='fa fa-angle-right'></i>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div id="contact" className="contact">
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <form id="request" className="main_form">
                     <div className="row">
                        <div className="col-md-12 ">
                           <h3>Contact Us</h3>
                        </div>
                        <div className="col-md-12 ">
                           <input className="contactus" placeholder="Name" type="type" name="Name" /> 
                        </div>
                        <div className="col-md-12">
                           <input className="contactus" placeholder="Phone Number" type="type" name="Phone Number" /> 
                        </div>
                        <div className="col-md-12">
                           <input className="contactus" placeholder="Email" type="type" name="Email" />                          
                        </div>
                        <div className="col-md-12">
                           <input className="contactusmess" placeholder="Message" type="type" name="Message" />
                        </div>
                        <div className="col-md-12">
                           <button className="send_btn">Send</button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
         <div className="container-fluid">
            <div className="map_section">
               <div id="map">
               </div>
            </div>
         </div>
      </div>
   </>
}

export default homePage;