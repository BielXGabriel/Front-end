// CSS
import styles from "./Benefits.module.css";

// hooks
import { useNavigate, Link } from "react-router-dom";
import { useAuthentication } from "../../../hooks/useAuthentication";

// react

// components




const Benefits = () => {


    const { logout } = useAuthentication();

    return (
        <div className={styles.home}>

            <div className={styles.texto1} >Todas as maneiras que
                você pode impulsionar
                seu negócio com o app
            </div>


            <Link to="/benefits" ><button className={styles.explorar} > EXPLORE OS BENEFÍCIOS </button></Link>


            <div>
                <div className={styles.White}  >
                    <img className={styles.foguete} src="img/icones/foguete.png" />
                    <div className={styles.titulow}> White </div>

                    <div className={styles.ben1w}>
                        <img src="img/icones/certo.png" />
                        Maior visibilidade
                    </div>

                    <div className={styles.ben2w}>
                        <img src="img/icones/certo.png" />
                        destaque nos serviços
                    </div>

                    <div className={styles.ben3w}>
                        <img src="img/icones/certo.png" />
                        recomendações
                    </div>

                    <div className={styles.ben4w}>
                        <img src="img/icones/certo.png" />
                        taxa de comissão reduzida
                    </div>

                    <div className={styles.ben5w}>
                        <img src="img/icones/certo.png" />
                        ofertas exclusivas
                    </div>

                    <div className={styles.ben6w}>
                        <img src="img/icones/certo.png" />
                        eventos especiais
                        </div>

                    <div className={styles.ben7w}>
                        <img src="img/icones/certo.png" />
                        presskit 
                    </div>
                </div>
            </div>

            <div>
                <div className={styles.Bronze}  >
                    <img className={styles.foguete} src="img/icones/foguete.png" />
                    <div className={styles.titulobr}> Bronze </div>

                    <div className={styles.ben1w}>
                        <img src="img/icones/certo.png" />
                        Maior visibilidade
                    </div>

                    <div className={styles.ben2w}>
                        <img src="img/icones/certo.png" />
                        destaque nos serviços
                    </div>

                    <div className={styles.ben3w}>
                        <img src="img/icones/certo.png" />
                        recomendações
                    </div>

                    <div className={styles.ben4w}>
                        <img src="img/icones/certo.png" />
                        taxa de comissão reduzida
                    </div>

                    <div className={styles.ben5w}>
                        <img src="img/icones/certo.png" />
                        ofertas exclusivas
                    </div>

                    <div className={styles.ben6w}>
                        <img src="img/icones/certo.png" />
                        eventos especiais
                        </div>

                    <div className={styles.ben7w}>
                        <img src="img/icones/certo.png" />
                        presskit 
                    </div>
                </div>
            </div>

            <div>
                <div className={styles.Prata}  >
                    <img className={styles.foguete} src="img/icones/foguete.png" />
                    <div className={styles.titulos}> Prata </div>
                    <div className={styles.ben1w}>
                        <img src="img/icones/certo.png" />
                        Maior visibilidade
                    </div>

                    <div className={styles.ben2w}>
                        <img src="img/icones/certo.png" />
                        destaque nos serviços
                    </div>

                    <div className={styles.ben3w}>
                        <img src="img/icones/certo.png" />
                        recomendações
                    </div>

                    <div className={styles.ben4w}>
                        <img src="img/icones/certo.png" />
                        taxa de comissão reduzida
                    </div>

                    <div className={styles.ben5w}>
                        <img src="img/icones/certo.png" />
                        ofertas exclusivas
                    </div>

                    <div className={styles.ben6w}>
                        <img src="img/icones/certo.png" />
                        eventos especiais
                        </div>

                    <div className={styles.ben7w}>
                        <img src="img/icones/certo.png" />
                        presskit 
                    </div>
                </div>
            </div>


            <div>
                <div className={styles.Ouro}  >
                    <img className={styles.foguete} src="img/icones/foguete.png" />
                    <div className={styles.titulog}> Ouro </div>

                    <div className={styles.ben1w}>
                        <img src="img/icones/certo.png" />
                        Maior visibilidade
                    </div>

                    <div className={styles.ben2w}>
                        <img src="img/icones/certo.png" />
                        destaque nos serviços
                    </div>

                    <div className={styles.ben3w}>
                        <img src="img/icones/certo.png" />
                        recomendações
                    </div>

                    <div className={styles.ben4w}>
                        <img src="img/icones/certo.png" />
                        taxa de comissão reduzida
                    </div>

                    <div className={styles.ben5w}>
                        <img src="img/icones/certo.png" />
                        ofertas exclusivas
                    </div>

                    <div className={styles.ben6w}>
                        <img src="img/icones/certo.png" />
                        eventos especiais
                        </div>

                    <div className={styles.ben7w}>
                        <img src="img/icones/certo.png" />
                        presskit 
                    </div>
                </div>
            </div>

            <div>
                <div className={styles.Black}  >
                    <img className={styles.foguete} src="img/icones/foguetew.png" />
                    <div className={styles.titulob}> Black </div>

                    <div className={styles.ben1w}>
                        <img src="img/icones/certow.png" />
                        Maior visibilidade
                    </div>

                    <div className={styles.ben2w}>
                        <img src="img/icones/certow.png" />
                        destaque nos serviços
                    </div>

                    <div className={styles.ben3w}>
                        <img src="img/icones/certow.png" />
                        recomendações
                    </div>

                    <div className={styles.ben4w}>
                        <img src="img/icones/certow.png" />
                        taxa de comissão reduzida
                    </div>

                    <div className={styles.ben5w}>
                        <img src="img/icones/certow.png" />
                        ofertas exclusivas
                    </div>

                    <div className={styles.ben6w}>
                        <img src="img/icones/certow.png" />
                        eventos especiais
                        </div>

                    <div className={styles.ben7w}>
                        <img src="img/icones/certow.png" />
                        presskit 
                    </div>
                </div>
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

export default Benefits;


