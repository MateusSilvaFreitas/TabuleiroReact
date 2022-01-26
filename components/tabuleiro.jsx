import styles from '../styles/tabuleiro.module.css';
import Quadrado from './quadrado';

export default function tabuleiro(props){  
    let indice = 0;

    const gerarLinhas = () =>{
        let colunas = [];
        for (let i = 0; i < props.colunas; i++) {
            colunas.push(<Quadrado numero={indice}/>);
            indice++;
        }
        return colunas;
    }

    const gerarTabuleiro = () =>{
        let linhas = [];
        for (let i = 0; i < props.linhas; i++) {
            indice = i % 2 == 0 ? 0 : 1;
            linhas.push(<div className={styles.linha}>{gerarLinhas()}</div>);
        }
        return linhas;
    }


    return(
        <>
            {gerarTabuleiro()}
        </>
    )
}