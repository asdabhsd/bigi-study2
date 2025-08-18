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

export default function Rus() {
    const [scrolled, setScrolled] = useState(false);
   
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50); // Изменение цвета после прокрутки 50px
      };
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return(
        <>
            <div id="lins" className={`NAVBAR ${scrolled ? "scrolled" : ""}`}>
                <img id="link" src="/new/globus.jpg" alt="" />
                <div className="menyu">
                    <RxHamburgerMenu className="ham"/>
                    <div className="UL">
                        <HashLink smooth to="#link0">
                            Главная
                        </HashLink>
                        <HashLink smooth to="#link1">
                            О нас
                        </HashLink>
                        <HashLink smooth to="#link2">
                            Новости
                        </HashLink>
                        <HashLink smooth to="#linkvip">
                            Факты
                        </HashLink>
                        <HashLink smooth to="#linkon">
                            Статистика
                        </HashLink>
                        <HashLink smooth to="#linkoff">
                            Партнеры
                        </HashLink>
                       
                        <button 
                            onClick={() => window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScOVHIgqEwZVlcd4Ymu5-upaQm-ihDYc2Zp_5wWSETtLaQDBA/alreadyresponded"} 
                            className="REGISTER"
                        >
                            Регистрация <GoArrowRight className="right-arrow" /> 
                        </button>
                    </div>
                </div>
                <div className="LANG"> <NavLink to="/">EN</NavLink>
<NavLink to="/rus">RU</NavLink>
<NavLink to="/uzb">UZ</NavLink>

                </div>
            </div>

            <div id="link0" className="home">
                <img src={banner} alt="" />
            </div>

            <div className="tekst">
                <h2>Международная Академия Логистики</h2>
                <p>Освойте востребованную профессию за 3 месяца! <br />
                Международная транспортная логистика со знанием английского B2!<br /> 
                3 шага к работе вашей мечты!</p>
                <div className="tugma-container">
                    <a href="tel:+998957270017">
                        <div className="tugma1">
                            <IoCallSharp className="call-icon" />
                            <p>Позвонить</p>
                        </div>
                    </a>
                    <a href="">
                        <div className="tugma2">
                            <TbMessageDots className="message-icon" />
                            <p>Сообщение</p>
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
                <h2>О нас</h2>
                <p>Всегда хотели попробовать себя в сфере логистики?</p>
            </section>

            <section className="us-text">
                <div className="us-text1">
                    <h4>
                        "Путешествие в тысячу миль начинается с одного шага" 
                        - лондонский доктор
                    </h4>
                    <p>
                        Команда BIGI, состоящая из энергичных, увлеченных и мотивированных членов, 
                        никогда не сомневалась в проведении занятий по грузоперевозкам и 
                        делилась своим опытом, потому что это может быть ценным для других 
                        предприятий. В конечном итоге команде удалось создать лучшие курсы 
                        по транспортной логистике, и мы хотели бы показать вам, насколько 
                        просто и приятно быть творческой частью этой отрасли, если у вас 
                        есть открытая система мышления и четкая цель.
                    </p>
                </div>
                <div className="us-text2">
                    Курс "Грузоперевозки в США", который в настоящее время проводится в академии, 
                    будет преподаваться в 3 этапа.
                    <br /><br />
                    Этап 1️⃣: "Английский для логистики" - направлен на развитие английского языка 
                    студентов с помощью общей логистической лексики и терминов. Длится 2 недели. 
                    Курс углубит общее понимание логистики и сделает акцент на улучшении 
                    "американского акцента".
                    <br /><br />
                    Этап 2️⃣: Формируются знания, понимание и навыки, необходимые для специалистов 
                    по грузоперевозкам, такие как диспетчеризация, обновления, автопарк, 
                    безопасность, бухгалтерия и управление ELD. Этот этап длится 1 месяц.
                    <br /><br />
                    Этап 3️⃣: Присоединение к бесплатной практике и тренингам в наших компаниях-партнерах 
                    в качестве стажера на 1 месяц и переход на этап "ЗАРАБОТКА"!
                    <br /><br />
                    ✅ Мы отбираем студентов через собеседование. Если ваш уровень английского B2 или выше, 
                    будем рады видеть вас в ближайшее время.
                </div>
                <div className="us-text3">
                    Перевозка товаров и услуг всегда была одним из основных двигателей экономики страны. 
                    Каждая страна, включая Республику Узбекистан, полагается на свою логистику, 
                    чтобы обеспечить бесперебойное ведение бизнеса и улучшить свою экономику. 
                    Виды транспорта поддерживают это. Есть самолеты, перевозящие грузы, корабли, 
                    перевозящие больше грузов, и железные дороги, которые также перевозят грузы 
                    оптом. Но наиболее используемым и активным видом транспорта, который вносит 
                    наибольший вклад в экономический рост, являются дороги и - да, вы угадали - 
                    грузовики, которые делают свою часть работы. Вот почему грузоперевозки стали 
                    для нас интересными, поскольку они способствуют экономическому росту страны, 
                    и BIGI, основанный в 2023 году, хотел бы, чтобы вы стали важной частью этого вклада.
                </div>
            </section>

            <section id="link2" className="yangi us">
                <h2>Новости</h2>
                <p>Вы можете быть в курсе последних новостей о наших курсах</p>
            </section>

            <section id="statistics" className="stats-section">
                <div className="stats-header">
                    <h2>ВАЖНАЯ СТАТИСТИКА В ЛОГИСТИКЕ</h2>
                    <p>Тысячи грузоперевозок в день и множество возможностей</p>
                    <div className="divider"></div>
                </div>
            
                <div className="stats-grid">
                    <div className="stat-card">
                        <h4>Статистика #1</h4>
                        <p className="nk">В 2023 году индустрия грузоперевозок заработала почти 900 миллиардов долларов дохода.</p>
                        <div className="progress">
                            <div className="progress-bar" style={{ width: "100%" }}></div>
                        </div>
                    </div>
            
                    <div className="stat-card">
                        <h4>Статистика #2</h4>
                        <p className="nk">По состоянию на 2023 год в США работает около 3,5 миллионов водителей грузовиков.</p>
                        <div className="progress">
                            <div className="progress-bar" style={{ width: "75%" }}></div>
                        </div>
                    </div>
            
                    <div className="stat-card">
                        <h4>Статистика #3</h4>
                        <p>
                            В 2023 году индустрия грузоперевозок США принесла доход, который превышал 
                            ВВП как минимум 150 стран вместе взятых.
                        </p>
                        <div className="progress">
                            <div className="progress-bar" style={{ width: "100%" }}>
                                <span>Высота 100%</span>
                            </div>
                        </div>
                    </div>
                    <div className="stat-card">
                        <h4>Статистика #4</h4>
                        <p className="nn">В США насчитывается более 1 миллиона компаний по грузоперевозкам.</p>
                        <div className="progress">
                            <div className="progress-bar" style={{ width: "88%" }}>
                                <span>Заявки 88%</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="stat-card">
                        <h4>Статистика #5</h4>
                        <p className="nn">Грузовики США перевезли более 11 миллиардов тонн грузов в США.</p>
                        <div className="progress">
                            <div className="progress-bar" style={{ width: "90%" }}>
                                <span>≈ 314,840 км</span>
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
                    <h2>Факты о нашем курсе</h2>
                    <p>Все еще сомневаетесь, нужно ли вам идти в логистику?</p>
                    <div className="chiziq"></div>
                </div>  
                <div id="linkon" className="fact-container">
                    <div className="fact fact1">
                        <img src={langs} alt="" />
                        <h4>Улучшение языка</h4>
                        <p>Перед основным курсом ваш английский будет улучшен с помощью экспертизы американского делового английского!</p>
                        <img className="arrow1" src={rightarrow} alt="" />
                    </div>
                    <div className="fact fact2">
                        <img src={truck} alt="" />
                        <h4>Мастерство управления грузоперевозками</h4>
                        <p>После основного курса вы будете вооружены всеми необходимыми знаниями по управлению бизнесом грузоперевозок, включая проведение операций через онлайн-платформы, веб-сайты и наборы ресурсов приложений!</p>
                        <img className="arrow2" src={rightarrow} alt="" />
                    </div>
                    <div className="fact fact3">
                        <img src={quality} alt="" />
                        <h4 className="qua">Качественное логистическое образование</h4>
                        <p>Во время основного курса вы получите самое главное - качественное образование, интегрированное с прочной рабочей этикой и долгосрочным опытом в транспортной логистике!</p>
                        <img className="arrow3" src={rightarrow} alt="" />
                    </div>
                </div>
                <div className="pl">
                    <h2>Партнеры</h2>
                    <p>Компании, которые нам доверяют</p>
                </div>
            </main>

            <div className="tik">
                <div id="Partners" className="Abo">
                    <h2>Партнеры</h2>
                    <p>Компании, которые нам доверяют</p>
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
                        <h2>Наш адрес</h2>
                        <address>
                            Наманган IT PARK, 2-й дом, улица Амира Темура, город Наманган, 
                            Наманганская область, Республика Узбекистан
                        </address>
                    </div>
                    <div className="footer2">
                        <h2>Документы</h2>
                        <a href="https://gentle-sunshine-60fff6.netlify.app/static/media/Tasdiqnoma.5d52b6f1064f55a1ac7a.pdf">Лицензия</a>
                        <a href="https://gentle-sunshine-60fff6.netlify.app/static/media/photo_2024-06-05_05-48-30.597c708ba51af3757db4.jpg">Сертификат</a>
                        <a href="https://gentle-sunshine-60fff6.netlify.app/static/media/Affidavit.2bf6195cbde30d929bb1.pdf">Аффидевит</a>
                    </div>
                    <div className="footer3">
                        <h2>Электронная почта</h2>
                        <a onClick={(e) => {
                            e.preventDefault();
                            navigator.clipboard.writeText("studybigi@gmail.com")
                                .then(() => alert("Email скопирован в буфер обмена!"))
                                .catch(() => alert("Не удалось скопировать!"));
                        }}>
                            studybigi@gmail.com
                        </a>
                    </div>
                    <div className="footer4">
                        <h2>Контактные телефоны</h2>
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
                    Авторские права © 2025 ETAMIN
                </div>
            </footer>
        </>
    )
}