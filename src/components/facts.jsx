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
export default function Facts(){
    return(
        <>
               <main id="Facts">
      <div id="Ab" className="About end">
          <h2>Facts About Our Course</h2>
          <p>Still wondering if you need to go to logistics</p>
          <div className="chiziq">

          </div>
      </div>  
      <div className="fact-container">
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
          <h2>Partners</h2>
          <p>Companies who trust us</p>
          <div className="chiziq end">
          </div>
      </div> 

              <div className="ticker-track">
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
        <a href="">licence</a>
        <a href="">certificate</a>
        <a href="">Affidavit</a>
    </div>
    <div className="footer3">
        <h2>E-mail</h2>
        <a href="">studybigi@gmail.com</a>
    </div>
    <div className="footer4">
        <h2>Contact numbers</h2>
        <a href=""></a>
        <a href="+998 95 727 00 17">+998 95 727 00 17</a>
        <a href="">+99890 553 90 95</a>
    </div>
</div>
<div className="second-part">
<iframe
        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d24088.554169029252!2d71.659337!3d41.001857!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAwJzA2LjciTiA3McKwMzknMzMuNiJF!5e0!3m2!1sen!2sus!4v1755135674384!5m2!1sen!2sus"
        width="300px"
        height="200px"
      ></iframe>
     
     <img src={cer1} alt="" />
     <img src={cer2} alt="" />
     
</div>
<div className="final">
    Copyright © 2025 ETAMIN

</div>
 </footer>
        </>
    )
}