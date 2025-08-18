import { NavLink } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import banner from "../assets/banner.png"
import { IoCallSharp } from "react-icons/io5";
import { TbMessageDots } from "react-icons/tb";
import tg from "../logos/tg.png"
import fc from "../logos/fc.png"
import inst from "../logos/inst.png"

import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";
import quality from "../assets/quality.png";
import truck from "../assets/truck.png";
import rightarrow from "../assets/rightarrow.png"
import langs from "../assets/language.png"
import arava from "../flowing images/arava.jpg"
import artel from "../flowing images/artell.png"
import dock from "../flowing images/dock.jpg"
import express from "../flowing images/express.jpg"
import global from "../flowing images/global.jpg"
import hally from "../flowing images/hally.jpg"
import itpark from "../flowing images/itpark.jpg"
import noor from "../flowing images/noor.jpg"
import taxir from "../flowing images/taxir.webp"
import cer1 from "../certificates/certificate.jpg"
import cer2 from "../certificates/certificate2.jpg"
export default function Rus(){
    const [scrolled, setScrolled] = useState(false);
   
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50); // 50px dan pastga tushganda qorayadi
      };
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return(
        <>
            <div id="lins" className={`NAVBAR ${scrolled ? "scrolled" : ""}`}>
            <img id="link" src="/new/globus.jpg" alt="" />
               <div className="menyu">
                    <RxHamburgerMenu  className="ham"/>
               <div className="UL">
                    <HashLink smooth to="#link0">
                    Home
                    </HashLink>
                    <HashLink smooth to="#link1">
                    About
                    </HashLink>
                    <HashLink smooth to="#link2">
                   News
                    </HashLink>
                    <HashLink smooth to="#linkvip">
                    Facts
                    </HashLink>
                    <HashLink smooth to="#linkon">
                   Statistics
                    </HashLink>
                    <HashLink smooth to="#linkoff">
                    Partners
                    </HashLink>
                   
                    
                    <button 
  onClick={() => window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScOVHIgqEwZVlcd4Ymu5-upaQm-ihDYc2Zp_5wWSETtLaQDBA/alreadyresponded"} 
  className="REGISTER"
>
  register <GoArrowRight className="right-arrow" /> 
</button>

                   
                </div>
               </div>
                <div className="LANG">
                <NavLink to="/">EN</NavLink>
<NavLink to="/rus">RU</NavLink>
<NavLink to="/uzb">UZ</NavLink>
                </div>
            </div>
            <div id="link0" className="home">
                <img src={banner} alt="" />
            </div>

            <div className="tekst">
                <h2>Internation Logistics Academy</h2>
                <p>Master an in-demand profession in 3 months! <br />
                International transport logistics with knowledge of English B2!
                <br /> 3 steps to your dream job!</p>
                <div className="tugma-container">
                    <a href="tel:+998957270017">
                    <div className="tugma1">
                        <IoCallSharp className="call-icon" />
                        <p>Call</p>
                    </div>
                    </a>
                   <a href="">
                   <div className="tugma2">
                    <TbMessageDots className="message-icon" />
                    <p>message</p>
                    </div>
                   </a>
                </div>
            </div>
            <div className="media">
                <img src={tg} alt="" />
                <img src={inst} alt="" />
                <img src={fc} alt="" />
            </div>
            <section id="link1" className="us">
                <h2>About us</h2>
                <p>Have you always wanted to try yourself in the field of logistics?</p>
            </section>
            <section className="us-text">
                <div className="us-text1">
                <h4>
                A Journey of a Thousand Miles Involves Many Small Steps"
                - by a londor doctor
                </h4>
                <p>The BIGI study team, consisting of energetic, enthusiastic and empowering members never thought twice about offering a trucking business classes and sharing their own experiences because of the value it can provide.The BIGI study team, consisting of energetic, enthusiastic and empowering members never thought twice about offering a trucking business classes and sharing their own experiences because of the value it can provide to other businesses by transporting goods from one location to another over and over again. Eventually, the team was able to create the best transportation logistics courses, and we would like to share with you how simple and joyful it can be to be a creative part of this industry if you have an open-minded system and clear goal in place.</p>
                </div>
                <div className="us-text2">
                A course on "U.S. Trucking" , currently being held at the academy, will be taught in 3 stages.
            <br /> <br />
Stage 1️⃣: "English for Logistics" focuses on developing students' English language with the help of general logistical vocabularies and terms. It lasts 2 weeks. The course will enhance general understanding on logistics and put stress on improving "American accent".
<br /> <br />
Stage 2️⃣: Knowledge, insights and skills necessary for trucking specialists , such as dispatching, updating, fleet, safety, accounting, and ELD management are formed. This stage lasts for 1 month.
<br /> <br />
Stage 3️⃣: Joining free practice and trainings at our partner companies as an intern for 1 month and move to the "EARNING" stage!
<br /> <br />
✅ We select students through an interview. If your English level is B2 or higher, we look forward to seeing you soon.
                </div>
                <div className="us-text3">
                Transportation of goods and services has always been one of the main boosters of a country’s economy. Every country, including the Republic of Uzbekistan, relies on its logistics to ensure parties conduct their business seamlessly and improve its economy. The modes of transport support it. You have planes delivering goods, ships delivering more goods, and the railways doing their part in delivering goods in bulk as well. But the most used and active mode of transport that contributes to much of the economy’s boost are the roads and—yes, you guessed it—trucks are the ones doing their part. This is why trucking has become something that interest us because it contributes to the economic growth of a country and the BIGI study, established in 2023, would like you to be an essential part of that contribution
                </div>
            </section>
            <>
            <section id="link2" className="yangi us">
                <h2>News</h2>
                <p>You can stay updated with the latest news about our courses</p>
            </section>
            <section id="statistics" className="stats-section">
        <div className="stats-header">
          <h2>BIG STATISTICS IN LOGISTICS</h2>
          <p>Thousands of cargo shipments a day and lots of opportunities</p>
          <div className="divider"></div>
        </div>
  
        <div className="stats-grid">
          {/* Card 1 */}
          <div className="stat-card">
            <h4>Statistics #1</h4>
            <p className="nk">The trucking industry earned close to $900 billion in revenue in 2023.</p>
            <div className="progress">
              <div className="progress-bar" style={{ width: "100%" }}></div>
            </div>
          </div>
  
          {/* Card 2 */}
          <div className="stat-card">
            <h4>Statistics #2</h4>
            <p className="nk">There are about 3.5 million employed truck drivers in the U.S. as of 2023.</p>
            <div className="progress">
              <div className="progress-bar" style={{ width: "75%" }}></div>
            </div>
          </div>
  
          {/* Card 3 */}
          <div className="stat-card">
            <h4>Statistics #3</h4>
            <p>
              The U.S. trucking industry generated revenue that was worth more than
              the Gross Domestic Product (GDP) of at least 150 countries combined
              in 2023
            </p>
            <div className="progress">
              <div className="progress-bar" style={{ width: "100%" }}>
                <span>Height 100%</span>
              </div>
            </div>
          </div>
          <div className="stat-card">
            <h4>Statistics #4</h4>
            <p className="nn">There are over 1 million for-hire trucking carriers in the U.S.</p>
            <div className="progress">
              <div className="progress-bar" style={{ width: "88%" }}>
                <span>Applications 88%</span>
              </div>
            </div>
          </div>
  
          {/* Card 4 */}
         
          {/* Card 5 */}
          <div className="stat-card">
            <h4>Statistics #5</h4>
            <p className="nn">U.S. trucks moved over 11 billion tons of freight in the U.S.</p>
            <div className="progress">
              <div className="progress-bar" style={{ width: "90%" }}>
                <span>≈ 314,840 km</span>
              </div>
            </div>
          </div>
        </div>
      </section>
            <div id="link3" className="vido">
            <video controls src="/new/v1.mp4"></video>
      <video controls src="/new/v2.mp4"></video>
      <video controls src="/new/v3.mp4"></video>
      <video controls src="/new/v4.mp4"></video>
      <video controls src="/new/v5.mp4"></video>
      <video controls src="/new/v6.mp4"></video>
      <video controls src="/new/v7.mp4"></video>
      <video controls src="/new/v8.mp4"></video>
      <video controls src="/new/v9.mp4"></video>
      <video controls src="/new/v10.mp4"></video>
      <video controls src="/new/v11.mp4"></video>
      <video controls src="/new/v12.mp4"></video>
   
            </div>
            <main id="Facts">
      <div id="linkvip" className="About end">
          <h2>Facts About Our Course</h2>
          <p>Still wondering if you need to go to logistics</p>
          <div className="chiziq">

          </div>
      </div>  
      <div id="linkon" className="fact-container">
        <div className="fact fact1">
          <img src={langs} alt="" />
          <h4>Language upgrade</h4>
          <p>Before the main course, your English will be upgraded through American Business English Expertise!</p>
          <img className="arrow1" src={rightarrow} alt="" />
        </div>
        <div className="fact fact2">
          <img src={truck} alt="" />
          <h4>Trucking Management Mastery
          </h4>
          <p>After the main course, you get armed with all the necessary knowledge on managing trucking business, including carrying out operations through online platforms, websites and app resource kits!</p>
          <img className="arrow2" src={rightarrow} alt="" />
        </div>
        <div className="fact fact3">
          <img src={quality} alt="" />
          <h4 className="qua">Quality Logistics Education</h4>
          <p>During the main course, what you get most is quality education integrated with solid work ethics and long-term experience on transportation logistics!</p>
          <img className="arrow3" src={rightarrow} alt="" />
        </div>
      </div>
      <div className="pl">
      <h2>Partners</h2>
      <p>Companies who trust us</p>
      </div>
      </main>
      <div className="tik">
 <div id="Partners" className="Abo">
          <h2>Partnerss</h2>
          <p>Companies who trust us</p>
          <div className="chiziq end">
          </div>
      </div> 

              <div id="linkoff" className="ticker-track">
  <a href="https://aravancargo.com/"><img src={arava} alt="" /></a>
<a href="https://artellogistics.com/"><img src={artel} alt="" /></a>
<a href="https://www.d2dtransport.org/"><img src={dock} alt="" /></a>
<a href="https://expresscargo.uz/"><img src={express} alt="" /></a>
<a href="https://www.eoglobalinc.com/"><img src={global} alt="" /></a>
<a href="https://www.linkedin.com/company/hally-express-inc"><img src={hally} alt="" /></a>
<a href="https://it-park.uz/uz/itpark/news/namangan-viloyatida-yangi-it-markaz-ochildi"><img src={itpark} alt="" /></a>
<a href="instagram.com/taxir.logistics/"><img src={taxir} alt="" /></a>
<a href="https://www.nooreldsolutions.com/Contact"><img className="noor" src={noor} alt="" /></a>
  </div>
 </div>

 <footer>
<div className="first-part">
<div className="footer1">
       
       <h2>Our address</h2>
       <address>Namangan IT PARK 2nd house, Amir Temur street, Namangan city, Namangan region, Republic of Uzbekistan
       </address>
    </div>
    <div className="footer2">
        <h2>Documents</h2>
        <a href="https://gentle-sunshine-60fff6.netlify.app/static/media/Tasdiqnoma.5d52b6f1064f55a1ac7a.pdf">licence</a>
        <a href="https://gentle-sunshine-60fff6.netlify.app/static/media/photo_2024-06-05_05-48-30.597c708ba51af3757db4.jpg">certificate</a>
        <a href="https://gentle-sunshine-60fff6.netlify.app/static/media/Affidavit.2bf6195cbde30d929bb1.pdf">Affidavit</a>
    </div>
    <div className="footer3">
  <h2>E-mail</h2>
  <a 
  href="https://mail.google.com/mail/u/0/#sent/KtbxLwgdfHbvxmJJcxJLsgGzRZlDmLtPGq?compose=new"
    // onClick={(e) => {
    //   e.preventDefault(); // linkni ochilmasligi uchun
    //   navigator.clipboard.writeText("studybigi@gmail.com")
    //     .then(() => alert("Email copied to clipboard!"))
    //     .catch(() => alert("Failed to copy!"));
    // }}
  >
    studybigi@gmail.com
  </a>
</div>

    <div className="footer4">
        <h2>Contact numbers</h2>
        <a href="tel:+998957270017">+998 95 727 00 17</a>
<a href="tel:+998905539095">+998 90 553 90 95</a>

    </div>
</div>
<div className="second-part">
<iframe
        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d24088.554169029252!2d71.659337!3d41.001857!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAwJzA2LjciTiA3McKwMzknMzMuNiJF!5e0!3m2!1sen!2sus!4v1755135674384!5m2!1sen!2sus"
        width="300px"
        height="200px"
      ></iframe>
     
     <img className="c1" src={cer1} alt="" />
     <img className="c2" src={cer2} alt="" />
     
</div>
<div className="final">
    Copyright © 2025 ETAMIN

</div>
 </footer>
        </>

            
        </>
    )
}