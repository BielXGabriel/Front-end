// CSS
import styles from "./Service.module.css";

// hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useNavigate, Link } from "react-router-dom";
import { useAuthentication } from "../Home/useAuthentication";

// react
import React, { useState } from "react";


// icons
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';


// import Swiper core and required modules
import { Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';






const Service = () => {
  const { documents: posts, loading } = useFetchDocuments("posts");


  const { logout } = useAuthentication();

  const navigate = useNavigate();

  const [query, setQuery] = useState("");


  const [top, setTop] = useState(0);

  const [position, setPosition] = useState(0);


  console.log(loading);




  return (

    <div className={styles.home}>



      <Swiper 
      className={styles.slide} 
        modules={[Navigation, Pagination]}
        slidesPerView={3}
        navigation={{
          nextEl: ".swiper-button-next" ,
          prevEl: ".swiper-button-prev", }}>

        <SwiperSlide>
          <button className={styles.box1} ></button>
          <div className={styles.textob1} >Categoria</div>
        </SwiperSlide>

        <SwiperSlide>
          <button className={styles.box1} ></button>
          <div className={styles.textob1} >Categoria</div>
        </SwiperSlide>

        <SwiperSlide>
          <button className={styles.box1} ></button>
          <div className={styles.textob1} >Categoria</div>
        </SwiperSlide>

        <SwiperSlide>
          <button className={styles.box1} ></button>
          <div className={styles.textob1} >Categoria</div>
        </SwiperSlide>

        <SwiperSlide>
          <button className={styles.box1} ></button>
          <div className={styles.textob1} >Categoria</div>
        </SwiperSlide>

        <SwiperSlide>
          <button className={styles.box1} ></button>
          <div className={styles.textob1} >Categoria</div>
        </SwiperSlide>

        <SwiperSlide>
          <button className={styles.box1} ></button>
          <div className={styles.textob1} >Categoria</div>
        </SwiperSlide>

        <SwiperSlide>
          <button className={styles.box1} ></button>
          <div className={styles.textob1} >Categoria</div>
        </SwiperSlide>


      </Swiper>


      <img className={styles.img1} src="img/fotos/REctangle 396.png"></img>
      <img className={styles.img2} src="img/fotos/REctangle 398.png"></img>
      <img className={styles.img3} src="img/fotos/REctangle 399.png"></img>
      <img className={styles.img4} src="img/fotos/REctangle 397.png"></img>


      <div className={styles.texto1}>RESULTADOS</div>


      <div className={styles.SearchIcon}><SearchIcon /></div>



      <div className={styles.Serviço}>Serviços</div>

      <div className={styles.btop1} >todos</div>

      <div className={styles.btop2} >maior avaliação</div>

      <div className={styles.btop3} >recentes</div>


      <Swiper 
      direction="Vertical"
        className={styles.slide2}
        modules={[Navigation, Pagination]}
        slidesPerView={3}
        navigation={{
          nextEl: ".swiper-button-next" ,
          prevEl: ".swiper-button-prev",    
  }}>



        <SwiperSlide>
          <Link to="/s1" className={styles.bt1}>

            <div className={styles.btb} /><nobr>NOME SERVIÇO AQUI</nobr><ArrowForwardIosIcon className={styles.serv2} />
            <div className={styles.serv1}><i>Empresa l 4,6</i><StarIcon /></div>

          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/s2" className={styles.bt2}>

            <div className={styles.btb} /><nobr>NOME SERVIÇO AQUI</nobr><ArrowForwardIosIcon className={styles.serv2} />
            <div className={styles.serv1}><i>Empresa l 4,9</i><StarIcon /></div>

          </Link>
        </SwiperSlide>

        <SwiperSlide>

          <Link to="/s3" className={styles.bt3}>

            <div className={styles.btb} /><nobr>NOME SERVIÇO AQUI</nobr><ArrowForwardIosIcon className={styles.serv2} />
            <div className={styles.serv1}><i>Empresa l 4,6</i><StarIcon /></div>

          </Link>
        </SwiperSlide>
        
        <SwiperSlide>
          <Link to="/s4" className={styles.bt4}>

            <div className={styles.btb} /><nobr>NOME SERVIÇO AQUI</nobr><ArrowForwardIosIcon className={styles.serv4} />
            <div className={styles.serv3}><i>Empresa l 4,8</i><StarIcon /></div>

          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/s4" className={styles.bt5}>

            <div className={styles.btb} /><nobr>NOME SERVIÇO AQUI</nobr><ArrowForwardIosIcon className={styles.serv4} />
            <div className={styles.serv3}><i>Empresa l 4,8</i><StarIcon /></div>

          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/s4" className={styles.bt6}>

            <div className={styles.btb} /><nobr>NOME SERVIÇO AQUI</nobr><ArrowForwardIosIcon className={styles.serv2} />
            <div className={styles.serv1}><i>Empresa l 4,8</i><StarIcon /></div>

          </Link>
        </SwiperSlide>

        

        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>

      </Swiper>
      

      <div className={styles.cota}>COTAÇÕES / SOLICITAÇÕES</div>

      <div className={styles.temblema1} >
        <div className={styles.emblema1}><i>Pedido #002</i>
          Nome do Serviço tal dd/mm/yyy - dd/mm/yyyy
        </div>
        <CalendarTodayIcon className={styles.eicon1} />
        <div className={styles.bemblema1} >VER COTAÇÃO</div>
      </div>


      <div className={styles.temblema2} >
        <div className={styles.emblema1}><i>Pedido #002</i>
          Nome do Serviço tal dd/mm/yyy - dd/mm/yyyy
        </div>
        <CalendarTodayIcon className={styles.eicon1} />
        <div className={styles.bemblema1} >VER COTAÇÃO</div>
      </div>


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



export default Service;
