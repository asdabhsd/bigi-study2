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
export default function Uzbekistan(){
    const [scrolled, setScrolled] = useState(false);
   
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50); // 50px scroll bo'lganda rang o'zgaradi
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
                    Bosh sahifa
                    </HashLink>
                    <HashLink smooth to="#link1">
                    Biz haqimizda
                    </HashLink>
                    <HashLink smooth to="#link2">
                    Yangiliklar
                    </HashLink>
                    <HashLink smooth to="#linkvip">
                    Faklar
                    </HashLink>
                    <HashLink smooth to="#linkon">
                    Statistika
                    </HashLink>
                    <HashLink smooth to="#linkoff">
                    Hamkorlar
                    </HashLink>
                   
                    <button 
  onClick={() => window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScOVHIgqEwZVlcd4Ymu5-upaQm-ihDYc2Zp_5wWSETtLaQDBA/alreadyresponded"} 
  className="REGISTER"
>
  Ro'yxatdan o'tish <GoArrowRight className="right-arrow" /> 
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
                <h2>Xalqaro Logistika Akademiyasi</h2>
                <p>3 oy ichida talabgir kasbni egallang! <br />
                B2 darajadagi ingliz tili bilan xalqaro transport logistikasi!
                <br /> Orzuingizdagi ishga 3 qadam!</p>
                <div className="tugma-container">
                    <a href="tel:+998957270017">
                    <div className="tugma1">
                        
                        <p>Qo'ng'iroq</p>
                    </div>
                    </a>
                   <a href="">
                   <div className="tugma2">
                    <TbMessageDots className="message-icon" />
                    <p>Xabar</p>
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
                <h2>Biz haqimizda</h2>
                <p>Logistika sohasida o'z kuchingizni sinab ko'rmoqchimisiz?</p>
            </section>
            <section className="us-text">
                <div className="us-text1">
                <h4>
                "Ming qadamli safar ko'p mayda qadamlardan boshlanadi"
                - Londondan shifokor
                </h4>
                <p>BIGI o'quv guruhi - energik, ishtiyoqli va kuch-quvvatga to'la a'zolardan iborat bo'lib, yuk tashish biznesi bo'yicha darslar o'tish va o'z tajribalarini ulashish haqida ikki marta o'ylamadi, chunki bu boshqa bizneslar uchun qimmatli bo'lishi mumkin. Oxir-oqibat, guruh eng yaxshi transport logistikasi kurslarini yaratishga muvaffaq bo'ldi va biz sizga bu sohada qanchalik oddiy va quvonchli bo'lishi mumkinligini ochiq fikrli tizim va aniq maqsad bo'lsa, qanday qilib bo'lishini aytib berishni xohlaymiz.</p>
                </div>
                <div className="us-text2">
                Akademiyada hozirda o'tilayotgan "AQSh Yuk Tashish" kursi 3 bosqichda o'tiladi.
            <br /> <br />
1-bosqich: "Logistika uchun ingliz tili" - talabalarning ingliz tilini umumiy logistika terminlari va so'zlari yordamida rivojlantirishga qaratilgan. 2 hafta davom etadi. Kurs logistika bo'yicha umumiy tushunchani oshirishga va "Amerika talaffuzi"ni yaxshilashga qaratilgan.
<br /> <br />
2-bosqich: Yuk tashish mutaxassislari uchun zarur bo'lgan bilimlar, tushunchalar va ko'nikmalar, jumladan, dispetcherlik, yangilashlar, avtopark, xavfsizlik, buxgalteriya hisobi va ELD boshqaruvi shakllantiriladi. Bu bosqich 1 oy davom etadi.
<br /> <br />
3-bosqich: Hamkor kompaniyalarimizda 1 oy davomida amaliyotchi sifatida bepul amaliyot va treninglarda qatnashish va "DAROMAD OLISH" bosqichiga o'tish!
<br /> <br />
✅ Biz talabalarni suhbat orqali tanlaymiz. Agar sizning ingliz tilingiz B2 yoki undan yuqori darajada bo'lsa, tez orada ko'rishguncha!
                </div>
                <div className="us-text3">
                Tovarlar va xizmatlarni tashish har doim mamlakat iqtisodiyotining asosiy qo'llab-quvvatlovchilaridan biri bo'lib kelgan. O'zbekiston Respublikasini ham qo'shab olgan holda, har bir mamlakat o'z logistikasiga tayanadi, shu bilan birga tomonlarning bizneslarini uzluksiz amalga oshirish va iqtisodiyotini yaxshilash uchun. Transport turlari buni qo'llab-quvvatlaydi. Sizda yuk tashuvchi samolyotlar, ko'proq yuk tashuvchi kemalar va temir yo'llar ham o'z navbatida yuklarni tashishda ishtirok etadi. Ammo iqtisodiyotni ko'tarishga eng ko'p hissa qo'shadigan va eng faol transport turi - bu yo'llar va ha, siz to'g'ri taxmin qildingiz - yuk mashinalari o'z hissasini qo'shadi. Shuning uchun yuk tashish bizni qiziqtirgan narsaga aylandi, chunki u mamlakatning iqtisodiy o'sishiga hissa qo'shadi va 2023 yilda tashkil etilgan BIGI o'quv markazi sizga ushbu hissaning muhim qismi bo'lishingizni xohlaydi.
                </div>
            </section>
            <>
            <section id="link2" className="yangi us">
                <h2>Yangiliklar</h2>
                <p>Bizning kurslarimiz haqida eng so'nggi yangiliklardan xabardor bo'lishingiz mumkin</p>
            </section>
            <section id="statistics" className="stats-section">
        <div className="stats-header">
          <h2>LOGISTIKADA KATTA STATISTIKA</h2>
          <p>Kuniga minglab yuk tashishlar va ko'plab imkoniyatlar</p>
          <div className="divider"></div>
        </div>
  
        <div className="stats-grid">
          <div className="stat-card">
            <h4>Statistika #1</h4>
            <p className="nk">2023 yilda yuk tashish sanoati deyarli 900 milliard dollar daromad oldi.</p>
            <div className="progress">
              <div className="progress-bar" style={{ width: "100%" }}></div>
            </div>
          </div>
  
          <div className="stat-card">
            <h4>Statistika #2</h4>
            <p className="nk">2023 yil holatiga ko'ra AQShda taxminan 3,5 million yuk mashinasi haydovchisi ishlaydi.</p>
            <div className="progress">
              <div className="progress-bar" style={{ width: "75%" }}></div>
            </div>
          </div>
  
          <div className="stat-card">
            <h4>Statistika #3</h4>
            <p>
              2023 yilda AQSh yuk tashish sanoati kamida 150 mamlakatning YaIMini birlashtirganidan ko'proq daromad keltirdi.
            </p>
            <div className="progress">
              <div className="progress-bar" style={{ width: "100%" }}>
                <span>Balandlik 100%</span>
              </div>
            </div>
          </div>
          <div className="stat-card">
            <h4>Statistika #4</h4>
            <p className="nn">AQShda 1 milliondan ortiq yuk tashish kompaniyalari mavjud.</p>
            <div className="progress">
              <div className="progress-bar" style={{ width: "88%" }}>
                <span>Arizalar 88%</span>
              </div>
            </div>
          </div>
          
          <div className="stat-card">
            <h4>Statistika #5</h4>
            <p className="nn">AQSh yuk mashinalari AQShda 11 milliard tonnadan ortiq yuk tashidi.</p>
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
          <h2>Kursimiz Haqida Faklar</h2>
          <p>Logistikaga borish kerakmi deb hali ham o'ylayapsizmi?</p>
          <div className="chiziq"></div>
      </div>  
      <div id="linkon" className="fact-container">
        <div className="fact fact1">
          <img src={langs} alt="" />
          <h4>Tilni yaxshilash</h4>
          <p>Asosiy kursdan oldin sizning ingliz tilingiz Amerika Biznes Ingliz Tilining Mutaxassisligi orqali yaxshilanadi!</p>
          <img className="arrow1" src={rightarrow} alt="" />
        </div>
        <div className="fact fact2">
          <img src={truck} alt="" />
          <h4>Yuk Tashish Boshqaruvi Ustaligi</h4>
          <p>Asosiy kursdan so'ng, siz yuk tashish biznesini boshqarish bo'yicha barcha zarur bilimlar bilan qurollanasiz, shu jumladan onlayn platformalar, veb-saytlar va ilova resurs to'plamlari orqali operatsiyalarni amalga oshirish!</p>
          <img className="arrow2" src={rightarrow} alt="" />
        </div>
        <div className="fact fact3">
          <img src={quality} alt="" />
          <h4 className="qua">Sifatli Logistika Ta'limi</h4>
          <p>Asosiy kurs davomida siz eng ko'p olasiz narsa - bu transport logistikasi bo'yicha uzoq muddatli tajriba va mustahkam ish axloqi bilan birlashtirilgan sifatli ta'limdir!</p>
          <img className="arrow3" src={rightarrow} alt="" />
        </div>
      </div>
      <div className="pl">
      <h2>Hamkorlar</h2>
      <p>Bizga ishonadigan kompaniyalar</p>
      </div>
      </main>
      <div className="tik">
 <div id="Partners" className="Abo">
          <h2>Hamkorlar</h2>
          <p>Bizga ishonadigan kompaniyalar</p>
          <div className="chiziq end"></div>
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
       <h2>Bizning manzil</h2>
       <address>Namangan IT PARK 2-uy, Amir Temur ko'chasi, Namangan shahri, Namangan viloyati, O'zbekiston Respublikasi</address>
    </div>
    <div className="footer2">
        <h2>Hujjatlar</h2>
        <a href="https://gentle-sunshine-60fff6.netlify.app/static/media/Tasdiqnoma.5d52b6f1064f55a1ac7a.pdf">Litsenziya</a>
        <a href="https://gentle-sunshine-60fff6.netlify.app/static/media/photo_2024-06-05_05-48-30.597c708ba51af3757db4.jpg">Sertifikat</a>
        <a href="https://gentle-sunshine-60fff6.netlify.app/static/media/Affidavit.2bf6195cbde30d929bb1.pdf">Afidavit</a>
    </div>
    <div className="footer3">
  <h2>Elektron pochta</h2>
  <a onClick={(e) => {
      e.preventDefault();
      navigator.clipboard.writeText("studybigi@gmail.com")
        .then(() => alert("Elektron pochta buferga nusxalandi!"))
        .catch(() => alert("Nusxalash muvaffaqiyatsiz tugadi!"));
    }}>
    studybigi@gmail.com
  </a>
</div>

    <div className="footer4">
        <h2>Aloqa raqamlari</h2>
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
    Mualliflik huquqi © 2025 ETAMIN
</div>
 </footer>
        </>
        </>
    )
}