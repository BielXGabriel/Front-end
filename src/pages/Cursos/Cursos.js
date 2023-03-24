// CSS
import styles from "./Cursos.module.css";

// hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useNavigate, Link } from "react-router-dom";
import { useAuthentication } from "../Home/useAuthentication";

// react
import React, { useState } from "react";


// icons
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ComputerIcon from '@mui/icons-material/Computer';
import ShareIcon from '@mui/icons-material/Share';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import SavingsIcon from '@mui/icons-material/Savings';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import BarChartIcon from '@mui/icons-material/BarChart';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';






const Cursos = () => {
  const { documents: posts, loading } = useFetchDocuments("posts");


  const { logout } = useAuthentication();

  const navigate = useNavigate();

  const [query, setQuery] = useState("");


  const [top, setTop] = useState(0);

  const [position, setPosition] = useState(0);


  console.log(loading);




  return (

    <div className={styles.home}>

      <div className={styles.t1}>Descubra todos os planos</div>

      <Link to="/Aula1"><button className={styles.acesse1}>Acesse a trilha inicial</button></Link>

      <div className={styles.t3}>Cursos em destaque</div>




      <div className={styles.modura1}><img className={styles.img1} src="https://s3-alpha-sig.figma.com/img/e43a/0baf/84a4f6b2fb6c6486a75e6e5037a15eb2?Expires=1678060800&Signature=JE80rwPQzJpa0zNxyn258EodcW4G6tYTIFz-af6jaOhwyEwjFieIyy3OMwzXgLBjb2dTvSGhG~PDvVMX6X~vK7FluWDGg~XEyhX4HFaO-UpQxQhrt4QseKChL89s94ZXzxlCY-D~PmJiAhWqaLJ3TcecrPiPTFU6zDfuSxshBiyGDUX~neuqJNBIB35mGB0TiD5dpUFFbrzWBEzjvWpyjqZQSqJJr0ICoj5WexMoG2hAn6eBuu74dwTeQi9Uv8craJ7dO24ocRD5eBiXm1c5hlxGRiExFCX8011maHsXv86w6LodgdzlcjblTa7Dxwp~Iahn0ekOt5VGlhDqPoZxpQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img><i>Categoria</i></div>
      <div className={styles.modura2}><img className={styles.img2} src="https://s3-alpha-sig.figma.com/img/058f/5355/59dcbb9a3899033ffdd8260ae10c3bb0?Expires=1678060800&Signature=QAcueAzsuo8bjNRZ3VX4~PSCrCydFhV-13T7PxyvMWqqMiGnhi6e8SanMeSbAO4QKdGVj7Uo0ZMo5bMwSkDA2Klal0j2M6RPYrSz4Iovvag3bRWg9Xo~IbzZBBn-vdrtRpEswR0WcCrkQ2J4vrjqtqb3NCRNsJ6TrLVo3YO1999VHL70LFQYPK8BYBdfSPfPr0U6ymbXFSuFqc3nbAF0o2BqwVM2NjcwiuPxwI9QztbcbzsDrJ0kfHPXw~GxqscxcY~-Ds8hXNGNbIptS8jrUKytl~ErSowfWssuhxpW944FqnbrgrgmVlek7sRkK7XePej8tDmv8hi7lIlsSxkwxA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img><i>Categoria</i></div>
      <div className={styles.modura3}><img className={styles.img3} src="https://s3-alpha-sig.figma.com/img/d8b1/ed38/48a0117c893c0fa45615698e3ffdc1c2?Expires=1678060800&Signature=LF2fBAjKgbFTeXl5Sw1PJChWMfa7Y2jlR5J4AXyAuCkyVE7B5rIJRMc5QDxgTu5C6GxAaEfexOn7hcqx~Ic0mvtErk10VqHqwDoIrH1m8KCL4INNHEQGfhkj2K1LmQ9V8~hX-~qwTL45xWK0rH~6wxZtjaqbLMIUQAaViXwXnBhdR5d0INUvgIq4vGiaS7pg6E5PY0e1l8O04IpWbVTmo~ECKfEj7S6u96KnZjrD-BoEBiTiAGFnlu8D2~Q1d7A7dD3EkuMd6EeFiIqXBKG4t-MiGzTPVKpOTsUlyCxd7bglDgr0KNABaUcd60EWyRIAxs5Hv4ozCZAokS~oRN6pOg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img><i>Categoria</i></div>
      <div className={styles.modura4}><img className={styles.img4} src="https://s3-alpha-sig.figma.com/img/f25a/3b37/ab75cc2b256686be2a420ea21cbd5d58?Expires=1678060800&Signature=HT~cfL~JRAm9Y73K8teTpGtzqn1hs7NRUjCeqBXsVplpMGJJR-A5otjymrlSN8~3w0qHCJT9eSboBP8eIVUtquGE8w~Hb3DxPLG8Nhkh-czBX206Xfqv5OJ7UHJaew9JEQ3gY-Ej0KNBlWhyemBIF39f4mBqNhpr31vNssfHQu1tk~LE~-Ye-72o8198IuS7rDQenSnjYo43ebZ9-kKpQiTndme-hDv-9oJME5JzQAbRI89Rgi6msBJfmI781HyBO~UyXYEG-2GV6~s75VIWAw~B7AtTGQY7yj~UI8bGMMTGGIAtM9MbVeoCXFnW12V8eHCDY1I3nDaO2ANEm0H4eg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img><i>Categoria</i></div>




      <div className={styles.Cursos}>Cursos</div>

      <div className={styles.btop1} >todos</div>

      <div className={styles.btop2} >maior avaliação</div>

      <div className={styles.btop3} >recentes</div>


      <Swiper

        direction="Vertical"
        className={styles.slide2}
        modules={[Navigation, Pagination]}
        slidesPerView={3}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",


        }}>



        <SwiperSlide>
          <Link to="/s1" className={styles.bt1}>

            <div className={styles.btb} /><AttachMoneyIcon className={styles.btb2} /><nobr>FINANÇAS</nobr><ExpandMoreIcon className={styles.serv2} />


          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/s2" className={styles.bt2}>

            <div className={styles.btb} /><AppShortcutIcon className={styles.btb2} /><nobr>MARKETING </nobr><ExpandMoreIcon className={styles.serv2} />

          </Link>
        </SwiperSlide>

        <SwiperSlide>

          <Link to="/s3" className={styles.bt3}>

            <div className={styles.btb} /><SavingsIcon className={styles.btb2} /><nobr>JURÍDICO</nobr><ExpandMoreIcon className={styles.serv2} />

          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/s4" className={styles.bt4}>

            <div className={styles.btb} /><PlayArrowIcon className={styles.btb2} /><nobr>NOME CURSO AQUI</nobr><ExpandMoreIcon className={styles.serv4} />

          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/s4" className={styles.bt5}>

            <div className={styles.btb} /><BarChartIcon className={styles.btb2} /><nobr>NOME CURSO AQUI</nobr><ExpandMoreIcon className={styles.serv4} />

          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/s4" className={styles.bt6}>

            <div className={styles.btb} /><BarChartIcon className={styles.btb2} /><nobr>NOME CURSO AQUI</nobr><ExpandMoreIcon className={styles.serv4} />

          </Link>
        </SwiperSlide>



        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>

      </Swiper>

      <div className={styles.cota}>Continue assistindo</div>

      <div className={styles.temblema1}><Link to="/Aula1">< PlayArrowIcon className={styles.btb3} /> </Link> </div>


      <Swiper

        direction="Vertical"
        className={styles.slide3}
        modules={[Navigation, Pagination]}
        slidesPerView={3}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",

        }}>


        <SwiperSlide>
          <div className={styles.ferra}>FERRAMENTAS</div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.temblema2} >
            <div className={styles.emblema1}><i>Planilha financeira</i>
              VER MAIS
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.temblema3} >
            <div className={styles.emblema1}><i>Planilha financeira</i>
              VER MAIS
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>

      </Swiper>

      <div className={styles.tela}></div>








      <Link to="/service" className={styles.icone1} ><img src="img/icones/serviços.png"></img> </Link>

      <Link to="/Cursos" className={styles.icone2} ><img src="img/icones/Vector.png"></img></Link>

      <Link to="/networking" className={styles.icone3} ><img src="img/icones/akar-icons_network.png"></img></Link>

      <Link to="/posts/create" className={styles.icone4} ><img src="img/icones/Group.png"></img></Link>

      <Link to="/posts/create" className={styles.icone5} ><img src="img/icones/Cel.png"></img></Link>

      <Link to="/financeiro" className={styles.icone6} ><img src="img/icones/money.png"></img></Link>

      <Link to="/" className={styles.sair} onClick={logout} >SAIR</Link>


    </div>

  );
};



export default Cursos;
