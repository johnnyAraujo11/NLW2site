import React from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg'
import './styles.css'

/*essa propriedade é obrigatória, etão tem que receber uma string*/
interface PageHeaderProps {
    title: string;
    //a interrogação indica que a propriedade não é obrigatória
    description?: string;
}
/*const por que estamos utilizando propriedade*/ 
const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
    
    return(
        <header className="page-header">
        <div className="top-bar-container">
            <Link to="/">
                <img src={backIcon} alt="Voltar" />
            </Link>
            <img src={logoImg} alt="Proffy" />
        </div>

        <div className="header-content">
            <strong> {props.title} </strong>
            {/*condicção ternário */}
            { props.description != null ? <p>{props.description}</p>: null }
        {props.children}
        </div>
    </header>
    )   
}

export default PageHeader;