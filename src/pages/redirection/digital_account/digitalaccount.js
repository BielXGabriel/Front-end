// CSS
import styles from "./digitalaccount.module.css";

// hooks
import { useNavigate, Link } from "react-router-dom";
import { useAuthentication } from "../../../hooks/useAuthentication";

// react
// components

// icons
import CheckIcon from '@mui/icons-material/Check';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';




const Accountbank = () => {


    const { logout } = useAuthentication();

    return (
        <div className={styles.home}>

            <div className={styles.foto1}><img src="img/fotos/contabanco.png"></img></div>

            <div className={styles.beneficios} >
                <div className={styles.Emprestimop}>Empréstimo pessoal</div>

                <div className={styles.beneficios1} > <CheckIcon /> Realize transferências DOC e TED;</div>

                <div className={styles.beneficios2} > <CheckIcon /> Efetue pagamentos com Código de Barras;</div>

                <div className={styles.beneficios3} > <CheckIcon /> Consulta de saldo e extrato;</div>

                <div className={styles.beneficios4} > <CheckIcon /> Simule seu Empréstimo e tenha Dinheiro na mão;</div>
                 
                <div className={styles.beneficios5} > <CheckIcon /> Faça sua Portabilidade de Salário.</div>

                <a href="https://www.crefisa.com.br/para-voce/conta-corrente/" target="_blank "><button className={styles.Fazerem} > ABRIR MINHA CONTA <ChevronRightIcon className={styles.Fazerem1} /> </button></a>
            </div>

            <div className={styles.telab2} >
                <div className={styles.textob}>Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ut et massa mi. Aliquam in hendrerit u rna.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. </div>

                <div className={styles.textob2} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                </div>
            </div>

            <div className={styles.contato} >
                <div className={styles.Duvidas}>Dúvidas frequentes pessoal</div>

                <div className={styles.bloco1} >LOREM IPSUM <KeyboardArrowDownIcon/></div>
                <div className={styles.bloco2} >LOREM IPSUM <KeyboardArrowDownIcon/></div>
                <div className={styles.bloco3} >LOREM IPSUM <KeyboardArrowDownIcon/></div>
           
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

export default Accountbank;


