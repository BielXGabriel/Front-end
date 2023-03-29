// CSS
import styles from "./Level.module.css";

// hooks
import { useNavigate, Link } from "react-router-dom";
import { useAuthentication } from "../../hooks/useAuthentication";

// react

// components




const Accountbank = () => {


    const { logout } = useAuthentication();

    return (
        <div className={styles.home}>

            <div>
                <div className={styles.nivel1}  >
                    <div className={styles.NivelN1}  > WHITE III </div>
                    <div className={styles.NivelN2}  > GOLD I </div>
                    <div className={styles.barra} ></div>
                    <div className={styles.inicioxp}  > 000 xp</div>
                    <div className={styles.finalxp}  > 800 xp </div>
                </div>

                <div className={styles.TBeneficios}  >Benefícios alcançados</div>
                <button className={styles.bot1} >maior visibilidade </button>
                <button className={styles.bot2} > taxa de comissão reduzida </button>

                <div className={styles.ProximoN}  >
                    <img className={styles.Npor} src="img/fotos/nivel.png" />
                    <div className={styles.Ntext}> para o nível Gold</div>

                    <div className={styles.Ntext2}>
                        Maior visibilidade e taxas reduzidas vão expandir ainda mais seu negócio!
                    </div>

                    <div className={styles.npn1}> alcance XXX de experiência </div>
                    <div className={styles.npn2}> abra uma conta PJ </div>
                    <button className={styles.abrapj} >ABRA JÁ SUA CONTA PJ</button>
                </div>
            </div>


            <div>
                <div className={styles.emblemac}>Emblemas conquistados</div>

                <div className={styles.Conquistados} >

                    <div className={styles.emblemai}> </div>
                    <div className={styles.nomeemb}> ESTRATEGISTA</div>
                    <div className={styles.xpemb}>+100 xp</div>
                    <div className={styles.descricaoemb}> Consumiu 3 cursos de vendas</div>


                </div>


                <div className={styles.emblemad} >Emblemas disponíveis</div>

                <blockquote className={styles.Emblemast} >
                    <div className={styles.box1} ></div>
                    <div className={styles.box1} ></div>
                    <div className={styles.box2} ></div>
                    <div className={styles.box2} ></div>
                    <div className={styles.box3} ></div>
                </blockquote>

                <blockquote className={styles.Emblemast} >
                    <div className={styles.box4} ></div>
                    <div className={styles.box4} ></div>
                    <div className={styles.box5} ></div>
                    <div className={styles.box5} ></div>
                    <div className={styles.box6} ></div>
                </blockquote>
            </div>

            <div className={styles.beneficiosi} >

                <img className={styles.cadeado} src="img/icones/cadeado.png" />
                <div className={styles.beneficiobt}  > Benefícios imperdíveis aguardam seu negócio nos próximos níveis</div>
                <Link to="/benefits" ><button className={styles.benebot} > EXPLORE OS BENEFÍCIOS </button></Link>

            </div>





            <div className={styles.Conquistadosss}   ></div>

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

export default Accountbank;


