// CSS
import styles from "./Cursos.module.css";

// hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useNavigate, Link } from "react-router-dom";
import { useAuthentication } from "../Home/useAuthentication";

// react
import React, { useState } from "react";


// icons
import ShareIcon from '@mui/icons-material/Share';
import SavingsIcon from '@mui/icons-material/Savings';
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




      <div className={styles.modura1}><img className={styles.img1} src="img/fotos/Rectangle 396.png"></img><i>Categoria</i></div>
      <div className={styles.modura2}><img className={styles.img2} src="img/fotos/Rectangle 398.png"></img><i>Categoria</i></div>
      <div className={styles.modura3}><img className={styles.img3} src="img/fotos/Rectangle 399.png"></img><i>Categoria</i></div>
      <div className={styles.modura4}><img className={styles.img4} src="img/fotos/Rectangle 397.png"></img><i>Categoria</i></div>




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

            <div className={styles.btb} /><img className={styles.btb2} src="img/icones/financa.png" /> <nobr>FINANÇAS</nobr><ExpandMoreIcon className={styles.serv2} />


          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/s2" className={styles.bt2}>

            <div className={styles.btb} /><img className={styles.btb2} src="img/icones/marketing.png" /> <nobr>MARKETING</nobr><ExpandMoreIcon className={styles.serv2} />

          </Link>
        </SwiperSlide>

        <SwiperSlide>

          <Link to="/s3" className={styles.bt3}>

            <div className={styles.btb} /><img className={styles.btb2} src="img/icones/financa.png" /> <nobr>JURÍDICO</nobr><ExpandMoreIcon className={styles.serv2} />

          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/s4" className={styles.bt4}>

            <div className={styles.btb} /><img className={styles.btb3} src="img/icones/porcen.png" /> <nobr>Nome do curso</nobr>

          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/s4" className={styles.bt5}>

            <div className={styles.btb} /><img className={styles.btb3} src="img/icones/play.png" /> <nobr>Nome do curso</nobr>

          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/s4" className={styles.bt6}>

            <div className={styles.btb} /><img className={styles.btb3} src="img/icones/cadeado2.png" /> <nobr>Nome do curso</nobr>

          </Link>
        </SwiperSlide>



        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>

      </Swiper>

      <div className={styles.cota}>Continue assistindo</div>

      <div className={styles.temblema1}><Link to="/Aula1"><img src="img/icones/PLAY.png" className={styles.play1} /> </Link> </div>


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

      <Link to="/lean" className={styles.icone4} ><img src="img/icones/Group.png"></img></Link>

      <Link to="/accountbank" className={styles.icone5} ><img src="img/icones/Cel.png"></img></Link>

      <Link to="/machinecard" className={styles.icone6} ><img src="img/icones/money.png"></img></Link>

      <Link to="/" className={styles.sair} onClick={logout} >SAIR</Link>


    </div>

  );
};



export default Cursos;
