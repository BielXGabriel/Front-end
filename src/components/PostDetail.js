import { Link } from "react-router-dom";

import styles from "./PostDetail.module.css";


// react
import { useState } from "react";

const PostDetail = ({ post }) => {

  const [title, setTitle] = useState("");
  return (
    <div className={styles.post_detail}>
      <div className={styles.box1} > </div>
      <p className={styles.createdby}> Usuario: {post.createdBy} </p>
      
      <button className={styles.salvar_post} >< img src="img/icones/salvar.png" /></button>
      <button className={styles.coracao_post}  >< img src="img/icones/coraçao.png" /></button>

<h2>{post.title}</h2>
      <img src={post.image} alt={post.title} />
      <div className={styles.tags}>

        {post.tags.map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>

        ))}

      </div>
       <div >Este é um exemplo de post</div>
      <input
        className={styles.novo_css}
        type="text"
        placeholder="Responda ao post"
      />


<button className={styles.icon_post} >< img src="img/icones/enviar.png" className={styles.icon1_post} /></button>
     
      <Link to={`/posts/${post.id}`} Name="btn btn-outline" className={styles.btn}>
        Ler
      </Link>

    </div>
  );
};

export default PostDetail;
