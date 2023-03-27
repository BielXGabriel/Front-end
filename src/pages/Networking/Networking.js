// CSS
import styles from "./Networking.module.css";

// hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useNavigate, Link } from "react-router-dom";
import { useAuthentication } from "../../hooks/useAuthentication";
import { useInsertDocument } from "../../hooks/useInsertDocument";
import { useAuthValue } from "../../contexts/AuthContext";


// react
import { useState } from "react";

// components
import PostDetail from "../../components/PostDetail";

// icons


// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';



const Networking = () => {
  const { documents: posts, loading } = useFetchDocuments("posts");

  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  const { logout } = useAuthentication();



  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();

  const { insertDocument, response } = useInsertDocument("posts");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    // validate image
    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.");
    }

    // create tags array
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    // check values
    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!");
    }

    console.log(tagsArray);

    console.log({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    if (formError) return

    insertDocument({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    const handleSubmit = (e) => {
      e.preventDefault();


      // redirect to home page
      navigate("/");
    };

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  console.log(loading);

  return (
    <div className={styles.home}>

      <h1 className={styles.titulo}>Networking</h1>
      <button className={styles.salvar_post} >< img src="img/icones/salvar.png" /></button>


      <div className={styles.create_post}>
        <form onSubmit={handleSubmit}>
          <label>

            <div className={styles.novo_post} >
              Novo Post
            </div>

            <span className={styles.novo_titulo} >Título:</span>
            <input
              className={styles.novo_css}
              type="text"
              name="text"
              required
              placeholder="título..."
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </label>
          <label>
            <span className={styles.img_post}>URL Imagem:</span>
            <input
              className={styles.novo_css}
              type="text"
              name="image"
              required
              placeholder="Insira uma imagem que representa seu post"
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />
          </label>
          <label>
            <span ></span>
            <textarea
              className={styles.novo_texto}
              name="body"
              required
              placeholder="Insira o conteúdo do post"
              onChange={(e) => setBody(e.target.value)}
              value={body}
            >

            </textarea>
          </label>
          <label>
            <span className={styles.tag_post}>Tags:</span>
            <input
              className={styles.tag_postc}
              type="text"
              name="tags"
              required
              placeholder="# tags separadas por vírgula"
              onChange={(e) => setTags(e.target.value)}
              value={tags}
            />
          </label>

          {!response.loading && <button Name="btn" className={styles.enviar_post} >< img src="img/icones/enviar.png" className={styles.icon_post} /></button>}
          {response.loading && (
            <button Name="btn" disabled>
              Aguarde.. .
            </button>
          )}
          {(response.error || formError) && (
            <p className="error">{response.error || formError}</p>
          )}
        </form>
      </div>

      <div className="post-list">
        
        <div className={styles.post}>

          <Swiper
            direction="Vertical"
            className={styles.slide2}
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}>

            <SwiperSlide>

              {posts && posts.map((post) =>
                <PostDetail key={post.id} post={post} />)}

            </SwiperSlide>

            <SwiperSlide>

              {posts && posts.map((post) =>
                <PostDetail key={post.id} post={post} />)}

            </SwiperSlide>
            <SwiperSlide>

              {posts && posts.map((post) =>
                <PostDetail key={post.id} post={post} />)}

            </SwiperSlide>
            <SwiperSlide>

              {posts && posts.map((post) =>
                <PostDetail key={post.id} post={post} />)}

            </SwiperSlide>
            <SwiperSlide>

              {posts && posts.map((post) =>
                <PostDetail key={post.id} post={post} />)}

            </SwiperSlide>
          </Swiper>



        </div>

      <div>
      <button className={styles.assunto_aqui}>.assunto_aqui</button>
      <button className={styles.subAssunto_aqui}>subAssunto_aqui</button>
      <button className={styles.assunto_aqui2}>.assunto_aqui</button>
      <button className={styles.subAssunto_aqui2}>subAssunto_aqui</button>
      
      <div className={styles.Destaque}>DESTAQUES</div>
      <div className={styles.titu1}>Título do post aqui</div>

      <div  className={styles.Recentes}>RECENTES</div>
      <div className={styles.titu2}>Título do post aqui</div>


      </div>



      </div>


      <div className={styles.tela}></div>



      <Link to="/service" className={styles.icone1} ><img src="img/icones/serviços.png"></img> </Link>

      <Link to="/Cursos" className={styles.icone2} ><img src="img/icones/Vector.png"></img></Link>

      <Link to="/forum" className={styles.icone3} ><img src="img/icones/akar-icons_network.png"></img></Link>

      <Link to="/posts/create" className={styles.icone4} ><img src="img/icones/Group.png"></img></Link>

      <Link to="/posts/create" className={styles.icone5} ><img src="img/icones/Cel.png"></img></Link>

      <Link to="/financeiro" className={styles.icone6} ><img src="img/icones/money.png"></img></Link>

      <Link to="/" className={styles.sair} onClick={logout} >SAIR</Link>


    </div>
  );
};

export default Networking;